import React from 'react';
import { GlobalBrands } from './GlobalBrands';

export const AboutSection = () => {
  return (
    <section id="about" className="pt-0 pb-8 md:pb-12 bg-[#ECE6E8] -mt-56 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl mb-24 md:mb-32">
        {/* Top Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="flex justify-center mb-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#9c9c9c] text-white text-xs font-medium mb-6 uppercase tracking-wider">
              About
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-sans font-medium text-[#0D0D0D] leading-none mb-2 tracking-tight">
            The Bridge Between
          </h2>
          <div className="relative inline-block mt-2">
            <span className="font-serif italic font-normal text-5xl md:text-7xl text-[#0D0D0D]">
              <span className="relative inline-block">
                DIY
                <span className="absolute top-[55%] left-[-5%] w-[110%] h-[3px] bg-[#8A8A8A] -translate-y-1/2 transform" />
              </span>
              <span className="font-sans not-italic font-medium mx-4">and</span>
              <span className="relative inline-block">
                Big Agency.
                <span className="absolute top-[55%] left-[-5%] w-[110%] h-[3px] bg-[#8A8A8A] -translate-y-1/2 transform" />
              </span>
            </span>
          </div>
        </div>

        {/* Two Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Content */}
          <div className="space-y-8 pr-0 lg:pr-8">
            <div className="space-y-6 text-[#928D89] text-[16px] leading-relaxed font-sans">
              <p className="font-bold text-[#0D0D0D]">
                I know the value of your time.
              </p>
              <p>
                I started Bonbon Design because Brisbane businesses were getting stuck—paying $5k+ to agencies for slow results, or struggling with DIY builders that never looked right.
              </p>
              <p>
                As a designer and mum, I prioritize efficiency. No endless meetings or 3-month delays. Just high-care, professional websites delivered in 14 days.
              </p>

              <div className="pt-12 mt-12 border-t border-[#0D0D0D]/10">
                <div className="flex flex-col gap-1">
                  <p className="font-serif italic text-[32px] text-[#0D0D0D]">Bonnie</p>
                  <p className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#928D89] uppercase">Founder & Lead Designer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bonnie's Portrait */}
          <div className="relative h-full min-h-[500px] rounded-[1.5rem] overflow-hidden shadow-2xl">
            <img 
              src="/images/bonnie-portrait.jpg" 
              alt="Bonnie - Founder & Lead Designer" 
              className="absolute inset-0 w-full h-full object-cover object-[center_80%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      <GlobalBrands />
    </section>
  );
};
