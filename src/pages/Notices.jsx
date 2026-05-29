import React, { useState } from 'react';
import { NOTICES } from '../utils/constants';
import { formatDate, getPriorityColor } from '../utils/helpers';

const Notices = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(NOTICES.map(n => n.category))];

  const filteredNotices = selectedCategory === 'All'
    ? NOTICES
    : NOTICES.filter(n => n.category === selectedCategory);

  return (
    <div className="pt-24 md:pt-28">
      <section className="gradient-hero text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Notice Board</h1>
          <p className="text-lg text-white/80">Important announcements and circulars</p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4">
        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Notices */}
        <div className="space-y-4">
          {filteredNotices.map((notice) => (
            <div key={notice.id} className="card p-6 border-l-4 border-l-primary-500 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${getPriorityColor(notice.priority)}`}>
                      {notice.priority}
                    </span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">{notice.category}</span>
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{notice.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{notice.content}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm text-gray-400">{formatDate(notice.date)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Notices;

