// src/components/Events.jsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import EventCard from './EventCard';

//SparkTank Event
const DUMMY_EVENT = {
  id: 'sparktank-1',
  eventName: 'SparkTank 1.O',
  startingDate: new Date('2025-08-20T00:00:00Z').toISOString(),
  endingDate: new Date('2025-10-20T23:59:59Z').toISOString(), 
};

// Mastrermind series which is (coming soon)
const MASTERMIND_WORKSHOP = {
  id: 'workshop-1',
  eventName: 'MasterMind Workshop Series',
  startingDate: new Date('2099-01-01T00:00:00Z').toISOString(),  
  endingDate: new Date('2099-12-31T23:59:59Z').toISOString(),  
  prizePool: '',
  registrationFee: '',
  eventDescription: 'Stay tuned for our upcoming MasterMind Workshop Series. Details coming soon!',
};

export default function Events() {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    async function fetchUpcoming() {
      try {
        const res = await api.get('/events?type=upcoming');
        const list = Array.isArray(res.data) ? res.data : [];
        setUpcoming(list.length > 0 ? [...list, MASTERMIND_WORKSHOP] : [DUMMY_EVENT, MASTERMIND_WORKSHOP]);
      } catch (e) {
        console.error('Failed to fetch upcoming events:', e);
        setUpcoming([DUMMY_EVENT, MASTERMIND_WORKSHOP]);
      }
    }
    fetchUpcoming();
  }, []);

  return (
    <section id="events" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-[#1a2335] mb-6">
          Upcoming Events
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcoming.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
