import React from 'react';

const cards = [
  {
    title: 'Startups & Innovators',
    icon: (
      <svg className="text-[#43558b]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.545 10.395a.498.498 0 01-.26.31L7.09 14.545a.498.498 0 01-.635-.078l-3.5-3.5a.498.498 0 01-.078-.635l4.155-8.192a.498.498 0 01.9.043l3.5 3.5a.498.498 0 01.31.26zM15.545 10.395L21 4.94M15.545 10.395L10.09 15.85" />
      </svg>
    ),
    text: 'Empowering visionary founders with resources, mentorship, and opportunities to scale their ventures.'
  },
  {
    title: 'Mentors & Experts',
    icon: (
      <svg className="text-[#43558b]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a3 3 0 100 6 3 3 0 000-6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z" />
      </svg>
    ),
    text: 'Connecting aspiring entrepreneurs with seasoned professionals for guidance and strategic advice.'
  },
  {
    title: 'Investors & Funds',
    icon: (
      <svg className="text-[#43558b]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v.75m0 0a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5zM12 9.75c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
      </svg>
    ),
    text: 'Facilitating access to capital by linking promising startups with angel investors and venture capitalists.'
  },
  {
    title: 'Government & Policy Makers',
    icon: (
      <svg className="text-[#43558b]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21v-7.5M10.5 21v-7.5M17.25 21v-7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5a3 3 0 100-6 3 3 0 000 6zM10.5 13.5a3 3 0 100-6 3 3 0 000 6zM17.25 13.5a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    ),
    text: 'Collaborating with authorities to create a supportive regulatory environment for innovation.'
  },
  {
    title: 'Academia & Research',
    icon: (
      <svg className="text-[#43558b]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c0-1.898 1.487-3.447 3.375-3.69l3.375-4.498A3.75 3.75 0 0115 5.25v.75a.75.75 0 001.5 0v-.75a3.75 3.75 0 012.75-3.69l3.375 4.498c1.888.243 3.375 1.792 3.375 3.69v6.75a3.75 3.75 0 01-3.75 3.75h-7.5a3.75 3.75 0 01-3.75-3.75V8.25" />
      </svg>
    ),
    text: 'Bridging the gap between academic research and practical application, fostering university-led innovation.'
  },
  {
    title: 'Corporate Partners',
    icon: (
      <svg className="text-[#43558b]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.75c-.328 0-.649-.07-1.3-.217L12 17.5l-4.7 1.033c-.651.147-.972.217-1.3.217s-.649-.07-1.3-.217L3 18.75m15 0c.328 0 .649.07 1.3.217l5.474-1.22c.651-.147.972-.217 1.3-.217s.649.07 1.3.217l5.474 1.22c.651-.147.972-.217 1.3-.217s.649-.07 1.3-.217L18 18.75z" />
      </svg>
    ),
    text: 'Forging strategic alliances with corporations for market access, resources, and collaborative projects.'
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-20 bg-gray-50 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2335]">
            Our Thriving Startup Ecosystem
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            TheSparkTank is building a robust and interconnected ecosystem that fosters innovation, supports entrepreneurs, and drives economic growth. We connect key stakeholders to create a vibrant environment for startups to flourish.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((c) => (
            <div key={c.title} className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4">{c.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#1a2335]">{c.title}</h3>
              <p className="text-gray-500 text-sm">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-[#1a2335] text-white font-medium text-base px-8 py-4 rounded-full shadow-lg hover:bg-[#2b3a5b] transition-colors">
            JOIN OUR ECOSYSTEM
          </button>
        </div>
      </div>
    </section>
  );
}
