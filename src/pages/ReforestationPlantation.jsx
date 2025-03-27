import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ReforestationPlantation = () => {
  const [currency, setCurrency] = useState({
    symbol: '₹',
    code: 'INR',
    amounts: [5, 20, 50, 100]
  });

  const currencies = {
    INR: { symbol: '₹', amounts: [5, 20, 50, 100] },
    USD: { symbol: '$', amounts: [1, 5, 10, 20] },
    EUR: { symbol: '€', amounts: [1, 5, 10, 20] }
  };

  const handleCurrencyChange = (e) => {
    const selectedCurrency = e.target.value;
    setCurrency({
      symbol: currencies[selectedCurrency].symbol,
      code: selectedCurrency,
      amounts: currencies[selectedCurrency].amounts
    });
  };

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <header className="relative min-h-[800px] bg-green-700 bg-cover bg-center flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-12">
        <img 
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop&fm=webp"
          alt="Reforestation background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/50"></div>
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
            {currency.amounts.slice(0, 3).map((amount, index) => (
              <button key={index} className={`${index === 1 ? 'bg-[#98A4AE] hover:bg-[#7A8793] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'} font-bold py-2 px-3 rounded text-sm`}>
                {currency.symbol}{amount}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="bg-white hover:bg-gray-100 text-gray-700 font-bold py-2 px-3 rounded border border-gray-300 text-sm">
              {currency.symbol}{currency.amounts[3]}
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-700 font-bold py-2 px-3 rounded border border-gray-300 text-sm">
              Other
            </button>
          </div>

          <div className="flex items-center mb-6 bg-white rounded border border-gray-300">
            <div className="flex-1 flex items-center px-3">
              <span className="text-gray-700 text-sm mr-2">{currency.symbol}</span>
              <input 
                type="number" 
                className="w-full outline-none text-sm py-2"
                placeholder="20"
              />
            </div>
            <div className="relative">
              <select 
                className="appearance-none bg-transparent border-l border-gray-300 py-2 px-3 pr-8 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 focus:outline-none"
                value={currency.code}
                onChange={handleCurrencyChange}
              >
                <option>INR</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                </svg>
              </div>
            </div>
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
            {/* Impact Metrics Section Images */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=2088&auto=format&fit=crop&fm=webp" 
                alt="Tree planting" 
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
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
                src="https://images.unsplash.com/photo-1535913989690-f90e1c2d4cfa?w=800&auto=format&fit=crop&fm=webp"
                alt="Amazon Rainforest"
                className="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
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
                src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&auto=format&fit=crop&fm=webp"
                alt="African Savanna"
                className="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
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
                src="https://images.unsplash.com/photo-1596005554384-d293674c91d7?w=800&auto=format&fit=crop&fm=webp"
                alt="Southeast Asian Forest"
                className="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
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