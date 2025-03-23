import React from 'react';
import { Link } from 'react-router-dom';

const FundLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="block px-4 py-2 hover:bg-gray-200"
  >
    {children}
  </Link>
);

const fundItems = [
  { path: "/our-fund/farmer-support-fund", name: "Farmer Support Fund" },
  { path: "/our-fund/women-empowerment-fund", name: "Women's Empowerment Fund" },
  { path: "/our-fund/reforestation-plantation", name: "Reforestation Plantation" },
  { path: "/our-fund/urban-forestry", name: "Urban Forestry" }
];

const OurFund = () => {
  return (
    <div className="relative group">
      {/* Submenu Only */}
      <div className="absolute left-0 top-full bg-[#F1F0E9] text-[#0D4715] w-48 py-2 shadow-lg">
        {fundItems.map((fund, index) => (
          <FundLink key={index} to={fund.path}>
            {fund.name}
          </FundLink>
        ))}
      </div>
    </div>
  );
};

export default OurFund;