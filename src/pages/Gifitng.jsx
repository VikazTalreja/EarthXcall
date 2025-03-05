import React from "react";
import { motion } from "framer-motion";

const GiftingPage = () => {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <div className="h-[500px] bg-black">
      <div className="relative bg-green-300 h-[500px] flex flex-col items-center justify-center p-6 overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-200 opacity-60"></div>
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl z-10"
        >
          <h1 className="text-4xl font-extrabold text-white">GIFT TREES</h1>
          <p className="italic text-lg mt-2 text-white">ONE DOLLAR PLANTS A TREE</p>
          <p className="mt-4 text-sm leading-relaxed text-white max-w-2xl mx-auto">
            Gifting a tree is a meaningful way to support reforestation and sustainability. Your donation will help restore forests, create jobs, and improve the environment.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow-lg hover:bg-green-600 hover:text-white"
          >
            Donate Now
          </motion.button>
        </motion.div>
      </div>
      </div>

      {/* Gift Form */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 max-w-3xl mx-auto shadow-lg rounded-xl mt-10"
      >
        <h2 className="text-2xl font-semibold text-center">GIVE THE GIFT OF TREES!</h2>
        <p className="text-center text-gray-600 mt-2">Scroll through the checkout options & personalize your gift.</p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium">Recipient's Name</label>
            <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400" placeholder="Enter name" />
          </div>
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400" placeholder="e.g., Happy Birthday!" />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400" placeholder="Type a message here..." rows="3"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium">Delivery Date</label>
            <input type="date" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400" />
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border px-5 py-2 rounded-lg text-green-600 border-green-500 hover:bg-green-500 hover:text-white"
          >
            SHOW PREVIEW
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-red-600"
          >
            PLANT TREES
          </motion.button>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold">WHY GIFT A TREE?</h2>
        <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
          Trees are essential for life. They combat climate change, protect wildlife, and improve air quality. By gifting a tree, you contribute to a greener planet and a better future for generations to come.
        </p>
        <div className="flex flex-wrap justify-center gap-6 p-6">
          {["Quality Projects", "Community & Social Benefits", "Wildlife Protection", "Climate Change Resilience"].map((benefit, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.1 }}
              className="bg-white p-6 shadow-lg rounded-xl w-64 text-center border border-green-400"
            >
              <p className="text-md font-medium text-green-700">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiftingPage;
