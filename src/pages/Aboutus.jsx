import React from "react";

const EarthxcallAboutUs = () => {
  return (
    <div className="bg-gray-900 text-white font-roboto">
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-lg font-bold bg-gray-700 inline-block px-4 py-2 rounded">About Us</h1>
        <h2 className="text-red-500 text-2xl font-bold mt-2">Earthxcall</h2>
        <p className="mt-4 text-lg">
          A non-profit organization focused on uniting people worldwide to tackle the climate crisis, restore ecosystems through reforestation, and build a sustainable future.
        </p>
      </div>

      <div className="flex justify-center space-x-4 mb-8">
        <img className="w-1/3 rounded" src="https://storage.googleapis.com/a1aa/image/sfQ5uzc4NOe4sVciNIOM-xXUZ9IerFIz_21apGTnfqo.jpg" alt="Person smiling while planting a tree" />
        <img className="w-1/3 rounded" src="https://storage.googleapis.com/a1aa/image/u8ngWAT_rIK45km9cf_ujUCvXnWWPj8FxWweH_BOve4.jpg" alt="Group of people working in a field" />
        <img className="w-1/3 rounded" src="https://storage.googleapis.com/a1aa/image/WPorIhSFmMwpsoyWKWjFPDReOGlHprGGgvzUKRwOPZY.jpg" alt="Person standing with a shovel in a reforested area" />
      </div>

      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-lg font-semibold mb-2">Together, Planting a Forest.</h1>
        <h2 className="text-4xl font-bold mb-8">Our impact over the years</h2>
        <p className="text-gray-400 mb-12">
          Since 2014, we have planted over 135.5 million trees with 378 partners across 82 countries...
        </p>

        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold">378+</h3>
              <p className="text-gray-600">PLANTING PARTNERS</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">82+</h3>
              <p className="text-gray-600">COUNTRIES</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">135M+</h3>
              <p className="text-gray-600">TREES PLANTED</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-8">How we work</h1>
        <p className="text-lg mb-12">
          Our work doesn’t begin and end with trees in the ground...
        </p>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-semibold mb-4">Together, We're Creating Change</h1>
        <ul className="list-none mb-6">
          <li className="mb-2">✔ [X]M+ Trees Planted</li>
          <li className="mb-2">✔ [X]+ Countries</li>
          <li className="mb-2">✔ [X]+ Planting Partners</li>
        </ul>
        <button className="bg-gray-800 text-white py-2 px-4 rounded-full">Download Our Latest Impact Report</button>
      </div>
    </div>
  );
};

export default EarthxcallAboutUs;
