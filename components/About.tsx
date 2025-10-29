
import React from 'react';
import type { Value } from '../types';

const values: Value[] = [
  { name: 'Innovation' },
  { name: 'Integrity' },
  { name: 'Collaboration' },
  { name: 'Excellence' },
  { name: 'Passion' },
  { name: 'Accountability' },
];

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
      {children}
      <div className="w-20 h-1 bg-accent mx-auto mt-3"></div>
    </h2>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <SectionTitle>About Eyoha Digitals</SectionTitle>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-bold text-secondary mb-4">Our Story</h3>
            <p className="mb-4">
              Founded in the vibrant heart of Addis Ababa, Eyoha Digitals was born from a passion for storytelling and a deep understanding of the digital landscape. We saw a need for a local agency with a global mindset—one that could blend Ethiopian creativity with world-class digital strategies. Today, we are a thriving team of strategists, creatives, and technologists dedicated to helping businesses in Ethiopia and beyond succeed in the digital age.
            </p>
            <h3 className="text-2xl font-bold text-secondary mb-4 mt-8">Our Core Values</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              {values.map((value) => (
                <div key={value.name} className="bg-light-gray p-4 rounded-lg shadow-sm text-center font-semibold text-secondary">
                  {value.name}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/3 bg-light-gray p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
            <p className="mb-6">
              To be the leading digital partner for ambitious brands in Africa, recognized for our innovation, creativity, and commitment to delivering exceptional results.
            </p>
            <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
            <p>
              To empower our clients to achieve their business objectives by providing strategic, data-driven, and creative digital marketing solutions that connect them with their target audience and drive sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
