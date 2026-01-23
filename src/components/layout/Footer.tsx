import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { FooterContactForm } from '../contact/FooterContactForm';

export const Footer = () => {
  return (
    <footer id="footer-form" className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden text-white pt-48 pb-12">
      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#ECE6E8] to-transparent z-10 pointer-events-none" />

      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images/gradients/abstract-gradient-background-with-grain-texture-captivating-noise-airbrush-minimalist-wallpaper.jpg')" 
        }}
      />
      
      {/* Dark Overlay for better text contrast if needed, though the image seems dark at bottom */}
      <div className="absolute inset-0 z-0 bg-black/10" />

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Form */}
        <div className="w-full mb-16">
          <FooterContactForm />
        </div>

      </div>

      {/* Footer Navigation (Bottom Center) */}
      <div className="relative z-10 w-full px-8 md:px-16 flex justify-center">
        <div className="flex flex-wrap justify-center gap-8 text-white/60 text-sm font-sans font-medium tracking-wide">
          <Link to="/#about" className="hover:text-white transition-colors">ABOUT</Link>
          <a href="/#work" className="hover:text-white transition-colors">WORK</a>
          <a href="/#features" className="hover:text-white transition-colors">FEATURES</a>
          <a href="/#pricing" className="hover:text-white transition-colors">PRICING</a>
          <Link to="/legal" className="hover:text-white transition-colors">LEGAL</Link>
        </div>
      </div>
    </footer>
  );
};
