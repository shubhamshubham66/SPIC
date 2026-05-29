import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Demo users for testing (in production, this would use Firebase Auth)
const DEMO_USERS = {
  admin: { id: 'ADM001', name: 'Admin User', role: 'admin', phone: '9876543210', email: 'admin@spicschool.edu.in' },
  teacher: { id: 'TCH001', name: 'Dr. Meera Patel', role: 'teacher', phone: '9876543211', subject: 'Mathematics', classes: ['Class 10 A', 'Class 12 Science A'] },
  student: { id: 'SPIC2024001', name: 'Rahul Sharma', role: 'student', phone: '9876543212', class: 'Class 12 Science', section: 'A', rollNo: '01' },
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for saved session
    const savedUser = localStorage.getItem('spic_user');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = async (phone, otp, role = 'student') => {
    // Simulate OTP verification
    // In production, this would use Firebase Phone Auth
    setLoading(true);
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (otp === '123456') { // Demo OTP
          const userData = DEMO_USERS[role] || DEMO_USERS.student;
          setUser(userData);
          setIsAuthenticated(true);
          localStorage.setItem('spic_user', JSON.stringify(userData));
          setLoading(false);
          resolve(userData);
        } else {
          setLoading(false);
          reject(new Error('Invalid OTP. Use 123456 for demo.'));
        }
      }, 1500);
    });
  };

  const sendOTP = async (phone) => {
    // Simulate sending OTP
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: 'OTP sent successfully! (Use 123456 for demo)' });
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('spic_user');
  };

  const updateProfile = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    localStorage.setItem('spic_user', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    login,
    sendOTP,
    logout,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

