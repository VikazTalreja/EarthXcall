import React from 'react';
import { motion } from 'framer-motion';
import SubscribeForm from '../components/subscribe';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      
      {/* Hero Section */}
      <header 
        className="relative min-h-[60vh] md:h-screen bg-green-700 bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4 sm:px-5 md:px-6 py-16 md:py-0" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1511497584788-876760111969')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-green-900/60 backdrop-blur-[2px]"></div>
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tight bg-gradient-to-r from-green-300 to-green-100 text-transparent bg-clip-text">
            About EarthXcall
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 leading-relaxed text-green-50">
            Dedicated to restoring our planet's forests and ecosystems, one tree at a time.
          </p>
          <button 
            className="group w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white font-bold py-2.5 sm:py-3 md:py-4 px-6 sm:px-8 md:px-10 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Join Our Mission"
          >
            Join Our Mission
            <ArrowRight className="inline-block ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>

      {/* Our Mission Section */}
      <SubscribeForm />
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-br from-white to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 tracking-tight bg-gradient-to-r from-green-700 to-green-500 text-transparent bg-clip-text">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                At EarthXcall, we're on a mission to combat climate change and restore biodiversity through large-scale reforestation efforts around the world.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We believe that trees are the most effective, natural solution to many of our planet's most pressing environmental challenges. By working with local communities, governments, and other organizations, we aim to plant billions of trees and restore millions of hectares of degraded land.
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden shadow-xl mt-6 md:mt-0 transform hover:scale-[1.02] transition-transform duration-300 group"
            >
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09" 
                alt="Team planting trees in a forest" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-700">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-lg overflow-hidden shadow-xl md:order-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop" 
                alt="Forest landscape" 
                className="w-full h-auto"
              />
            </motion.div>
            <div className="md:order-1">
              <p className="text-lg text-gray-700 mb-6">
                EarthXcall was founded in 2020 by a group of environmental scientists and activists who recognized the urgent need for large-scale reforestation to combat climate change.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                What began as a small initiative to restore local forests has grown into a global movement, with projects spanning across five continents and partnerships with dozens of organizations.
              </p>
              <p className="text-lg text-gray-700">
                Today, we're proud to have planted over 10 million trees and restored thousands of hectares of degraded land, but our work is just beginning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Why Trees?</h2>
          <p className="text-lg text-gray-700 mb-8">
            In the face of complex global challenges, we focus on one impactful, science-based solution: trees. Reforestation helps restore healthy forests, support biodiversity, and combat climate change.
          </p>
          <a className="text-green-600 font-semibold hover:underline" href="#">
            Learn more
          </a>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-br from-green-50 to-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-4 sm:mb-6 md:mb-8 tracking-tight bg-gradient-to-r from-green-700 to-green-500 text-transparent bg-clip-text">
            Together, We're Creating Change
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
            Our Impact So Far
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
            <div className="group bg-white rounded-lg shadow-lg p-4 sm:p-5 md:p-6 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl border border-green-100 hover:border-green-300">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-2 group-hover:text-green-500 transition-colors">10M+</p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">Trees Planted</p>
            </div>
            <div className="group bg-white rounded-lg shadow-lg p-4 sm:p-5 md:p-6 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl border border-green-100 hover:border-green-300">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-2 group-hover:text-green-500 transition-colors">25+</p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">Countries</p>
            </div>
            <div className="group bg-white rounded-lg shadow-lg p-4 sm:p-5 md:p-6 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl border border-green-100 hover:border-green-300">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-2 group-hover:text-green-500 transition-colors">5K+</p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">Hectares Restored</p>
            </div>
            <div className="group bg-white rounded-lg shadow-lg p-4 sm:p-5 md:p-6 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl border border-green-100 hover:border-green-300">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-2 group-hover:text-green-500 transition-colors">100+</p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">Community Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-green-600 to-green-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tight bg-gradient-to-r from-green-200 to-white text-transparent bg-clip-text">
            Join Our Mission
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 leading-relaxed text-green-50">
            Together, we can restore our planet's forests and create a more sustainable future for all.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="group w-full sm:w-auto bg-white text-green-600 hover:text-green-700 hover:bg-green-50 font-bold py-2.5 sm:py-3 md:py-4 px-6 sm:px-8 md:px-10 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700">
              Get Involved
              <ArrowRight className="inline-block ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group w-full sm:w-auto bg-transparent hover:bg-green-800 border-2 border-white font-bold py-2.5 sm:py-3 md:py-4 px-6 sm:px-8 md:px-10 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700">
              Donate Now
              <ArrowRight className="inline-block ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;