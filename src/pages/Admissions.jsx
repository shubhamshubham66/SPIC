import React, { useState } from 'react';
import { SCHOOL_INFO, CLASSES } from '../utils/constants';

const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: '', fatherName: '', motherName: '', dob: '',
    class: '', phone: '', email: '', address: '', previousSchool: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully! We will contact you soon.');
    setFormData({
      studentName: '', fatherName: '', motherName: '', dob: '',
      class: '', phone: '', email: '', address: '', previousSchool: '',
    });
  };

  return (
    <div className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="gradient-hero text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium">Admissions Open 2025-26</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Admissions</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Join {SCHOOL_INFO.name} and embark on an extraordinary educational journey.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Admission Process</h2>
          <p className="section-subtitle">Simple 4-step process to join our school</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { step: '01', title: 'Fill Application', desc: 'Complete the online application form', icon: '📝' },
            { step: '02', title: 'Document Submission', desc: 'Submit required documents', icon: '📄' },
            { step: '03', title: 'Entrance Test', desc: 'Appear for admission test', icon: '✍️' },
            { step: '04', title: 'Confirmation', desc: 'Fee payment & admission confirm', icon: '✅' },
          ].map((item, index) => (
            <div key={index} className="text-center relative">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                {item.icon}
              </div>
              <span className="text-xs font-bold text-primary-500 bg-primary-50 px-3 py-1 rounded-full">Step {item.step}</span>
              <h4 className="font-bold text-gray-800 mt-3 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
              {index < 3 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-primary-200"></div>
              )}
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div className="max-w-3xl mx-auto">
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center">Online Application Form</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Student Full Name *</label>
                  <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required className="input-field" placeholder="Enter student name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
                  <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="input-field" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Father's Name *</label>
                  <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required className="input-field" placeholder="Enter father's name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mother's Name *</label>
                  <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required className="input-field" placeholder="Enter mother's name" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Class Applying For *</label>
                  <select name="class" value={formData.class} onChange={handleChange} required className="input-field">
                    <option value="">Select Class</option>
                    {CLASSES.map((cls) => (
                      <option key={cls} value={cls}>{cls}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="input-field" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="input-field" placeholder="email@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                <textarea name="address" value={formData.address} onChange={handleChange} required className="input-field" rows="3" placeholder="Full address"></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Previous School</label>
                <input type="text" name="previousSchool" value={formData.previousSchool} onChange={handleChange} className="input-field" placeholder="Name of previous school" />
              </div>

              <button type="submit" className="w-full btn-primary py-4 text-lg">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Documents Required</h2>
          </div>
          <div className="max-w-2xl mx-auto grid gap-3">
            {[
              'Birth Certificate (Original + Photocopy)',
              'Transfer Certificate from previous school',
              'Report Card of last 2 years',
              'Passport size photographs (4 copies)',
              'Aadhar Card of student',
              'Parent/Guardian ID proof',
              'Address Proof',
              'Caste Certificate (if applicable)',
            ].map((doc, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-gray-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;

