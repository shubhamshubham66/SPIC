import React from 'react';
import { COURSES } from '../utils/constants';

const courseIcons = {
  primary: '🎨', middle: '📚', secondary: '🔬',
  science: '⚗️', commerce: '💼', humanities: '🌍',
};

const Courses = () => {
  return (
    <div className="pt-24 md:pt-28">
      <section className="gradient-hero text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Academic Courses</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Comprehensive curriculum designed for holistic development from Primary to Senior Secondary
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="space-y-8">
          {COURSES.map((course, index) => (
            <div key={course.id} className="card p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                  {courseIcons[course.icon]}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{course.name}</h3>
                    <span className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">{course.grades}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Subjects:</p>
                    <div className="flex flex-wrap gap-2">
                      {course.subjects.map((subject, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;
