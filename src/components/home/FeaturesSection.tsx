import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

// Import Lottie JSONs
import arrowAnim from '../../assets/lottie/wired-gradient-212-arrow-1-rounded-hover-pinch.json';
import clockAnim from '../../assets/lottie/wired-gradient-45-clock-time-hover-pinch.json';
import pigAnim from '../../assets/lottie/wired-gradient-453-savings-pig-hover-pinch.json';
import wandAnim from '../../assets/lottie/wired-gradient-2844-magic-wand-hover-pinch.json';
import editAnim from '../../assets/lottie/wired-gradient-35-edit-hover-circle.json';
import giftAnim from '../../assets/lottie/wired-gradient-412-gift-hover-squeeze.json';

const features = [
  {
    id: 1,
    title: "Speed as a Luxury",
    desc: "14-day delivery isn't just fast—it's a competitive advantage. In a world where business moves at lightning speed, \"Fast & High Quality\" is the rare combination that wins.",
    animation: clockAnim,
  },
  {
    id: 2,
    title: "AI-Augmented Focus",
    desc: "We use AI to handle the repetitive grunt work—so we can obsess over what matters: your brand's look, feel, and story. Automation serves design, not the other way around.",
    animation: wandAnim,
  },
  {
    id: 3,
    title: "Everything You Need",
    desc: "No scrambling for content or imagery. We handle the heavy lifting: AI-drafted copy (polished by us), professional branding, even your logo and brand guidelines. Show up with a vision; we'll handle the rest.",
    animation: giftAnim,
  },
  {
    id: 4,
    title: "Technical Sophistication",
    desc: "Vercel hosting means enterprise-grade speed, security, and SEO—the infrastructure that powers the web's fastest sites. Your website won't just look premium; it'll perform like it.",
    animation: pigAnim,
  },
  {
    id: 5,
    title: "Simple Process",
    desc: "Questionnaire → Build → Deliver. No endless meetings, no confusing feedback loops, no scope creep. Just clarity, speed, and results.",
    animation: arrowAnim,
  },
  {
    id: 6,
    title: "Revisions Included",
    desc: "Two comprehensive rounds of tweaks. We refine until you're genuinely happy—not just \"good enough.\" Your feedback shapes the final product.",
    animation: editAnim,
  },
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => lottieRef.current?.play()}
      onMouseLeave={() => lottieRef.current?.stop()}
      className="flex flex-col items-center text-center p-8 border border-gray-200 rounded-[2rem] hover:shadow-lg transition-shadow duration-300 bg-white h-full"
    >
      <div className="w-24 h-24 mb-6">
        <Lottie
          lottieRef={lottieRef}
          animationData={feature.animation}
          loop={true}
          autoplay={false}
          className="w-full h-full"
        />
      </div>
      <h3 className="text-2xl font-sans font-medium text-text-dark mb-4">{feature.title}</h3>
      <p className="text-text-muted text-sm leading-relaxed max-w-[250px]">
        {feature.desc}
      </p>
    </motion.div>
  );
};

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 md:px-4 px-0 relative">
      <div className="container mx-auto max-w-6xl relative px-4 md:px-0">
        
        {/* Main Card Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-20 shadow-xl relative z-10">
            
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#9c9c9c] text-white text-xs font-medium mb-6 uppercase tracking-wider">
                  Features
                </div>
                <h2 className="text-5xl md:text-7xl font-sans font-medium text-text-dark mb-6 tracking-tight">
                  Reasons you will <span className="font-serif italic font-normal">love</span> us.
                </h2>
                <p className="text-text-muted text-lg md:text-xl">
                  Everything you need to get online properly. Nothing you don't.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
                {features.map((feature) => (
                    <FeatureCard key={feature.id} feature={feature} />
                ))}
            </div>

            {/* Bottom Button */}
            <div className="text-center">
                <a href="#pricing">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-5 text-lg shadow-lg shadow-purple-500/20">
                      See pricing
                    </Button>
                </a>
            </div>

            {/* Decorative Crown - Top Right */}
            <div className="absolute -top-12 -right-12 w-48 h-48 hidden lg:block pointer-events-none rotate-12">
               <img src="/images/smiley-face-v2.png" alt="Decorative Smiley" className="w-full h-full object-contain drop-shadow-md mix-blend-multiply" />
            </div>

             {/* Decorative Crown - Bottom Left (Simulated) */}
             <div className="absolute -bottom-12 -left-12 w-48 h-48 hidden lg:block pointer-events-none -rotate-12">
               <img src="/images/smiley-face-v2.png" alt="Decorative Smiley" className="w-full h-full object-contain drop-shadow-md mix-blend-multiply" />
            </div>

        </div>
      </div>
    </section>
  );
};
