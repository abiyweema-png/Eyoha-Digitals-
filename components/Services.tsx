
import React from 'react';
import type { Service } from '../types';

const services: Service[] = [
  {
    icon: 'fas fa-bullhorn',
    title: 'Digital Marketing Strategy',
    description: 'We craft comprehensive, data-driven strategies to guide your online presence and achieve your business goals.',
    features: ['Market Research', 'Competitor Analysis', 'Content Strategy', 'Funnel Optimization'],
  },
  {
    icon: 'fas fa-search-dollar',
    title: 'PPC & SEO',
    description: 'Drive targeted traffic and increase organic visibility with our expert search engine marketing services.',
    features: ['Google Ads', 'Keyword Research', 'On-Page & Off-Page SEO', 'Technical SEO Audits'],
  },
  {
    icon: 'fas fa-share-alt',
    title: 'Social Media Management',
    description: 'Build and engage your community across all relevant platforms with compelling content and campaigns.',
    features: ['Content Creation', 'Community Management', 'Social Media Advertising', 'Influencer Marketing'],
  },
  {
    icon: 'fas fa-code',
    title: 'Web & App Development',
    description: 'We build beautiful, responsive, and high-performing websites and mobile applications that convert.',
    features: ['UI/UX Design', 'eCommerce Solutions', 'Custom Web Apps', 'Mobile App Development'],
  },
  {
    icon: 'fas fa-pen-nib',
    title: 'Content Creation',
    description: 'From blog posts to videos, our creative team produces high-quality content that resonates with your audience.',
    features: ['Copywriting', 'Graphic Design', 'Video Production', 'Photography'],
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Analytics & Reporting',
    description: 'We track what matters, providing you with clear, actionable insights to measure ROI and inform decisions.',
    features: ['Google Analytics', 'Custom Dashboards', 'Performance Reporting', 'Conversion Rate Optimization'],
  },
];

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
      {children}
      <div className="w-20 h-1 bg-accent mx-auto mt-3"></div>
    </h2>
);

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
    <i className={`${service.icon} text-4xl text-accent mb-4`}></i>
    <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
    <p className="text-gray-600 mb-4">{service.description}</p>
    <ul className="space-y-2">
      {service.features.map((feature) => (
        <li key={feature} className="flex items-start">
          <span className="text-accent font-bold mr-2">✓</span>
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-light-gray">
      <div className="max-w-6xl mx-auto px-5">
        <SectionTitle>Our Services</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
