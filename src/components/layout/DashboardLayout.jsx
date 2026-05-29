import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { SCHOOL_INFO } from '../../utils/constants';

const DashboardLayout = ({ children, role, sidebarLinks }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getRoleColor = () => {
    switch (role) {
      case 'admin': return 'bg-purple-600';
      case 'teacher': return 'bg-green-600';
      case 'student': return 'bg-blue-600';
      default: return 'bg-primary-600';
    }
  };

  const getRoleLabel = () => {
    switch (role) {
      case 'admin': return 'Admin Panel';
      case 'teacher': return 'Teacher Portal';
      case 'student': return 'Student Portal';
      default: return 'Dashboard';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className={`${getRoleColor()} p-4 text-white`}>
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="font-bold text-sm">S</span>
              </div>
              <div>
                <h2 className="font-bold text-sm">{SCHOOL_INFO.shortName}</h2>
                <p className="text-xs opacity-80">{getRoleLabel()}</p>
              </div>
            </Link>
          </div>

          {/* User Info */}
          <div className="p-4 border-b">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 ${getRoleColor()} rounded-full flex items-center justify-center text-white font-semibold text-sm`}>
                {user?.name?.charAt(0) || 'U'}
              </div>
              <div>
                <p className="font-medium text-sm text-gray-800">{user?.name || 'User'}</p>
                <p className="text-xs text-gray-500 capitalize">{role}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-3">
            <ul className="space-y-1">
              {sidebarLinks.map((link, index) => (
                <li key={index}>
                  {link.divider ? (
                    <div className="my-3 px-3">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{link.label}</p>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        location.pathname === link.path
                          ? `${getRoleColor()} text-white shadow-md`
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-lg">{link.icon}</span>
                      <span>{link.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t">
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-all"
            >
              <span>🚪</span>
              <span>Logout</span>
            </button>
            <Link
              to="/"
              className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-all mt-1"
            >
              <span>🏠</span>
              <span>Back to Website</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-lg font-semibold text-gray-800">{getRoleLabel()}</h1>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 relative">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className={`w-8 h-8 ${getRoleColor()} rounded-full flex items-center justify-center text-white text-xs font-semibold`}>
                {user?.name?.charAt(0) || 'U'}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
