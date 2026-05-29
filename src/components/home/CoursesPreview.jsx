import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../../utils/constants';

const courseIcons = {
  primary: '🎨',
  middle: '📚',
  secondary: '🔬',
  science: '⚗️',
  commerce: '💼',
  humanities: '🌍',
};

const CoursesPreview = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-700 rounded-full text-sm font-semibold mb-4">
            🎓 Academic Programs
          </span>
          <h2 className="section-title">Our Courses</h2>
          <p className="section-subtitle">Comprehensive curriculum designed for holistic development</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.map((course, index) => (
            <div key={course.id} className="card-hover p-6 group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {courseIcons[course.icon]}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-1">{course.name}</h3>
                  <p className="text-sm text-primary-600 font-medium mb-2">{course.grades}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3 leading-relaxed">{course.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {course.subjects.slice(0, 4).map((subject, i) => (
                  <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">
                    {subject}
                  </span>
                ))}
                {course.subjects.length > 4 && (
                  <span className="px-2 py-0.5 bg-primary-50 text-primary-600 rounded text-xs font-medium">
                    +{course.subjects.length - 4} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/courses" className="btn-primary inline-flex items-center">
            Explore All Courses
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;
