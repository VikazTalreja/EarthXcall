import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { stories as blogData } from '../data/StoriesData';
import { ChevronLeft, ChevronRight, Calendar, Clock, User } from 'lucide-react';

const StoryCard = ({ blog, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link to={`/news/stories-post/${blog.id}`} className="block h-full">
        <div className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform transition-all duration-300 cursor-pointer h-full border border-green-50">
          {/* Image */}
          <div className="relative w-full h-56 overflow-hidden">
            <img
              src={blog.posterImage}
              alt={blog.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 bg-green-600 text-white px-3 py-1 text-sm font-medium">
              Featured
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-5 flex flex-col">
            {/* Category */}
            <div className="mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-green-700 bg-green-50 px-2 py-1 rounded-full">
                {blog.category || 'Conservation'}
              </span>
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-800 line-clamp-2 mb-3 hover:text-green-700 transition-colors">
              {blog.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-4 line-clamp-3">{blog.description || "Explore this inspiring story about environmental conservation and community engagement."}</p>

            {/* Space for pushing footer to bottom */}
            <div className="flex-1" />

            {/* author and date section */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center text-sm text-gray-600">
                <User size={14} className="mr-1 text-green-600" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar size={14} className="mr-1 text-green-600" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock size={14} className="mr-1 text-green-600" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const EarthStories = () => {
  // Pagination state: 9 cards per page
  const cardsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogData.length / cardsPerPage);
  
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = blogData.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header Section */}
      <header className="relative h-[400px] bg-cover bg-center">
        <img 
          src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1920&h=600&auto=format&fit=crop"
          alt="Forest landscape" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              Earth Stories
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-green-50">
              Discover inspiring tales of reforestation projects, conservation efforts, and community initiatives that are healing our planet.
            </p>
            <div className="mt-6">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30">
                {blogData.length} Stories to Explore
              </span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Blog Cards Section */}
      <main className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentCards.map((blog, index) => (
            <StoryCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center items-center mt-12 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="w-12 h-12 flex justify-center items-center bg-green-600 text-white rounded-full cursor-pointer hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === 1}
          >
            <ChevronLeft size={20}/>
          </button>
          <div className="text-gray-700 bg-white px-6 py-2 rounded-full shadow-sm border border-green-100">
            Page {currentPage} of {totalPages}
          </div>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="w-12 h-12 flex justify-center items-center bg-green-600 text-white rounded-full cursor-pointer hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === totalPages}
          >
            <ChevronRight size={20}/>
          </button>
        </div>
      </main>
    </div>
  );
};

export default EarthStories;
