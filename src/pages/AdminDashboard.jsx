import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import DashboardLayout from '../components/layout/DashboardLayout';
import { CLASSES, SECTIONS } from '../utils/constants';

const sidebarLinks = [
  { divider: true, label: 'Overview' },
  { name: 'Dashboard', path: '/admin', icon: '📊' },
  { divider: true, label: 'Management' },
  { name: 'Students', path: '/admin/students', icon: '👨‍🎓' },
  { name: 'Teachers', path: '/admin/teachers', icon: '👩‍🏫' },
  { name: 'Admissions', path: '/admin/admissions', icon: '📝' },
  { name: 'Results', path: '/admin/results', icon: '📋' },
  { divider: true, label: 'Content' },
  { name: 'Notices', path: '/admin/notices', icon: '📢' },
  { name: 'Events', path: '/admin/events', icon: '📅' },
  { name: 'Gallery', path: '/admin/gallery', icon: '📸' },
  { name: 'Courses', path: '/admin/courses', icon: '📚' },
  { divider: true, label: 'System' },
  { name: 'Search', path: '/admin/search', icon: '🔍' },
  { name: 'Analytics', path: '/admin/analytics', icon: '📈' },
  { name: 'Settings', path: '/admin/settings', icon: '⚙️' },
];

// Admin Dashboard Overview
const AdminOverview = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-6 text-white">
      <h1 className="text-2xl font-bold">Admin Dashboard 🎛️</h1>
      <p className="text-purple-200 mt-1">Complete school management at your fingertips</p>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { label: 'Total Students', value: '2,145', icon: '👨‍🎓', color: 'bg-blue-50 text-blue-700', change: '+12' },
        { label: 'Total Teachers', value: '124', icon: '👩‍🏫', color: 'bg-green-50 text-green-700', change: '+3' },
        { label: 'Active Courses', value: '52', icon: '📚', color: 'bg-purple-50 text-purple-700', change: '+2' },
        { label: 'Pending Admissions', value: '45', icon: '📝', color: 'bg-orange-50 text-orange-700', change: '+8' },
      ].map((stat, index) => (
        <div key={index} className={`card p-4 ${stat.color}`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl">{stat.icon}</span>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{stat.change}</span>
          </div>
          <p className="text-2xl font-bold">{stat.value}</p>
          <p className="text-sm font-medium mt-1">{stat.label}</p>
        </div>
      ))}
    </div>

    {/* Quick Actions & Recent */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card p-6">
        <h3 className="font-bold text-gray-800 mb-4">⚡ Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Add Student', icon: '➕', color: 'bg-blue-100' },
            { label: 'Add Teacher', icon: '👩‍🏫', color: 'bg-green-100' },
            { label: 'Post Notice', icon: '📢', color: 'bg-orange-100' },
            { label: 'Upload Results', icon: '📊', color: 'bg-purple-100' },
            { label: 'Add Event', icon: '📅', color: 'bg-pink-100' },
            { label: 'View Reports', icon: '📈', color: 'bg-teal-100' },
          ].map((action, index) => (
            <button key={index} className={`${action.color} p-4 rounded-xl text-center hover:opacity-80 transition-opacity`}>
              <span className="text-2xl block mb-1">{action.icon}</span>
              <span className="text-xs font-medium text-gray-700">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-bold text-gray-800 mb-4">📊 Class-wise Strength</h3>
        <div className="space-y-3">
          {[
            { class: 'Class 10', students: 245, sections: 4 },
            { class: 'Class 12 Science', students: 180, sections: 3 },
            { class: 'Class 12 Commerce', students: 120, sections: 2 },
            { class: 'Class 9', students: 240, sections: 4 },
            { class: 'Class 8', students: 260, sections: 4 },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-sm">{item.class}</p>
                <p className="text-xs text-gray-500">{item.sections} sections</p>
              </div>
              <span className="text-sm font-bold text-primary-600">{item.students}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Recent Activity */}
    <div className="card p-6">
      <h3 className="font-bold text-gray-800 mb-4">🕐 Recent Activity</h3>
      <div className="space-y-3">
        {[
          { action: 'New admission request from Ravi Kumar', time: '2 min ago', type: 'admission' },
          { action: 'Class 10 results uploaded by Mr. Gupta', time: '1 hour ago', type: 'result' },
          { action: 'Winter vacation notice published', time: '3 hours ago', type: 'notice' },
          { action: 'New teacher registration: Ms. Priya Verma', time: '1 day ago', type: 'teacher' },
          { action: 'Gallery updated with Sports Day photos', time: '2 days ago', type: 'gallery' },
        ].map((activity, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
            <div className={`w-2 h-2 rounded-full ${
              activity.type === 'admission' ? 'bg-blue-500' :
              activity.type === 'result' ? 'bg-green-500' :
              activity.type === 'notice' ? 'bg-orange-500' :
              activity.type === 'teacher' ? 'bg-purple-500' : 'bg-pink-500'
            }`}></div>
            <p className="text-sm text-gray-700 flex-1">{activity.action}</p>
            <span className="text-xs text-gray-400">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Student Management
const StudentsManagement = () => {
  const [students] = useState([
    { id: 'SPIC2024001', name: 'Rahul Sharma', class: 'Class 12 Science', section: 'A', roll: '01', status: 'active' },
    { id: 'SPIC2024002', name: 'Priya Singh', class: 'Class 10', section: 'B', roll: '02', status: 'active' },
    { id: 'SPIC2024003', name: 'Arjun Patel', class: 'Class 12 Science', section: 'A', roll: '03', status: 'active' },
    { id: 'SPIC2024004', name: 'Sneha Gupta', class: 'Class 10', section: 'A', roll: '04', status: 'active' },
    { id: 'SPIC2024005', name: 'Vikash Kumar', class: 'Class 12 Commerce', section: 'A', roll: '05', status: 'active' },
    { id: 'SPIC2024006', name: 'Ananya Mishra', class: 'Class 9', section: 'B', roll: '06', status: 'active' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudents = students.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">Student Management</h2>
        <button className="btn-primary text-sm py-2 px-4">+ Add Student</button>
      </div>

      <div className="card p-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search students by name or ID..."
          className="input-field mb-4"
        />

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-3 text-xs font-semibold text-gray-500 uppercase">Student ID</th>
                <th className="pb-3 text-xs font-semibold text-gray-500 uppercase">Name</th>
                <th className="pb-3 text-xs font-semibold text-gray-500 uppercase">Class</th>
                <th className="pb-3 text-xs font-semibold text-gray-500 uppercase">Section</th>
                <th className="pb-3 text-xs font-semibold text-gray-500 uppercase">Roll</th>
                <th className="pb-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
                <th className="pb-3 text-xs font-semibold text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} className="border-b last:border-0 hover:bg-gray-50">
                  <td className="py-3 text-sm font-mono text-gray-600">{student.id}</td>
                  <td className="py-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {student.name.charAt(0)}
                      </div>
                      <span className="font-medium text-sm">{student.name}</span>
                    </div>
                  </td>
                  <td className="py-3 text-sm text-gray-600">{student.class}</td>
                  <td className="py-3 text-sm text-gray-600">{student.section}</td>
                  <td className="py-3 text-sm text-gray-600">{student.roll}</td>
                  <td className="py-3">
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      {student.status}
                    </span>
                  </td>
                  <td className="py-3">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-xs font-medium">View</button>
                      <button className="text-orange-600 hover:text-orange-800 text-xs font-medium">Edit</button>
                      <button className="text-red-600 hover:text-red-800 text-xs font-medium">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Teachers Management
const TeachersManagement = () => {
  const teachers = [
    { id: 'TCH001', name: 'Dr. Meera Patel', subject: 'Mathematics', qualification: 'Ph.D Mathematics', experience: '15 years', classes: ['10 A', '12 Sci A'] },
    { id: 'TCH002', name: 'Mr. Rajesh Gupta', subject: 'Physics', qualification: 'M.Sc Physics', experience: '12 years', classes: ['11 Sci', '12 Sci'] },
    { id: 'TCH003', name: 'Mrs. Sunita Sharma', subject: 'Chemistry', qualification: 'M.Sc Chemistry', experience: '10 years', classes: ['10 B', '11 Sci'] },
    { id: 'TCH004', name: 'Ms. Priya Roy', subject: 'English', qualification: 'M.A English', experience: '8 years', classes: ['9 A', '10 A'] },
    { id: 'TCH005', name: 'Mr. Amit Kumar', subject: 'Computer Science', qualification: 'M.Tech CSE', experience: '6 years', classes: ['11 Sci', '12 Sci'] },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">Teacher Management</h2>
        <button className="btn-primary text-sm py-2 px-4">+ Add Teacher</button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="card p-5">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                {teacher.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-semibold text-sm">{teacher.name}</h4>
                <p className="text-xs text-gray-500">{teacher.id}</p>
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <p><span className="text-gray-500">Subject:</span> <span className="font-medium">{teacher.subject}</span></p>
              <p><span className="text-gray-500">Qualification:</span> <span className="font-medium">{teacher.qualification}</span></p>
              <p><span className="text-gray-500">Experience:</span> <span className="font-medium">{teacher.experience}</span></p>
              <div className="flex flex-wrap gap-1 mt-2">
                {teacher.classes.map((cls, i) => (
                  <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">{cls}</span>
                ))}
              </div>
            </div>
            <div className="flex space-x-2 mt-4 pt-3 border-t">
              <button className="text-blue-600 text-xs font-medium hover:underline">View</button>
              <button className="text-orange-600 text-xs font-medium hover:underline">Edit</button>
              <button className="text-red-600 text-xs font-medium hover:underline">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Notice Management
const NoticeManagement = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Notice published successfully!');
    setTitle('');
    setContent('');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Notice Management</h2>
      <div className="card p-6">
        <h3 className="font-bold text-gray-800 mb-4">Publish New Notice</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="input-field" placeholder="Notice title" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} className="input-field" rows="4" placeholder="Notice content..." required></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value)} className="input-field">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <button type="submit" className="btn-primary">Publish Notice</button>
        </form>
      </div>
    </div>
  );
};

// Global Search
const GlobalSearch = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const allItems = [
    { type: 'student', name: 'Rahul Sharma', detail: 'Class 12 Science A | SPIC2024001' },
    { type: 'student', name: 'Priya Singh', detail: 'Class 10 B | SPIC2024002' },
    { type: 'teacher', name: 'Dr. Meera Patel', detail: 'Mathematics | TCH001' },
    { type: 'teacher', name: 'Mr. Rajesh Gupta', detail: 'Physics | TCH002' },
    { type: 'course', name: 'Senior Secondary - Science', detail: 'Class 11-12 | Physics, Chemistry, Maths' },
    { type: 'course', name: 'Secondary Education', detail: 'Class 9-10 | All subjects' },
    { type: 'notice', name: 'Winter Vacation Schedule', detail: 'Dec 25 - Jan 5 | High Priority' },
    { type: 'notice', name: 'Pre-Board Exams', detail: 'Starting Dec 10 | Class 10' },
  ];

  const filtered = allItems.filter(item => {
    const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase()) || item.detail.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === 'all' || item.type === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Global Search</h2>
      <div className="card p-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search students, teachers, courses, notices..."
          className="input-field mb-4"
        />
        <div className="flex flex-wrap gap-2 mb-4">
          {['all', 'student', 'teacher', 'course', 'notice'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                category === cat ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {query && (
          <div className="space-y-2">
            {filtered.length > 0 ? filtered.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                <span className={`px-2 py-0.5 rounded text-xs font-medium capitalize ${
                  item.type === 'student' ? 'bg-blue-100 text-blue-700' :
                  item.type === 'teacher' ? 'bg-green-100 text-green-700' :
                  item.type === 'course' ? 'bg-purple-100 text-purple-700' :
                  'bg-orange-100 text-orange-700'
                }`}>{item.type}</span>
                <div>
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.detail}</p>
                </div>
              </div>
            )) : (
              <p className="text-center text-gray-500 py-4">No results found</p>
            )}
          </div>
        )}
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

const AdminDashboard = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <DashboardLayout role="admin" sidebarLinks={sidebarLinks}>
      <Routes>
        <Route index element={<AdminOverview />} />
        <Route path="students" element={<StudentsManagement />} />
        <Route path="teachers" element={<TeachersManagement />} />
        <Route path="admissions" element={<PlaceholderPage title="Admissions Management" icon="📝" />} />
        <Route path="results" element={<PlaceholderPage title="Results Management" icon="📋" />} />
        <Route path="notices" element={<NoticeManagement />} />
        <Route path="events" element={<PlaceholderPage title="Events Management" icon="📅" />} />
        <Route path="gallery" element={<PlaceholderPage title="Gallery Management" icon="📸" />} />
        <Route path="courses" element={<PlaceholderPage title="Courses Management" icon="📚" />} />
        <Route path="search" element={<GlobalSearch />} />
        <Route path="analytics" element={<PlaceholderPage title="Analytics" icon="📈" />} />
        <Route path="settings" element={<PlaceholderPage title="Settings" icon="⚙️" />} />
      </Routes>
    </DashboardLayout>
  );
};

export default AdminDashboard;

