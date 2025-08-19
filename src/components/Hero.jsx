import React from 'react';

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center text-white p-4"
      style={{
        backgroundImage: "url('https://placehold.co/1920x1080/43558b/ffffff?text=Startup+Revolution')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-[#1a2335] opacity-60"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6">
          India's Next Wave of Entrepreneurs
        </h1>
        <button className="bg-[#ff8c00] text-white font-medium text-lg px-8 py-4 rounded-full shadow-lg hover:bg-[#e07b00] transition-colors">
          JOIN THE IIT PATNA IDEATHON →
        </button>
      </div>
    </section>
  );
}
