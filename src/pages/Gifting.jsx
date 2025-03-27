import React from "react";
import { motion } from "framer-motion";

const Gifting = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 font-sans min-h-screen pb-16">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1516571137133-1be29e37143a?q=80&w=2074&auto=format&fit=crop&fm=webp" 
          alt="Forest Sunrise" 
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-full flex flex-col items-center justify-center p-6 text-center z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">GIFT TREES</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="italic text-xl md:text-2xl mb-4 text-white font-light">ONE DOLLAR PLANTS A TREE</p>
          <p className="mt-4 text-md md:text-lg leading-relaxed text-white max-w-2xl mx-auto">
            Gifting a tree is a meaningful way to support reforestation and sustainability. Your donation will help restore forests, create jobs, and improve the environment.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-xl hover:bg-green-700 transition-all duration-300 text-lg"
          >
            Donate Now
          </motion.button>
        </motion.div>
      </div>

      {/* Gift Form */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white p-10 max-w-3xl mx-auto shadow-2xl rounded-xl mt-16 relative z-20 border-t-4 border-green-500"
      >
        <h2 className="text-3xl font-bold text-center text-green-800">GIVE THE GIFT OF TREES!</h2>
        <p className="text-center text-gray-600 mt-3 mb-8">Scroll through the checkout options & personalize your gift.</p>

        <div className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Recipient's Name</label>
            <input type="text" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all" placeholder="Enter name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input type="text" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all" placeholder="e.g., Happy Birthday!" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all" placeholder="Type a message here..." rows="3"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Date</label>
            <input type="date" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all" />
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-between gap-4">
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="border-2 px-6 py-3 rounded-lg text-green-600 border-green-500 hover:bg-green-50 transition-colors font-medium"
          >
            SHOW PREVIEW
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition-colors font-medium"
          >
            PLANT TREES
          </motion.button>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <div className="mt-20 text-center px-4">
        <h2 className="text-3xl font-bold text-green-800 mb-6">WHY GIFT A TREE?</h2>
        <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
        <img 
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80&fm=webp" 
          alt="Nature" 
          loading="lazy"
          decoding="async"
          className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mb-12"
        />
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12">
          Trees are essential for life. They combat climate change, protect wildlife, and improve air quality. By gifting a tree, you contribute to a greener planet and a better future for generations to come.
        </p>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 p-6 max-w-5xl mx-auto">
          {[
            {title: "Quality Projects", icon: "🌱"},
            {title: "Community Benefits", icon: "👥"},
            {title: "Wildlife Protection", icon: "🦋"},
            {title: "Climate Resilience", icon: "🌍"}
          ].map((benefit, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 shadow-lg rounded-xl w-full md:w-64 text-center border-t-4 border-green-500 hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <p className="text-lg font-semibold text-green-800">{benefit.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gifting;