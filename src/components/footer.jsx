import { useState } from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Logo & Tax Info */}
        <div>
          <h2 className="text-2xl font-bold text-green-400">EARTHxcall</h2>
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
            {['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Careers', 'Fundraising Disclosures'].map(link => (
              <li key={link}><a href="#" className="hover:text-green-400 transition">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Financial Reports */}
        <div>
          <h3 className="font-semibold text-lg text-green-400 mb-3">Financials</h3>
          <ul className="text-gray-400 space-y-2">
            {['2023: Form 990 | Audit Report', '2022: Form 990 | Audit Report', '2021: Form 990 | Audit Report', '2020: Form 990', '2019: Form 990'].map(report => (
              <li key={report}><a href="#" className="hover:text-green-400 transition">{report}</a></li>
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
          <input type="text" placeholder="Enter your first name..." className="w-full p-2 mt-2 bg-gray-800 text-white rounded focus:ring-2 focus:ring-green-400" />
          <input type="email" placeholder="Enter your email..." className="w-full p-2 mt-2 bg-gray-800 text-white rounded focus:ring-2 focus:ring-green-400" />
          <button className="w-full mt-2 p-2 bg-green-600 rounded hover:bg-green-700 transition">Sign Up</button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © 2025 One Tree Planted. This store is PCI Compliant
      </div>
    </footer>
  );
}
