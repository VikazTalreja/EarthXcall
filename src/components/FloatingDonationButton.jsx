import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const FloatingDonateButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.button 
        className="fixed bottom-6 right-6 bg-green-700 text-white px-5 py-3 rounded-full shadow-lg font-bold text-lg hover:bg-green-800 transition"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={() => setIsOpen(true)}
      >
        Donate 🌱
      </motion.button>

      {/* Donation Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-green-700">Make a Donation</h2>
              <FaTimes className="cursor-pointer text-gray-600" onClick={() => setIsOpen(false)} />
            </div>
            <p className="text-gray-600 mt-2">
              Your contribution helps plant trees and restore forests worldwide.
            </p>
            <div className="flex flex-col mt-4 space-y-3">
              <button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">
                Donate $10
              </button>
              <button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">
                Donate $25
              </button>
              <button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">
                Donate $50
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default FloatingDonateButton;
