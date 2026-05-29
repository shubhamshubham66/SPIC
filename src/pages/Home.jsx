import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TopperSection from '../components/home/TopperSection';
import PrincipalMessage from '../components/home/PrincipalMessage';
import NoticesPreview from '../components/home/NoticesPreview';
import EventsPreview from '../components/home/EventsPreview';
import CoursesPreview from '../components/home/CoursesPreview';
import GalleryPreview from '../components/home/GalleryPreview';
import { SCHOOL_INFO } from '../utils/constants';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <HeroSection />
      
      {/* Highlights Bar */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🏫', label: 'CBSE Affiliated', desc: 'Recognized Board' },
              { icon: '🌟', label: '100% Results', desc: 'Board Examinations' },
              { icon: '🏆', label: 'Award Winning', desc: '200+ Awards' },
              { icon: '💻', label: 'Smart Classes', desc: 'Digital Learning' },
            ].map((item, index) => (
              <div key={index} className="text-center p-4 rounded-xl hover:bg-primary-50 transition-colors">
                <span className="text-3xl block mb-2">{item.icon}</span>
                <h3 className="font-bold text-gray-800 text-sm">{item.label}</h3>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PrincipalMessage />
      <TopperSection />
      <CoursesPreview />
      <NoticesPreview />
      <EventsPreview />
      <GalleryPreview />

      {/* CTA Section */}
      <section className="py-16 gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Ready to Join {SCHOOL_INFO.shortName}?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Admissions are now open for the academic session 2025-26. Join our family of 2000+ students.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions" className="btn-secondary">
              Apply for Admission
            </Link>
            <Link to="/contact" className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
