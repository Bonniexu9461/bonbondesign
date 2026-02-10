import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { 
    q: "你们如何在短短 14 天内构建一个定制网站？", 
    a: "大多数机构节奏缓慢是因为他们受困于繁琐的手动编码和反复的邮件沟通。我使用先进的 AI 辅助开发技术栈，将编码中“无聊”的部分自动化。这让我能把 100% 的时间花在您的设计、品牌策略和用户体验上。通过更聪明地工作，我可以在两周内上线一个传统机构需要两个月才能完成的网站。" 
  },
  { 
    q: "这只是一个模板吗？", 
    a: "不。因为我使用的是全定制代码环境（而非受限的拖放式建站工具），您的网站是根据您的特定品牌量身定制的。我们从您的风格参考——您喜爱的网站和欣赏的美学——开始，我将为您构建一个反映您独特专业权威的定制化数字形象。" 
  },
  { 
    q: "在开始之前我需要提供什么？", 
    a: "为了维持 14 天的时间线，我需要在计时开始前收到填写完整的“调研问卷”和任何现有的品牌资产（如您的形象照）。不用担心文案——我使用 AI 辅助文案工具来帮助起草您的专业文本，然后我们再一起进行润色。" 
  },
  { 
    q: "我的网站托管在哪里？", 
    a: "我将所有网站托管在 Vercel 上，这是一个企业级的全球边缘网络。这意味着您的网站不仅仅是“在互联网上”——它运行在与全球最大品牌相同的高性能基础设施上。它确保了 99.9% 的在线率以及在移动端和桌面端的闪电加载速度。" 
  },
  { 
    q: "我能自己更新网站吗？", 
    a: "我使用高性能代码构建您的网站，而非受限的拖放式模板。虽然这让网站更快、更安全，但也意味着更新将通过我的“管家式维护服务”处理。每月只需 $199，我就能充当您的“随叫随到”开发人员——您只需通过邮件告诉我您的修改需求，它们将在 24 小时内上线。这确保了您的网站代码始终保持简洁、快速和专业，而您无需触碰任何技术细节。" 
  },
  { 
    q: "我的网站安全吗？", 
    a: "是的。与 WordPress 等容易受到攻击并需要不断更新插件的平台不同，我的技术栈是“无服务器”的。这种架构天生更安全，这意味着您永远不必担心安全补丁或因黑客攻击导致网站“宕机”。" 
  },
  { 
    q: "“战略品牌”套餐包含什么？", 
    a: "我们从头开始构建您的视觉识别系统。这包括专业的 Logo 系统、精心挑选的调色板、字体选择以及一份品牌指南 PDF。我们还提供“社交媒体启动包”，以便在您的新高端网站上线之日，您的 LinkedIn 和 Instagram 也能与之一致。" 
  },
  { 
    q: "如果我已经有一个心仪的 Logo 了怎么办？", 
    a: "我们绝对可以基于您现有的 Logo 进行创作！在这种情况下，我们将品牌冲刺的重点放在“升级”您的视觉生态系统上——优化您的颜色，完善您的字体，并确保您现有的品牌在现代数字语境下显得“高端”。" 
  }
];

export const FAQSectionZH = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans text-text-dark">
            常见<span className="font-serif italic font-normal">问题。</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200 last:border-0 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
              >
                <span className="text-lg font-medium text-text-dark group-hover:text-primary transition-colors">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`transform transition-transform duration-300 text-text-muted ${openIndex === idx ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-text-muted pb-4 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
