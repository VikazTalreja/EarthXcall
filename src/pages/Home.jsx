// import treeImage from "/public/tree.png"; // Update with your actual image path
import backgroundImage from "../assets/HomeBg.jpg"; // Update with your actual image path
import Hero1 from "../assets/Hero1.png";
import CardCaraosuel from "../components/CardCaraosuel";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  EnergyTransition,
  RegenAgriculture,
  NatureConservation,
} from "../data/cardData";

const Home = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const sectionData = [
    {
      id: "energy-transition",
      title: "Energy Transition",
      content: `<p>The first pillar of collective action focuses on shifting from fossil fuels to 100% clean, renewable energy for all. A just and equitable
transition is possible today with existing technologies, creating millions of long-term jobs, cutting billions in fossil fuel costs, and
preventing trillions in climate damages. While the transition is already underway, we must triple investments in energy efficiency
and renewables while phasing out fossil fuel subsidies.</p>
<p>EarthXCall builds on the work of a global consortium of 17 scientists from the German Aerospace Center, University of
Technology Sydney, and University of Melbourne, who developed the world's first high-resolution global energy transition model
—Achieving the Paris Climate Agreement Goals (Teske et al., 2019). This widely downloaded research, followed by Achieving the
Paris Climate Agreement Goals Part 2 (Teske et al., 2022), provides industry-specific decarbonization benchmarks, supported by
Rockefeller Foundation, European Climate Foundation, and the Net-Zero Asset Owners Alliance.</p>
<p>The Energy Transition pillar is structured into four sub-pillars—Renewable Power, Renewable Heat, Renewable Transport, and
Energy Efficiency—with 23 solution pathways driving a sustainable future.</p>`,
      data: EnergyTransition,
    },
    {
      id: "nature-conservation",
      title: "Nature Conservation",
      content: `<p>The second pillar of collective action focuses on protecting and restoring natural environments to reverse biodiversity loss and
stabilize the global climate. To achieve this, we must safeguard, restore, and connect 50% of Earth's lands and oceans within a
Global Safety Net. Existing land habitats store nearly two trillion tonnes of carbon and absorb one-quarter of annual CO₂
emissions. Expanding Indigenous land rights, enforcing a deforestation moratorium, and restoring 350 million hectares of degraded
forests are crucial for meeting the 1.5°C climate goal.</p>
<P>EarthXCall has led groundbreaking research, including a global inventory of all remaining natural lands—The Global Safety Net—
published in Science Advances (Dinerstein et al., 2020). This research provides country and state-level benchmarks for conservation
planning under the UN’s Post-2020 Global Biodiversity Framework.</p>
<p>Additionally, our work on the first spatial model for forest-based carbon removal informs 24 solution pathways under Nature
Conservation, structured into four sub-pillars: Land Conservation, Ocean Conservation, Ecosystem Restoration, and Wildlife
Connectivity.</p>`,
      data: NatureConservation,
    },
    {
      id: "regenerative-agriculture",
      title: "Regenerative Agriculture",
      content: `<p>The third pillar of collective action focuses on transforming food production by restoring soil health. Regenerative agricultural practices
enhance soil fertility and carbon sequestration, contributing to net-zero food and fiber systems globally.</p>
<p>To achieve this, we must reduce meat consumption and food waste by 50%, minimize chemical fertilizers, herbicides, and pesticides,
diversify crops, and invest in smallholder farms. These efforts will help feed 10 billion people by mid-century while cutting agricultural
emissions—carbon dioxide, methane, and nitrous oxide—and improving nutrition.</p>
<p>EarthXCall has supported pioneering research in regenerative agriculture, including an advanced AI model that optimizes global crop
production and nutrition based on future climate scenarios. Our research has led to four key sub-pillars under Regenerative
Agriculture: Regenerative Croplands, Sustainable Rangelands, Food Waste Reduction, and Circular Fibersheds—with 29
unique solution pathways.</p>`,
      data: RegenAgriculture,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center bg-white py-12">
        <div className="max-w-7xl h-[70vh] w-full mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Section */}
          <div className="flex flex-col max-w-2xl text-center md:text-left">
            <h1 className="text-xl md:text-4xl font-bold text-emerald-900 leading-snug">
              The science is clear—we can solve the interconnected crises of
              climate change and biodiversity loss.
            </h1>
            <p className="text-gray-700 text-xs md:text-sm mt-4">
              Based on groundbreaking science, One Earth developed a powerful
              Solutions Framework that provides a roadmap to stop climate change
              and protect biodiversity. The solutions are readily available,
              science-based, and fall under three pillars of collective action.
            </p>
            <button className="mt-6 px-6 py-3 w-48 bg-emerald-800 text-white font-semibold rounded-lg hover:bg-green-600 transition">
              Explore Solutions
            </button>
          </div>

          {/* Right Section */}
          <div className="flex items-center">
            <img
              src={backgroundImage}
              alt="Background"
              className="max-w-md md:max-w-2xl  object-contain rounded-lg "
            />
          </div>
        </div>

        {/* Centered Pillars */}
        <div className="flex w-full bg-gradient-to- bg-emerald-800 from-green-600 to-teal-600 flex-row justify-center items-center mx-auto gap-x-10 mt-8">
          {[
            {
              id: "energy-transition",
              img: Hero1,
              title: "Energy Transition",
              text: "Transition our energy systems to 100% renewable energy for all.",
            },
            {
              id: "nature-conservation",
              title: "Nature Conservation",
              text: "Protect, restore, and connect 50% of Earth's lands and oceans through a Global Safety Net.",
            },
            {
              id: "regenerative-agriculture",
              title: "Regenerative Agriculture",
              text: "Transform food systems to feed 10 billion people sustainably while restoring soil health.",
            },
          ].map(({ id, img, title, text }, index) => (
            <div
              key={index}
              className="flex flex-row justify-center items-center cursor-pointer"
              onClick={() => scrollToSection(id)}
            >
              <div className="h-36 w-36 p-2 rounded-full overflow-hidden bg-green-300">
                {img && (
                  <img
                    src={img}
                    alt={title}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
              <div className="flex flex-col ml-3">
                <span className="text-2xl text-white font-black">
                  {title}
                </span>
                <span className="text-white/90 leading-relaxed text-sm w-56">
                  {text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sections */}
      <div>
        {sectionData.map((section, index) => (
          <section key={index} className="relative py-12 bg-white ">
            <div className="max-w-7xl mx-auto px-6">
              <h2
                id={section.id}
                className="text-4xl font-bold text-left mt-6 text-emerald-900"
              >
                {section.title}
              </h2> 

              <div className="text-gray-800 text-lg leading-relaxed mt-4">
                <div
                  className="text-gray-800 text-lg leading-relaxed mt-4"
                  dangerouslySetInnerHTML={{
                    __html:
                      expandedIndex === index
                        ? section.content
                        : section.content.split("</p>")[0] + "...</p>",
                  }}
                />

                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-4 text-emerald-800 font-bold hover:underline"
                >
                  {expandedIndex === index ? "Read Less" : "Read More"}
                </button>
              </div>
              <div className="mt-8">
                <CardCaraosuel data={section.data} />
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Home;
