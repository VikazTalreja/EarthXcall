import React from 'react';

const PhilanthropicGiving = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <header className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-6" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80')",
          backgroundAttachment: "fixed"
        }}>
        <div className="bg-black bg-opacity-40 p-8 rounded-lg backdrop-blur-sm max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">Philanthropic Giving</h1>
          <p className="mt-6 text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to make a transformational gift to the planet? We can help you achieve your philanthropic goals.
          </p>
          <button className="mt-8 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg">
            Donate
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 max-w-6xl">
        {/* Impact Section */}
        <section className="my-20 flex flex-col md:flex-row items-center gap-12">
          <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Reforestation" className="w-full md:w-1/2 rounded-xl shadow-xl object-cover h-[400px]" />
          <div className="md:ml-8 w-full md:w-1/2">
            <h2 className="text-4xl font-semibold mb-6 text-green-800">Impact Through Philanthropy</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              EarthXcall relies on the generosity of donors to sustain our impact. Your support fosters innovative programs and expands successful initiatives that restore ecosystems worldwide.
            </p>
          </div>
        </section>

        {/* Why Plant Trees? */}
        <section className="bg-gradient-to-br from-green-50 to-green-100 p-12 rounded-xl shadow-lg my-20">
          <h3 className="text-3xl font-semibold text-center mb-12 text-green-800">Why Plant Trees?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80" alt="Biodiversity" className="mx-auto rounded-lg shadow-md h-48 w-full object-cover" />
              <h4 className="font-semibold mt-6 text-xl text-green-700">Support Critical Biodiversity</h4>
              <p className="mt-4 text-gray-700">Forests shelter 80% of amphibians, 75% of birds, and 68% of mammals.</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1732&q=80" alt="Community" className="mx-auto rounded-lg shadow-md h-48 w-full object-cover" />
              <h4 className="font-semibold mt-6 text-xl text-green-700">Create Social Impact</h4>
              <p className="mt-4 text-gray-700">Reforestation provides jobs and empowers local communities globally.</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80" alt="Climate Change" className="mx-auto rounded-lg shadow-md h-48 w-full object-cover" />
              <h4 className="font-semibold mt-6 text-xl text-green-700">Mitigate Climate Change</h4>
              <p className="mt-4 text-gray-700">Trees absorb harmful CO2 and help cool the planet.</p>
            </div>
          </div>
        </section>

        {/* Join Our Mission */}
        <section className="text-center my-20 py-16 bg-green-800 text-white rounded-xl">
          <h3 className="text-3xl font-semibold mb-6">Join Us to Reforest the Globe</h3>
          <button className="px-8 py-4 bg-white text-green-800 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg">
            Schedule A Call
          </button>
        </section>

        {/* Contact Form Section */}
        <section className="my-20 bg-gray-50 p-12 rounded-xl shadow-lg">
          <h3 className="text-3xl font-semibold text-center mb-6 text-green-800">Want to Learn More?</h3>
          <p className="text-center max-w-2xl mx-auto mb-10 text-lg text-gray-700">
            Fill out the form below, and our team will reach out to schedule a call with you.
          </p>
          <form className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Enter your name" required />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Enter your email" required />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" rows="4" placeholder="Write your message here" required></textarea>
            </div>
            <button type="submit" className="w-full px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold text-lg shadow-lg">
              Submit
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default PhilanthropicGiving;
