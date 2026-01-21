import React from 'react';
import { motion } from 'framer-motion';

export const AboutPage = () => {
  return (
    <div className="bg-background">
      <section className="pt-20 pb-12 md:pt-32 md:pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-8">Design for Pace</h1>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
              Bonbon Design was founded on a simple belief: high-end web design shouldn't take months.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative aspect-square md:aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden">
               {/* Placeholder for team/office image */}
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-text-muted">
                 Image Placeholder
               </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif">Our Mission</h2>
              <div className="space-y-6 text-text-muted text-lg">
                <p>
                  We noticed a gap in the market. Business owners were stuck between two options: 
                  cheap, generic templates that hurt their brand, or expensive agencies that took 
                  months to deliver.
                </p>
                <p>
                  We created the 7-Day Sprint to bridge that gap. We leverage modern tools like 
                  Framer and a streamlined process to deliver agency-quality results at a fraction 
                  of the time and cost.
                </p>
                <p>
                  Based in Brisbane, we help local and international businesses elevate their 
                  online presence without the headache of traditional development cycles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Speed", desc: "We respect your time. Deadlines are sacred." },
              { title: "Quality", desc: "Fast doesn't mean rushed. Every pixel is polished." },
              { title: "Transparency", desc: "Fixed price. Fixed timeline. No surprises." }
            ].map((value, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border border-gray-100">
                <h3 className="text-xl font-serif font-bold mb-4">{value.title}</h3>
                <p className="text-text-muted">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
