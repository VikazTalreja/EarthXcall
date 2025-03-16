import React from 'react';
import { motion } from 'framer-motion';

const ReforestationPlantation = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <header className="relative min-h-[800px] bg-green-700 bg-cover bg-center flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-12" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop')`,
          backgroundSize: 'cover'
        }}>
        <div className="relative z-10 max-w-2xl text-white mt-20 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Support Reforestation!</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">Restoring forests, protecting biodiversity, and combating climate change</p>
        </div>

        {/* Donation Panel */}
        <div className="relative z-10 bg-[#F1F0E9] p-6 md:p-8 rounded-lg shadow-xl w-full md:w-[420px] self-center md:self-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">REFORESTATION ACTION FUND</h2>
          <p className="text-xs uppercase tracking-wider text-gray-600 mb-4">TOGETHER, RESTORING FORESTS</p>
          <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
            The Reforestation Action Fund works to restore degraded forests and create new woodland areas to combat climate change and preserve biodiversity. Support reforestation today!
          </p>

          <div className="flex gap-3 mb-6">
            <button className="flex-1 bg-[#98A4AE] hover:bg-[#7A8793] text-white font-bold py-3 px-4 rounded text-sm">
              GIVE TODAY
            </button>
            <button className="flex-1 bg-white hover:bg-gray-100 text-gray-700 font-bold py-3 px-4 rounded border border-gray-300 text-sm">
              GIVE MONTHLY
            </button>
          </div>

          <p className="text-xs uppercase tracking-wider text-gray-600 mb-4">SELECT AN AMOUNT TO DONATE:</p>
          <div className="grid grid-cols-3 gap-3 mb-4">
            <button className="bg-white hover:bg-gray-100 text-gray-700 font-bold py-2 px-3 rounded border border-gray-300 text-sm">
              ₹5
            </button>
            <button className="bg-[#98A4AE] hover:bg-[#7A8793] text-white font-bold py-2 px-3 rounded text-sm">
              ₹20
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-700 font-bold py-2 px-3 rounded border border-gray-300 text-sm">
              ₹50
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="bg-white hover:bg-gray-100 text-gray-700 font-bold py-2 px-3 rounded border border-gray-300 text-sm">
              ₹100
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-700 font-bold py-2 px-3 rounded border border-gray-300 text-sm">
              Other
            </button>
          </div>

          <div className="flex items-center gap-2 mb-6 bg-white rounded border border-gray-300 p-2">
            <span className="text-gray-700 text-sm">₹</span>
            <input 
              type="number" 
              className="flex-1 outline-none text-sm"
              placeholder="20"
            />
            <span className="text-gray-700 text-sm">INR</span>
          </div>

          <button className="w-full bg-[#1B3044] hover:bg-[#0D1821] text-white font-bold py-3 px-4 rounded text-sm uppercase">
            DONATE
          </button>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-700">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                The EarthXcall Reforestation Initiative is dedicated to restoring degraded forests and creating new woodland areas to combat climate change and preserve biodiversity.
              </p>
              <p className="text-lg text-gray-700">
                Through strategic partnerships with local communities and environmental experts, we implement sustainable reforestation projects that benefit both the environment and local economies.
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=2088&auto=format&fit=crop" 
                alt="Tree planting" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-700">Our Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-4xl font-bold text-green-700 mb-2">1M+</div>
              <p className="text-gray-700">Trees Planted</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-4xl font-bold text-green-700 mb-2">500+</div>
              <p className="text-gray-700">Hectares Restored</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-4xl font-bold text-green-700 mb-2">50+</div>
              <p className="text-gray-700">Local Partners</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-4xl font-bold text-green-700 mb-2">10K+</div>
              <p className="text-gray-700">Community Members</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Locations */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-700">Our Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1586984478679-4c4bc2d97b3c?q=80&w=2070&auto=format&fit=crop" 
                alt="Amazon Rainforest" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Amazon Restoration</h3>
                <p className="text-gray-700">
                  Working with indigenous communities to restore degraded rainforest areas in the Brazilian Amazon.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1621632361333-4649f0e589d4?q=80&w=2070&auto=format&fit=crop" 
                alt="African Savanna" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">African Woodlands</h3>
                <p className="text-gray-700">
                  Restoring native woodland ecosystems in partnership with local communities in East Africa.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1598985670407-4d1fe5f0b00c?q=80&w=2070&auto=format&fit=crop" 
                alt="Southeast Asian Forest" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Asian Forests</h3>
                <p className="text-gray-700">
                  Implementing agroforestry systems and restoring natural forests in Southeast Asia.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-700">Get Involved</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-green-700">Plant Trees</h3>
              <p className="text-gray-700 mb-6">
                Contribute directly to our reforestation efforts by funding tree planting projects.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition duration-300">
                Donate Now
              </button>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-green-700">Volunteer</h3>
              <p className="text-gray-700 mb-6">
                Join our tree planting events and help restore forests in your local area.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition duration-300">
                Sign Up
              </button>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-green-700">Partner With Us</h3>
              <p className="text-gray-700 mb-6">
                Explore partnership opportunities for large-scale reforestation projects.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition duration-300">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Reforestation Mission</h2>
          <p className="text-xl mb-8">
            Together, we can restore forests and create a more sustainable future for all.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
              Start Now
            </button>
            <button className="bg-transparent hover:bg-green-800 border-2 border-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReforestationPlantation;