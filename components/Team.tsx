import React from 'react';
import type { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  {
    name: 'Yonas Negesse',
    role: 'Cofounder, CEO & Systems Specialist',
    image: '', // Image removed as per request
    skills: [
      'Streamlines business operations with digital systems and ERP solutions.',
      'Expert in ERP integration and business automation.',
      'Customizes systems for accounting, HR, inventory, and workflow.',
      'Helps clients reduce costs and increase operational efficiency.',
    ],
  },
  {
    name: 'Abiy',
    role: 'Cofounder & Creative Director',
    image: '', // Image removed as per request
    skills: [
      'Expert in content strategy, storytelling, and brand positioning.',
      'Tripled engagement for more than 40 local businesses.',
      'Produced 1000+ engaging videos for various brands.',
    ],
  },
  {
    name: 'Tamrat',
    role: 'Content Creator & Strategist',
    image: '', // Image removed as per request
    skills: [
      'Creative thinker and short-form video specialist.',
      'Expert in TikTok and Reels trend adaptation.',
      'Produced 50+ viral short-form videos for local service brands.',
      'Skilled in creative direction, storytelling, and social engagement.',
    ],
  },
  {
    name: 'Yohannes',
    role: 'Social Media Manager',
    image: '', // Image removed as per request
    skills: [
      'Manages service-based and educational brand pages.',
      'Skilled in Meta Business Suite, Creator Studio, and audience research.',
      'Monitors analytics, engagement, and performance reports.',
    ],
  },
  {
    name: 'Bereket',
    role: 'Graphic Designer',
    image: '', // Image removed as per request
    skills: [
      'Designs visually captivating graphics for brand identity.',
      'Creative designer for flyers, and carousels.',
      'Skilled in Canva, Photoshop, and Illustrator.',
      'Experienced in designing for education, lifestyle, and business.',
    ],
  },
  {
    name: 'Biruk',
    role: 'Video Editor',
    image: '', // Image removed as per request
    skills: [
      'Crafts powerful video stories that connect with audiences.',
      'Expert in product, lifestyle, and promotional video shoots.',
      'Uses CapCut & Premiere Pro for high-quality editing.',
      'Focused on creating impactful Reels and ad videos.',
    ],
  },
];

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
      {children}
      <div className="w-20 h-1 bg-accent mx-auto mt-3"></div>
    </h2>
);


const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full border-t-4 border-accent">
    <div className="flex-grow">
      <h4 className="text-xl font-bold text-primary">{member.name}</h4>
      <p className="text-secondary font-semibold mb-4">{member.role}</p>
      <ul className="text-left text-sm text-gray-600 space-y-2">
        {member.skills.map((skill) => (
          <li key={skill} className="flex items-start">
             <span className="text-accent font-bold mr-2 text-base">✓</span>
             <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <SectionTitle>Meet the Team</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;