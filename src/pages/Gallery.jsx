import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../utils/constants';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(GALLERY_ITEMS.map(item => item.category))];
  
  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const getGradient = (index) => {
    const gradients = [
      'from-blue-400 to-blue-600',
      'from-purple-400 to-purple-600',
      'from-green-400 to-green-600',
      'from-orange-400 to-orange-600',
      'from-pink-400 to-pink-600',
      'from-teal-400 to-teal-600',
      'from-red-400 to-red-600',
      'from-indigo-400 to-indigo-600',
      'from-yellow-400 to-yellow-600',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="pt-24 md:pt-28">
      <section className="gradient-hero text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Photo Gallery</h1>
          <p className="text-lg text-white/80">Capturing memories and moments at SPIC International School</p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(index)}`}></div>
              <div className="absolute inset-0 flex items-center justify-center text-white p-4">
                <div className="text-center">
                  <span className="text-4xl mb-2 block">📷</span>
                  <h4 className="font-bold text-sm">{item.title}</h4>
                  <p className="text-xs opacity-80 mt-1">{item.description}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  View Photo
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;

