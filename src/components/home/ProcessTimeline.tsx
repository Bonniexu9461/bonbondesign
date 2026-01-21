import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { day: 'Day 1', title: 'Kickoff & Strategy', desc: 'We align on your goals, brand, and content.' },
  { day: 'Day 2–6', title: 'Design & Build', desc: 'We craft high-fidelity designs in Framer.' },
  { day: 'Day 7–11', title: 'Development & Polish', desc: 'We build interactions and responsive layouts.' },
  { day: 'Day 12–13', title: 'Review & Refine', desc: 'You review the site and we make final tweaks.' },
  { day: 'Day 14', title: 'Launch', desc: 'We connect your domain and go live to the world.' },
];

export const ProcessTimeline = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">The 14-Day Sprint</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            A transparent, streamlined process designed for speed and quality.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200 hidden md:block" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1 text-center md:text-left">
                    <div className={`p-6 bg-white rounded-2xl shadow-sm border border-gray-100 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">
                        {step.day}
                      </span>
                      <h3 className="text-xl font-serif font-bold mb-2">{step.title}</h3>
                      <p className="text-text-muted text-sm">{step.desc}</p>
                    </div>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold z-10 shrink-0 border-4 border-background">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
