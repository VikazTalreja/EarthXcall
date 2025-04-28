import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { termsContent } from '../data/TermsService';

const TermsSection = ({ title, content, index }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-green-50">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">{title}</h2>
        <p className="text-gray-700 leading-relaxed">{content}</p>
      </div>
    </motion.section>
  );
};

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <div className="relative py-16 px-4">
        <div className="absolute inset-0 bg-green-700 h-48"></div>
        
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-green-700 text-center">
              Terms of Service
            </h1>
            <p className="text-gray-600 text-center mb-4">
              Please read these terms carefully before using our platform
            </p>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
            
            <div className="space-y-6">
              <p className="text-gray-700">
                Last updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}
              </p>
              <p className="text-gray-700">
                Thank you for choosing EarthXcall. These Terms of Service govern your use of our platform, services, and website. 
                By accessing or using our services, you agree to be bound by these terms.
              </p>
            </div>
          </motion.div>
          
          <div className="space-y-6">
            {termsContent.map((section, index) => (
              <TermsSection 
                key={section.id} 
                title={section.title} 
                content={section.content} 
                index={index}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              For any questions regarding these terms, please contact us at <a href="mailto:support@earthxcall.org" className="text-green-600 hover:underline">support@earthxcall.org</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;