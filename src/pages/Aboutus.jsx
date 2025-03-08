import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <header 
        className="relative h-screen bg-green-700 bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-6" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: 'cover'
        }}>
        {/* <div className="absolute inset-0 bg-green-500 bg-opacity-50"></div> */}
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About EarthXcall</h1>
          <p className="text-xl md:text-2xl mb-8">Dedicated to restoring our planet's forests and ecosystems, one tree at a time.</p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Join Our Mission
          </button>
        </div>
      </header>

      {/* Our Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-700">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At EarthXcall, we're on a mission to combat climate change and restore biodiversity through large-scale reforestation efforts around the world.
              </p>
              <p className="text-lg text-gray-700">
                We believe that trees are the most effective, natural solution to many of our planet's most pressing environmental challenges. By working with local communities, governments, and other organizations, we aim to plant billions of trees and restore millions of hectares of degraded land.
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop" 
                alt="Team planting trees" 
                className="w-full h-auto"
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

      {/* Our Impact Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-700">Our Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-green-700 mb-4">10M+</div>
              <p className="text-lg text-gray-700">Trees Planted</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-green-700 mb-4">25+</div>
              <p className="text-lg text-gray-700">Countries</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-green-700 mb-4">5K+</div>
              <p className="text-lg text-gray-700">Hectares Restored</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-green-700 mb-4">100+</div>
              <p className="text-lg text-gray-700">Community Partners</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our work goes beyond just planting trees. We're creating jobs, restoring ecosystems, protecting biodiversity, and helping communities adapt to climate change.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8">
            Together, we can restore our planet's forests and create a more sustainable future for all.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
              Get Involved
            </button>
            <button className="bg-transparent hover:bg-green-800 border-2 border-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Donate Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
