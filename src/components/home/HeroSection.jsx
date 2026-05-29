import React from 'react';
import { Link } from 'react-router-dom';
import { SCHOOL_INFO, SCHOOL_STATS } from '../../utils/constants';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-400 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 right-20 w-4 h-4 bg-secondary-400 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-accent-400 rounded-full animate-float hidden lg:block" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-40 w-2 h-2 bg-white rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium">Admissions Open 2025-26</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-display">
              Welcome to <br />
              <span className="text-secondary-400">{SCHOOL_INFO.name}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-lg leading-relaxed">
              {SCHOOL_INFO.tagline}. Empowering students with knowledge, skills, and values for a brighter tomorrow.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/admissions" className="btn-secondary inline-flex items-center">
                Apply Now
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/about" className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center">
                Explore More
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {SCHOOL_STATS.map((stat, index) => (
              <div
                key={index}
                className="glass-card bg-white/10 backdrop-blur-md border border-white/20 p-6 text-center text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-secondary-400 mb-1">{stat.value}</div>
                <div className="text-sm text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
