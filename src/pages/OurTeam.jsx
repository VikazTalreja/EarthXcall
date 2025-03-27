import React from 'react';
import { motion } from 'framer-motion';

// Team member data structure
const teamMembers = {
  leadership: [
    {
      name: "Karl Burkart",
      role: "President & Co-Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&auto=format&fit=crop&fm=webp&q=80",
      loading: "lazy",
      decoding: "async",
      bio: "Leading environmental initiatives with over 15 years of experience in climate solutions.",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Justin Winters",
      role: "Executive Director & Co-Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&auto=format&fit=crop&fm=webp&q=80",
      loading:"lazy",
      decoding:"async",
      bio: "Expert in sustainable development and global conservation strategies.",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "David Miller",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&auto=format&fit=crop&fm=webp&q=80",
      loading:"lazy",
      decoding:"async",
      bio: "Technology innovator with expertise in sustainable solutions and green tech.",
      social: { linkedin: "#", twitter: "#" }
    }
  ],
  team: [
    {
      name: "Sarah Johnson",
      role: "Director of Programs",
      image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=400&h=500&auto=format&fit=crop&fm=webp&q=80",
      loading:"lazy",
      decoding:"async",
      bio: "Specializing in community-based conservation programs.",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Michael Chen",
      role: "Head of Research",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&auto=format&fit=crop&fm=webp&q=80",
      loading:"lazy",
      decoding:"async",
      bio: "Leading research initiatives in climate science and biodiversity.",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Lisa Anderson",
      role: "Community Engagement Manager",
      image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=500&auto=format&fit=crop&fm=webp&q=80",
      loading:"lazy",
      decoding:"async",
      bio: "Expert in building partnerships and fostering community involvement.",
      social: { linkedin: "#", twitter: "#" }
    }
  ],
  advisors: [
    {
      name: "Dr. Emily Roberts",
      role: "Scientific Advisor",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=500&auto=format&fit=crop&fm=webp&q=80",
      loading:"lazy",
      decoding:"async",
      bio: "PhD in Environmental Science, specializing in forest ecosystems.",
      social: { linkedin: "#", twitter: "#" }
    }
  ]
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
          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=4CAF50&color=FFFFFF&size=400`;
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
    <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">{title}</h2>
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
      <section 
        className="relative min-h-screen w-full flex items-center justify-center -mt-20"
      >
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
            A dedicated group of experts working together to create positive environmental change 
            through innovative solutions and community engagement.
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
          <h2 className="text-3xl font-bold text-green-700 mb-6">Join Our Team</h2>
          <p className="text-lg text-gray-600 mb-8">
            We're always looking for passionate individuals who share our vision for 
            a sustainable future. Check out our current opportunities.
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