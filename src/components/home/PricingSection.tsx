import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const essentialFeatures = [
  "14-day rapid delivery",
  "5-page responsive website",
  "High-performance Vercel hosting",
  "Done-for-you AI content writing",
  "2 revision rounds",
  "2 weeks post-launch support"
];

const professionalFeatures = [
  "Everything in Essential, plus:",
  "Full brand identity design",
  "Premium licensed stock imagery",
  "Done-for-you brand voice guidelines",
  "4 social media templates",
  "4 weeks post-launch support",
  "Priority email support"
];

const carePlanFeatures = [
  "Hosting management",
  "Monthly backups",
  "Security updates",
  "2 hours content updates/month",
  "Priority email support",
  "Monthly check-in"
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#ECE6E8]">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
           <div className="inline-block px-4 py-1.5 rounded-full bg-[#9c9c9c] text-white text-xs font-medium mb-6 uppercase tracking-wider">
              Pricing
           </div>
           <h2 className="text-5xl md:text-7xl font-sans font-medium text-text-dark mb-4 tracking-tight">
             Pricing That's So <span className="font-serif italic font-normal">Simple</span>
           </h2>
           <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto">
             No hidden fees. No confusing packages. Just one price that includes everything.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch mb-16">
          
          {/* Essential Tier - Light Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[2rem] p-10 shadow-lg border border-gray-100 flex flex-col h-full relative"
          >
            {/* Header Area */}
            <div className="mb-6">
              <h3 className="text-3xl font-accent font-bold text-text-dark mb-6">Essential</h3>
              <p className="text-text-muted text-base mb-6">Perfect for getting started.</p>
              {/* Divider */}
              <div className="w-full h-px bg-gray-200" />
            </div>
            
            {/* Features */}
            <div className="space-y-4 mb-8 flex-grow">
              {essentialFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-text-dark" />
                  </div>
                  <span className="text-text-dark text-base">{feat}</span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-200 mb-8" />

            {/* Bottom Row */}
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-medium text-text-dark">$2,899</span>
              
              <a href="https://tally.so/r/2EBZlV" target="_blank" rel="noopener noreferrer">
                <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-6 text-base font-medium flex items-center gap-2">
                  Get Started <ArrowRight size={18} />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Professional Tier - Dark Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#0f0f0f] rounded-[2rem] p-10 shadow-xl flex flex-col h-full text-white relative overflow-hidden"
          >
            {/* Badge */}
            <div className="mb-4">
              <div className="inline-block px-3 py-1 rounded-full border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                MOST POPULAR
              </div>
            </div>

            {/* Header Area */}
            <div className="mb-6">
              <h3 className="text-3xl font-accent font-bold text-white mb-6">Professional</h3>
              <p className="text-white/70 text-base mb-6">For brands ready to scale.</p>
              {/* Divider */}
              <div className="w-full h-px bg-white/10" />
            </div>
              
            {/* Features - Single Column */}
            <div className="space-y-4 mb-8 flex-grow">
              {professionalFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-black">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-white/90 text-sm font-medium">{feat}</span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10 mb-8" />

            {/* Bottom Row */}
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-medium text-white">$5,499</span>
              
              <a href="https://tally.so/r/2EBZlV" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-6 py-6 text-base font-medium flex items-center gap-2">
                  Get started <ArrowRight size={18} />
                </Button>
              </a>
            </div>
          </motion.div>

        </div>

        {/* Website Care Plan - Full Width Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-[2rem] p-10 shadow-lg border border-gray-100 w-full flex flex-col md:flex-row gap-8 md:items-center"
        >
           {/* Left: Content */}
           <div className="flex-grow">
              <h3 className="text-3xl font-accent font-bold text-text-dark mb-2">Website Care Plan</h3>
              <p className="text-text-muted text-base mb-8">Optional recurring service for ongoing support and peace of mind.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {carePlanFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0">
                      <Check size={16} className="text-text-dark" />
                    </div>
                    <span className="text-text-dark text-base">{feat}</span>
                  </div>
                ))}
              </div>
           </div>

           {/* Right: Price & Action */}
           <div className="flex flex-col gap-6 md:items-end min-w-[240px] border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-10">
              <div className="text-left md:text-right">
                <div className="flex items-baseline md:justify-end gap-1">
                  <span className="text-2xl font-medium text-text-dark">$199</span>
                  <span className="text-text-muted text-base">/month</span>
                </div>
                <p className="text-text-muted text-sm mt-2">Minor updates, priority support, peace of mind.</p>
              </div>
              
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-6 text-base font-medium flex items-center gap-2 justify-center w-full md:w-auto">
                Get Started <ArrowRight size={18} />
              </Button>
           </div>
        </motion.div>
      </div>
    </section>
  );
};
