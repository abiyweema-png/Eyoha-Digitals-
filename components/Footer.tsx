
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white text-center py-10">
      <div className="max-w-6xl mx-auto px-5">
        <p className="opacity-80">
          &copy; {currentYear} Eyoha Digitals. All Rights Reserved.
        </p>
        <p className="text-sm opacity-60 mt-2">
          Addis Ababa, Ethiopia
        </p>
      </div>
    </footer>
  );
};

export default Footer;
