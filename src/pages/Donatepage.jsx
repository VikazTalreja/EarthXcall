import { motion } from "framer-motion";
import FloatingDonateButton from "../components/FloatingDonationButton";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import DonationForm from "../components/DonationForm";

const highlights = [
  { number: "100M+", text: "Trees Planted" },
  { number: "80+", text: "Countries Impacted" },
  { number: "1.5M+", text: "Volunteer Hours" },
  { number: "200+", text: "Community Partners" },
];

const steps = [
  {
    title: "Choose Your Impact",
    desc: "Select a cause that matters to you.",
    icon: "🌱",
  },
  { title: "Make a Donation", desc: "Every $1 plants one tree.", icon: "💰" },
  {
    title: "Track Progress",
    desc: "Get updates on where your trees are planted.",
    icon: "📍",
  },
];

const funds = [
  {
    title: "Reforestation/Plantation",
    img: "🌳",
    desc: "Support global forest restoration efforts.",
  },
  {
    title: "Women's Empowerment Fund",
    img: "👩‍🌾",
    desc: "Help empower women through tree planting projects.",
  },
  {
    title: "Farmer Support Fund",
    img: "🚜",
    desc: "Assist farmers in agroforestry initiatives.",
  },
  {
    title: "Urban Forestry",
    img: "🏙️",
    desc: "Plant trees in cities to combat pollution.",
  },
];

const faqs = [
  {
    question: "How does my donation help?",
    answer:
      "Your donation directly funds reforestation projects in areas that need it most.",
  },
  {
    question: "Can I choose where my trees are planted?",
    answer:
      "Yes, you can select a region or let us plant where trees are needed the most.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes! After donating, you will receive a digital certificate via email.",
  },
];

const DonatePage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [amount, setAmount] = useState("");
  const quickAmounts = [10, 25, 50, 100];

  return (
    <>
    <FloatingDonateButton/>
      <section
        className="relative h-[50vh]  md:h-[100vh] flex flex-col md:flex-row items-center justify-center md:justify-between text-center bg-green-700 text-white px-6"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: "cover",
        }}
   > 
    {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
        <div className=" text-center max-w-3xl  ">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Plant a Tree, Save the Planet
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl mt-4"
          >
            Your donation helps restore forests, create jobs, and fight climate
            change.
          </motion.p>
        </div> 
        <div className="my-10 hidden md:flex">
           <DonationForm />
        </div>

      
      </section>

      <section className="py-16 px-4 bg-green-50 text-center">
      <div className="my-10 md:hidden flex">
      <DonationForm />
        </div>
        <h2 className="text-3xl font-bold text-green-700 mb-8">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <p className="text-4xl font-bold text-green-700">{item.number}</p>
              <p className="text-lg text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-white shadow-lg rounded-lg"
            >
              <div className="text-4xl">{step.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
              <p className="text-gray-700 mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-8">Our Funds</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {funds.map((fund, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <div className="text-5xl">{fund.img}</div>
              <h3 className="text-xl font-semibold mt-4">{fund.title}</h3>
              <p className="text-gray-700 mt-2">{fund.desc}</p>
              <a
                href="#"
                className="text-green-600 font-semibold hover:underline mt-4 block"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <FaChevronDown
                  className={`transition ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default DonatePage;