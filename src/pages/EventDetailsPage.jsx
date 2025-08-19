import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function EventDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [checking, setChecking] = useState(true);
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  // Load event details (stub or real API)
  useEffect(() => {
    setEvent({
      id,
      eventName: 'TheSparkNova Ideathon 2025',
      prizePool: '₹1,00,000',
      registrationPrice: '₹200',
      startingDate: '2025-09-01',
      endingDate: '2025-09-03',
      eventDescription:
        'Join TheSparkNova for an exciting ideathon focused on innovation and entrepreneurship in Bihar & UP. This event brings together brilliant minds to solve real-world problems and create impactful solutions.',
    });
  }, [id]);

  // Check if user already registered
  useEffect(() => {
    if (!user.email) {
      setChecking(false);
      return;
    }
    api
      .get(`/registrations/check/${encodeURIComponent(user.email)}/${encodeURIComponent(id)}`)
      .then(res => {
        setIsRegistered(res.data.isRegistered);
      })
      .catch(err => {
        console.error('Registration check failed', err);
      })
      .finally(() => {
        setChecking(false);
      });
  }, [user.email, id]);

  if (!event) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-center py-20">Loading event details…</p>
      </div>
    );
  }

  function handleRegisterClick() {
    navigate(`/events/${id}/register`);
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline flex items-center"
      >
        ← Back to events
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-[#1f274b] to-[#43558b] p-6 text-white rounded-t-lg">
          <h1 className="text-3xl font-bold mb-2">{event.eventName}</h1>
          <div className="grid grid-cols-3 gap-6 text-sm">
            <div>
              <strong>Prize Pool:</strong> {event.prizePool}
            </div>
            <div>
              <strong>Registration Fee:</strong> {event.registrationPrice}
            </div>
            <div>
              <strong>Dates:</strong>{' '}
              {new Date(event.startingDate).toLocaleDateString()} -{' '}
              {new Date(event.endingDate).toLocaleDateString()}
            </div>
          </div>
        </div>

        <div className="p-6 text-gray-800">
          <p className="mb-8">{event.eventDescription}</p>

          <div className="p-6 mb-8 bg-blue-50 rounded-md">
            <h2 className="mb-2 text-blue-800 font-semibold">Important Notes</h2>
            <ul className="list-disc list-inside space-y-1 text-blue-700 text-sm">
              <li>Registration fee is non-refundable</li>
              <li>All participants must be present throughout the event</li>
              <li>Teams of 2-4 members allowed</li>
              <li>Bring your own laptop and development tools</li>
            </ul>
          </div>

          <div className="text-center">
            {checking ? (
              <button
                disabled
                className="w-full bg-gray-400 text-white py-3 rounded-lg"
              >
                Checking…
              </button>
            ) : isRegistered ? (
              <button
                disabled
                className="w-full bg-green-600 text-white py-3 rounded-lg"
              >
                ✔ Already Registered
              </button>
            ) : (
              <button
                onClick={handleRegisterClick}
                className="w-full bg-pink-600 hover:bg-pink-700 transition-colors text-white py-3 rounded-lg font-semibold"
              >
                Register Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
