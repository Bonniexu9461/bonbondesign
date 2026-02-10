import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { Button } from '../../ui/Button';

// Import Lottie JSONs
import arrowAnim from '../../../assets/lottie/wired-gradient-212-arrow-1-rounded-hover-pinch.json';
import clockAnim from '../../../assets/lottie/wired-gradient-45-clock-time-hover-pinch.json';
import pigAnim from '../../../assets/lottie/wired-gradient-453-savings-pig-hover-pinch.json';
import wandAnim from '../../../assets/lottie/wired-gradient-2844-magic-wand-hover-pinch.json';
import editAnim from '../../../assets/lottie/wired-gradient-35-edit-hover-circle.json';
import giftAnim from '../../../assets/lottie/wired-gradient-412-gift-hover-squeeze.json';

const features = [
  {
    id: 1,
    title: "极致的速度",
    desc: "14 天交付不仅是快，更是您的竞争优势。在商业世界中，“快且高质”是制胜的罕见组合。",
    animation: clockAnim,
  },
  {
    id: 2,
    title: "AI 辅助创作",
    desc: "我们利用 AI 处理重复性的繁琐工作，从而可以专注于最重要的部分：您品牌的视觉、调性和故事。自动化为设计服务，而非本末倒置。",
    animation: wandAnim,
  },
  {
    id: 3,
    title: "一站式交付",
    desc: "无需为内容或图片发愁。我们处理所有重活：AI 起草的文案（经我们润色）、专业的品牌设计、甚至是您的 Logo 和品牌指南。您只需带上愿景，剩下的交给我们。",
    animation: giftAnim,
  },
  {
    id: 4,
    title: "技术前瞻性",
    desc: "Vercel 托管意味着企业级的速度、安全性和 SEO —— 这是驱动全球最快网站的基础设施。您的网站不仅看起来高端，性能也同样卓越。",
    animation: pigAnim,
  },
  {
    id: 5,
    title: "极简流程",
    desc: "调研问卷 → 网站构建 → 正式交付。没有无休止的会议，没有混乱的反馈循环，没有需求蔓延。只有清晰、速度和结果。",
    animation: arrowAnim,
  },
  {
    id: 6,
    title: "包含多轮修改",
    desc: "提供两轮全面的微调。我们持续优化，直到您真正满意，而不仅仅是“还行”。您的反馈将塑造最终的产品。",
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

export const FeaturesSectionZH = () => {
  return (
    <section id="features" className="py-16 md:py-24 md:px-4 px-0 relative">
      <div className="container mx-auto max-w-6xl relative px-4 md:px-0">
        
        <div className="bg-white rounded-[2rem] p-8 md:p-20 shadow-xl relative z-10">
            
            <div className="text-center mb-12 md:mb-16">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#9c9c9c] text-white text-xs font-medium mb-6 uppercase tracking-wider">
                  服务特色
                </div>
                <h2 className="text-5xl md:text-7xl font-sans font-medium text-text-dark mb-6 tracking-tight">
                  选择我们的<span className="font-serif italic font-normal">理由</span>。
                </h2>
                <p className="text-text-muted text-lg md:text-xl">
                  拥有完美线上形象所需的一切，绝无多余负担。
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
                {features.map((feature) => (
                    <FeatureCard key={feature.id} feature={feature} />
                ))}
            </div>

            <div className="text-center">
                <a href="#pricing">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-5 text-lg shadow-lg shadow-purple-500/20">
                      查看价格
                    </Button>
                </a>
            </div>

            <div className="absolute -top-12 -right-12 w-48 h-48 hidden lg:block pointer-events-none rotate-12">
               <img src="/images/smiley-face-v2.png" alt="Decorative Smiley" className="w-full h-full object-contain drop-shadow-md mix-blend-multiply" />
            </div>

             <div className="absolute -bottom-12 -left-12 w-48 h-48 hidden lg:block pointer-events-none -rotate-12">
               <img src="/images/smiley-face-v2.png" alt="Decorative Smiley" className="w-full h-full object-contain drop-shadow-md mix-blend-multiply" />
            </div>

        </div>
      </div>
    </section>
  );
};
