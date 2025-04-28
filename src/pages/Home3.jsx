import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  // Define images for a more premium look
  const heroImage = "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1950&auto=format&fit=crop";
  const cardImages = [
    "https://images.unsplash.com/photo-1590402396518-e2a879d0ec64?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1625641960693-8cb5685ae5c2?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1552083375-1447ce886485?w=500&auto=format&fit=crop&q=80"
  ];
  const section1Image = "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&auto=format&fit=crop&q=80";
  const section2Image = "https://images.unsplash.com/photo-1470137237906-d8a4f71e1966?w=800&auto=format&fit=crop&q=80";

  return (
    <div className="w-full mx-auto bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-cover bg-center">
        <img 
          src={heroImage}
          alt="Forest landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-40 flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white z-10"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Healing Our Planet Together
            </h1>
            <p className="text-lg md:text-xl text-green-50 mb-8">
              The science is clear—we can solve the interconnected crises of
              climate change and biodiversity loss through collective action.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="group bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#f9fafb" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Our Values Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in sustainability, innovation, and dedication to protect and restore our planet's ecosystems.
            </p>
            <div className="w-20 h-1 bg-green-600 mx-auto mt-6"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Sustainability", description: "We are committed to creating long-term environmental solutions that benefit both people and planet." },
              { title: "Innovation", description: "We leverage cutting-edge science and technology to develop effective approaches to environmental challenges." },
              { title: "Community Impact", description: "We empower local communities to participate in and benefit from conservation efforts." }
            ].map((card, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={cardImages[index]} 
                    alt={card.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-700 mb-2">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* First Text and Image Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src={section1Image} 
                alt="Ecosystem restoration" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-green-700 mb-4">Make a Global Impact</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our simple yet powerful approach allows everyone to participate in global sustainability efforts. Through targeted tree planting, carbon offsetting, and community development, your contribution creates lasting positive change.
              </p>
              <ul className="space-y-3">
                {["Carbon sequestration", "Biodiversity restoration", "Community empowerment", "Sustainable livelihoods"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center">
                Join Our Efforts
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Second Text and Image Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl font-bold text-green-700 mb-4">The Power of Nature</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nature-based solutions are among our most powerful tools to address climate change. By protecting and restoring natural ecosystems, we can harness nature's ability to capture carbon while providing essential benefits to communities.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
                <p className="text-gray-700 italic">
                  "Forests, wetlands, and grasslands have the potential to absorb up to one-third of global carbon emissions annually."
                </p>
              </div>
              <button className="mt-8 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center">
                Learn About Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src={section2Image} 
                alt="Nature's power" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 px-6 bg-green-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl text-green-50 mb-8 max-w-3xl mx-auto">
              Join thousands of individuals and organizations who are taking action to protect and restore our planet.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-green-700 hover:bg-green-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                Get Started Now
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
