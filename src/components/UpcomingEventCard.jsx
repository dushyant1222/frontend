import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function UpcomingEventCard({ event }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleRegisterClick = () => {
    if (user && user.id) {
      navigate(`/events/${event.id}`);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <h3 className="text-lg font-bold mb-2">{event.eventName}</h3>
      <p className="text-sm text-gray-600 mb-4">
        {new Date(event.startingDate).toLocaleDateString()} – {new Date(event.endingDate).toLocaleDateString()}
      </p>
      <button
        onClick={handleRegisterClick}
        className="mt-auto bg-[#1a2335] text-white py-2 rounded hover:bg-[#2b3a5b]"
      >
        Register Event
      </button>
    </div>
  );
}
