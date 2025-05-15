import { useState } from "react";
import { AgriBookData, FinancialData, QuickLinks } from "../data/FooterData";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-black opacity-90 py-12">
      <div className="max-w-7xl  mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Logo & Tax Info */}
        <div>
          <img src="/MainLogo.png" className="h-[20%]" />
          {/* <p className="mt-2 text-gray-400 text-sm">TAX ID #46-4664562</p> */}
          <p className="mt-2 text-gray-400 text-sm">
Earthxway Foundation is a registered NGO under the Indian Trust Act, 1982, with 12A & 80G certifications, and holds FCRA and CSR-1 approvals.
</p>
          {/* <div className="mt-4">
            <img src="https://via.placeholder.com/100x50" alt="Eco Badge" className="rounded-lg" />
          </div> */}
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
          <h3 className="font-semibold text-lg text-green-400 my-3">Agri Books</h3>
          <ul className="text-gray-400 space-y-2">
            {AgriBookData.map((item) => (
              <li key={item.id}><a href={item.link} className="hover:text-green-400 transition">{item.title}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h3 className="font-semibold text-lg text-green-400 mb-3">Connect</h3>
          <p className="text-gray-400">Call: <a href="tel:919552738757 " className="hover:text-green-400 transition">+91 9552738757</a></p>
          <p className="text-gray-400">Pune Office:  Sliver Spring Apartment, Baif Road Wagholi, Pune 412207 
<br/><br/>Nagpur Office: Appa Swami Apartment, Chinchbhuan, Nagpur 440005
</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-3">
            {[
              { icon: FaFacebook, name: 'Facebook' , link: 'https://www.youtube.com/@earthxway' },
              { icon: FaInstagram, name: 'Instagram' , link: 'https://www.instagram.com/earthxway' },
              { icon: FaLinkedin, name: 'LinkedIn' , link: 'https://www.linkedin.com/company/earthxway/about/' },
              { icon: FaYoutube, name: 'YouTube' , link: 'https://www.youtube.com/@earthxwayfoundation' },
              // { icon: FaThreads, name: 'Threads' , link: 'https://www.threads.net/@earthxway' },
              { icon: FaTwitter, name: 'Twitter' , link: 'https://x.com/@earthxway' },
            ].map(({icon: Icon, name, link}) => (
              <a key={name} href={link} className="text-green-600 hover:text-green-400 transition">
                <Icon className="text-xl" />
                <span className="sr-only">{name}</span>
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
