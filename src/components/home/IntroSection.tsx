import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const IntroSection = () => {
  return (
    <section className="py-24 bg-background text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-text-muted text-xs font-medium mb-6 uppercase tracking-wider">
            About
          </div>
          
          <h2 className="text-4xl md:text-5xl font-sans mb-6 text-text-dark">
            Hi, I'm <span className="font-serif italic font-normal">Bonbon.</span>
          </h2>
          
          <p className="text-text-muted text-lg mb-8 leading-relaxed">
            I started Bonbon Design because I saw too many businesses struggling with web projects 
            dragging on for months. I offer a streamlined 14-day sprint to deliver professional results 
            without the usual hassle or endless meetings. One designer, two weeks, beautiful results.
          </p>
          
          <div className="flex flex-row items-center justify-center gap-3">
            <Button size="sm" className="rounded-full bg-text-dark text-white hover:bg-black/80 px-6">
              Get started
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full text-text-muted hover:bg-gray-100 px-6">
              See work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
