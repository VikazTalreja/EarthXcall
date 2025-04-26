import { useState, useEffect, useRef } from 'react';
import { termsContent } from '../data/TermsService';

const TermsSection = ({ title, content }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={domRef}
      className={`opacity-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : ''}`}
    >
      <div className="mb-8 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-700 dark:text-emerald-300">{title}</h2>
        <p className="text-gray-600 dark:text-gray-200 leading-relaxed">{content}</p>
      </div>
    </section>
  );
};

const TermsOfService = () => {
  return (
    <div className="min-h-screen  flex flex-col bg-green-50 dark:bg-gray-800 mt-14 overflow-hidden">
    

      <main className="flex-grow  container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-emerald-800 flex justify-center ">Terms of Service</h1>
        <div className="max-w-4xl mx-auto ">
          {termsContent.map(section => (
            <TermsSection key={section.id} title={section.title} content={section.content} />
          ))}
        </div>
      </main>


    </div>
  );
};

export default TermsOfService;