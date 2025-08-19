import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function ProfilePage() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user.id) {
      navigate('/login');
    }
  }, [user.id, navigate]);

  useEffect(() => {
    if (activeTab !== 'registrations') return;

    setLoading(true);
    api.get(`/registrations/user/${user.email}`)
      .then(response => {
        setRegistrations(response.data);
      })
      .catch(err => {
        console.error('Failed to load registrations', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [activeTab, user.email]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/logout');
  };

  const handleEventClick = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-[#1a2335] to-[#43558b] p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Welcome, {user.name}!</h1>
          <p className="text-blue-100">Manage your profile and view your registrations</p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-6 py-3 font-medium ${activeTab==='profile' ? 'border-b-2 border-[#1a2335] text-[#1a2335]' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Profile Information
            </button>
            <button
              onClick={() => setActiveTab('registrations')}
              className={`px-6 py-3 font-medium ${activeTab==='registrations' ? 'border-b-2 border-[#1a2335] text-[#1a2335]' : 'text-gray-500 hover:text-gray-700'}`}
            >
              My Registrations
            </button>
          </nav>
        </div>

        <div className="p-8">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#1a2335]">Profile Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <p className="mt-1 text-lg">{user.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <p className="mt-1 text-lg">{user.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Member Since</label>
                    <p className="mt-1 text-lg">August 2025</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#1a2335]">Quick Actions</h2>
                <div className="space-y-4">
                  <button
                    onClick={() => navigate('/')}
                    className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-[#1a2335] transition-colors"
                  >
                    <h3 className="font-semibold">Browse Events</h3>
                    <p className="text-sm text-gray-600">Discover upcoming events and hackathons</p>
                  </button>
                  <button
                    onClick={() => setActiveTab('registrations')}
                    className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-[#1a2335] transition-colors"
                  >
                    <h3 className="font-semibold">My Registrations</h3>
                    <p className="text-sm text-gray-600">View your registered events</p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Registrations Tab */}
          {activeTab === 'registrations' && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-[#1a2335]">My Registrations</h2>
              {loading ? (
                <div className="text-center py-8">
                  <p className="text-gray-600">Loading registrations...</p>
                </div>
              ) : registrations.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">No registrations found</p>
                  <button
                    onClick={() => navigate('/')}
                    className="bg-[#1a2335] text-white px-4 py-2 rounded hover:bg-[#2a3545]"
                  >
                    Browse Events
                  </button>
                </div>
              ) : (
                <div className="grid gap-6">
                  {registrations.map((reg) => (
                    <div 
                      key={reg.id} 
                      onClick={() => handleEventClick(reg.eventId)}
                      className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    >
                      {/* Event Card Header */}
                      <div className="bg-gradient-to-r from-[#1a2335] to-[#43558b] p-6 text-white">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-2xl font-bold mb-2">{reg.eventName}</h3>
                            <p className="text-blue-100">{reg.eventDescription}</p>
                          </div>
                          <div className="text-right">
                            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                              ✓ REGISTERED & PAID
                            </div>
                            <p className="text-blue-100 text-sm">Prize Pool: {reg.prizePool}</p>
                          </div>
                        </div>
                      </div>

                      {/* Event Card Body */}
                      <div className="p-6">
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">Registration Date:</span>
                            <p className="text-gray-900">{reg.registeredAt}</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Amount Paid:</span>
                            <p className="text-gray-900 font-semibold">{reg.amount}</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Payment ID:</span>
                            <p className="text-gray-900 font-mono text-xs">{reg.paymentId}</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <p className="text-sm text-gray-600">Click to view event details →</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="mt-8 pt-8 border-t">
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
