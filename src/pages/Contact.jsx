import React, { useState } from 'react';
import { SCHOOL_INFO } from '../utils/constants';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="pt-24 md:pt-28">
      <section className="gradient-hero text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Contact Us</h1>
          <p className="text-lg text-white/80">Get in touch with us for any queries or information</p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-primary-900 mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about admissions, academics, or anything else? We'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">📍</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Address</h4>
                  <p className="text-gray-600 text-sm">{SCHOOL_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">📞</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600 text-sm">{SCHOOL_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">✉️</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600 text-sm">{SCHOOL_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">🕐</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Office Hours</h4>
                  <p className="text-gray-600 text-sm">Monday - Saturday: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-200 rounded-xl h-48 flex items-center justify-center">
              <p className="text-gray-500 text-sm">📍 Google Maps Integration</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-8">
            <h3 className="text-xl font-bold text-primary-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="input-field" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="input-field" placeholder="Phone number" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="input-field" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                <input type="text" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} required className="input-field" placeholder="Subject of your message" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required className="input-field" rows="5" placeholder="Write your message here..."></textarea>
              </div>
              <button type="submit" className="w-full btn-primary py-3">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

