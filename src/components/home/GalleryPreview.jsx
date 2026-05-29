import React from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_ITEMS } from '../../utils/constants';

const GalleryPreview = () => {
  const previewItems = GALLERY_ITEMS.slice(0, 6);

  const getGradient = (index) => {
    const gradients = [
      'from-blue-400 to-blue-600',
      'from-purple-400 to-purple-600',
      'from-green-400 to-green-600',
      'from-orange-400 to-orange-600',
      'from-pink-400 to-pink-600',
      'from-teal-400 to-teal-600',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-pink-50 text-pink-700 rounded-full text-sm font-semibold mb-4">
            📸 Memories
          </span>
          <h2 className="section-title">Photo Gallery</h2>
          <p className="section-subtitle">Glimpses of life at SPIC International School</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {previewItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(index)} opacity-80`}></div>
              <div className="absolute inset-0 flex items-center justify-center text-white p-4">
                <div className="text-center">
                  <span className="text-4xl mb-2 block opacity-80">📷</span>
                  <h4 className="font-bold text-sm md:text-base">{item.title}</h4>
                  <p className="text-xs opacity-80 mt-1">{item.category}</p>
                </div>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  <p className="text-sm font-medium">View</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/gallery" className="btn-outline inline-flex items-center">
            View Full Gallery
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
