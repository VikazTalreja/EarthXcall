import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCross, FaWindowClose } from "react-icons/fa";

const SubscribeForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Delay form appearance after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Subscription Form Modal */}
      {isVisible && !isMinimized && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-10 right-10 bg-white shadow-xl rounded-lg p-6 w-[300px] h-[500px] border border-gray-200"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMinimized(true)}
            className="absolute top-2 right-2 text-green-800 hover:text-gray-900 text-lg"
          >
            <FaWindowClose />
          </button>

          <h3 className="text-xl font-bold text-green-700 mb-4 text-center">
            Join the EarthXcall Community
          </h3>
          <form className="flex flex-col gap-4">
            {/* First & Last Name */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 px-3 py-2 border rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 px-3 py-2 border rounded-md"
                required
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 border rounded-md"
              required
            />

            {/* Zip Code */}
            <input
              type="text"
              placeholder="Zip Code"
              className="px-3 py-2 border rounded-md"
              required
            />

            {/* Opt-in Checkbox */}
            <label className="flex items-center text-sm text-gray-700">
              <input type="checkbox" className="mr-2" /> Opt-in for Email Newsletter
            </label>

            {/* Privacy Policy Notice */}
            <p className="text-xs text-gray-500 text-center">
              Check out our{" "}
              <a href="#" className="text-green-600 underline">
                privacy policy
              </a>{" "}
              for details on how we collect and manage your submitted data.
            </p>

            {/* Subscribe Button */}
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      )}

      {/* Mini Banner when Minimized */}
      {isVisible && isMinimized && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-5 left-[90%] transform z-10 -translate-x-1/2 bg-green-600 text-white py-3 px-6 rounded-full shadow-lg cursor-pointer whitespace-nowrap"
          onClick={() => setIsMinimized(false)}
        >
          🌱 Join Our Community
        </motion.div>
      )}
    </>
  );
};

export default SubscribeForm;
