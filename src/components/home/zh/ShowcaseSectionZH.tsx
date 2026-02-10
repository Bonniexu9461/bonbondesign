import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const projects = [
  { 
    id: 1, 
    title: 'Clearpath Advisory', 
    category: '会计', 
    image: '/images/thumbnails/clearpath-advisory.png',
    link: 'https://clearpathadvisory.vercel.app',
    speed: 130
  },
  { 
    id: 2, 
    title: 'Banksia & Bloom', 
    category: '咖啡厅', 
    image: '/images/thumbnails/banksia-bloom.png',
    link: 'https://banksiaandbloom.vercel.app',
    speed: 120
  },
  { 
    id: 3, 
    title: 'Stillpoint', 
    category: '瑜伽工作室', 
    image: '/images/thumbnails/stillpoint-yoga.png',
    link: 'https://stillpointyoga.vercel.app',
    speed: 150
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  const animate = (time: number) => {
    if (lastTimeRef.current !== null) {
      const deltaTime = (time - lastTimeRef.current) / 1000;
      const containerHeight = containerRef.current?.clientHeight || 0;
      const contentHeight = innerRef.current?.scrollHeight || 0;
      const maxScroll = Math.max(0, contentHeight - containerHeight);

      if (maxScroll > 0) {
        setOffset((prevOffset) => {
          const newOffset = prevOffset + project.speed * deltaTime;
          return newOffset >= maxScroll ? maxScroll : newOffset;
        });
      }
    }
    lastTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isHovered) {
      lastTimeRef.current = performance.now();
      requestRef.current = requestAnimationFrame(animate);
    } else {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      lastTimeRef.current = null;
      setOffset(0);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isHovered]);

  return (
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full">
        <div 
          ref={containerRef}
          className="relative h-[280px] md:h-[450px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 bg-[#f2f2f2]"
        >
          <div 
            ref={innerRef}
            className="w-full will-change-transform"
            style={{ 
              transform: `translateY(-${offset}px)`,
              transition: isHovered ? 'none' : 'transform 500ms ease-out'
            }}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-auto block"
            />
          </div>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
          
          {/* View Project Badge */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <span className="bg-white/90 backdrop-blur-md text-black px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-xl">
              查看网站
            </span>
          </div>
        </div>
        
        <div className="mt-4 md:mt-6 px-2 flex justify-between items-center">
          <div>
            <h3 className="text-[#0D0D0D] text-base md:text-lg font-medium">{project.title}</h3>
            <p className="text-[#928D89] text-[10px] md:text-xs font-medium uppercase tracking-wider mt-1">{project.category}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export const ShowcaseSectionZH = () => {
  return (
    <section id="work" className="pt-8 pb-24 bg-[#ECE6E8] overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#9c9c9c] text-white text-xs font-medium mb-6 uppercase tracking-wider">作品</div>
        <h2 className="text-5xl md:text-7xl font-sans text-text-dark tracking-tight">
          我们的作品<span className="font-serif italic font-normal">一瞥</span>。
        </h2>
        <p className="text-text-muted mt-6 text-lg">将鼠标悬停在每个网站上以查看完整设计。</p>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
