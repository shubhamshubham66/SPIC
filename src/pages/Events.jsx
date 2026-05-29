import React, { useState } from 'react';
import { EVENTS } from '../utils/constants';
import { formatDate } from '../utils/helpers';

const Events = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredEvents = filter === 'all' 
    ? EVENTS 
    : EVENTS.filter(e => e.status === filter);

  return (
    <div className="pt-24 md:pt-28">
      <section className="gradient-hero text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Events & Activities</h1>
          <p className="text-lg text-white/80">Stay updated with school events, competitions, and celebrations</p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4">
        {/* Filter */}
        <div className="flex justify-center gap-3 mb-10">
          {['all', 'upcoming', 'past'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                filter === status
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {status === 'all' ? 'All Events' : status}
            </button>
          ))}
        </div>

        {/* Events List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div key={event.id} className="card-hover overflow-hidden">
              <div className={`p-4 text-white text-center ${
                event.status === 'upcoming' ? 'bg-gradient-to-r from-primary-500 to-primary-600' : 'bg-gray-500'
              }`}>
                <p className="text-3xl font-bold">{new Date(event.date).getDate()}</p>
                <p className="text-sm opacity-80">
                  {new Date(event.date).toLocaleString('default', { month: 'long', year: 'numeric' })}
                </p>
              </div>
              <div className="p-5">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-0.5 bg-primary-50 text-primary-600 rounded text-xs font-medium">{event.category}</span>
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                    event.status === 'upcoming' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {event.status}
                  </span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
