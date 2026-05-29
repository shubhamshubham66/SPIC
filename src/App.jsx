import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Courses from './pages/Courses';
import Results from './pages/Results';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Notices from './pages/Notices';
import Contact from './pages/Contact';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import AdminDashboard from './pages/AdminDashboard';

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
      <Routes>
        <Route path="/student/*" element={<StudentDashboard />} />
        <Route path="/teacher/*" element={<TeacherDashboard />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    );
  }

  if (isLogin) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    );
  }

  return (
    <PublicLayout>
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
