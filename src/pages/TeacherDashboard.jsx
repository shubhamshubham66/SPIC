import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import DashboardLayout from '../components/layout/DashboardLayout';

const sidebarLinks = [
  { divider: true, label: 'Main' },
  { name: 'Dashboard', path: '/teacher', icon: '📊' },
  { name: 'My Profile', path: '/teacher/profile', icon: '👤' },
  { divider: true, label: 'Management' },
  { name: 'My Classes', path: '/teacher/classes', icon: '🏫' },
  { name: 'Attendance', path: '/teacher/attendance', icon: '📋' },
  { name: 'Upload Results', path: '/teacher/results', icon: '📝' },
  { name: 'Student Search', path: '/teacher/search', icon: '🔍' },
  { divider: true, label: 'Information' },
  { name: 'Notices', path: '/teacher/notices', icon: '📢' },
  { name: 'Schedule', path: '/teacher/schedule', icon: '🕐' },
];

// Teacher Dashboard Overview
const DashboardOverview = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold">Welcome, {user?.name || 'Teacher'}! 👋</h1>
        <p className="text-green-100 mt-1">Subject: {user?.subject || 'Mathematics'} | Teacher ID: {user?.id || 'TCH001'}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Students', value: '180', icon: '👨‍🎓', color: 'bg-blue-50 text-blue-700' },
          { label: 'Classes Assigned', value: '6', icon: '🏫', color: 'bg-green-50 text-green-700' },
          { label: 'Today\'s Classes', value: '4', icon: '📅', color: 'bg-purple-50 text-purple-700' },
          { label: 'Pending Tasks', value: '2', icon: '⏳', color: 'bg-orange-50 text-orange-700' },
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

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="font-bold text-gray-800 mb-4">📅 Today's Schedule</h3>
          <div className="space-y-3">
            {[
              { time: '8:00 AM', class: 'Class 10 A', subject: 'Mathematics' },
              { time: '9:00 AM', class: 'Class 12 Science A', subject: 'Mathematics' },
              { time: '11:00 AM', class: 'Class 10 B', subject: 'Mathematics' },
              { time: '12:00 PM', class: 'Class 12 Science B', subject: 'Mathematics' },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <span className="text-xs font-mono text-gray-400 w-16">{item.time}</span>
                <div className="w-1 h-8 bg-green-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-sm">{item.class}</p>
                  <p className="text-xs text-gray-500">{item.subject}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h3 className="font-bold text-gray-800 mb-4">⚡ Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Mark Attendance', icon: '📋', color: 'bg-green-100 hover:bg-green-200' },
              { label: 'Upload Results', icon: '📝', color: 'bg-blue-100 hover:bg-blue-200' },
              { label: 'Post Notice', icon: '📢', color: 'bg-orange-100 hover:bg-orange-200' },
              { label: 'Search Student', icon: '🔍', color: 'bg-purple-100 hover:bg-purple-200' },
            ].map((action, index) => (
              <button key={index} className={`${action.color} p-4 rounded-xl text-center transition-colors`}>
                <span className="text-2xl block mb-1">{action.icon}</span>
                <span className="text-xs font-medium text-gray-700">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Student Search
const StudentSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const demoStudents = [
    { id: 'SPIC2024001', name: 'Rahul Sharma', class: 'Class 12 Science', section: 'A', roll: '01' },
    { id: 'SPIC2024002', name: 'Priya Singh', class: 'Class 10', section: 'B', roll: '02' },
    { id: 'SPIC2024003', name: 'Arjun Patel', class: 'Class 12 Science', section: 'A', roll: '03' },
    { id: 'SPIC2024004', name: 'Sneha Gupta', class: 'Class 10', section: 'A', roll: '04' },
    { id: 'SPIC2024005', name: 'Vikash Kumar', class: 'Class 12 Commerce', section: 'A', roll: '05' },
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim()) {
      setResults(demoStudents.filter(s => 
        s.name.toLowerCase().includes(value.toLowerCase()) ||
        s.id.toLowerCase().includes(value.toLowerCase()) ||
        s.class.toLowerCase().includes(value.toLowerCase())
      ));
    } else {
      setResults([]);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Student Search</h2>
      <div className="card p-6">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search by name, ID, or class..."
          className="input-field mb-4"
        />
        {results.length > 0 && (
          <div className="space-y-2">
            {results.map((student) => (
              <div key={student.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{student.name}</p>
                    <p className="text-xs text-gray-500">{student.id} | {student.class} {student.section}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">Roll: {student.roll}</span>
              </div>
            ))}
          </div>
        )}
        {query && results.length === 0 && (
          <p className="text-gray-500 text-sm text-center py-4">No students found</p>
        )}
      </div>
    </div>
  );
};

// Attendance Management
const AttendanceManagement = () => {
  const [selectedClass, setSelectedClass] = useState('Class 10 A');
  
  const students = [
    { name: 'Rahul Sharma', roll: '01' },
    { name: 'Priya Singh', roll: '02' },
    { name: 'Arjun Patel', roll: '03' },
    { name: 'Sneha Gupta', roll: '04' },
    { name: 'Vikash Kumar', roll: '05' },
  ];

  const [attendance, setAttendance] = useState(students.map(() => 'present'));

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Mark Attendance</h2>
      <div className="card p-6">
        <div className="flex items-center space-x-4 mb-6">
          <select className="input-field w-48" value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
            <option>Class 10 A</option>
            <option>Class 10 B</option>
            <option>Class 12 Science A</option>
          </select>
          <p className="text-sm text-gray-500">Date: {new Date().toLocaleDateString()}</p>
        </div>
        
        <div className="space-y-2">
          {students.map((student, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-500 w-8">{student.roll}</span>
                <span className="font-medium text-sm">{student.name}</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => { const a = [...attendance]; a[index] = 'present'; setAttendance(a); }}
                  className={`px-3 py-1 rounded text-xs font-medium ${attendance[index] === 'present' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}
                >
                  Present
                </button>
                <button
                  onClick={() => { const a = [...attendance]; a[index] = 'absent'; setAttendance(a); }}
                  className={`px-3 py-1 rounded text-xs font-medium ${attendance[index] === 'absent' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'}`}
                >
                  Absent
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="btn-primary mt-6 w-full" onClick={() => alert('Attendance saved successfully!')}>
          Save Attendance
        </button>
      </div>
    </div>
  );
};

const PlaceholderPage = ({ title, icon }) => (
  <div className="flex flex-col items-center justify-center min-h-[400px] card p-8">
    <span className="text-5xl mb-4">{icon}</span>
    <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
    <p className="text-gray-500 text-center">This section is under development.</p>
  </div>
);

const TeacherDashboard = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <DashboardLayout role="teacher" sidebarLinks={sidebarLinks}>
      <Routes>
        <Route index element={<DashboardOverview />} />
        <Route path="profile" element={<PlaceholderPage title="Teacher Profile" icon="👤" />} />
        <Route path="classes" element={<PlaceholderPage title="My Classes" icon="🏫" />} />
        <Route path="attendance" element={<AttendanceManagement />} />
        <Route path="results" element={<PlaceholderPage title="Upload Results" icon="📝" />} />
        <Route path="search" element={<StudentSearch />} />
        <Route path="notices" element={<PlaceholderPage title="Notices" icon="📢" />} />
        <Route path="schedule" element={<PlaceholderPage title="Schedule" icon="🕐" />} />
      </Routes>
    </DashboardLayout>
  );
};

export default TeacherDashboard;

