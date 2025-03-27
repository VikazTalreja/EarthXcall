import React, { useState } from 'react';
import { motion } from 'framer-motion';

const UrbanForestry = () => {
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
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop&fm=webp"
          alt="Urban forestry background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-2xl text-white mt-20 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Plant trees for Urban Forestry!</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">Planting trees in cities for healthier communities and a greener future</p>
        </div>

        {/* Donation Panel */}
        <div className="relative z-10 bg-[#F1F0E9] p-6 md:p-8 rounded-lg shadow-xl w-full md:w-[420px] self-center md:self-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">URBAN FORESTRY ACTION FUND</h2>
          <p className="text-xs uppercase tracking-wider text-gray-600 mb-4">TOGETHER, PLANTING URBAN TREES</p>
          <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
            The Urban Forestry Action Fund works to ensure environmental justice by providing funding to a diverse mix of city-centered projects around the world. Support Urban Forestry today!
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

      {/* Rest of the sections remain unchanged */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-green-700">Why Urban Forestry?</h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto">
            Urban forestry focuses on the care and management of trees in urban settings for the purpose of improving the urban environment. 
            Urban forests help filter air and water, control storm water, conserve energy, and provide animal habitat and shade.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-700">Creating Greener Cities</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our Urban Forestry Initiative works to increase tree coverage in cities, creating healthier environments for urban communities while combating climate change.
              </p>
              <p className="text-lg text-gray-700">
                Through strategic partnerships with municipalities, community organizations, and local residents, we're transforming urban landscapes into thriving green spaces.
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1575783970733-1aaedde1db74?q=80&w=2076&auto=format&fit=crop&fm=webp" 
                alt="Urban tree planting" 
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-700">Benefits of Urban Forests</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-green-700">Improved Air Quality</h3>
              <p className="text-gray-700">
                Urban trees filter air pollutants, improving air quality and reducing respiratory health issues in cities. One acre of forest absorbs six tons of carbon dioxide and puts out four tons of oxygen.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-green-700">Temperature Regulation</h3>
              <p className="text-gray-700">
                Trees provide natural cooling through shade and evapotranspiration, reducing urban heat island effects. Urban neighborhoods with mature trees can be up to 10°F cooler than treeless areas.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-green-700">Community Well-being</h3>
              <p className="text-gray-700">
                Access to urban green spaces improves mental health, reduces stress levels, and creates stronger community bonds. Studies show neighborhoods with trees have lower crime rates.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Where We Plant Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-700">Where We Plant</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1624880357913-a8539238245b?w=1200&auto=format&fit=crop&fm=webp&q=80" 
                alt="Street trees" 
                className="w-full h-64 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">City Streets & Parks</h3>
                <p className="text-gray-700">
                  Working with cities to plant and maintain street trees, creating green corridors throughout urban areas and enhancing public parks for community enjoyment.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1558441440-d4111d18d48f?q=80&w=2070&auto=format&fit=crop&fm=webp" 
                alt="Community garden" 
                className="w-full h-64 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Underserved Neighborhoods</h3>
                <p className="text-gray-700">
                  Focusing on historically underserved neighborhoods to increase tree equity and ensure all communities have access to the benefits of urban forests.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 px-4 bg-green-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6"
            >
              <div className="text-5xl font-bold mb-2">10K+</div>
              <p className="text-xl">Trees Planted</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6"
            >
              <div className="text-5xl font-bold mb-2">15+</div>
              <p className="text-xl">Cities Served</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6"
            >
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-xl">Volunteers</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-6"
            >
              <div className="text-5xl font-bold mb-2">30+</div>
              <p className="text-xl">Local Partners</p>
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
                Support our urban forestry initiatives by funding tree planting in cities across the country.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition duration-300">
                Donate
              </button>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-green-700">Volunteer</h3>
              <p className="text-gray-700 mb-6">
                Join our tree planting events and help maintain urban forests in your community.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition duration-300">
                Sign Up
              </button>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-green-700">Corporate Partnerships</h3>
              <p className="text-gray-700 mb-6">
                Explore partnership opportunities for large-scale urban greening projects and employee engagement.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition duration-300">
                Partner With Us
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Help Create Greener Cities</h2>
          <p className="text-xl mb-8">
            One tree planted in an urban area can make a significant difference. Join us in transforming urban spaces into thriving green environments.
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

export default UrbanForestry;