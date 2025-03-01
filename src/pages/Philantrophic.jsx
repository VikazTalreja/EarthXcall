import React from 'react';

const PhilanthropicGiving = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <header className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-6" style={{ backgroundImage: "url('/images/forest-banner.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-4xl font-bold">Philanthropic Giving | EarthXcall</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Ready to make a transformational gift to the planet? We can help you achieve your philanthropic goals.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-700 transition">
            Learn More
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* Impact Section */}
        <section className="mb-12 flex flex-col md:flex-row items-center">
          <img src="/images/reforestation.jpg" alt="Reforestation" className="w-full md:w-1/2 rounded-lg shadow-md" />
          <div className="md:ml-8 mt-6 md:mt-0 w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Impact Through Philanthropy</h2>
            <p className="text-lg">
              EarthXcall relies on the generosity of donors to sustain our impact. Your support fosters innovative programs and expands successful initiatives that restore ecosystems worldwide.
            </p>
          </div>
        </section>

        {/* Why Plant Trees? */}
        <section className="bg-green-50 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center mb-6">Why Plant Trees?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <img src="/images/biodiversity.jpg" alt="Biodiversity" className="mx-auto rounded-lg shadow-md" />
              <h4 className="font-semibold mt-4">Support Critical Biodiversity</h4>
              <p>Forests shelter 80% of amphibians, 75% of birds, and 68% of mammals.</p>
            </div>
            <div className="text-center">
              <img src="/images/community.jpg" alt="Community" className="mx-auto rounded-lg shadow-md" />
              <h4 className="font-semibold mt-4">Create Social Impact</h4>
              <p>Reforestation provides jobs and empowers local communities globally.</p>
            </div>
            <div className="text-center">
              <img src="/images/climate.jpg" alt="Climate Change" className="mx-auto rounded-lg shadow-md" />
              <h4 className="font-semibold mt-4">Mitigate Climate Change</h4>
              <p>Trees absorb harmful CO2 and help cool the planet.</p>
            </div>
          </div>
        </section>

        {/* Join Our Mission */}
        <section className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4">Join Us to Reforest the Globe</h3>
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-700 transition">
            Schedule A Call
          </button>
        </section>

        {/* Contact Form Section */}
        <section className="mt-12 bg-gray-100 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center mb-6">Want to Learn More?</h3>
          <p className="text-center max-w-2xl mx-auto mb-6">
            Fill out the form below, and our team will reach out to schedule a call with you.
          </p>
          <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter your name" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" className="w-full p-2 border rounded-lg" placeholder="Enter your email" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea className="w-full p-2 border rounded-lg" rows="4" placeholder="Write your message here" required></textarea>
            </div>
            <button type="submit" className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-800 transition">
              Submit
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-600 text-white text-center p-6 mt-12">
        <p>&copy; 2025 EarthXcall. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PhilanthropicGiving;
