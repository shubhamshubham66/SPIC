import React from 'react';
import { SCHOOL_INFO, SCHOOL_STATS } from '../utils/constants';

const About = () => {
  return (
    <div className="pt-24 md:pt-28">
      {/* Hero Banner */}
      <section className="gradient-hero text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
<<<<<<< HEAD
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">About Our School</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Established in {SCHOOL_INFO.established}, {SCHOOL_INFO.name} has been a beacon of quality education.
=======
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">About Sagar Public Inter College</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Established in {SCHOOL_INFO.established}, {SCHOOL_INFO.name} has been a beacon of quality education in Hajipur Majre Budhna Nigoha, managed by {SCHOOL_INFO.manager}.
>>>>>>> 04561cd0577f370bca15c93a0f7a649a644c4eb7
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-8">
            <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-2xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide world-class education that nurtures intellectual curiosity, promotes ethical values, 
              and prepares students to become responsible global citizens who contribute positively to society.
            </p>
          </div>
          <div className="card p-8">
            <div className="w-14 h-14 bg-secondary-50 rounded-xl flex items-center justify-center text-2xl mb-4">👁️</div>
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be a premier educational institution recognized for academic excellence, innovative teaching methodologies, 
              and holistic development of students who are equipped to lead in an ever-changing world.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-4">
              📖 Our Story
            </span>
            <h2 className="section-title mb-6">Our Journey</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Since our establishment in {SCHOOL_INFO.established}, {SCHOOL_INFO.name} has grown from a humble beginning 
              with 200 students to a thriving institution of over 2000 students. Our journey has been marked by 
              continuous improvement, innovation in teaching, and unwavering commitment to academic excellence.
            </p>
          </div>

          {/* Timeline */}
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {[
              { year: '2005', title: 'Foundation', desc: 'School established with 200 students' },
              { year: '2010', title: 'CBSE Affiliation', desc: 'Received CBSE board affiliation' },
              { year: '2015', title: 'Expansion', desc: 'New campus with modern facilities' },
              { year: '2024', title: 'Excellence', desc: '2000+ students, 120+ faculty' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  {item.year}
                </div>
                <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {SCHOOL_STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-secondary-400 mb-2">{stat.value}</p>
                <p className="text-white/70 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">The principles that guide our educational philosophy</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '📚', title: 'Academic Excellence', desc: 'Striving for the highest standards in education and learning.' },
            { icon: '🤝', title: 'Integrity', desc: 'Fostering honesty, ethics, and strong moral character.' },
            { icon: '🌱', title: 'Holistic Growth', desc: 'Developing mind, body, and spirit for complete personality development.' },
            { icon: '💡', title: 'Innovation', desc: 'Embracing new ideas, technology, and creative thinking.' },
            { icon: '🌍', title: 'Global Perspective', desc: 'Preparing students to thrive in an interconnected world.' },
            { icon: '❤️', title: 'Compassion', desc: 'Building empathy, kindness, and social responsibility.' },
          ].map((value, index) => (
            <div key={index} className="card-hover p-6 text-center">
              <span className="text-3xl block mb-3">{value.icon}</span>
              <h3 className="font-bold text-gray-800 mb-2">{value.title}</h3>
              <p className="text-sm text-gray-500">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Infrastructure</h2>
            <p className="section-subtitle">World-class facilities for an enriching learning experience</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              '🏫 Smart Classrooms',
              '🔬 Science Labs',
              '💻 Computer Labs',
              '📚 Library',
              '🏃 Sports Complex',
              '🎭 Auditorium',
              '🎨 Art Studio',
              '🚌 Transport',
            ].map((facility, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="text-lg">{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
