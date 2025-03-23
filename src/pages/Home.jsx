import backgroundImage from "../assets/HomeBg.jpg";
import { useState, useEffect , useId, useRef } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  const slides = [
    { src: "https://picsum.photos/800/600?random=1", title: "Explore Solutions", button: "Learn More" },
    { src: "https://picsum.photos/800/600?random=2", title: "Donate", button: "Explore" },
    { src: "https://picsum.photos/800/600?random=3", title: "Slide Three", button: "Join Now" },
  ];


  const Socialgallery =[
    "https://plus.unsplash.com/premium_photo-1679541668187-ee5d14a2a15c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1678344177250-bfdbed89fc03?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1620901433789-1d2f85a93653?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dt",
  "https://images.unsplash.com/photo-1545830790-68595959c491?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1610093674388-cee0337f2684?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]

  const cardData = [
    {
      id: "energy-transition",
      title: "Energy Transition",
      img: "https://plus.unsplash.com/premium_photo-1679917152396-4b18accacb9d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Shifting from fossil fuels to 100% clean, renewable energy, ensuring a sustainable and just transition.",
    },
    {
      id: "nature-conservation",
      title: "Nature Conservation",
      img: "https://images.unsplash.com/photo-1573865174887-dd85bc60e3e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Protecting and restoring ecosystems to preserve biodiversity and combat climate change.",
    },
    {
      id: "regenerative-agriculture",
      title: "Regenerative Agriculture",
      img: "https://images.unsplash.com/photo-1591557771897-7cfa5c925844?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Transforming food production by promoting sustainable farming practices and restoring soil health.",
    },
  ];


  const logos = [
    "https://via.placeholder.com/100", // Replace these with your actual logo URLs
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
  ];

  return (

    <>
      {/* Hero Section */}
      <section style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className="relative flex flex-col h-screen justify-center bg-[#E8F1F2] py-10 md:py-20 px-4 md:px-6 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-8 md:gap-12">
          <div className="flex flex-col justify-center items-center max-w-2xl px-4">
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight md:leading-snug">
              The science is clear—we can solve the crises of climate change and
              biodiversity loss.
            </h1>
            <p className="text-gray-300 text-base md:text-lg mt-3 md:mt-4">
              A roadmap for sustainability, backed by groundbreaking research
              and real-world solutions.
            </p>
            <button className="mt-4 md:mt-6 px-4 md:px-6 py-2 md:py-3 w-full md:w-48 bg-[#008A7D] text-white font-semibold rounded-lg hover:bg-[#006F65] transition">
              Explore Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="bg-[#F4F7F7] py-12 md:py-16 px-4 md:px-6 text-center">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#222C2A]">
            Our Key Focus Areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-10">
            {cardData.map((card, index) => (
              <div
                key={card.id}
                className="bg-white p-4 md:p-6 shadow-lg rounded-lg border border-[#C6D1D2] flex flex-col"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-36 md:h-44 object-cover rounded-lg"
                />
                <h3 className="font-semibold text-lg md:text-xl text-[#008A7D] mt-3 md:mt-4">
                  {card.title}
                </h3>
                <p className="text-[#555D5A] text-sm md:text-base mt-2">{card.text}</p>
                <button
                  className="mt-3 md:mt-4 text-[#008A7D] cursor-pointer hover:bg-teal-800 transition-all duration-300 ease-in-out font-bold text-base md:text-lg border-2 p-2 md:p-3 rounded-lg hover:underline w-full"
                  onClick={() => scrollToSection(card.id)}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-200 py-16 text-center">
        <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#222C2A]">
          Our Impact in Numbers
        </h2>
        <ImpactNumbers />
        </div>
      </section>

      {/* CSR Section */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4 md:px-6 py-16 md:py-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1991&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="w-full">
          {/* Dark Overlay for better readability */}
          <div className="absolute inset-0 bg-black opacity-80"></div>

          {/* Content */}
          <motion.div
            className="relative z-10 max-w-3xl mx-auto p-4 md:p-10 text-white text-center rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-teal-400 to-green-300 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Corporate Sustainability
            </motion.h2>

            <motion.p
              className="mt-3 md:mt-4 text-xl md:text-2xl lg:text-3xl text-gray-200 leading-snug"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Partner with us for a sustainable future. Join the movement today.
            </motion.p>

            <motion.button
              className="mt-4 md:mt-6 px-6 md:px-8 py-3 md:py-4 bg-[#008A7D] text-white text-base md:text-lg font-semibold rounded-lg hover:bg-[#006F65] transition transform hover:scale-105 shadow-lg w-full md:w-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Social gallery */}
      <section className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Social Gallery</h2>

      {/* Container Restricting the height */}
      <div className="max-w-5xl mx-auto overflow-hidden">
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]"
          style={{ maxHeight: "800px", height: "90vh" }} // Restrict height
        >
          {Socialgallery.map((src, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden rounded-lg shadow-lg relative group ${
                index % 3 === 0 ? "md:col-span-1 md:row-span-1" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={src}
                alt="Gallery Image"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    
      {/* Donation Section */}
      <section className="flex flex-col max-w-7xl mx-auto py-12 md:py-20 px-4 md:px-8">
        {/* Left Side - Donation Content */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
            Support Our Cause for a <span className="text-green-600">Sustainable Future</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Your contribution helps drive impactful projects. Choose a donation amount and help make a difference today.
          </p>
          
          {/* Donation Dropdown + Donate Button */}
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3">
            {/* Donation Amount Dropdown */}
            <select className="px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-green-500 text-base">
              <option value="100">₹100</option>
              <option value="500">₹500</option>
              <option value="1000">₹1000</option>
              <option value="5000">₹5000</option>
              <option value="custom">Custom Amount</option>
            </select>
            
            {/* Donate Now Button */}
            <button className="w-full md:w-auto px-4 md:px-6 py-2 md:py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition text-base">
              Donate Now
            </button>
          </div>
        </div>

        {/* Right Side - Carousel */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 overflow-hidden">
          <Carousel slides={slides} />
        </div>
      </section>


      {/* Projects & Logo Cloud */}
      <section className="py-16 px-6 grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
      {/* Text Section */}
      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-[#222C2A] leading-tight">
          Our Global Partners
        </h2>
        <p className="text-lg text-[#555D5A]">
          We are making an impact across various regions with innovative solutions.
        </p>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 justify-center">
        {logos.map((logo, index) => (
          <div key={index} className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full shadow-lg p-2">
            <img src={logo} alt={`Logo ${index + 1}`} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Home;

const ImpactNumbers = () => {
  const stats = [
    { label: "Projects", value: 100, suffix: "+" },
    { label: "Trees Planted", value: 1000000, suffix: "+" },
    { label: "Communities Impacted", value: 500, suffix: "+" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          label={stat.label}
          value={stat.value}
          suffix={stat.suffix}
        />
      ))}
    </div>
  );
};

const StatCard = ({ label, value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = value / (duration / 16);

    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="text-2xl font-bold">
      <motion.h3
        className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-500 to-blue-600 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {count}
        {suffix}
      </motion.h3>
      <p className="text-lg text-gray-700">{label}</p>
    </div>
  );
};


const Slide = ({ slide, index, current, handleSlideClick }) => {
  const slideRef = useRef(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      slideRef.current.style.setProperty("--x", `${xRef.current}px`);
      slideRef.current.style.setProperty("--y", `${yRef.current}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const { src, button, title } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: current !== index ? "scale(0.98) rotateX(8deg) " : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}>
        <div
          className="absolute top-0 left-0 w-full h-full  rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
          style={{ transform: current === index ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)" : "none" }}>
          <img
            className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
            style={{ opacity: current === index ? 1 : 0 }}
            alt={title}
            src={src}
            loading="eager"
            decoding="sync" />
          {current === index && <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />}
        </div>

        <article className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${current === index ? "opacity-100 visible" : "opacity-0 invisible"}`}>
          <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold relative">{title}</h2>
          <div className="flex justify-center">
            <button className="mt-6 px-4 py-2 w-fit mx-auto sm:text-sm text-black bg-white h-12 border border-transparent text-xs flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">{button}</button>
          </div>
        </article>
      </li>
      
    </div>
  );
};


const Carousel = ({ slides = [] }) => {
  if (!Array.isArray(slides) || slides.length === 0) {
    return <p className="text-center text-gray-500">No slides available</p>;
  }

  const [current, setCurrent] = useState(0);
  const handlePreviousClick = () => setCurrent((current - 1 + slides.length) % slides.length);
  const handleNextClick = () => setCurrent((current + 1) % slides.length);
  const handleSlideClick = (index) => current !== index && setCurrent(index);
  const id = useId();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <div className="relative w-[70vmin] h-[70vmin] mx-auto" aria-labelledby={`carousel-heading-${id}`}>
      <ul className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${current * (100 / slides.length)}%)` }}>
        {slides.map((slide, index) => (
          <Slide key={index} slide={slide} index={index} current={current} handleSlideClick={handleSlideClick} />
        ))}
      </ul>

    </div>
  );
};
