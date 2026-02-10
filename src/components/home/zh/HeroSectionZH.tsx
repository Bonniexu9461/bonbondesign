import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../../ui/Button';

export const HeroSectionZH = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -450]);

  return (
    <section className="relative pt-16 md:pt-32 px-4 flex flex-col items-center justify-start overflow-hidden bg-[#ECE6E8] pb-0">
      
      <div className="container mx-auto max-w-5xl text-center relative z-10 pb-0">
        
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-sans font-medium tracking-tight text-text-dark mb-8 leading-[1.05]"
        >
          完成网站建设 <br />
          最<span className="font-serif italic font-normal">甜蜜</span>的方式
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-text-muted text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-normal"
        >
          专业的 AI 辅助网站建设，14 天交付。$2,899 起。无惊喜，无烦恼 —— 只有结果。
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-row items-center justify-center gap-3 md:gap-6 mb-12 flex-nowrap"
        >
          <a href="#footer-form" onClick={(e) => {
            e.preventDefault();
            document.getElementById('footer-form')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 md:px-12 py-5 md:py-6 text-base md:text-xl shadow-lg shadow-purple-500/20 whitespace-nowrap">
              预约 15 分钟咨询
            </Button>
          </a>
          <a href="#pricing" onClick={(e) => {
            e.preventDefault();
            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <Button variant="secondary" size="lg" className="rounded-full px-6 md:px-12 py-5 md:py-6 text-base md:text-xl bg-[#808080] text-white hover:bg-[#666666] shadow-lg shadow-gray-400/20 whitespace-nowrap">
              查看价格
            </Button>
          </a>
        </motion.div>

      </div>

      {/* Bottom Gradient Graphic Band */}
      <motion.div
        style={{ y }}
        className="relative z-20 w-full max-w-6xl mx-auto mb-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full h-[600px] rounded-[2rem] overflow-hidden shadow-2xl relative"
        >
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/gradients/8169770.jpg')" }}
          />
          
          {/* Grain Overlay */}
          <div className="absolute inset-0 bg-white/5 mix-blend-overlay" />

          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4a4640] text-white text-sm font-medium mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="tracking-wide">抓紧时间，仅剩 3 个名额</span>
            </div>
            
            {/* Headline */}
            <h2 className="text-6xl md:text-8xl text-white font-sans font-semibold tracking-tight leading-tight drop-shadow-sm">
              加入 bonbon
            </h2>
            
            {/* Subheadline */}
            <p className="text-white/90 mt-4 font-sans text-xl md:text-2xl font-normal tracking-wide drop-shadow-sm">
              一个网站。两周时间。
            </p>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
};
