
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-primary text-white min-h-[90vh] flex items-center text-center">
      <div className="max-w-6xl mx-auto px-5 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">Proudly Local, Boldly Global.</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90">
          We're Eyoha Digitals, a full-service digital agency in Addis Ababa helping ambitious brands build their digital presence, grow their audience, and drive measurable results.
        </p>
        <a href="#contact" className="bg-accent text-white font-semibold py-3 px-8 rounded-md hover:bg-accent-hover transition-colors duration-300 text-lg">
          Get Your Free Consultation
        </a>
      </div>
    </section>
  );
};

export default Hero;
