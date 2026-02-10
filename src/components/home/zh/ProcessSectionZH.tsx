import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, FileText, Code, Palette, Rocket, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { Button } from '../../ui/Button';

const defaultSteps = [
  {
    icon: FileText,
    day: "第 0 天",
    title: "项目对接",
    description: "您填写调研问卷并上传品牌资产。只有在我们获得所需资料后，计时才会开始。"
  },
  {
    icon: Code,
    day: "第 1–5 天",
    title: "网站构建",
    description: "我们利用 AI 构建核心结构，然后手动编写您独特的社交元素代码。拒绝模板，唯快不破。"
  },
  {
    icon: Palette,
    day: "第 6–13 天",
    title: "精雕细琢",
    description: "我们共同审阅实时演示。您可以进行两轮快速修改，调整文字、图片和布局。"
  },
  {
    icon: Rocket,
    day: "第 14 天",
    title: "正式上线",
    description: "最终检查已完成。我们在 Vercel 上开启上线开关，您的高性能网站即刻面向全球发布。"
  }
];

export const ProcessSectionZH = () => {
  const [industry, setIndustry] = useState("");
  const [loading, setLoading] = useState(false);
  const [steps, setSteps] = useState(defaultSteps);
  const [isPersonalized, setIsPersonalized] = useState(false);

  const handleReset = () => {
    setIndustry("");
    setSteps(defaultSteps);
    setIsPersonalized(false);
  };

  const getIndustryContent = (industryType: string) => {
    const lowerIndustry = industryType.toLowerCase();
    
    if (lowerIndustry.includes('lawyer') || lowerIndustry.includes('律师') || lowerIndustry.includes('legal')) {
      return {
        day0: { title: "法律咨询启动", description: "我们接收您的个人形象照、律师执业资格、事务所历史及核心业务领域内容，开始构建站点结构。" },
        day1_5: { title: "核心法理构建", description: "构建核心站点结构，包括专门的业务领域落地页和用于线索获取的安全律师联系表单。" },
        day6_13: { title: "公信力审计与完善", description: "完成 ADA 合规性检查，优化个人简历页面，并完善法律免责声明和案例成果部分，以建立最大程度的信任。" },
        day14: { title: "裁决之日", description: "您的全新、合规、具备获客能力的法律网站正式上线，被搜索引擎收录，准备好迎接优质客户。" }
      };
    }
    
    if (lowerIndustry.includes('yoga') || lowerIndustry.includes('瑜伽') || lowerIndustry.includes('健身') || lowerIndustry.includes('pilates')) {
      return {
        day0: { title: "正念入驻", description: "我们收集您的工作室氛围、课程表、教练简介及现有客户评价，为您数字形象的建立奠定基础。" },
        day1_5: { title: "体式架构构建", description: "打造您的课程预约系统、教练个人资料，以及为每种练习风格（流瑜伽、修复、力量）定制的专门页面。" },
        day6_13: { title: "对齐与流畅度完善", description: "微调课程日历集成，完善教练简介和资质证明，确保您的定价层级和会员选项能吸引学生。" },
        day14: { title: "静谧上线", description: "您的禅意数字工作室正式对外开放。学生可以预约课程、查看时间表，并与您的社区建立联系。" }
      };
    }

    return {
      day0: { title: "策略与资产获取", description: `我们收集您的品牌资产、服务项目和客户评价，以了解您的 ${industryType} 业务，并建立反映您独特价值的基础。` },
      day1_5: { title: "核心站点施工", description: `为 ${industryType} 客户量身定制核心页面、服务列表和联系表单——利用 AI 加速构建，让我们专注于您的品牌原声。` },
      day6_13: { title: "权威与转化完善", description: `优化内容，针对 ${industryType} 咨询调整表单，并确保每个元素都能建立信任，将访问者转化为客户。` },
      day14: { title: "正式上线：数字办公室", description: `您的 ${industryType} 网站正式发布。SEO 针对本地搜索进行了优化，响应式设计确保客户可以随时随地找到您。` }
    };
  };

  const handlePersonalize = async () => {
    if (!industry.trim()) return;
    setLoading(true);
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        const data = getIndustryContent(industry);
        const newSteps = defaultSteps.map((step, index) => {
          if (index === 0) return { ...step, title: data.day0.title, description: data.day0.description };
          if (index === 1) return { ...step, title: data.day1_5.title, description: data.day1_5.description };
          if (index === 2) return { ...step, title: data.day6_13.title, description: data.day6_13.description };
          if (index === 3) return { ...step, title: data.day14.title, description: data.day14.description };
          return step;
        });
        setSteps(newSteps);
        setIsPersonalized(true);
        return;
      }

      const systemPrompt = `You are a web design agency planner for 'Bonbon Design'. Create a 4-step process (Day 0, Day 1-5, Day 6-13, Day 14) for a 14-day website sprint specifically for a client in the '${industry}' industry.
      Return ONLY a JSON array of 4 objects in CHINESE. Each object: "day", "title", "desc". 
      Use professional Chinese industry jargon. Keep titles under 6 Chinese characters. Keep descriptions under 40 Chinese characters.`;

      const ai = new GoogleGenAI({ apiKey: apiKey.trim() });
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-lite",
        contents: [{ role: "user", parts: [{ text: systemPrompt }] }],
      });

      const rawText = response.text ?? "";
      let jsonMatch = rawText.match(/\[[\s\S]*\]/);
      const generatedSteps = JSON.parse(jsonMatch ? jsonMatch[0] : rawText);

      const newSteps = defaultSteps.map((step, index) => ({
        ...step,
        title: generatedSteps[index].title,
        description: generatedSteps[index].desc
      }));

      setSteps(newSteps);
      setIsPersonalized(true);
    } catch (error) {
      const data = getIndustryContent(industry);
      setSteps(defaultSteps.map((step, i) => {
        if (i === 0) return { ...step, title: data.day0.title, description: data.day0.description };
        if (i === 1) return { ...step, title: data.day1_5.title, description: data.day1_5.description };
        if (i === 2) return { ...step, title: data.day6_13.title, description: data.day6_13.description };
        if (i === 3) return { ...step, title: data.day14.title, description: data.day14.description };
        return step;
      }));
      setIsPersonalized(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="process" className="py-16 md:py-24 bg-[#ECE6E8]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-cover bg-left md:bg-center rounded-[2rem] p-12 md:p-20 text-white overflow-hidden shadow-2xl"
          style={{ backgroundImage: "url('/images/gradients/asif-aether.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
          <div className="flex justify-center mb-8 relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#9c9c9c] text-white text-xs font-medium mb-6 uppercase tracking-wider">服务流程</div>
          </div>
          <div className="text-center relative z-10 mb-8">
            <h2 className="text-4xl md:text-6xl font-sans font-medium mb-6">
              从 <span className="font-serif italic font-normal">“需求对接”</span> 到 <span className="font-serif italic font-normal">“正式上线”</span> <br />
              仅需两周。
            </h2>
          </div>
          <div className="relative z-20 max-w-2xl md:max-w-xl w-full mx-auto mb-12 md:mb-16 px-0 md:px-4">
            <div className="text-center mb-4 text-white/80 flex items-center justify-center gap-2 text-sm font-sans">
              <Sparkles size={14} className="text-purple-300" />
              <span className="text-base">在下方输入您的行业，查看我们如何为您定制 14 天冲刺计划：</span>
            </div>
            <div className="relative group">
              <input
                type="text"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handlePersonalize()}
                placeholder="例如：律师、瑜伽工作室..."
                className="w-full pl-6 pr-[120px] py-4 rounded-full bg-white/95 text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-500/30 shadow-2xl transition-all font-sans text-lg"
              />
              <div className="absolute right-2 top-2 bottom-2 flex items-center gap-2">
                {isPersonalized && (
                  <button onClick={handleReset} className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full text-black transition-all">
                    <RefreshCw className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={handlePersonalize}
                  disabled={loading}
                  className="bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white px-4 py-2.5 rounded-full font-semibold text-sm transition-all flex items-center gap-2"
                >
                  {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <><Sparkles className="w-4 h-4" /><span>定制计划</span></>}
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div key={i} className="border border-white/20 rounded-[20px] p-8 bg-white/5 backdrop-blur-sm">
                <div className="mb-6"><step.icon size={32} className="text-white stroke-[1]" /></div>
                <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium mb-4">{step.day}</div>
                <h3 className="text-2xl font-sans font-medium mb-4">{step.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center relative z-10">
            <p className="text-white/60 text-sm italic mb-8">*时间线要求客户在 24 小时内提供反馈，以确保按时交付。</p>
            <a href="#footer-form" onClick={(e) => {
              e.preventDefault();
              document.getElementById('footer-form')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <Button size="lg" className="bg-primary text-white rounded-full px-10 py-5 text-lg shadow-lg shadow-purple-500/20">预约 15 分钟咨询</Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
