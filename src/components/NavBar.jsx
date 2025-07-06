import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { menuItems } from "../data/NavBarData";
import LoginWithGoogleButton from "./LoginWithGoogleButton";
import { useAuth } from "../context/AuthContext";
import { logout } from "../utils/authHelpers";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSubItem, setActiveSubItem] = useState(null);

  const { user } = useAuth(); // 🔐 use auth state

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY < lastScrollY || currentScrollY <= 50);
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
    <header
      className={`fixed top-0 left-0 w-full bg-black/40 backdrop-filter backdrop-blur-md shadow-lg text-white z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Left Side - Logo + Menu */}
        <div className="flex items-center space-x-7">
          <img src="/MainLogo.png" className="h-12" alt="Logo" />
          <ul className="hidden md:flex gap-6 z-10">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <a
                  href={item.link}
                  className="flex items-center gap-1 cursor-pointer hover:text-green-600 hover:underline underline-offset-2 transition"
                >
                  {item.name}
                  {item.subMenu && <FaChevronDown className="text-xs" />}
                </a>
                {/* Dropdown menu logic same as before */}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Donate + Auth */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/donate" className="bg-green-700 text-sm text-[#F1F0E9] px-4 py-2 rounded-lg font-bold hover:scale-105 transition">
            Donate
          </a>
          <a href="/csr" className="bg-green-700 text-sm text-[#F1F0E9] px-4 py-2 rounded-lg font-bold hover:scale-105 transition">
            CSR
          </a>
          <a href="/donate-land" className="bg-green-700 text-sm text-[#F1F0E9] px-4 py-2 rounded-lg font-bold hover:scale-105 transition">
            Donate Land
          </a>

          {/* 🔐 Auth Section */}
          {!user ? (
            <LoginWithGoogleButton />
          ) : (
            <div className="flex items-center gap-3">
              <img src={user.photoURL} alt="profile" className="w-8 h-8 rounded-full" />
              <span className="text-sm">{user.displayName}</span>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-3 py-1 rounded text-sm"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile menu stays as-is */}
      {/* ✅ You can optionally add login/logout there too if needed */}
    </header>
  );
};

export default Navbar;
