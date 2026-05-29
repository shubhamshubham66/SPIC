import React from 'react';
import { TOPPERS } from '../../utils/constants';
import { getInitials } from '../../utils/helpers';

const TopperSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold mb-4">
            ⭐ Our Pride
          </span>
          <h2 className="section-title">Topper Students</h2>
          <p className="section-subtitle">Celebrating academic excellence and outstanding achievements</p>
        </div>

        {/* Toppers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOPPERS.map((topper, index) => (
            <div
              key={topper.id}
              className="card-hover p-6 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rank Badge */}
              {index < 3 && (
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                    index === 0 ? 'bg-yellow-400 text-yellow-900' :
                    index === 1 ? 'bg-gray-300 text-gray-700' :
                    'bg-orange-300 text-orange-800'
                  }`}>
                    {index + 1}
                  </span>
                </div>
              )}

              {/* Avatar */}
              <div className="relative inline-block mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {getInitials(topper.name)}
                </div>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-secondary-400 rounded-full flex items-center justify-center border-2 border-white">
                  <span className="text-xs">🏆</span>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-bold text-lg text-gray-800 mb-1">{topper.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{topper.class} | {topper.year}</p>
              
              {/* Percentage */}
              <div className="inline-flex items-center px-4 py-1.5 bg-primary-50 rounded-full mb-3">
                <span className="text-primary-700 font-bold text-lg">{topper.percentage}</span>
              </div>

              {/* Achievement */}
              <p className="text-sm text-accent-600 font-medium">
                🎯 {topper.achievement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopperSection;
