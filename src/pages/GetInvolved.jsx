import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GetInvolved = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownData = [
    {
      title: "Our Funds",
      options: [
        { name: "Farmer Support Fund", link: "/our-fund/farmer-support-fund" },
        { name: "Women's Empowerment Fund", link: "/our-fund/women-empowerment-fund" },
        { name: "Reforestation Plantation", link: "/our-fund/reforestation-plantation" },
        { name: "Urban Forestry", link: "/our-fund/urban-forestry" }
      ]
    },
    {
      title: "Philanthropy",
      link: "/philanthropic",
      onClick: () => {
        window.location.href = "/philanthropic";
      }
    },
    {
      title: "Corporate Sustainability",
      link: "/corporate-sustainability"
    }
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const renderDropdownContent = (dropdown) => {
    if (!dropdown.options) {
      return (
        <Link 
          to={dropdown.link} 
          className="block px-4 py-2 text-[#0D4715] hover:bg-gray-50 transition-colors"
        >
          <div className="flex justify-between items-center">
            <span>Learn More</span>
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      );
    }

    return dropdown.options.map((option, optionIndex) => (
      <Link
        key={optionIndex}
        to={option.link}
        className="block px-4 py-2 text-[#0D4715] hover:bg-gray-50"
      >
        {option.name}
      </Link>
    ));
  };

  return (
    <div className="bg-green-100 min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-8">
          Get Involved
        </h1>
        
        {dropdownData.map((dropdown, index) => (
          <div 
            key={index} 
            className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
            >
              <span className="text-lg font-medium text-[#0D4715]">
                {dropdown.title}
              </span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  openDropdown === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </button>
            
            {openDropdown === index && (
              <div className="border-t">
                {renderDropdownContent(dropdown, index)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetInvolved;