import { useState } from "react";
import { FinancialData, QuickLinks } from "../data/FooterData";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" bg-black opacity-90 py-12">
      <div className="max-w-7xl  mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Logo & Tax Info */}
        <div>
          <img src="/MainLogo.png" className="h-[20%]" />
          <p className="mt-2 text-gray-400 text-sm">TAX ID #46-4664562</p>
          <p className="mt-2 text-gray-400 text-sm">One Tree Planted is a 501(c)3 tax-exempt organization. Your donation is tax-deductible.</p>
          <div className="mt-4">
            <img src="https://via.placeholder.com/100x50" alt="Eco Badge" className="rounded-lg" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg text-green-400 mb-3">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            {QuickLinks.map((item) => (
              <li key={item.id}><a href={item.link} className="hover:text-green-400 transition">{item.title}</a></li>
            ))}
          </ul>
        </div>

        {/* Financial Reports */}
        <div>
          <h3 className="font-semibold text-lg text-green-400 mb-3">Financials</h3>
          <ul className="text-gray-400 space-y-2">
            {FinancialData.map((item) => (
              <li key={item.id}><a href={item.link} className="hover:text-green-400 transition">{item.title}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h3 className="font-semibold text-lg text-green-400 mb-3">Connect</h3>
          <p className="text-gray-400">Call: <a href="tel:18004087850" className="hover:text-green-400 transition">1.800.408.7850</a></p>
          <p className="text-gray-400">145 Pine Haven Shores Rd #100D, Shelburne, Vermont, 05482, US</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-3 text-green-400">
            {['facebook', 'instagram', 'linkedin', 'pinterest', 'tiktok', 'youtube'].map(icon => (
              <a key={icon} href="#" className="hover:text-green-300 transition">
                <i className={`fab fa-${icon}`} />
              </a>
            ))}
          </div>

          {/* Newsletter Signup */}
          <h3 className="font-semibold text-lg text-green-400 mt-5">Newsletter Signup</h3>
          <input type="text" placeholder="Enter your first name..." className="w-full p-2 mt-2 bg-gray-300  rounded focus:ring-2 focus:ring-green-400" />
          <input type="email" placeholder="Enter your email..." className="w-full p-2 mt-2  bg-gray-300 rounded focus:ring-2 focus:ring-green-400" />
          <button className="w-full text-white mt-2 p-2 bg-green-600 rounded hover:bg-green-700 transition">Sign Up</button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © 2025 One Tree Planted. This store is PCI Compliant
      </div>
    </footer>
  );
}
