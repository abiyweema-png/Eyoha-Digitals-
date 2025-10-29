
import React from 'react';

const portfolioItems = [
  {
    client: 'Amin General Hospital',
    service: 'Content Development',
    icon: 'fas fa-hospital-user',
  },
  {
    client: 'Seben Dental Clinic',
    service: 'Content Development',
    icon: 'fas fa-tooth',
  },
  {
    client: 'Maki Interior Design',
    service: 'Meta Ad Campaign',
    icon: 'fas fa-couch',
  },
  {
    client: 'Safe Furniture',
    service: 'Full Social Media Marketing',
    icon: 'fas fa-chair',
  },
  {
    client: 'Beltech Solution',
    service: 'Digital Strategy & Services',
    icon: 'fas fa-cogs',
  },
  {
    client: 'Skillbridge Institute of Technology',
    service: 'Educational Content Marketing',
    icon: 'fas fa-graduation-cap',
  },
];


const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
      {children}
      <div className="w-20 h-1 bg-accent mx-auto mt-3"></div>
    </h2>
);

const PortfolioCard: React.FC<{ item: typeof portfolioItems[0] }> = ({ item }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-5">
        <div className="flex-shrink-0">
            <i className={`${item.icon} text-4xl text-secondary w-12 text-center`}></i>
        </div>
        <div>
            <h4 className="font-bold text-lg text-primary">{item.client}</h4>
            <p className="text-gray-600">{item.service}</p>
        </div>
    </div>
);

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-light-gray">
      <div className="max-w-6xl mx-auto px-5">
        <SectionTitle>Our Work</SectionTitle>
        <p className="text-center max-w-3xl mx-auto mb-12 text-gray-600">
          We are proud to have partnered with a diverse range of clients, from startups to established enterprises, to deliver outstanding digital results. Here are some of the great companies we've had the pleasure of working with.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map(item => <PortfolioCard key={item.client} item={item} />)}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;