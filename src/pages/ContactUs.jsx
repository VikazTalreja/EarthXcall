import React, { useState, useEffect, useRef } from 'react';
import { ContactData } from '../data/ContactUs';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase"; 


// For fade in effect on loading or rendering page
const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);



  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`opacity-0 transform translate-y-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : ''
      }`}
    >
      {children}
    </div>
  );
};

// Card Componenet
const ContactCard = ({ title, content }) => {
  const lines = content.split('~').map((line, idx) => line.trim());
  
  return (
    <FadeInSection>
      <div className="min-h-52 max-h-full flex flex-col bg-white rounded-xl shadow-md p-6  hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">{title}</h3>
        <div className="text-gray-700 space-y-2 flex-grow ">
          {lines.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
};

const ContactUsPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "contactMessages"), {
        name,
        email,
        message,
        createdAt: serverTimestamp()
      });

      alert("Message sent successfully!");
      e.target.reset();
    } catch (error) {
      console.error("Error submitting message:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <h1 className="text-4xl font-bold text-center text-green-800 mb-8">
            Contact Us
          </h1>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ContactData.map(({ id, title, content }) => (
            <div className=" h-full" key={id}>
              <ContactCard title={title} content={content} />
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <FadeInSection>
          <div className="mt-12 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-3xl font-semibold text-green-700 mb-6">
              Send Us a Message
            </h2>
            <form className="grid grid-cols-1 gap-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 h-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 h-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};


export default ContactUsPage;
