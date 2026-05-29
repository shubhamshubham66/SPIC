import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import DashboardLayout from '../components/layout/DashboardLayout';

const sidebarLinks = [
  { divider: true, label: 'Main' },
  { name: 'Dashboard', path: '/student', icon: '📊' },
  { name: 'My Profile', path: '/student/profile', icon: '👤' },
  { divider: true, label: 'Academics' },
  { name: 'Results', path: '/student/results', icon: '📝' },
  { name: 'Attendance', path: '/student/attendance', icon: '📋' },
  { name: 'Courses', path: '/student/courses', icon: '📚' },
  { name: 'Time Table', path: '/student/timetable', icon: '🕐' },
  { divider: true, label: 'Information' },
  { name: 'Notices', path: '/student/notices', icon: '📢' },
  { name: 'Downloads', path: '/student/downloads', icon: '📥' },
  { name: 'Fee Details', path: '/student/fees', icon: '💳' },
];

// Dashboard Overview
const DashboardOverview = () => {
  const { user } = useAuth();
  
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold">Welcome back, {user?.name || 'Student'}! 👋</h1>
        <p className="text-blue-100 mt-1">Here's your academic overview for today</p>
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <p className="text-xs opacity-80">Class</p>
            <p className="font-semibold">{user?.class || 'Class 12 Science'}</p>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <p className="text-xs opacity-80">Roll No</p>
            <p className="font-semibold">{user?.rollNo || '01'}</p>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <p className="text-xs opacity-80">Section</p>
            <p className="font-semibold">{user?.section || 'A'}</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Attendance', value: '92%', icon: '📋', color: 'bg-green-50 text-green-700' },
          { label: 'Avg. Score', value: '91.2%', icon: '📊', color: 'bg-blue-50 text-blue-700' },
          { label: 'Pending Fee', value: '₹0', icon: '💰', color: 'bg-purple-50 text-purple-700' },
          { label: 'Notices', value: '3 New', icon: '📢', color: 'bg-orange-50 text-orange-700' },
        ].map((stat, index) => (
          <div key={index} className={`card p-4 ${stat.color}`}>
            <div className="flex items-center justify-between">
              <span className="text-2xl">{stat.icon}</span>
              <span className="text-2xl font-bold">{stat.value}</span>
            </div>
            <p className="text-sm font-medium mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity & Upcoming */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="font-bold text-gray-800 mb-4">📅 Today's Schedule</h3>
          <div className="space-y-3">
            {[
              { time: '8:00 AM', subject: 'Mathematics', teacher: 'Mr. Gupta' },
              { time: '9:00 AM', subject: 'Physics', teacher: 'Dr. Patel' },
              { time: '10:00 AM', subject: 'Chemistry', teacher: 'Mrs. Sharma' },
              { time: '11:30 AM', subject: 'English', teacher: 'Ms. Roy' },
              { time: '12:30 PM', subject: 'Computer Science', teacher: 'Mr. Kumar' },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                <span className="text-xs font-mono text-gray-400 w-16">{item.time}</span>
                <div className="w-1 h-8 bg-primary-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-sm text-gray-800">{item.subject}</p>
                  <p className="text-xs text-gray-500">{item.teacher}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h3 className="font-bold text-gray-800 mb-4">📢 Recent Notices</h3>
          <div className="space-y-3">
            {[
              { title: 'Winter Vacation Schedule', date: 'Nov 25', priority: 'high' },
              { title: 'Pre-Board Exam Timetable', date: 'Nov 22', priority: 'high' },
              { title: 'Annual Function Rehearsal', date: 'Nov 18', priority: 'medium' },
            ].map((notice, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                  notice.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                }`}></span>
                <div>
                  <p className="font-medium text-sm text-gray-800">{notice.title}</p>
                  <p className="text-xs text-gray-500">{notice.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Attendance Chart Placeholder */}
      <div className="card p-6">
        <h3 className="font-bold text-gray-800 mb-4">📊 Monthly Attendance</h3>
        <div className="flex items-end space-x-2 h-32">
          {[85, 90, 88, 95, 92, 94, 90, 88, 96, 92, 89, 91].map((value, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className="w-full bg-primary-400 rounded-t-sm hover:bg-primary-600 transition-colors"
                style={{ height: `${value}%` }}
              ></div>
              <span className="text-[9px] text-gray-400 mt-1">{['J','F','M','A','M','J','J','A','S','O','N','D'][index]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Profile Page
const StudentProfile = () => {
  const { user } = useAuth();
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="card p-8">
        <div className="flex items-center space-x-6 mb-8">
          <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            {user?.name?.charAt(0) || 'S'}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{user?.name || 'Student Name'}</h2>
            <p className="text-gray-500">Student ID: {user?.id || 'SPIC2024001'}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Active</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { label: 'Full Name', value: user?.name || 'Rahul Sharma' },
            { label: 'Class', value: user?.class || 'Class 12 Science' },
            { label: 'Section', value: user?.section || 'A' },
            { label: 'Roll Number', value: user?.rollNo || '01' },
            { label: "Father's Name", value: 'Mr. Suresh Sharma' },
            { label: "Mother's Name", value: 'Mrs. Geeta Sharma' },
            { label: 'Date of Birth', value: '15 March 2006' },
            { label: 'Phone', value: user?.phone || '9876543212' },
            { label: 'Email', value: 'rahul.sharma@email.com' },
            { label: 'Address', value: '123 Student Street, City' },
            { label: 'Blood Group', value: 'B+' },
            { label: 'Emergency Contact', value: '9876543210' },
          ].map((field, index) => (
            <div key={index}>
              <label className="text-xs font-semibold text-gray-500 uppercase">{field.label}</label>
              <p className="text-gray-800 font-medium mt-1">{field.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Attendance Page
const StudentAttendance = () => (
  <div className="space-y-6">
    <h2 className="text-xl font-bold text-gray-800">Attendance Record</h2>
    <div className="grid grid-cols-3 gap-4">
      <div className="card p-4 text-center bg-green-50">
        <p className="text-3xl font-bold text-green-600">220</p>
        <p className="text-sm text-green-700">Present</p>
      </div>
      <div className="card p-4 text-center bg-red-50">
        <p className="text-3xl font-bold text-red-600">18</p>
        <p className="text-sm text-red-700">Absent</p>
      </div>
      <div className="card p-4 text-center bg-blue-50">
        <p className="text-3xl font-bold text-blue-600">92%</p>
        <p className="text-sm text-blue-700">Percentage</p>
      </div>
    </div>
    <div className="card p-6">
      <h3 className="font-bold text-gray-800 mb-4">Monthly Breakdown</h3>
      <div className="space-y-2">
        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'].map((month, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="font-medium text-sm">{month}</span>
            <div className="flex items-center space-x-3">
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: `${85 + Math.random() * 15}%` }}></div>
              </div>
              <span className="text-sm font-medium text-gray-600">{Math.floor(85 + Math.random() * 15)}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Generic Placeholder for other pages
const PlaceholderPage = ({ title, icon }) => (
  <div className="flex flex-col items-center justify-center min-h-[400px] card p-8">
    <span className="text-5xl mb-4">{icon}</span>
    <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
    <p className="text-gray-500 text-center">This section is under development. Coming soon!</p>
  </div>
);

const StudentDashboard = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <DashboardLayout role="student" sidebarLinks={sidebarLinks}>
      <Routes>
        <Route index element={<DashboardOverview />} />
        <Route path="profile" element={<StudentProfile />} />
        <Route path="results" element={<PlaceholderPage title="My Results" icon="📝" />} />
        <Route path="attendance" element={<StudentAttendance />} />
        <Route path="courses" element={<PlaceholderPage title="My Courses" icon="📚" />} />
        <Route path="timetable" element={<PlaceholderPage title="Time Table" icon="🕐" />} />
        <Route path="notices" element={<PlaceholderPage title="Notices" icon="📢" />} />
        <Route path="downloads" element={<PlaceholderPage title="Downloads" icon="📥" />} />
        <Route path="fees" element={<PlaceholderPage title="Fee Details" icon="💳" />} />
      </Routes>
    </DashboardLayout>
  );
};

export default StudentDashboard;

