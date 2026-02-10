import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../../ui/Button';

const essentialFeatures = [
  "14 天快速交付",
  "5 页响应式网站",
  "高性能 Vercel 托管",
  "为您代劳的 AI 文案创作",
  "2 轮修改机会",
  "2 周上线后支持"
];

const professionalFeatures = [
  "包含基础版所有功能，外加：",
  "全套品牌视觉设计",
  "高级正版库存图片",
  "品牌语调指南",
  "4 个社交媒体模板",
  "4 周上线后支持",
  "优先邮件支持"
];

const carePlanFeatures = [
  "托管维护",
  "每月备份",
  "安全更新",
  "每月 2 小时内容更新",
  "优先邮件支持",
  "每月进度检查"
];

export const PricingSectionZH = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#ECE6E8]">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
           <div className="inline-block px-4 py-1.5 rounded-full bg-[#9c9c9c] text-white text-xs font-medium mb-6 uppercase tracking-wider">
              套餐价格
           </div>
           <h2 className="text-5xl md:text-7xl font-sans font-medium text-text-dark mb-4 tracking-tight">
             简单明了的<span className="font-serif italic font-normal">定价</span>
           </h2>
           <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto">
             无隐藏费用。无复杂的套餐。只有包含一切的透明价格。
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
              <h3 className="text-3xl font-accent font-bold text-text-dark mb-6">基础版</h3>
              <p className="text-text-muted text-base mb-6">适合初创起步。</p>
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
              
              <a href="#footer-form" onClick={(e) => {
                e.preventDefault();
                document.getElementById('footer-form')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-6 text-base font-medium flex items-center gap-2">
                  立即开始 <ArrowRight size={18} />
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
                最受欢迎
              </div>
            </div>

            {/* Header Area */}
            <div className="mb-6">
              <h3 className="text-3xl font-accent font-bold text-white mb-6">专业版</h3>
              <p className="text-white/70 text-base mb-6">适合准备扩张的品牌。</p>
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
              
              <a href="#footer-form" onClick={(e) => {
                e.preventDefault();
                document.getElementById('footer-form')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-6 py-6 text-base font-medium flex items-center gap-2">
                  立即开始 <ArrowRight size={18} />
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
              <h3 className="text-3xl font-accent font-bold text-text-dark mb-2">网站维护计划</h3>
              <p className="text-text-muted text-base mb-8">可选的定期服务，为您提供持续支持，让您省心无忧。</p>
              
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
                  <span className="text-text-muted text-base">/月</span>
                </div>
                <p className="text-text-muted text-sm mt-2">小幅更新、优先支持、省心无忧。</p>
              </div>
              
              <a href="#footer-form" onClick={(e) => {
                e.preventDefault();
                document.getElementById('footer-form')?.scrollIntoView({ behavior: 'smooth' });
              }} className="w-full md:w-auto">
                <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-6 text-base font-medium flex items-center gap-2 justify-center w-full md:w-auto">
                  立即开始 <ArrowRight size={18} />
                </Button>
              </a>
           </div>
        </motion.div>
      </div>
    </section>
  );
};
