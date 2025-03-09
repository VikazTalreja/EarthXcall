import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { menuItems } from "../data/NavBarData";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsVisible(false); 
    } else {
      setIsVisible(true); 
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white text-green-700 shadow-md z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
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
                      <li key={subIndex} className="hover:bg-gray-300">
                        <a href={subItem.link} className="block px-4 py-2">{subItem.name}</a>
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
          <a href="#" className="bg-green-700 text-sm text-[#F1F0E9] px-4 py-2 rounded-lg font-bold hover:scale-105 transition">
            CSR
          </a>
          <a href="#" className="bg-green-700 text-sm text-[#F1F0E9] px-4 py-2 rounded-lg font-bold hover:scale-105 transition">
            Donate Land
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white h-screen z-50 transition-transform duration-300 ${menuOpen ? "translate-y-0" : "-translate-y-full"} md:hidden`}>
        <ul className="flex flex-col items-center py-6 space-y-2">
          {menuItems.map((item, index) => (
            <li key={index} className="w-full text-center">
              <button
                className="w-full py-2 flex items-center justify-center hover:text-green-400 transition"
                onClick={() => setOpenSubMenu(openSubMenu === index ? null : index)}
              >
                {item.name}
                {item.subMenu && <FaChevronDown className="ml-2 text-xs" />}
              </button>

              {/* Mobile Dropdown */}
              {item.subMenu && openSubMenu === index && (
                <ul className="mt-2 bg-gray-100 rounded-md">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="hover:bg-gray-300">
                      <a href={subItem.link} className="block px-6 py-2">{subItem.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="mt-4">
            <a href="#" className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
              Donate Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
