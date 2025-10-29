import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
      {children}
      <div className="w-20 h-1 bg-accent mx-auto mt-3"></div>
    </h2>
);


const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-light-gray">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <SectionTitle>Let's Build Something Great</SectionTitle>
        <p className="text-lg text-gray-600 mb-8">
          Ready to elevate your digital presence? We're here to help. Reach out for a free, no-obligation consultation to discuss your project.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 my-8 text-lg">
          <div className="contact-item">
            <a href="mailto:eyohadigitals@gmail.com" className="hover:text-accent transition-colors">
              <i className="fas fa-envelope text-secondary mr-2"></i>
              eyohadigitals@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <a href="tel:+251945132441" className="hover:text-accent transition-colors">
              <i className="fas fa-phone text-secondary mr-2"></i>
              +251 945 132 441
            </a>
          </div>
           <div className="contact-item">
             <span className="text-gray-800">
                <i className="fas fa-map-marker-alt text-secondary mr-2"></i>
                Addis Ababa
             </span>
          </div>
        </div>

        <a href="mailto:eyohadigitals@gmail.com" className="bg-accent text-white font-semibold py-3 px-8 rounded-md hover:bg-accent-hover transition-colors duration-300 inline-block text-lg">
          Schedule Your Consultation
        </a>
      </div>
    </section>
  );
};

export default Contact;
