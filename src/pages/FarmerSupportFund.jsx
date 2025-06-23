import React, { useState } from "react";
import { motion } from "framer-motion";
import FarmerSupportDonation from "../components/FarmerSupportDonation";

const FarmerSupportFund = () => {
  const [currency] = useState({
    symbol: "$",
    code: "USD",
    amounts: [10, 20, 50, 100],
  });
  const [selectedAmount, setSelectedAmount] = useState(10);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("oneTime");

  // Handle amount selection
  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  // Handle custom amount input
  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  // Handle donation submission
  const handleDonate = () => {
    const donationAmount = customAmount || selectedAmount;
    if (!donationAmount) {
      alert("Please select or enter a donation amount");
      return;
    }
    alert(
      `Thank you for your ${
        donationType === "oneTime" ? "one-time" : "monthly"
      } donation of $${donationAmount}!`
    );
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Support Our Farmers!
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Empowering farmers through sustainable agriculture and community
            development
          </p>
        </div>

        <FarmerSupportDonation />
      </header>

      {/* About the Fund Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-700">
                About the Farmer Support Fund
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                The EarthXcall Farmer Support Fund is dedicated to supporting
                small-scale farmers who are implementing sustainable
                agricultural practices and agroforestry systems.
              </p>
              <p className="text-lg text-gray-700">
                We provide financial resources, technical training, and market
                access to help farmers transition to regenerative farming
                methods that restore soil health, increase biodiversity, and
                sequester carbon while improving their livelihoods.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-700">
            How It Works
          </h2>
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
                We identify and partner with small-scale farmers who are
                committed to sustainable practices and have the potential for
                significant environmental impact.
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
                We provide financial support, seeds, tools, and training to help
                farmers implement agroforestry systems and regenerative
                practices.
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
                We provide continuous technical assistance, monitor progress,
                and help farmers access markets for their sustainably produced
                goods.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-700">
            Impact Stories
          </h2>
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
                  "With support from the Farmer Support Fund, I've transformed
                  my 2-acre plot into a thriving agroforestry system. My income
                  has increased by 40%, and I'm now teaching other farmers in my
                  community."
                </p>
                <p className="text-gray-600 italic">
                  - Maria Njeri, Small-scale Farmer
                </p>
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
                <h3 className="text-xl font-bold mb-3">
                  Carlos's Story: Colombia
                </h3>
                <p className="text-gray-700 mb-4">
                  "The training and resources from EarthXcall helped me
                  transition from conventional coffee farming to a diverse
                  agroforestry system. My soil is healthier, and I'm less
                  vulnerable to climate impacts."
                </p>
                <p className="text-gray-600 italic">
                  - Carlos Mendez, Coffee Farmer
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Options Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-700">
            Ways to Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-green-700">
                One-time Donation
              </h3>
              <p className="text-gray-700 mb-6">
                Make a direct impact with a one-time contribution to support
                farmers in our network.
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
              <h3 className="text-xl font-bold mb-4 text-green-700">
                Monthly Giving
              </h3>
              <p className="text-gray-700 mb-6">
                Become a sustaining supporter with a monthly contribution to
                provide ongoing assistance.
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
              <h3 className="text-xl font-bold mb-4 text-green-700">
                Corporate Partnership
              </h3>
              <p className="text-gray-700 mb-6">
                Partner with us to support farmers while meeting your
                sustainability goals.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Supporting Sustainable Agriculture
          </h2>
          <p className="text-xl mb-8">
            Your contribution to the Farmer Support Fund helps create a more
            sustainable and equitable food system.
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
