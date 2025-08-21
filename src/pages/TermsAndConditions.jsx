// src/pages/TermsAndConditions.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TermsAndConditions() {
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
          <h1 className="text-3xl font-bold text-gray-900">Terms & Conditions</h1>
          <p className="text-gray-600 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8">
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome to SparkTank</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              These Terms and Conditions ("Terms") govern your use of the SparkTank platform, website, 
              and services operated by SparkTank ("we," "us," or "our"). By accessing or using our 
              services, you agree to be bound by these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              By accessing and using SparkTank's services, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-800">
                <strong>Important:</strong> These terms may be updated from time to time. Continued use of our 
                services constitutes acceptance of any changes.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. User Accounts</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Account Registration</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You must be at least 13 years old to create an account</li>
              <li>One person may not maintain more than one account</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Account Security</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              You are entirely responsible for all activities that occur under your account. You agree to 
              notify us immediately of any unauthorized use of your account or any other breach of security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Services and Events</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Event Participation</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
              <li>Registration for events is subject to availability and our approval</li>
              <li>Event schedules, locations, and requirements may change with prior notice</li>
              <li>Participants must comply with event rules and guidelines</li>
              <li>Professional conduct is expected at all times during events</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Content and Submissions</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              By participating in our events or submitting content, you grant SparkTank a non-exclusive, 
              royalty-free license to use, reproduce, and display your submissions for promotional and 
              educational purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Registration Fees</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Payment required at time of registration</li>
                  <li>• All fees are in Indian Rupees (INR)</li>
                  <li>• Payment processed securely via Razorpay</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Accepted Payment Methods</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Credit/Debit Cards</li>
                  <li>• Net Banking</li>
                  <li>• UPI Payments</li>
                  <li>• Digital Wallets</li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              All payments are processed through secure third-party payment gateways. SparkTank does not 
              store your payment information on our servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. User Conduct</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Prohibited Activities</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">You agree not to:</p>
            
            <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-1">
              <li>Use our services for any unlawful purpose or in violation of any applicable laws</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Upload or transmit any harmful, offensive, or inappropriate content</li>
              <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
              <li>Interfere with or disrupt our services or servers</li>
              <li>Use automated systems to access our services without permission</li>
              <li>Share or distribute event materials without explicit permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Content</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              All content on SparkTank, including but not limited to text, graphics, logos, images, and software, 
              is the property of SparkTank and is protected by copyright and other intellectual property laws.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">User Content</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              You retain ownership of content you submit, but grant us the right to use it in connection with 
              our services. You represent that you have all necessary rights to submit such content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Your privacy is important to us. Our collection and use of personal information is governed by 
              our Privacy Policy, which is incorporated into these Terms by reference.
            </p>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <p className="text-gray-700">
                <strong>Data Security:</strong> We implement appropriate security measures to protect your 
                personal information, but cannot guarantee absolute security of data transmitted over the internet.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Disclaimers and Limitations</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Availability</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We strive to maintain high service availability but do not guarantee uninterrupted access. 
              Services may be temporarily unavailable due to maintenance, updates, or technical issues.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Limitation of Liability</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              SparkTank shall not be liable for any indirect, incidental, special, or consequential damages 
              arising from your use of our services. Our total liability shall not exceed the amount you 
              paid for the specific service giving rise to the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Termination by You</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              You may terminate your account at any time by contacting us at 
              <a href="mailto:helloidea@sparktank.in" className="text-blue-600 hover:text-blue-800"> helloidea@sparktank.in</a>.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Termination by Us</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We reserve the right to suspend or terminate your account if you violate these Terms or 
              engage in conduct that we deem harmful to other users or our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Dispute Resolution</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Governing Law</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India, 
              without regard to conflict of law principles.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Dispute Process</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">1</div>
                <p className="text-gray-700">Contact us directly to resolve the dispute amicably</p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">2</div>
                <p className="text-gray-700">Attempt mediation through a mutually agreed mediator</p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">3</div>
                <p className="text-gray-700">Resort to arbitration or legal proceedings if necessary</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of significant 
              changes via email or prominent notice on our website. Your continued use of our services 
              after changes are posted constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Severability</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision 
              shall be limited or eliminated to the minimum extent necessary so that these Terms shall 
              otherwise remain in full force and effect.
            </p>
          </section>

          <section className="mb-8 bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <div className="space-y-3">
              <p className="text-gray-700">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong> <a href="mailto:helloidea@sparktank.in" className="text-blue-600 hover:text-blue-800">helloidea@sparktank.in</a>
                </p>
                <p className="text-gray-700">
                  <strong>Subject Line:</strong> "Terms & Conditions Inquiry"
                </p>
                <p className="text-gray-700">
                  <strong>Response Time:</strong> 2-3 business days
                </p>
              </div>
            </div>
          </section>

          <section className="border-t pt-6">
            <p className="text-sm text-gray-500 text-center">
              By using SparkTank's services, you acknowledge that you have read, understood, 
              and agree to be bound by these Terms and Conditions.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
