import React from "react";
import { motion } from "framer-motion";
import rakhiImage from "../assets/Rakhi_Gautam_President&Founder_Earthxway_Foundation.jpg";
import Dipak_ShindeImage from "../assets/Executive_Director&Co-Founder.jpg";
import Tauseef_AhmedImage from "../assets/Tauseef_Ahmed_Earthxway_Foundation.jpg";
import Vikas from "../assets/photo (1).jpg";
import Darshan from "../assets/7a55494f-2a5e-43b7-a9cc-55e07ced22a8.jpg";
import Rahul from "../assets/WhatsApp Image 2025-06-23 at 8.10.15 PM.jpeg";
import DrSIR from "../assets/DR.png";

// Team member data structure
const teamMembers = {
  leadership: [
    {
      name: "Rakhi Gautam",
      role: "President & Founder",
      image: rakhiImage,
      loading: "lazy",
      decoding: "async",
      bio: "Rakhi Gautam is the visionary behind the Earthxway Foundation. Her relentless passion for environmental causes and proven leadership in sustainability efforts have earned her recognition as a trailblazer in climate advocacy.",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Dipak Shinde",
      role: "Executive Director & Co-Founder",
      image: Dipak_ShindeImage,
      loading: "lazy",
      decoding: "async",
      bio: "Dipak Shinde, known as the Agricultural Visionary, is a driving force behind the Earthxway Foundation, working to empower farmers through sustainable practices and innovative agri-tech solutions.",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Rahul Naitam",
      role: "Chief Technology Officer",
      image: Rahul,
      loading: "lazy",
      decoding: "async",
      bio: "Innovative technology leader with expertise in sustainable solutions and green technologies. Rahul drives the development and implementation of cutting-edge tech strategies to support the Earthxway Foundation’s mission for environmental impact.",
      social: { linkedin: "#", twitter: "#" },
    },
  ],
  team: [
    {
      name: "Vikas Talreja",
      role: "Digital Strategy Lead & Full Stack Developer",
      image: Vikas,
      loading: "lazy",
      decoding: "async",
      bio: "Vikas serves as the Team Leader for Digital at Earthxway Foundation, combining his leadership with hands-on expertise as a full stack developer to architect and implement forward-thinking digital solutions.",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Tauseef Ahmed",
      role: "Full Stack Developer & Technical Contributor",
      image: Tauseef_AhmedImage,
      loading: "lazy",
      decoding: "async",
      bio: "Tauseef Ahmed supports the Earthxway Foundation as a full stack developer, contributing his technical expertise on a volunteer basis to enhance the organization’s digital platforms.",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Darshan Sharma",
      role: "Community Engagement Manager",
      image: Darshan,
      loading: "lazy",
      decoding: "async",
      bio: "Expert in building partnerships and fostering community involvement.",
      social: { linkedin: "#", twitter: "#" },
    },
  ],
  advisors: [
    {
      name: "Dr. Kailas M. Talkit",
      role: "Advisor",
      image:DrSIR,
      loading: "lazy",
      decoding: "async",
      bio: "Dr. Kailas M. Talkit holds a PhD in Environmental Science with a specialization in forest ecosystems. With over 20 years of research and field experience, he provides strategic guidance to the Earthxway Foundation on sustainable forest management, biodiversity conservation, and climate resilience initiatives. His expertise ensures that the foundation’s projects are scientifically grounded and impactful at both local and global levels.",
      social: { linkedin: "#", twitter: "#" },
    },
  ],
};

// Social Media Links Component
const SocialLinks = ({ linkedin, twitter }) => (
  <div className="flex space-x-4">
    <a
      href={linkedin}
      className="text-green-700 hover:text-green-900 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </a>
    <a
      href={twitter}
      className="text-green-700 hover:text-green-900 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      Twitter
    </a>
  </div>
);

// Team Member Card Component
const TeamMemberCard = ({ member, index }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <div className="relative group h-80">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        loading={member.loading}
        decoding={member.decoding}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
            member.name
          )}&background=4CAF50&color=FFFFFF&size=400`;
        }}
      />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-green-700">{member.name}</h3>
      <p className="text-gray-600 font-medium mb-3">{member.role}</p>
      <p className="text-gray-500 mb-4 text-sm">{member.bio}</p>
      <SocialLinks {...member.social} />
    </div>
  </motion.div>
);

// Team Section Component
const TeamSection = ({ title, members }) => (
  <div className="mb-20">
    <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
      {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {members.map((member, index) => (
        <TeamMemberCard key={index} member={member} index={index} />
      ))}
    </div>
  </div>
);

// Main Component
const OurTeam = () => {
  return (
    <div className="pt-20 bg-white">
      <section className="relative min-h-screen w-full flex items-center justify-center -mt-20">
        <img
          src="https://images.unsplash.com/photo-1552083375-1447ce886485?w=1920&h=1080&auto=format&fit=crop&q=80&fm=webp"
          alt="Team hero background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Meet Our Team
          </motion.h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            A dedicated group of experts working together to create positive
            environmental change through innovative solutions and community
            engagement.
          </p>
        </div>
      </section>

      {/* Team Sections */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <TeamSection title="Leadership" members={teamMembers.leadership} />
        <TeamSection title="Our Team" members={teamMembers.team} />
        <TeamSection title="Advisory Board" members={teamMembers.advisors} />
      </section>

      {/* Join Our Team Section */}
      <section className="bg-green-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Join Our Team
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're always looking for passionate individuals who share our vision
            for a sustainable future. Check out our current opportunities.
          </p>
          <a
            href="/careers"
            className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
