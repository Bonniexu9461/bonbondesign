import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { 
    id: 1, 
    title: 'Banksia & Bloom', 
    subtitle: 'Delicious bites, divine brews',
    category: 'Cafe', 
    image: '/images/thumbnails/banksia-bloom.png',
    link: 'https://banksiaandbloom.vercel.app' 
  },
  { 
    id: 2, 
    title: 'Stillpoint', 
    subtitle: 'BALANCE // calm // RECONNECT',
    category: 'Yoga Studio', 
    image: '/images/thumbnails/stillpoint-yoga.png',
    link: 'https://stillpointyoga.vercel.app' 
  },
  { 
    id: 3, 
    title: 'Clearpath', 
    subtitle: 'Simplify your financial responsibility',
    category: 'Accounting', 
    image: '/images/thumbnails/clearpath-advisory.png',
    link: 'https://clearpathadvisory.vercel.app' 
  },
];

// Duplicate projects to ensure smooth infinite scroll
const marqueeProjects = [...projects, ...projects, ...projects, ...projects];

export const ShowcaseSection = () => {
  return (
    <section id="work" className="py-24 bg-[#ECE6E8] overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#9c9c9c] text-white text-xs font-medium mb-6 uppercase tracking-wider">WORK</div>
        <h2 className="text-5xl md:text-7xl font-sans text-text-dark tracking-tight">
          A <span className="font-serif italic font-normal">taste</span> of what we do.
        </h2>
        <p className="text-text-muted mt-6 text-lg">Click the image below to explore the full website.</p>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks for fade effect at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#ECE6E8] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#ECE6E8] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          }}
        >
          {marqueeProjects.map((project, index) => (
            <a 
              key={`${project.id}-${index}`} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="w-[350px] md:w-[450px] cursor-pointer">
                <div className="h-[250px] md:h-[300px] rounded-[2rem] overflow-hidden relative shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                  {/* Image Background */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                  
                  {/* Content Overlay (Optional, if we want to keep the text over image style) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 py-2 rounded-full text-sm font-medium">
                        View Project
                    </span>
                  </div>
                  
                </div>
                <div className="flex justify-between items-center mt-6 px-2">
                  <p className="text-[#0D0D0D] text-lg font-medium">{project.title}</p>
                  <p className="text-[#928D89] text-xs font-medium uppercase tracking-wider">{project.category}</p>
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
