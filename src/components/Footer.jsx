import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1a2335] text-white py-10">
      <div className="container mx-auto text-center text-sm">
        &copy; 2025 TheSparkTank. All Rights Reserved.
      </div>
      <a href="/privacy-policy">Privacy Policy</a> | 
  <a href="/refund-policy">Refund Policy</a> | 
  <a href="/terms-and-conditions">Terms & Conditions</a>
    </footer>
  );
}
