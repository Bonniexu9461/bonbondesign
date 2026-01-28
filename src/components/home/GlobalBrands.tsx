import React from 'react';

export const GlobalBrands = () => {
  return (
    <div className="container mx-auto px-4 max-w-6xl mb-24 md:mb-32">
        <p className="text-center text-[#928D89] text-sm uppercase tracking-widest font-bold mb-10 md:mb-12">
          Working experience with global brands
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-24 px-4 md:px-0">
            <img 
              src="/images/clients/Raywhite.png" 
              alt="Ray White" 
              className="h-6 md:h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
            />
            <img 
              src="/images/clients/Entain.png" 
              alt="Entain" 
              className="h-6 md:h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
            />
            <img 
              src="/images/clients/Dominos.png" 
              alt="Domino's" 
              className="h-6 md:h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
            />
        </div>
    </div>
  );
};
