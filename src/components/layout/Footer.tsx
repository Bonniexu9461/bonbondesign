import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export const Footer = () => {
  return (
    <footer className="relative w-full h-screen min-h-[800px] flex flex-col justify-center items-center overflow-hidden text-white">
      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#ECE6E8] to-transparent z-10 pointer-events-none" />

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
        
        {/* Top Badge */}
        <div className="mb-8 inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>Hurry, only 3 spots left.</span>
        </div>

        {/* Headline */}
        <h2 className="text-6xl md:text-8xl lg:text-9xl tracking-tight mb-6">
          <span className="font-sans font-medium">Are you</span> <span className="font-serif italic font-normal">ready?</span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-sans font-normal">
          This could be the start of something big.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="https://tally.so/r/2EBZlV" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-[#8b31ff] hover:bg-[#7a2be0] text-white rounded-full px-10 py-6 text-lg shadow-xl border-none min-w-[200px]">
              Let's talk
            </Button>
          </a>
        </div>

      </div>

      {/* Footer Navigation (Bottom Center) */}
      <div className="absolute bottom-10 w-full px-8 md:px-16 flex justify-center">
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
