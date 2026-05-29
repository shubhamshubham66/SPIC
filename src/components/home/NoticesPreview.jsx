import React from 'react';
import { Link } from 'react-router-dom';
import { NOTICES } from '../../utils/constants';
import { formatShortDate, getPriorityColor } from '../../utils/helpers';

const NoticesPreview = () => {
  const latestNotices = NOTICES.slice(0, 4);

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Notices */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-3">
                  📢 Announcements
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-primary-900 font-display">Latest Notices</h2>
              </div>
              <Link to="/notices" className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center">
                View All
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="space-y-3">
              {latestNotices.map((notice) => (
                <div key={notice.id} className="card p-4 flex items-start space-x-4 hover:border-l-4 hover:border-l-primary-500 transition-all">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex flex-col items-center justify-center">
                      <span className="text-xs font-bold text-primary-700">{new Date(notice.date).getDate()}</span>
                      <span className="text-[10px] text-primary-500">{new Date(notice.date).toLocaleString('default', { month: 'short' })}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-gray-800 text-sm truncate">{notice.title}</h4>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${getPriorityColor(notice.priority)}`}>
                        {notice.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2">{notice.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Access */}
          <div>
            <div className="mb-8">
              <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-700 rounded-full text-sm font-semibold mb-3">
                ⚡ Quick Access
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 font-display">Student Services</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Check Results', icon: '📊', path: '/results', color: 'bg-blue-50 hover:bg-blue-100' },
                { name: 'Attendance', icon: '📋', path: '/student', color: 'bg-green-50 hover:bg-green-100' },
                { name: 'Fee Payment', icon: '💳', path: '/student', color: 'bg-purple-50 hover:bg-purple-100' },
                { name: 'Downloads', icon: '📥', path: '/student', color: 'bg-orange-50 hover:bg-orange-100' },
                { name: 'Time Table', icon: '🕐', path: '/student', color: 'bg-pink-50 hover:bg-pink-100' },
                { name: 'Online Admission', icon: '📝', path: '/admissions', color: 'bg-yellow-50 hover:bg-yellow-100' },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`${item.color} card p-5 text-center transition-all duration-300 transform hover:scale-105`}
                >
                  <span className="text-3xl mb-2 block">{item.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticesPreview;
