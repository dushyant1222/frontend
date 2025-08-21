// src/pages/RefundPolicy.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RefundPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-800 mb-4 flex items-center"
          >
            ← Back to Home
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Refund Policy</h1>
          <p className="text-gray-600 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8">
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At SparkTank, we strive to provide the best experience for our users. This Refund Policy outlines 
              the terms and conditions regarding refunds for our services, event registrations, and other offerings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Event Registration Refunds</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Cancellation by Participant</h3>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="text-blue-800 font-medium">Important: Event registration fees are generally non-refundable.</p>
            </div>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              However, refunds may be considered under the following exceptional circumstances:
            </p>
            
            <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
              <li><strong>Medical Emergency:</strong> Documented medical emergency preventing participation</li>
              <li><strong>Event Cancellation:</strong> If we cancel the event, full refunds will be provided</li>
              <li><strong>Technical Issues:</strong> Refunds for technical problems on our end that prevent participation</li>
              <li><strong>Early Cancellation:</strong> Cancellations made more than 7 days before the event start date may be eligible for a 50% refund</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Refund Processing Timeline</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-1">
              <li>Refund requests are processed within 7-10 business days of approval</li>
              <li>Refunds are credited back to the original payment method</li>
              <li>Bank processing may take an additional 3-7 business days</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Event Cancellation by SparkTank</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              In the rare event that we need to cancel an event due to unforeseen circumstances such as:
            </p>
            
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
              <li>Natural disasters or extreme weather conditions</li>
              <li>Government regulations or restrictions</li>
              <li>Venue unavailability</li>
              <li>Insufficient registrations</li>
              <li>Technical issues beyond our control</li>
            </ul>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              We will provide participants with one of the following options:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Full Refund</h4>
                <p className="text-green-700 text-sm">100% refund of registration fees</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Event Transfer</h4>
                <p className="text-blue-700 text-sm">Transfer registration to future event</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Non-Refundable Services</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The following services are generally non-refundable:
            </p>
            
            <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-1">
              <li>Workshop or training session fees after attendance has begun</li>
              <li>Consultation services after the session has been delivered</li>
              <li>Digital downloads or materials after access has been provided</li>
              <li>Administrative or processing fees</li>
              <li>Late registration penalties</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refund Request Process</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              To request a refund, please follow these steps:
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">1</div>
                <div>
                  <p className="text-gray-700">Send an email to <a href="mailto:helloidea@sparktank.in" className="text-blue-600 hover:text-blue-800">helloidea@sparktank.in</a> with the subject line "Refund Request"</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">2</div>
                <div>
                  <p className="text-gray-700">Include your registration details, event name, and reason for refund request</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">3</div>
                <div>
                  <p className="text-gray-700">Attach any supporting documentation (medical certificates, etc.)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">4</div>
                <div>
                  <p className="text-gray-700">We will review your request within 3-5 business days and respond via email</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Partial Refunds</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              In certain circumstances, partial refunds may be offered:
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Timing</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Refund Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">More than 15 days before event</td>
                    <td className="px-4 py-3 text-sm text-gray-700">70% refund (administrative fee applies)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">7-15 days before event</td>
                    <td className="px-4 py-3 text-sm text-gray-700">50% refund</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Less than 7 days before event</td>
                    <td className="px-4 py-3 text-sm text-gray-700">No refund (exception: medical emergency)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Force Majeure</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              SparkTank shall not be liable for any failure to perform its obligations under this policy if such 
              failure results from circumstances beyond our reasonable control, including but not limited to acts of God, 
              natural disasters, war, terrorism, labor disputes, government actions, or technical failures of third-party systems.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dispute Resolution</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              If you are not satisfied with our refund decision, you may escalate your concern by contacting our 
              management team at <a href="mailto:helloidea@sparktank.in" className="text-blue-600 hover:text-blue-800">helloidea@sparktank.in</a> 
              with "Refund Dispute" in the subject line. We are committed to resolving disputes fairly and promptly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Policy Changes</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              SparkTank reserves the right to modify this Refund Policy at any time. Changes will be posted on our 
              website and will take effect immediately. Continued use of our services after changes are posted constitutes 
              acceptance of the modified policy.
            </p>
          </section>

          <section className="mb-8 bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <div className="space-y-2">
              <p className="text-gray-700">
                <strong>Email:</strong> <a href="mailto:helloidea@sparktank.in" className="text-blue-600 hover:text-blue-800">helloidea@sparktank.in</a>
              </p>
              <p className="text-gray-700">
                <strong>Subject Line for Refunds:</strong> "Refund Request - [Event Name]"
              </p>
              <p className="text-gray-700">
                <strong>Response Time:</strong> 3-5 business days
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
