import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

// Layout - loaded eagerly (needed immediately)
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Home loaded eagerly (critical for first paint + SEO)
import Home from './pages/Home';

// Lazy-loaded pages (code splitting for performance)
const About = lazy(() => import('./pages/About'));
const Admissions = lazy(() => import('./pages/Admissions'));
const Courses = lazy(() => import('./pages/Courses'));
const Results = lazy(() => import('./pages/Results'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Events = lazy(() => import('./pages/Events'));
const Notices = lazy(() => import('./pages/Notices'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const StudentDashboard = lazy(() => import('./pages/StudentDashboard'));
const TeacherDashboard = lazy(() => import('./pages/TeacherDashboard'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="loader mx-auto mb-4"></div>
      <p className="text-gray-500 text-sm">Loading...</p>
    </div>
  </div>
);

// Layout wrapper component
const PublicLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

// Router content component
const AppRoutes = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/student') || 
                      location.pathname.startsWith('/teacher') || 
                      location.pathname.startsWith('/admin');
  const isLogin = location.pathname === '/login';

  if (isDashboard) {
    return (
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/student/*" element={<StudentDashboard />} />
          <Route path="/teacher/*" element={<TeacherDashboard />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </Suspense>
    );
  }

  if (isLogin) {
    return (
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    );
  }

  return (
    <PublicLayout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/results" element={<Results />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </PublicLayout>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
