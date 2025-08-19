import React from 'react';

const items = [
  'Event Sponsorship',
  'Ecosystem Collaboration',
  'Mentorship & Expertise',
  'Investment Opportunities'
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-gray-50 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2335]">Partner With Us</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Collaborate with TheSparkNova to amplify your impact and contribute to the vibrant startup ecosystem in Bihar, UP, and beyond. We offer various partnership opportunities tailored to your goals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(i => (
            <div key={i} className="bg-white rounded-xl shadow-md p-8 text-center">
              <h3 className="text-xl font-semibold mb-2 text-[#1a2335]">{i}</h3>
              <p className="text-gray-500 text-sm">
                {i === 'Event Sponsorship'
                  ? 'Gain visibility and connect with innovators by sponsoring our flagship events like Ideathon 2025.'
                  : i === 'Ecosystem Collaboration'
                  ? 'Join forces on initiatives that foster innovation, skill development, and regional growth.'
                  : i === 'Mentorship & Expertise'
                  ? 'Share your knowledge and guide emerging startups as a valued mentor in our network.'
                  : 'Discover promising startups and explore investment avenues within our curated ecosystem.'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
