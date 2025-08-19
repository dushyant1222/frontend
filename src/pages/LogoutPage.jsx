import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('user');
    setTimeout(() => navigate('/'), 1000);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-[#f7f7f9]">
      <p className="text-gray-700">You have been logged out. Redirecting to home...</p>
    </div>
  );
}
