
import React from 'react';
import type { ProcessStep } from '../types';

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery & Strategy',
    description: 'We start by understanding your business, goals, and audience to build a tailored strategy for success.',
  },
  {
    step: 2,
    title: 'Planning & Creation',
    description: 'Our team plans the campaigns and creates compelling content, designs, and assets that align with the strategy.',
  },
  {
    step: 3,
    title: 'Execution & Launch',
    description: 'We launch your campaigns across the selected digital channels, ensuring flawless execution and optimization.',
  },
  {
    step: 4,
    title: 'Analysis & Reporting',
    description: 'We continuously monitor performance, analyze the data, and provide transparent reports with actionable insights for growth.',
  },
];

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
      {children}
      <div className="w-20 h-1 bg-accent mx-auto mt-3"></div>
    </h2>
);

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-light-gray">
      <div className="max-w-6xl mx-auto px-5">
        <SectionTitle>Our Process</SectionTitle>
        <div className="max-w-3xl mx-auto space-y-8">
          {processSteps.map((item) => (
            <div key={item.step} className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center text-2xl font-bold text-accent border-2 border-accent rounded-full">
                {item.step}
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-1">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
