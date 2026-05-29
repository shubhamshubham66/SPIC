import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { validatePhone } from '../utils/helpers';

const Login = () => {
  const [step, setStep] = useState('phone'); // phone, otp
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [role, setRole] = useState('student');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const { login, sendOTP } = useAuth();
  const navigate = useNavigate();

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setError('');

    if (!validatePhone(phone)) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    setLoading(true);
    try {
      const result = await sendOTP(phone);
      setOtpSent(true);
      setStep('otp');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setError('');

    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    setLoading(true);
    try {
      await login(phone, otp, role);
      const redirectPath = role === 'admin' ? '/admin' : role === 'teacher' ? '/teacher' : '/student';
      navigate(redirectPath);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center gradient-hero px-4 py-20">
      <div className="w-full max-w-md">
        <div className="card p-8 animate-scale-in">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">S</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
            <p className="text-gray-500 text-sm mt-1">Login to SPIC School Portal</p>
          </div>

          {/* Role Selection */}
          <div className="flex rounded-lg bg-gray-100 p-1 mb-6">
            {['student', 'teacher', 'admin'].map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 py-2 text-sm font-medium rounded-md capitalize transition-all ${
                  role === r ? 'bg-white text-primary-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          {/* Phone Step */}
          {step === 'phone' && (
            <form onSubmit={handleSendOTP} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-gray-500 text-sm">
                    +91
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="Enter 10-digit mobile number"
                    className="input-field rounded-l-none"
                    maxLength="10"
                  />
                </div>
              </div>

              {error && <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">{error}</p>}

              <button type="submit" className="w-full btn-primary py-3" disabled={loading}>
                {loading ? 'Sending OTP...' : 'Send OTP'}
              </button>
            </form>
          )}

          {/* OTP Step */}
          {step === 'otp' && (
            <form onSubmit={handleVerifyOTP} className="space-y-4">
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600">OTP sent to <span className="font-semibold">+91 {phone}</span></p>
                <button type="button" onClick={() => setStep('phone')} className="text-primary-600 text-sm font-medium hover:underline">
                  Change Number
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Enter OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="Enter 6-digit OTP"
                  className="input-field text-center text-lg tracking-widest"
                  maxLength="6"
                />
              </div>

              {error && <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">{error}</p>}

              <button type="submit" className="w-full btn-primary py-3" disabled={loading}>
                {loading ? 'Verifying...' : 'Verify & Login'}
              </button>

              <p className="text-center text-sm text-gray-500">
                Didn't receive OTP? <button type="button" onClick={handleSendOTP} className="text-primary-600 font-medium hover:underline">Resend</button>
              </p>
            </form>
          )}

          {/* Demo Info */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-xs font-semibold text-blue-700 mb-1">🔑 Demo Credentials</p>
            <p className="text-xs text-blue-600">Phone: Any 10-digit number</p>
            <p className="text-xs text-blue-600">OTP: <span className="font-mono font-bold">123456</span></p>
            <p className="text-xs text-blue-600 mt-1">Select role above to access different portals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
