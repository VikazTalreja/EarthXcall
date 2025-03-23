import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Heart, Search } from "lucide-react";

const products = [
  { id: 1, name: "Cacti Plant", price: "19.99", img: "/assets/img/product1.png", rating: 4.5 },
  { id: 2, name: "Cactus Plant", price: "11.99", img: "/assets/img/product2.png", rating: 4.2 },
  { id: 3, name: "Aloe Vera Plant", price: "7.99", img: "/assets/img/product3.png", rating: 4.8 },
  { id: 4, name: "Succulent Plant", price: "5.99", img: "/assets/img/product4.png", rating: 4.0 },
  { id: 5, name: "Succulent Plant", price: "10.99", img: "/assets/img/product5.png", rating: 4.3 },
  { id: 6, name: "Green Plant", price: "98.99", img: "./assets/forest-background.jpg", rating: 4.7 },
];

const ProductCard = ({ product }) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl p-6 text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
    >
      <div className="absolute top-4 right-4 space-y-2">
        <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm hover:bg-white hover:shadow-md transition-all duration-300">
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
        <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm hover:bg-white hover:shadow-md transition-all duration-300">
          <Search className="w-5 h-5 text-gray-600 hover:text-green-600 transition-colors" />
        </button>
      </div>
      
      <div className="relative mb-6 transform group-hover:scale-105 transition-transform duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/80 to-green-50/50 rounded-full -z-10 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
        <img src={product.img} alt={product.name} className="mx-auto w-40 h-40 object-contain" />
      </div>
      
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors">{product.name}</h3>
        <div className="flex items-center justify-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-sm text-gray-500">({product.rating})</span>
        </div>
        <div className="text-xl font-bold text-green-600">${product.price}</div>
        <button className="w-full bg-green-600 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-green-700 transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          <ShoppingBag className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </motion.article>
  );
};

const ProductPage = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-700 to-green-500 text-transparent bg-clip-text"
          >
            Discover Our Collection
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Explore our carefully curated selection of premium plants. Each one is nurtured with expertise 
            and ready to bring natural beauty to your space.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Load More Products
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
