import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function EventRegistrationForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  // registration form details
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    collegeName: ''
  });

  const [loading, setLoading] = useState(false);

  // Update form data on input change
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  //It will handle form ka submission and payment bhi
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      //1. Create Razorpay order on backend
      const { data: order } = await api.post('/razorpay/createOrder', {
        email: formData.email,
        eventId: id
      });

      //2. Open Razorpay checkout with correct amount
      const options = {
        key: 'rzp_test_R5d8RPm5Ji31qw',    //yha put ur live Razorpay key only
        amount: order.amount,              
        currency: 'INR',
        name: 'TheSparkNova',
        description: `Registration for event ${id}`,
        order_id: order.id,
        handler: async response => {
          // 3. On payment success, call backend callback with form data
          await api.post('/razorpay/paymentCallback', {
            order_id: response.razorpay_order_id,
            payment_id: response.razorpay_payment_id,
            status: 'paid',
            userEmail: formData.email,
            eventId: id,
            registrationData: formData  
          });
          // 4. Notify user and redirect
          alert('✅ Registration successful! You are now registered.');
          navigate('/profile');
        },
        modal: {
          ondismiss: () => {
            alert('Payment cancelled.');
          }
        },
        theme: {
          color: '#1a1f2e'
        }
      };

      new window.Razorpay(options).open();
    } catch (error) {
      alert('Unable to initiate payment: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg my-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Register for TheSparkNova</h2>
      <p className="text-gray-600 text-center mb-8">Fill in your details to complete registration</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Phone Number *</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            placeholder="+91 9876543210"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Gender *</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* College/Institute */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">College/Institute *</label>
          <input
            type="text"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            required
            placeholder="Enter your college or institute name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 mt-8 bg-gradient-to-r from-[#1a1f2e] to-[#2f3a57] text-white font-semibold rounded-md hover:from-[#2f3a57] hover:to-[#1a1f2e] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Processing Payment...
            </div>
          ) : (
            'Pay ₹200 & Register'
          )}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          🔒 Secure payment powered by Razorpay
        </p>
      </div>
    </div>
  );
}
