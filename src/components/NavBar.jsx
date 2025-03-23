import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { menuItems } from "../data/NavBarData";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSubItem, setActiveSubItem] = useState(null);
  const [isTransparent, setIsTransparent] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsVisible(false);
      setIsTransparent(false);
    } else {
      setIsVisible(true);
      setIsTransparent(currentScrollY <= 500);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSubMenu(null);
  };

  return (
    <header className={`fixed top-0 left-0 w-full ${isTransparent ? 'bg-transparent' : 'bg-black/40 backdrop-filter backdrop-blur-lg shadow-lg'} text-white z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Left Side - Logo */}
        <div className="flex items-center space-x-7">
          <a href="/" className="text-2xl font-bold">CallXEarth</a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 z-10">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <a href={item.link} className="flex items-center gap-1 cursor-pointer hover:text-green-600 hover:underline underline-offset-2 transition">
                  {item.name}
                  {item.subMenu && <FaChevronDown className="text-xs" />}
                </a>

                {/* Dropdown Menu */}
                {item.subMenu && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white text-[#0D4715] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                     {item.subMenu.map((subItem, subIndex) => (
                      <li 
                        key={subIndex} 
                        className="relative"
                        onMouseEnter={() => setActiveSubItem(`${index}-${subIndex}`)}
                        onMouseLeave={() => setActiveSubItem(null)}
                      >
                        {subItem.name === "Our Funds" ? (
                          <button 
                            className="w-full px-4 py-2 flex items-center justify-between hover:bg-gray-300 text-left"
                            onClick={(e) => e.preventDefault()}
                          >
                            {subItem.name}
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-4 w-4" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M9 5l7 7-7 7" 
                              />
                            </svg>
                          </button>
                        ) : (
                          <a href={subItem.link} className="block px-4 py-2 flex items-center justify-between hover:bg-gray-300">
                            {subItem.name}
                          </a>
                        )}
                        
                        {/* Our Funds Submenu */}
                        {subItem.name === "Our Funds" && activeSubItem === `${index}-${subIndex}` && (
                          <ul className="absolute left-full top-0 mt-0 w-48 bg-white text-[#0D4715] rounded-md shadow-lg transition-all duration-300">
                            <li className="hover:bg-gray-300">
                              <a href="/our-fund/farmer-support-fund" className="block px-4 py-2">
                                Farmer Support Fund
                              </a>
                            </li>
                            <li className="hover:bg-gray-300">
                              <a href="/our-fund/women-empowerment-fund" className="block px-4 py-2">
                                Women's Empowerment Fund
                              </a>
                            </li>
                            <li className="hover:bg-gray-300">
                              <a href="/our-fund/reforestation-plantation" className="block px-4 py-2">
                                Reforestation Plantation
                              </a>
                            </li>
                            <li className="hover:bg-gray-300">
                              <a href="/our-fund/urban-forestry" className="block px-4 py-2">
                                Urban Forestry
                              </a>
                            </li>
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Donate Buttons */}
        <div className="hidden md:flex space-x-4">
          <a href="/donate" className="bg-green-700 text-sm text-[#F1F0E9] px-4 py-2 rounded-lg font-bold hover:scale-105 transition">
            Donate
          </a>
          <a href="/csr" className="bg-green-700 text-sm text-[#F1F0E9] px-4 py-2 rounded-lg font-bold hover:scale-105 transition">
            CSR
          </a>
          <a href="/donate-land" className="bg-green-700 text-sm text-[#F1F0E9] px-4 py-2 rounded-lg font-bold hover:scale-105 transition">
            Donate Land
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white text-black h-screen z-50 transition-transform duration-300 ${menuOpen ? "translate-y-0" : "-translate-y-full"} md:hidden`}>
        {/* Close button in top-right corner */}
        <button 
          onClick={closeMenu}
          className="absolute top-4 right-4 p-2 text-2xl hover:text-green-600 transition-colors"
          aria-label="Close menu"
        >
          <FaTimes />
        </button>

        <ul className="flex flex-col items-center pt-16 pb-6 space-y-2">
          {menuItems.map((item, index) => (
            <li key={index} className="w-full text-center">
              <button
                className="w-full py-2 flex items-center justify-center hover:text-green-600 transition"
                onClick={() => setOpenSubMenu(openSubMenu === index ? null : index)}
              >
                {item.name}
                {item.subMenu && (
                  <FaChevronDown className={`ml-2 text-xs transition-transform duration-300 ${
                    openSubMenu === index ? 'rotate-180' : ''
                  }`} />
                )}
              </button>

              {/* Mobile Dropdown */}
              {item.subMenu && openSubMenu === index && (
                <ul className="mt-2 bg-gray-100 rounded-md w-full">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="hover:bg-gray-200">
                      <a 
                        href={subItem.link} 
                        className="block px-6 py-2 flex items-center justify-between"
                        onClick={closeMenu}
                      >
                        {subItem.name}
                        {subItem.subItems && (
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-4 w-4" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M9 5l7 7-7 7" 
                            />
                          </svg>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="mt-4 space-y-2">
            <a 
              href="/donate" 
              className="block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition text-center"
              onClick={closeMenu}
            >
              Donate Now
            </a>
            <a 
              href="/csr" 
              className="block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition text-center"
              onClick={closeMenu}
            >
              CSR
            </a>
            <a 
              href="/donate-land" 
              className="block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition text-center"
              onClick={closeMenu}
            >
              Donate Land
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;