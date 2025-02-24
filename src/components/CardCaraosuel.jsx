import { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


export default function CardCarousel({ data }) {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
      }, 100000);
      return () => clearInterval(interval);
    }, [data]);
  
    const prevIndex = index === 0 ? null : index - 1;
    const nextIndex = index === data.length - 1 ? null : index + 1;
  
    return (
      <div className="flex items-center justify-center">
        <div className="max-w-7xl w-full flex flex-row items-center space-x-20 text-white p-6">
          {/* Image Section */}
          <div className="relative w-[550px]  aspect-[16/9] flex justify-center">
            <AnimatePresence>
              {/* Previous Image Background (If Exists) */}
              {prevIndex !== null && (
                <motion.div
                  key={`bg-prev-${prevIndex}`}
                  className="absolute w-full h-full rounded-xl shadow-lg"
                  initial={{ opacity: 0, x: -20, rotate: 6 }}
                  animate={{ opacity: 0.5, x: 0, rotate: 6 }}
                  exit={{ opacity: 0, x: -20, rotate: 6 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{
                    backgroundImage: `url(${data[prevIndex].image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(2px)",
                  }}
                />
              )}
  
              {/* Next Image Background (If Exists) */}
              {nextIndex !== null && (
                <motion.div
                  key={`bg-next-${nextIndex}`}
                  className="absolute w-full h-full rounded-xl shadow-lg"
                  initial={{ opacity: 0, x: 20, rotate: -6 }}
                  animate={{ opacity: 0.5, x: 0, rotate: -6 }}
                  exit={{ opacity: 0, x: 20, rotate: -6 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{
                    backgroundImage: `url(${data[nextIndex].image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(2px)",
                  }}
                />
              )}
            </AnimatePresence>
  
            {/* Main Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={data[index].id}
                src={data[index].image}
                alt={data[index].name}
                className="w-full h-full rounded-xl object-cover relative shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>
  
          {/* Text Content */}
          <div className="max-w-lg">
            <h3 className="text-3xl font-bold text-green-800">{data[index].name}</h3>
            <p className="mt-3 text-lg text-gray-800">{data[index].text}</p>
            <p className="text-sm text-gray-400">QuickFact : {data[index].quickfact}</p>
  
            {/* Navigation Buttons */}
            <div className="flex space-x-3 mt-4">
              <button
                onClick={() => setIndex((prev) => (prev === 0 ? prev : prev - 1))}
                className={`p-2 rounded-full transition ${
                  prevIndex === null ? "bg-gray-500 cursor-not-allowed" : "bg-gray-700 hover:bg-green-600"
                }`}
                disabled={prevIndex === null}
              >
               <FaArrowLeft /> 
              </button>
              <button
                onClick={() => setIndex((prev) => (prev === data.length - 1 ? prev : prev + 1))}
                className={`p-2 rounded-full transition ${
                  nextIndex === null ? "bg-gray-500 cursor-not-allowed" : "bg-gray-700 hover:bg-green-600"
                }`}
                disabled={nextIndex === null}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  