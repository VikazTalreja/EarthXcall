import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FarmerSupportFund = () => {
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
      <header className="relative min-h-[800px] bg-green-700 flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-12">
        <img 
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop&fm=webp"
          alt="Farmer support background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-2xl text-white mt-20 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Support Our Farmers!</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">Empowering farmers through sustainable agriculture and community development</p>
        </div>

        {/* Donation Panel */}
        <div className="relative z-10 bg-[#F1F0E9] p-6 md:p-8 rounded-lg shadow-xl w-full md:w-[420px] self-center md:self-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">FARMER SUPPORT FUND</h2>
          <p className="text-xs uppercase tracking-wider text-gray-600 mb-4">TOGETHER, SUPPORTING FARMERS</p>
          <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
            The Farmer Support Fund works to ensure sustainable agriculture by providing funding and resources to farming communities around the world. Support our farmers today!
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

      {/* About the Fund Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-700">About the Farmer Support Fund</h2>
              <p className="text-lg text-gray-700 mb-6">
                The EarthXcall Farmer Support Fund is dedicated to supporting small-scale farmers who are implementing sustainable agricultural practices and agroforestry systems.
              </p>
              <p className="text-lg text-gray-700">
                We provide financial resources, technical training, and market access to help farmers transition to regenerative farming methods that restore soil health, increase biodiversity, and sequester carbon while improving their livelihoods.
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop&fm=webp" 
                alt="Sustainable farming" 
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-700">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-4xl font-bold text-green-700 mb-4">01</div>
              <h3 className="text-xl font-bold mb-4">Farmer Selection</h3>
              <p className="text-gray-700">
                We identify and partner with small-scale farmers who are committed to sustainable practices and have the potential for significant environmental impact.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-4xl font-bold text-green-700 mb-4">02</div>
              <h3 className="text-xl font-bold mb-4">Resource Provision</h3>
              <p className="text-gray-700">
                We provide financial support, seeds, tools, and training to help farmers implement agroforestry systems and regenerative practices.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-4xl font-bold text-green-700 mb-4">03</div>
              <h3 className="text-xl font-bold mb-4">Ongoing Support</h3>
              <p className="text-gray-700">
                We provide continuous technical assistance, monitor progress, and help farmers access markets for their sustainably produced goods.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-700">Impact Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?q=80&w=2070&auto=format&fit=crop&fm=webp" 
                alt="Farmer in Kenya" 
                className="w-full h-64 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Maria's Story: Kenya</h3>
                <p className="text-gray-700 mb-4">
                  "With support from the Farmer Support Fund, I've transformed my 2-acre plot into a thriving agroforestry system. My income has increased by 40%, and I'm now teaching other farmers in my community."
                </p>
                <p className="text-gray-600 italic">- Maria Njeri, Small-scale Farmer</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop&fm=webp" 
                alt="Farmer in Colombia" 
                className="w-full h-64 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Carlos's Story: Colombia</h3>
                <p className="text-gray-700 mb-4">
                  "The training and resources from EarthXcall helped me transition from conventional coffee farming to a diverse agroforestry system. My soil is healthier, and I'm less vulnerable to climate impacts."
                </p>
                <p className="text-gray-600 italic">- Carlos Mendez, Coffee Farmer</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Options Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-700">Ways to Support</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-green-700">One-time Donation</h3>
              <p className="text-gray-700 mb-6">
                Make a direct impact with a one-time contribution to support farmers in our network.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition duration-300">
                Donate
              </button>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-green-700">Monthly Giving</h3>
              <p className="text-gray-700 mb-6">
                Become a sustaining supporter with a monthly contribution to provide ongoing assistance.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition duration-300">
                Subscribe
              </button>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-green-700">Corporate Partnership</h3>
              <p className="text-gray-700 mb-6">
                Partner with us to support farmers while meeting your sustainability goals.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Supporting Sustainable Agriculture</h2>
          <p className="text-xl mb-8">
            Your contribution to the Farmer Support Fund helps create a more sustainable and equitable food system.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
              Donate Now
            </button>
            <button className="bg-transparent hover:bg-green-800 border-2 border-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FarmerSupportFund;