import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const StatementSection = () => {
  return (
    <section className="py-24 bg-[#ECE6E8] px-4 relative">
      <div className="container mx-auto max-w-6xl relative">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#9c9c9c] text-white text-xs font-medium mb-8 uppercase tracking-wider">BENEFITS</div>
          
          <h2 className="text-5xl md:text-7xl font-sans font-medium text-text-dark mb-8 tracking-tight">
            Our <span className="font-serif italic font-normal">"Unfair"</span> Difference
          </h2>
          
          <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Most agencies juggle dozens of clients at once. You become a ticket number, waiting in a queue, getting whoever's available that day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Testimonial Card (Spans 7 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 w-full"
          >
            <div className="relative rounded-[2rem] overflow-hidden min-h-[500px] p-10 flex flex-col justify-between">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2a1b3d] to-[#5a3a2a]" />
              
              {/* Noise/Grain Overlay (Optional) */}
              <div className="absolute inset-0 opacity-20 bg-noise mix-blend-overlay pointer-events-none" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-8">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} size={20} className="fill-white text-white" />
                    ))}
                  </div>
                  
                  <blockquote className="text-white text-lg md:text-xl leading-relaxed font-medium font-accent mb-12">
                    "Working with Bonbon was a total game-changer. I needed a high-end site but couldn't wait months for a traditional agency. She delivered a stunning, professional site in exactly 14 days. The process was so organized, and the quality is corporate-level. Highly recommended for any business owner who values their time!"
                  </blockquote>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                    {/* Placeholder for Sarah J */}
                    <img 
                      src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=portrait%20photo%20of%20a%20real%20caucasian%20woman%20in%20her%2030s%2C%20natural%20makeup%2C%20soft%20daylight%2C%20authentic%20smile%2C%20casual%20professional%20look%2C%20high%20resolution%2C%20sharp%20focus%2C%20shallow%20depth%20of%20field&image_size=square" 
                      alt="Sarah J" 
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Sarah J</div>
                    <div className="text-white/60 text-sm">Boutique Business Owner</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Features (Spans 5 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-16 lg:pl-8 py-8"
          >
            {/* Feature 1 */}
            <div>
              <h3 className="text-2xl font-bold font-accent text-text-dark mb-6">The AI Advantage</h3>
              <p className="text-text-muted text-lg leading-relaxed">
                Most "fast" web builders lock you into templates. We use AI to build your site from scratch—custom code, tailored to your brand. The result? A bespoke website that's uniquely yours, not a cookie-cutter template everyone else has.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <h3 className="text-2xl font-bold font-accent text-text-dark mb-6">Taste-Driven Curation</h3>
              <p className="text-text-muted text-lg leading-relaxed">
                We don't just use AI and call it done. We curate it. We bridge the gap between robotic AI output and beautiful, professional design. By letting AI handle the heavy lifting, we have the mental space to obsess over typography, imagery, spacing, and how everything feels.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
