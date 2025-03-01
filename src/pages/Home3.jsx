import React from 'react';

export default function Home() {
  return (
    <div className="w-full m mx-auto h-full bg-purple-400">
      {/* Hero Section */}
     <div className="max-w-7xl h-[70vh] w-full mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
               {/* Left Section */}
               <div className="flex flex-col max-w-2xl text-center md:text-left">
                 <h1 className="text-xl md:text-4xl font-bold text-emerald-900 leading-snug">
                   The science is clear—we can solve the interconnected crises of
                   climate change and biodiversity loss.
                 </h1>
                 <p className="text-gray-700 text-xs md:text-sm mt-4">
                   Based on groundbreaking science, One Earth developed a powerful
                   Solutions Framework that provides a roadmap to stop climate change
                   and protect biodiversity. The solutions are readily available,
                   science-based, and fall under three pillars of collective action.
                 </p>
                 <button className="mt-6 px-6 py-3 w-48 bg-emerald-800 text-white font-semibold rounded-lg hover:bg-green-600 transition">
                   Explore Solutions
                 </button>
               </div>
     
               {/* Right Section */}
               <div className="flex items-center">
                 <img
                   src={backgroundImage}
                   alt="Background"
                   className="max-w-md md:max-w-2xl  object-contain rounded-lg "
                 />
               </div>
             </div>
     
      
      {/* Info Grid */}
      <section className="bg-gray-100 text-center  px-6">
        <h2 className="text-2xl font-semibold">Our Values: About Sustainability, Innovation, and Dedication</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
              <div className="h-40 bg-gray-300 mb-4"></div>
              <h3 className="font-semibold">Card Title {index + 1}</h3>
              <p className="text-gray-600">Short description of the feature or value.</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Text and Image Sections */}
      <section className="py-16 px-6 grid md:grid-cols-2 gap-8">
        <div className="bg-gray-300 h-64"></div>
        <div>
          <h2 className="text-2xl font-semibold">An Eco-Focused Simple Way to Make a Global Impact</h2>
          <p className="text-gray-600 mt-4">Description of how users can participate in sustainability efforts.</p>
        </div>
      </section>
      
      <section className="py-16 px-6 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold">Utilizing the Power of Nature</h2>
          <p className="text-gray-600 mt-4">How innovation and technology drive sustainability.</p>
        </div>
        <div className="bg-gray-300 h-64"></div>
      </section>
    </div>
  );
}
