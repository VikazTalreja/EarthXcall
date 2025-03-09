import React from 'react';
import { motion } from 'framer-motion';

const WhyTrees = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <header 
        className="relative h-screen bg-green-900 bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-6" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: 'cover'
        }}>
        {/* <div className="absolute inset-0 bg-green-550 bg-opacity-50"></div> */}
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Why Trees?</h1>
          <p className="text-xl md:text-2xl mb-8">Trees are the most straightforward and cost-effective solution to climate change and biodiversity loss.</p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Plant Trees Now
          </button>
        </div>
      </header>

      {/* Six Pillars Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Six Pillars of Reforestation</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Trees provide tremendous benefits to our everyday lives. They filter clean air, provide fresh drinking water, help curb climate change, and create homes for thousands of species of plants and animals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Air */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <img src="https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Clean Air" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-green-700 mb-3">Air</h3>
              <p className="text-gray-700">
                Trees help clean the air we breathe. Through their leaves and bark, they absorb harmful pollutants and release clean oxygen for us to breathe.
              </p>
            </div>
          </motion.div>

          {/* Water */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop" alt="Clean Water" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-700 mb-3">Water</h3>
              <p className="text-gray-700">
                Trees play a key role in capturing rainwater and reducing the risk of natural disasters like floods and landslides.
              </p>
            </div>
          </motion.div>

          {/* Biodiversity */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <img src="https://images.unsplash.com/photo-1504392022767-a8fc0771f239?q=80&w=1974&auto=format&fit=crop" alt="Biodiversity" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-yellow-700 mb-3">Biodiversity</h3>
              <p className="text-gray-700">
                A single tree can be home to hundreds of species of insect, fungi, moss, mammals, and plants. Forests are key ecosystems for biodiversity.
              </p>
            </div>
          </motion.div>

          {/* Social Impact */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop" alt="Social Impact" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-purple-700 mb-3">Social Impact</h3>
              <p className="text-gray-700">
                From job creation to sustainable farming practices, trees provide for communities in countless ways and are an important part of many cultures.
              </p>
            </div>
          </motion.div>

          {/* Health */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2022&auto=format&fit=crop" alt="Health" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-red-700 mb-3">Health</h3>
              <p className="text-gray-700">
                Trees help reduce stress, anxiety, and allow us to reconnect with nature. Studies show that being around trees improves mental wellbeing.
              </p>
            </div>
          </motion.div>

          {/* Climate */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <img src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=2074&auto=format&fit=crop" alt="Climate" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-teal-700 mb-3">Climate</h3>
              <p className="text-gray-700">
                Trees help cool the planet by sucking in and storing harmful greenhouse gases like carbon dioxide into their trunks, branches, and leaves.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tree Facts Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Amazing Tree Facts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-green-700 mb-4">Did You Know?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>A mature tree can absorb up to 48 pounds of carbon dioxide per year.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>One large tree can provide a day's supply of oxygen for up to four people.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Trees can help reduce stress-related issues and improve mental health.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>The shade from trees can reduce your air conditioning costs by 15-35%.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-green-700 mb-4">Global Impact</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Forests cover 31% of the world's land surface, just over 4 billion hectares.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Tropical forests alone hold more than 210 gigatons of carbon.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>80% of the world's terrestrial biodiversity lives in forests.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>1.6 billion people rely on forests for their livelihoods.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reforestation Process */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Reforestation Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-700">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Project Planning</h3>
              <p className="text-gray-700">We identify reforestation needs and develop detailed project plans with local partners.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-700">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Tree Planting</h3>
              <p className="text-gray-700">Native tree species are planted by experienced teams using best practices.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-700">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Monitoring</h3>
              <p className="text-gray-700">We track growth and survival rates to ensure long-term forest health.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-700">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Impact Reporting</h3>
              <p className="text-gray-700">We document environmental and social benefits for complete transparency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8">
            Join us in our mission to plant trees and restore forests around the world. Every tree counts!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
              Plant Trees Now
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

export default WhyTrees;
