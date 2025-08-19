import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';

export default function Header() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="SparkTank Logo" className="h-14 w-100 " />
          
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#about" className="hover:text-[#43558b]">About</a>
          <a href="#events" className="hover:text-[#43558b]">Events</a>
          <a href="#ecosystem" className="hover:text-[#43558b]">Ecosystem</a>
        </div>
        {user && user.id ? (
          <button
            className="bg-[#1a2335] text-white font-medium text-sm px-6 py-2 rounded-full hover:bg-[#2b3a5b] transition-colors"
            onClick={() => navigate('/profile')}
          >
            {user.name}
          </button>
        ) : (
          <button
            className="bg-[#1a2335] text-white font-medium text-sm px-6 py-2 rounded-full hover:bg-[#2b3a5b] transition-colors"
            onClick={() => navigate('/login')}
          >
            Sign Up / Log In
          </button>
        )}
      </nav>
    </header>
  );
}
