import React from 'react';


export function SolutionCard({ title, description, image, category, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
            {icon && <span className="mr-2">{icon}</span>}
            {category}
          </span>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
