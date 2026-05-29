import React from 'react';
import { Link } from 'react-router-dom';
import { EVENTS } from '../../utils/constants';
import { formatShortDate } from '../../utils/helpers';

const EventsPreview = () => {
  const upcomingEvents = EVENTS.filter(e => e.status === 'upcoming').slice(0, 3);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold mb-4">
            📅 What's Coming
          </span>
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle">Stay updated with our school activities and events</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <div key={event.id} className="card-hover group" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Date Header */}
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-4 text-white text-center">
                <p className="text-3xl font-bold">{new Date(event.date).getDate()}</p>
                <p className="text-sm opacity-80">{new Date(event.date).toLocaleString('default', { month: 'long', year: 'numeric' })}</p>
              </div>
              
              <div className="p-5">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-0.5 bg-primary-50 text-primary-600 rounded text-xs font-medium">{event.category}</span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-primary-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/events" className="btn-outline inline-flex items-center">
            View All Events
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;

