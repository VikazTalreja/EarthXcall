import React, { useState, useEffect, useRef } from 'react';
import { PolicyData } from '../data/PrivacyPolicy';

const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`opacity-0 transform translate-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : ''}`}
    >
      {children}
    </div>
  );
};

const PrivacyPolicyPage = () => (
  <div className="min-h-screen bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <FadeInSection>
        <h1 className="text-4xl font-bold text-center text-green-800 mb-8">Privacy Policy</h1>
      </FadeInSection>
      <div className="space-y-8">
        {PolicyData.map(({ id, title, content, link }) => (
          <FadeInSection key={id}>
            <section className="bg-white rounded-xl shadow-md p-6">
              {title && <h2 className="text-2xl font-semibold text-green-700 mb-4">{title}</h2>}
              <p className="text-gray-700 leading-relaxed mb-2">{content}

              {link && (
                  <a href={link} className="text-green-600 hover:underline">
                  {link === '/contact-us' ? 'Contact Us' : link}
                </a>
              )}
              </p>
            </section>
          </FadeInSection>
        ))}
      </div>
    </div>
  </div>
);

export default PrivacyPolicyPage;
