import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-green-700 mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="group inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          <ArrowLeft className="mr-2 h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>
      
      <div className="mt-16 relative w-full max-w-lg">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
      </div>
    </div>
  );
};

export default NotFound;  