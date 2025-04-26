import React from 'react'

const stories = [
  {
    id: 1,
    title: "Community-Led Reforestation in the Amazon Basin",
    desc: "How local tribes partnered with our NGO to plant 50,000 native trees, restoring critical rainforest ecosystems",
    image: "https://www.infoans.org/media/k2/items/cache/83ae357fec8eba398717da5e96b247b3_XL.jpg",
    location: "Hyderabad, India"
  },
  {
    id: 2,
    title: "Urban Oasis: Green Corridors in Mumbai",
    desc: "Transforming concrete jungles into vibrant green spaces that reduce pollution and increase biodiversity",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNy6DQvgmKvpM50-z-ApTM9H3GNR3f6oeH0-lgOd1ddDmIL0B8qrTbYkXbG2DyDLtgneI&usqp=CAU",
    location: "Mumbai, India"
  },
  {
    id: 3,
    title: "Reviving Ancient Olive Groves",
    desc: "Cultural preservation meets environmental restoration through heritage olive tree replanting",
    image: "https://farm3.static.flickr.com/2774/4146532432_0d4c4b96bc_o.jpg",
    location: "Pune, India"
  },
  {
    id: 4,
    title: "Community-Led Reforestation in the Amazon Basin",
    desc: "How local tribes partnered with our NGO to plant 50,000 native trees, restoring critical rainforest ecosystems",
    image: "https://www.infoans.org/media/k2/items/cache/83ae357fec8eba398717da5e96b247b3_XL.jpg",
    location: "Noida, India"
  },
  {
    id: 5,
    title: "Urban Oasis: Green Corridors in Mumbai",
    desc: "Transforming concrete jungles into vibrant green spaces that reduce pollution and increase biodiversity",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNy6DQvgmKvpM50-z-ApTM9H3GNR3f6oeH0-lgOd1ddDmIL0B8qrTbYkXbG2DyDLtgneI&usqp=CAU",
    location: "Mumbai, India"
  },
  {
    id: 6,
    title: "Reviving Ancient Olive Groves",
    desc: "Cultural preservation meets environmental restoration through heritage olive tree replanting",
    image: "https://farm3.static.flickr.com/2774/4146532432_0d4c4b96bc_o.jpg",
    location: "Chennai, India"
  },
]

const NewsRoom = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-cover bg-center bg-[url('https://wallpaper.forfun.com/fetch/d5/d5015f825822f074879627bac3d1e644.jpeg')]">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-multiply bg-[url('')]" />
        
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-6 space-y-6">
            <h1 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg">
              Growing a Greener Future Together
            </h1>
            <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
              Join us in celebrating impactful stories of reforestation, community empowerment, and sustainable growth.
            </p>
            <button className="mt-6 px-8 py-3 bg-white/10 backdrop-blur-sm text-green-100 rounded-full hover:bg-white/20 transition-all border border-white/20 hover:border-white/40">
              Explore Our Mission
            </button>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-green-600 text-center mb-12">
            Latest Planting Stories
          </h2>
          
          {/*  Responsive Grid Layout for Stories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <article 
                key={story.id}
                className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-56 object-cover md:h-64 lg:h-72 transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="p-5 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                    </svg>
                    <span>{story.location}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-900">{story.title}</h3>
                  <p className="text-gray-700 ">{story.desc} </p>
                   <div className="">
                    {/* if any new data we want to add */}
                    
                  </div> 
                </div>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <p className="text-xl text-green-900 mb-6">
              Want to see more inspiring stories?
            </p>
            <button className="px-8 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors flex items-center gap-2 mx-auto">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span>Load More Stories</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsRoom;
