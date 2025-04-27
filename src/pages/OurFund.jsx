import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const OurFund = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-green-700 h-80"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/2 p-12">
                <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
                  EarthXcall Conservation Fund
                </h1>
                <p className="text-gray-600 mb-8">
                  Our fund supports critical conservation projects around the world, focusing on areas with high biodiversity and carbon storage potential.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="group bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center">
                    Contribute Today
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="bg-white border border-green-600 text-green-600 hover:bg-green-50 font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1565063407996-926fcec9b233?w=800&auto=format&fit=crop&q=80" 
                  alt="Conservation efforts" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fund Information */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-green-700 mb-4">How Our Fund Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We allocate resources strategically to support high-impact conservation initiatives with measurable outcomes.
            </p>
            <div className="w-20 h-1 bg-green-600 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Project Selection",
                description: "We identify and evaluate conservation projects based on scientific criteria, biodiversity impact, and community benefits."
              },
              {
                title: "Resource Allocation",
                description: "Funds are distributed to maximize conservation impact while ensuring sustainable project implementation."
              },
              {
                title: "Monitoring & Evaluation",
                description: "We track project progress and outcomes to ensure effectiveness and accountability."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-green-50"
              >
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-green-700 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 bg-green-700 text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-green-50 max-w-3xl mx-auto">
              Since our founding, our fund has supported conservation efforts with significant measurable outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "5M+", label: "Trees Planted" },
              { value: "25K", label: "Hectares Protected" },
              { value: "50+", label: "Projects Funded" },
              { value: "120K+", label: "Tons CO₂ Sequestered" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              >
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-green-50">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-700 mb-4">Join Us Today</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Your contribution to the EarthXcall Conservation Fund helps protect critical ecosystems and combat climate change.
            </p>
            <button className="group bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center mx-auto">
              Make a Contribution
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurFund;