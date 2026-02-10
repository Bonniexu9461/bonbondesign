import React from 'react';
import { GlobalBrands } from '../GlobalBrands';

export const AboutSectionZH = () => {
  return (
    <section id="about" className="pt-0 pb-8 md:pb-12 bg-[#ECE6E8] -mt-56 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl mb-24 md:mb-32">
        {/* Top Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="flex justify-center mb-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#9c9c9c] text-white text-xs font-medium mb-6 uppercase tracking-wider">
              关于
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-sans font-medium text-[#0D0D0D] leading-none mb-2 tracking-tight">
            连接
          </h2>
          <div className="relative inline-block mt-2">
            <span className="font-serif italic font-normal text-5xl md:text-7xl text-[#0D0D0D]">
              <span className="relative inline-block">
                DIY
                <span className="absolute top-[55%] left-[-5%] w-[110%] h-[3px] bg-[#8A8A8A] -translate-y-1/2 transform" />
              </span>
              <span className="font-sans not-italic font-medium mx-4">与</span>
              <span className="relative inline-block">
                大型机构
                <span className="absolute top-[55%] left-[-5%] w-[110%] h-[3px] bg-[#8A8A8A] -translate-y-1/2 transform" />
              </span>
            </span>
            <span className="text-5xl md:text-7xl font-sans font-medium text-[#0D0D0D] ml-4">的桥梁</span>
          </div>
        </div>

        {/* Two Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Content */}
          <div className="space-y-8 pr-0 lg:pr-8">
            <div className="space-y-6 text-[#928D89] text-[16px] leading-relaxed font-sans">
              <p className="font-bold text-[#0D0D0D]">
                我深知您时间的价值。
              </p>
              <p>
                我创立 Bonbon Design 是因为布里斯班的企业主们正面临两难——要么支付 $5,000+ 给节奏缓慢的大型机构，要么在 DIY 建站工具中挣扎，却始终无法达到理想效果。
              </p>
              <p>
                作为一名设计师，同时也是一位母亲，我更看重效率。没有无休止的会议，也没有长达 3 个月的延迟。只有高标准、专业的网站，在 14 天内交付。
              </p>

              <div className="pt-12 mt-12 border-t border-[#0D0D0D]/10">
                <div className="flex flex-col gap-1">
                  <p className="font-serif italic text-[32px] text-[#0D0D0D]">Bonnie</p>
                  <p className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#928D89] uppercase">创始人 & 首席设计师</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bonnie's Portrait */}
          <div className="relative h-full min-h-[500px] rounded-[1.5rem] overflow-hidden shadow-2xl">
            <img 
              src="/images/bonnie-portrait.jpg" 
              alt="Bonnie - 创始人 & 首席设计师" 
              className="absolute inset-0 w-full h-full object-cover object-[center_80%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      <GlobalBrands />
    </section>
  );
};
