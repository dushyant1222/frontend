import React from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

export default function EventCard({ event }) {
  const navigate = useNavigate();
  const today = new Date();
  const start = new Date(event.startingDate);
  const end = new Date(event.endingDate);

  //It will determine thatt the registration is open based on time or not
  const isDateOpen = today >= start && today <= end;

  //Here wew ill identigy the special event
  const isMastermind = event.id === 'workshop-1';
  const isSparkTank = event.id === 'sparktank-1'; 

  // Enable SparkTank always; MasterMind never; other events by date
  const isEnabled = isSparkTank || (!isMastermind && isDateOpen);

  const handleClick = () => {
    if (isEnabled && !isMastermind) {
      navigate(`/events/${event.id}`);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
      <img
        src={`https://placehold.co/600x400/9e9e9e/ffffff?text=${encodeURIComponent(
          event.eventName
        )}`}
        alt={event.eventName}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-[#1a2335]">
          {event.eventName}
        </h3>

        {event.prizePool && (
          <p className="mb-1 text-gray-700 font-semibold">
            Prize Pool: {event.prizePool}
          </p>
        )}
        {event.registrationFee && (
          <p className="mb-2 text-gray-700 font-semibold">
            Registration Fee: {event.registrationFee}
          </p>
        )}

        {!isMastermind && (
          <p className="mb-3 text-gray-600">
            {format(start, 'MMM dd, yyyy')} - {format(end, 'MMM dd, yyyy')}
          </p>
        )}

        <p className="mb-4 text-gray-600">{event.eventDescription}</p>

        {isMastermind ? (
          <button
            className="w-full bg-gray-400 text-white py-3 rounded cursor-not-allowed"
            disabled
          >
            Coming Soon
          </button>
        ) : (
          <>
            <button
              onClick={handleClick}
              disabled={!isEnabled}
              className={`w-full py-3 rounded text-white ${
                isEnabled
                  ? 'bg-[#1a2335] hover:bg-[#2b3a5b]'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {isSparkTank ? 'Register Event' : 'Register'}
            </button>
            {!isSparkTank && !isEnabled && (
              <p className="text-center mt-2 text-sm text-gray-500">
                {today < start ? 'Registration opens soon' : 'Registration closed'}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
