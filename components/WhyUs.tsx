
import React from 'react';
import type { WhyUsItem } from '../types';

const whyUsItems: WhyUsItem[] = [
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Local Expertise',
    description: 'We have an in-depth understanding of the Ethiopian market, culture, and consumer behavior.',
  },
  {
    icon: 'fas fa-globe',
    title: 'Global Standards',
    description: 'We deliver world-class strategies and creative work that meets international quality benchmarks.',
  },
  {
    icon: 'fas fa-cogs',
    title: 'Data-Driven Approach',
    description: 'Every decision we make is backed by data and analytics to ensure maximum impact and ROI.',
  },
  {
    icon: 'fas fa-users',
    title: 'Collaborative Partnership',
    description: 'We work as an extension of your team, ensuring transparency, communication, and shared success.',
  },
];

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
      {children}
      <div className="w-20 h-1 bg-accent mx-auto mt-3"></div>
    </h2>
);

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <SectionTitle>Why Eyoha Digitals?</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUsItems.map((item) => (
            <div key={item.title} className="text-center p-6">
              <i className={`${item.icon} text-5xl text-secondary mb-4`}></i>
              <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
