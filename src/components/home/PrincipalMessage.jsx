import React from 'react';
import { SCHOOL_INFO } from '../../utils/constants';
import { getInitials } from '../../utils/helpers';

const PrincipalMessage = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar Side */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-80 md:w-72 md:h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4">
                    {getInitials(SCHOOL_INFO.principal)}
                  </div>
                  <h4 className="font-semibold text-primary-800">{SCHOOL_INFO.principal}</h4>
                  <p className="text-sm text-primary-600">Principal</p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary-200 rounded-xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-200 rounded-xl -z-10"></div>
            </div>
          </div>

          {/* Message Side */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold">
              👋 Principal's Message
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 font-display">
              A Message from <br/>Our Principal
            </h2>
            <blockquote className="text-gray-600 leading-relaxed text-lg italic border-l-4 border-primary-500 pl-6">
              "{SCHOOL_INFO.principalMessage}"
            </blockquote>
            <div className="pt-4">
              <p className="font-semibold text-primary-800 text-lg">{SCHOOL_INFO.principal}</p>
              <p className="text-gray-500">Principal, {SCHOOL_INFO.name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
