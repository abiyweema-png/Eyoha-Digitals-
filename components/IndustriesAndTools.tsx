
import React from 'react';

const industries = [
  'eCommerce', 'Real Estate', 'Hospitality', 'Healthcare',
  'Education', 'Non-Profit', 'Technology', 'Manufacturing'
];

const tools = [
  'Google Analytics', 'SEMrush', 'Ahrefs', 'Figma',
  'Adobe Creative Suite', 'HubSpot', 'WordPress', 'React'
];

const Pill: React.FC<{ text: string }> = ({ text }) => (
  <div className="bg-secondary text-white font-medium py-2 px-5 rounded-full">
    {text}
  </div>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="text-2xl font-bold text-primary text-center mb-6">
      {children}
    </h3>
);


const IndustriesAndTools: React.FC = () => {
  return (
    <section id="industries-tools" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <SectionTitle>Industries We Serve</SectionTitle>
          <div className="flex flex-wrap gap-4 justify-center">
            {industries.map((industry) => <Pill key={industry} text={industry} />)}
          </div>
        </div>
        <div>
          <SectionTitle>Tools We Use</SectionTitle>
          <div className="flex flex-wrap gap-4 justify-center">
            {tools.map((tool) => <Pill key={tool} text={tool} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesAndTools;
