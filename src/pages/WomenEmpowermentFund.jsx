import React, { useState } from 'react';
import { motion } from 'framer-motion';
import WomensEmpowermentDonation from "../components/WomensEmpowermentDonation"
const WomenEmpowermentFund = () => {
  const [currency] = useState({
    symbol: '$',
    code: 'USD',
    amounts: [10, 20, 50, 100]
  });
  const [selectedAmount, setSelectedAmount] = useState(10);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('oneTime');

  // Handle amount selection
  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  // Handle custom amount input
  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  // Handle donation submission remove it if u dont want it
  const handleDonate = () => {
    const donationAmount = customAmount || selectedAmount;
    if (!donationAmount) {
      alert('Please select or enter a donation amount');
      return;
    }
    alert(`Thank you for your ${donationType === 'oneTime' ? 'one-time' : 'monthly'} donation of $${donationAmount}!`);
  };

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <header className="relative min-h-[800px] bg-green-700 bg-cover bg-center flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-12">
        <img 
          src="https://images.unsplash.com/photo-1611516491426-03025e6043c8?q=80&w=2070&auto=format&fit=crop&fm=webp"
          alt="Women empowerment background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-2xl text-white mt-20 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Support Women's Empowerment!</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">Empowering women through sustainable initiatives and community development</p>
        </div>

      <WomensEmpowermentDonation/>
      </header>

       {/* About the Fund Section */}
       <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-700">About the Women Empowerment Fund</h2>
              <p className="text-lg text-gray-700 mb-6">
                The EarthXcall Women Empowerment Fund is dedicated to supporting women who are leading environmental conservation efforts and sustainable businesses in their communities.
              </p>
              <p className="text-lg text-gray-700">
                We provide financial resources, leadership training, and networking opportunities to help women overcome barriers and become powerful agents of environmental and social change.
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1621352404112-58e2468993a0?q=80&w=2070&auto=format&fit=crop&fm=webp" 
                alt="Women in conservation" 
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-700">Our Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-4xl font-bold text-green-700 mb-4">01</div>
              <h3 className="text-xl font-bold mb-4">Financial Support</h3>
              <p className="text-gray-700">
                We provide grants and microloans to women-led initiatives focused on reforestation, sustainable agriculture, and clean energy projects.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-4xl font-bold text-green-700 mb-4">02</div>
              <h3 className="text-xl font-bold mb-4">Skills Development</h3>
              <p className="text-gray-700">
                We offer training in leadership, business management, and technical skills needed to implement and scale environmental projects.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-4xl font-bold text-green-700 mb-4">03</div>
              <h3 className="text-xl font-bold mb-4">Network Building</h3>
              <p className="text-gray-700">
                We connect women leaders with mentors, peers, and resources to strengthen their impact and create sustainable change in their communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-700">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1541802645635-11f2286a7482?q=80&w=2070&auto=format&fit=crop&fm=webp" 
                alt="Women's cooperative in India" 
                className="w-full h-64 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Priya's Story: India</h3>
                <p className="text-gray-700 mb-4">
                  "With support from the Women Empowerment Fund, I started a cooperative that turns agricultural waste into biofuel. We've created jobs for 30 women and reduced local deforestation by 40%."
                </p>
                <p className="text-gray-600 italic">- Priya Sharma, Entrepreneur</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1596638787647-904d822d751e?q=80&w=2071&auto=format&fit=crop&fm=webp" 
                alt="Community leader in India" 
                className="w-full h-64 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Josephine's Story: Rwanda</h3>
                <p className="text-gray-700 mb-4">
                  "The leadership training and funding helped me expand our community nursery. We now grow seedlings for reforestation projects across the region and provide income for 15 women-headed households."
                </p>
                <p className="text-gray-600 italic">- Josephine Mukamana, Community Leader</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-700">Key Focus Areas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Reforestation</h3>
              <p className="text-gray-700 text-center">
                Supporting women-led tree planting and forest conservation initiatives.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Sustainable Agriculture</h3>
              <p className="text-gray-700 text-center">
                Promoting regenerative farming practices led by women farmers.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Clean Energy</h3>
              <p className="text-gray-700 text-center">
                Supporting women entrepreneurs in renewable energy solutions.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Education</h3>
              <p className="text-gray-700 text-center">
                Funding environmental education programs led by women for their communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Options Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-700">Ways to Support</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-green-700">Donate</h3>
              <p className="text-gray-700 mb-6">
                Make a direct contribution to support women-led environmental initiatives around the world.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition duration-300">
                Apply
              </button>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-green-700">Corporate Partnership</h3>
              <p className="text-gray-700 mb-6">
                Partner with us to support women-led environmental initiatives and meet your sustainability goals.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition duration-300">
                <a href="/our-fund" className="text-white no-underline flex items-center">
                  View All Funds
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </button>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-green-700">Volunteer Program</h3>
              <p className="text-gray-700 mb-6">
                Share your skills and expertise to support women-led environmental projects in your community.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition duration-300">
                Join Now
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-700">Our Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-green-700 mb-4">500+</div>
              <p className="text-lg text-gray-700">Women Leaders Supported</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-green-700 mb-4">35+</div>
              <p className="text-lg text-gray-700">Countries</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-green-700 mb-4">2M+</div>
              <p className="text-lg text-gray-700">Trees Planted</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-green-700 mb-4">150+</div>
              <p className="text-lg text-gray-700">Community Projects</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            By investing in women's leadership in environmental conservation, we're creating lasting change that benefits communities and ecosystems around the world.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Empowering Women Environmental Leaders</h2>
          <p className="text-xl mb-8">
            Your support helps women overcome barriers and lead the way to a more sustainable future.
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

export default WomenEmpowermentFund;