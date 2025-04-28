import React from 'react';
import { motion } from 'framer-motion';
import { PolicyData } from '../data/PrivacyPolicy';

const PrivacyPolicyPage = () => {
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
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-center mb-4">
              How we collect, use, and protect your information
            </p>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
            
            <div className="space-y-6">
              <p className="text-gray-700">
                Last updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}
              </p>
              <p className="text-gray-700">
                At EarthXcall, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>
          </motion.div>
          
          <div className="space-y-6">
            {PolicyData.map((section, index) => (
              <motion.section 
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-green-50"
              >
                {section.title && 
                  <h2 className="text-2xl font-semibold text-green-700 mb-4">
                    {section.title}
                  </h2>
                }
                <p className="text-gray-700 leading-relaxed mb-2">
                  {section.content}
                  {section.link && (
                    <a 
                      href={section.link} 
                      className="text-green-600 hover:text-green-800 hover:underline ml-1"
                    >
                      {section.link === '/contact-us' ? 'Contact Us' : section.link}
                    </a>
                  )}
                </p>
              </motion.section>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: PolicyData.length * 0.1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600">
              If you have any questions about our Privacy Policy, please{' '}
              <a href="/contact-us" className="text-green-600 hover:text-green-800 hover:underline">
                contact us
              </a>.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
