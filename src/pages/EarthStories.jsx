import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { stories as blogData } from '../data/StoriesData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const StoryCard = ({ blog }) => {
  return (

    <Link to={`/news/stories-post/${blog.id}`}>
      <div className=" flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition-transform duration-300 cursor-pointer h-full ">
        {/* Image */}
        <div className="w-full h-48 overflow-hidden">
          <img
            src={blog.posterImage}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-4 flex flex-col">
          {/* Title */}
          <h3 className="
            text-lg font-bold text-gray-800 line-clamp-2 ">
            {blog.title}
          </h3>

          {/* Space for pushing   */}
          <div className="flex-1" />

          {/* author and date section */}
          <div className="text-sm text-gray-600">
            <p>by {blog.author}</p>
            <p className="text-xs text-gray-500 mt-1">
              {blog.date} &bull; {blog.readTime}
            </p>
          </div>
        </div>
      </div>
    </Link>
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
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="relative h-80 md:h-96 bg-[url('https://m.media-amazon.com/images/I/71MSUh9EHoL._AC_UF894,1000_QL80_.jpg')] bg-cover bg-center" >
        <div className="absolute inset-0 bg-green-600  opacity-100"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Our Plantation Stories</h1>
          <p className="max-w-2xl text-lg md:text-xl">
            Discover inspiring tales of tree planting, reforestation projects, and community initiatives that nurture our planet.
          </p>
        </div>
      </header>

      {/* Blog Cards Section */}
      <main className="py-10 px-4 md:px-10 ">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentCards.map((blog) => (
            <StoryCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="w-10 h-10 flex justify-center items-center bg-green-600 text-white rounded-full cursor-pointer hover:bg-green-700 transition-colors"
            disabled={currentPage === 1}
          >
              <ChevronLeft size={20}/>
          </button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="w-10 h-10 flex justify-center items-center bg-green-600 text-white rounded-full cursor-pointer hover:bg-green-700 transition-colors"
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
