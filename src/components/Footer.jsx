import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1a2335] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <Link to="/privacy-policy" className="text-white hover:text-gray-300 mx-2 underline">
            Privacy Policy
          </Link>
          {' | '}
          <Link to="/refund-policy" className="text-white hover:text-gray-300 mx-2 underline">
            Refund Policy
          </Link>
          {' | '}
          <Link to="/terms-and-conditions" className="text-white hover:text-gray-300 mx-2 underline">
            Terms & Conditions
          </Link>
        </div>
        <div className="text-center text-sm">
          &copy; 2025 TheSparkTank. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
