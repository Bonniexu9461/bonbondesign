import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RefreshCw, Send, ThumbsUp, FileText, Code, Palette, Rocket, Zap, Award, CheckCircle, Sparkles, Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { GlobalBrands } from './GlobalBrands';

const defaultSteps = [
  {
    icon: FileText,
    day: "Day 0",
    title: "The Handoff",
    description: "You fill out the Discovery Questionnaire and upload your brand assets. The clock doesn't start until we have what we need."
  },
  {
    icon: Code,
    day: "Day 1–5",
    title: "The Build",
    description: "We leverage AI to build the core structure, then custom-code your unique design elements. No templates, just speed."
  },
  {
    icon: Palette,
    day: "Day 6–13",
    title: "Refine & Polish",
    description: "We review the live demo together. You get two rounds of rapid revisions to tweak text, images, and layout."
  },
  {
    icon: Rocket,
    day: "Day 14",
    title: "Launch",
    description: "Final checks are complete. We flip the switch on Vercel, and your high-performance site is live to the world."
  }
];

export const ProcessSection = () => {
  const [industry, setIndustry] = useState("");
  const [loading, setLoading] = useState(false);
  const [steps, setSteps] = useState(defaultSteps);
  const [isPersonalized, setIsPersonalized] = useState(false);

  const handleReset = () => {
    setIndustry("");
    setSteps(defaultSteps);
    setIsPersonalized(false);
  };

  // Generate industry-specific titles and descriptions based on industry type
  const getIndustryContent = (industryType: string) => {
    const lowerIndustry = industryType.toLowerCase();
    
    // Legal industry
    if (lowerIndustry.includes('lawyer') || lowerIndustry.includes('attorney') || lowerIndustry.includes('legal') || lowerIndustry.includes('law firm')) {
      return {
        day0: {
          title: "Litigation Kickoff",
          description: "We receive headshots, bar credentials, firm history, and critical practice area content to begin site structuring."
        },
        day1_5: {
          title: "Core Jurisprudence Build",
          description: "Building the core site structure, including dedicated practice area landing pages and secure attorney contact forms for lead intake."
        },
        day6_13: {
          title: "Credibility Audit & Polish",
          description: "Finalizing ADA compliance checks, optimizing bio pages, and polishing legal disclaimers and case results sections for maximum trust."
        },
        day14: {
          title: "Verdict Day",
          description: "Your new, compliant, lead-generating legal website goes live, indexed by search engines and ready to capture qualified clients."
        }
      };
    }
    
    // Wellness/Fitness
    if (lowerIndustry.includes('yoga') || lowerIndustry.includes('fitness') || lowerIndustry.includes('wellness') || lowerIndustry.includes('pilates')) {
      return {
        day0: {
          title: "Mindful Onboarding",
          description: "We collect your studio vibe, class schedules, instructor bios, and any existing client testimonials to set the foundation for your digital presence."
        },
        day1_5: {
          title: "Asana Architecture Build",
          description: "Crafting your class booking system, instructor profiles, and dedicated pages for each practice style—flow, restorative, power—all optimized for mobile booking."
        },
        day6_13: {
          title: "Alignment & Flow Polish",
          description: "Fine-tuning your class calendar integration, polishing instructor bios with certifications, and ensuring your pricing tiers and membership options convert visitors into students."
        },
        day14: {
          title: "Om Launch",
          description: "Your zen digital studio opens its virtual doors. Students can book classes, view schedules, and connect with your community—all while you focus on teaching."
        }
      };
    }
    
    // Food/Culinary
    if (lowerIndustry.includes('chef') || lowerIndustry.includes('restaurant') || lowerIndustry.includes('catering') || lowerIndustry.includes('culinary')) {
      return {
        day0: {
          title: "Culinary Briefing",
          description: "We gather your menu, signature dishes, chef credentials, and food photography to create a mouth-watering digital experience that showcases your culinary artistry."
        },
        day1_5: {
          title: "Recipe & Menu Build",
          description: "Building your menu pages with dietary filters, event booking forms, and a gallery that makes every dish look Instagram-worthy—because presentation matters."
        },
        day6_13: {
          title: "Plating Perfection",
          description: "Perfecting your reservation system, optimizing menu descriptions that make mouths water, and ensuring your contact forms capture event inquiries and private dining requests."
        },
        day14: {
          title: "Service Ready",
          description: "Your culinary website is live and ready to take reservations. Hungry diners can browse your menu, book tables, and discover why your kitchen is the talk of the town."
        }
      };
    }
    
    // Medical/Healthcare
    if (lowerIndustry.includes('doctor') || lowerIndustry.includes('medical') || lowerIndustry.includes('health') || lowerIndustry.includes('clinic') || lowerIndustry.includes('dentist')) {
      return {
        day0: {
          title: "Patient Intake",
          description: "We collect your credentials, specialties, practice information, and patient forms to build a HIPAA-compliant foundation that instills confidence and trust."
        },
        day1_5: {
          title: "Clinical Site Build",
          description: "Constructing your service pages, secure patient portal integration, and appointment booking system that makes scheduling as easy as a routine checkup."
        },
        day6_13: {
          title: "Compliance & Care Polish",
          description: "Finalizing HIPAA compliance checks, optimizing provider bios with board certifications, and ensuring your patient forms and privacy policies meet healthcare standards."
        },
        day14: {
          title: "Practice Live",
          description: "Your medical website goes live, fully compliant and optimized. New patients can find you, book appointments, and trust that they're in capable hands."
        }
      };
    }
    
    // Real Estate
    if (lowerIndustry.includes('real estate') || lowerIndustry.includes('realtor') || lowerIndustry.includes('property')) {
      return {
        day0: {
          title: "Property Briefing",
          description: "We gather your MLS listings, agent credentials, client testimonials, and market expertise to build a site that showcases your local real estate authority."
        },
        day1_5: {
          title: "Portfolio Build",
          description: "Building your property search functionality, agent bio pages, and lead capture forms that turn browsers into buyers—because every click could be a closing."
        },
        day6_13: {
          title: "Showcase Polish",
          description: "Optimizing your listing galleries, polishing your neighborhood guides, and ensuring your contact forms capture qualified leads ready to make an offer."
        },
        day14: {
          title: "Open House Launch",
          description: "Your real estate website is live and listing-ready. Potential clients can search properties, learn about your expertise, and connect with Brisbane's top agent."
        }
      };
    }
    
    // Default fallback
    return {
      day0: {
        title: "Strategy & Asset Intake",
        description: `We gather your brand assets, service offerings, and client testimonials to understand your ${industryType} business and build a foundation that reflects your unique value.`
      },
      day1_5: {
        title: "Core Site Construction",
        description: `Building your core pages, service listings, and contact forms tailored specifically for ${industryType} clients—using AI to accelerate the build so we can focus on your brand's authentic voice.`
      },
      day6_13: {
        title: "Authority & Conversion Polish",
        description: `Refining your content, optimizing forms for ${industryType} inquiries, and ensuring every element builds trust and converts visitors into clients who see your expertise.`
      },
      day14: {
        title: "Go Live: Your Digital Office",
        description: `Your ${industryType} website launches live. SEO is optimized for local search, mobile responsiveness ensures clients can find you anywhere, and you're ready to grow.`
      }
    };
  };

  const handlePersonalize = async () => {
    if (!industry.trim()) return;

    setLoading(true);
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        console.warn("No Gemini API key found. Using simulation.");
        // Simulation for demo purposes if no key
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const industryContent = getIndustryContent(industry);
        
        const simulatedData = {
          day0: industryContent.day0,
          day1_5: industryContent.day1_5,
          day6_13: industryContent.day6_13,
          day14: industryContent.day14
        };
        const newSteps = defaultSteps.map((step, index) => {
          let title = step.title;
          let desc = step.description;
          if (index === 0) {
            title = simulatedData.day0.title;
            desc = simulatedData.day0.description;
          }
          if (index === 1) {
            title = simulatedData.day1_5.title;
            desc = simulatedData.day1_5.description;
          }
          if (index === 2) {
            title = simulatedData.day6_13.title;
            desc = simulatedData.day6_13.description;
          }
          if (index === 3) {
            title = simulatedData.day14.title;
            desc = simulatedData.day14.description;
          }
          return { ...step, title, description: desc };
        });
        setSteps(newSteps);
        setIsPersonalized(true);
        setLoading(false);
        return;
      }

      const systemPrompt = `You are a web design agency planner for 'Bonbon Design'. Create a 4-step process (Day 0, Day 1-5, Day 6-13, Day 14) for a 14-day website sprint specifically for a client in the '${industry}' industry.
      
      Your goal is to make the generic process sound tailored to them using industry-specific jargon and terminology.
      
      CRITICAL REQUIREMENTS:
      1. TITLES: Must use industry-specific terminology, jargon, and character that reflects the unique language and culture of the '${industry}' industry. Be creative, impactful, and use terms that professionals in this industry would recognize and appreciate.
      
      2. DESCRIPTIONS: Must ALSO use industry-specific jargon, terminology, and authentic language. Make it fun, accurate, and engaging. Use the actual terms professionals in this industry use daily. Be specific about what gets built (forms, pages, features) using industry-appropriate language.
      
      - Day 0 (Handoff): Mention specific assets they need to provide for their ${industry} business.
      - Day 1-5 (Build): Mention specific features we will build tailored to ${industry} needs.
      - Day 6-13 (Refine): Mention polishing specific content relevant to ${industry}.
      - Day 14 (Launch): Mention the result and what it means for their ${industry} business.
      
      Examples for "Lawyer":
      - Day 0: Title: "Litigation Kickoff", Description: "We receive headshots, bar credentials, firm history, and critical practice area content to begin site structuring."
      - Day 1-5: Title: "Core Jurisprudence Build", Description: "Building the core site structure, including dedicated Practice Area landing pages and secure Attorney Contact forms for lead intake."
      - Day 6-13: Title: "Credibility Audit & Polish", Description: "Finalizing ADA compliance checks, optimizing bio pages, and polishing legal disclaimers and Case Results sections for maximum trust."
      - Day 14: Title: "Verdict Day", Description: "Your new, compliant, lead-generating legal website goes live, indexed by search engines and ready to capture qualified clients."
      
      Return ONLY a JSON array of 4 objects. Each object must have these exact keys: "day", "title", "desc".
      Keep titles punchy (2-5 words). Keep descriptions under 25 words. Use industry jargon throughout.`;

      let data;
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: [{ parts: [{ text: systemPrompt }] }],
              generationConfig: {
                responseMimeType: "application/json"
              }
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const responseData = await response.json();
        const generatedSteps = JSON.parse(responseData.candidates[0].content.parts[0].text);
        
        if (Array.isArray(generatedSteps) && generatedSteps.length >= 4) {
          // Convert array format to our object format
          data = {
            day0: {
              title: generatedSteps[0].title,
              description: generatedSteps[0].desc
            },
            day1_5: {
              title: generatedSteps[1].title,
              description: generatedSteps[1].desc
            },
            day6_13: {
              title: generatedSteps[2].title,
              description: generatedSteps[2].desc
            },
            day14: {
              title: generatedSteps[3].title,
              description: generatedSteps[3].desc
            }
          };
        } else {
          throw new Error("Invalid response format");
        }
      } catch (apiError) {
        console.warn("AI API error, falling back to simulation:", apiError);
        // Fall back to simulation if AI fails
        const industryContent = getIndustryContent(industry);
        data = {
          day0: industryContent.day0,
          day1_5: industryContent.day1_5,
          day6_13: industryContent.day6_13,
          day14: industryContent.day14
        };
      }

      const newSteps = defaultSteps.map((step, index) => {
        let title = step.title;
        let desc = step.description;
        if (index === 0 && data.day0) {
          title = data.day0.title || step.title;
          desc = data.day0.description || step.description;
        }
        if (index === 1 && data.day1_5) {
          title = data.day1_5.title || step.title;
          desc = data.day1_5.description || step.description;
        }
        if (index === 2 && data.day6_13) {
          title = data.day6_13.title || step.title;
          desc = data.day6_13.description || step.description;
        }
        if (index === 3 && data.day14) {
          title = data.day14.title || step.title;
          desc = data.day14.description || step.description;
        }
        return { ...step, title, description: desc };
      });

      setSteps(newSteps);
      setIsPersonalized(true);
    } catch (error) {
      console.error("Error generating sprint:", error);
      // Final fallback to simulation content
      try {
        const industryContent = getIndustryContent(industry);
        const fallbackData = {
          day0: industryContent.day0,
          day1_5: industryContent.day1_5,
          day6_13: industryContent.day6_13,
          day14: industryContent.day14
        };
        const newSteps = defaultSteps.map((step, index) => {
          let title = step.title;
          let desc = step.description;
          if (index === 0) {
            title = fallbackData.day0.title;
            desc = fallbackData.day0.description;
          }
          if (index === 1) {
            title = fallbackData.day1_5.title;
            desc = fallbackData.day1_5.description;
          }
          if (index === 2) {
            title = fallbackData.day6_13.title;
            desc = fallbackData.day6_13.description;
          }
          if (index === 3) {
            title = fallbackData.day14.title;
            desc = fallbackData.day14.description;
          }
          return { ...step, title, description: desc };
        });
        setSteps(newSteps);
        setIsPersonalized(true);
      } catch (fallbackError) {
        console.error("Fallback also failed:", fallbackError);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="about" className="pt-0 pb-16 md:pb-24 bg-[#ECE6E8] -mt-56 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl mb-24 md:mb-32">
        {/* Top Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="flex justify-center mb-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#9c9c9c] text-white text-xs font-medium mb-6 uppercase tracking-wider">
              About
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-sans font-medium text-[#0D0D0D] leading-none mb-2 tracking-tight">
            The Bridge Between
          </h2>
          <div className="relative inline-block mt-2">
            <span className="font-serif italic font-normal text-5xl md:text-7xl text-[#0D0D0D]">
              <span className="relative inline-block">
                DIY
                <span className="absolute top-[55%] left-[-5%] w-[110%] h-[3px] bg-[#8A8A8A] -translate-y-1/2 transform" />
              </span>
              <span className="font-sans not-italic font-medium mx-4">and</span>
              <span className="relative inline-block">
                Big Agency.
                <span className="absolute top-[55%] left-[-5%] w-[110%] h-[3px] bg-[#8A8A8A] -translate-y-1/2 transform" />
              </span>
            </span>
          </div>
        </div>

        {/* Two Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Content */}
          <div className="space-y-8 pr-0 lg:pr-8">
            <div className="space-y-6 text-[#928D89] text-[16px] leading-relaxed font-sans">
              <p className="font-bold text-[#0D0D0D]">
                I know the value of your time.
              </p>
              <p>
                I started Bonbon Design because Brisbane businesses were getting stuck—paying $5k+ to agencies for slow results, or struggling with DIY builders that never looked right.
              </p>
              <p>
                As a designer and mum, I prioritize efficiency. No endless meetings or 3-month delays. Just high-care, professional websites delivered in 14 days.
              </p>

              <div className="pt-12 mt-12 border-t border-[#0D0D0D]/10">
                <div className="flex flex-col gap-1">
                  <p className="font-serif italic text-[32px] text-[#0D0D0D]">Bonnie</p>
                  <p className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#928D89] uppercase">Founder & Lead Designer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bonnie's Portrait */}
          <div className="relative h-full min-h-[500px] rounded-[1.5rem] overflow-hidden shadow-2xl">
            <img 
              src="/images/bonnie-portrait.jpg" 
              alt="Bonnie - Founder & Lead Designer" 
              className="absolute inset-0 w-full h-full object-cover object-[center_80%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      <GlobalBrands />

      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-cover bg-left md:bg-center rounded-[2rem] p-12 md:p-20 text-white overflow-hidden shadow-2xl"
          style={{ backgroundImage: "url('/images/gradients/asif-aether.jpg')" }}
        >
          {/* Grain Overlay */}
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />

          {/* Top Badge */}
          <div className="flex justify-center mb-8 relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#9c9c9c] text-white text-xs font-medium mb-6 uppercase tracking-wider">HOW IT WORKS</div>
          </div>

          <div className="text-center relative z-10 mb-8">
            <h2 className="text-4xl md:text-6xl font-sans font-medium mb-6">
              From <span className="font-serif italic font-normal">"Brief"</span> to <span className="font-serif italic font-normal">"Live"</span> <br />
              in Two Weeks.
            </h2>
          </div>

          {/* AI Customizer Input */}
          <div className="relative z-20 max-w-2xl md:max-w-xl w-full mx-auto mb-12 md:mb-16 px-0 md:px-4">
            <div className="text-center mb-4 text-white/80 flex items-center justify-center gap-2 text-sm font-sans">
              <Sparkles size={14} className="text-purple-300" />
              <span className="text-base">Enter your industry below to see how we tailor your 14-day sprint:</span>
            </div>
            <div className="relative group">
              <input
                type="text"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handlePersonalize()}
                placeholder="e.g. Lawyer, Yoga Studio..."
                className="w-full pl-6 pr-[120px] xs:pr-[130px] sm:pr-[160px] py-4 rounded-full bg-white/95 backdrop-blur-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-500/30 shadow-2xl transition-all font-sans text-lg"
              />
              <div className="absolute right-2 top-2 bottom-2 flex items-center gap-2">
                {isPersonalized && (
                  <button
                    onClick={handleReset}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-[#8B31FF] p-2.5 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center border border-[rgba(217,217,217,0.2)] hover:border-[rgba(217,217,217,0.3)]"
                    title="Reset to default"
                  >
                    <RefreshCw className="w-4 h-4 text-black" />
                  </button>
                )}
                <button
                  onClick={handlePersonalize}
                  disabled={loading}
                  className="bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] disabled:from-purple-400 disabled:to-purple-400 text-white px-3 sm:px-4 py-2.5 rounded-full font-semibold text-[10px] xs:text-xs sm:text-sm transition-all shadow-lg hover:shadow-xl hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
                >
                  {loading ? (
                    <Loader2 className="animate-spin w-3 h-3 sm:w-4 sm:h-4" />
                  ) : (
                    <>
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Personalize</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 w-[120%] -ml-[10%] md:w-full md:ml-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-left flex flex-col items-start border border-white/20 rounded-[20px] p-8 h-full bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <div className="mb-6">
                  <step.icon size={32} className="text-white stroke-[1]" />
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-medium mb-4 w-fit border border-white/20">
                  {step.day}
                </div>
                <h3 className="text-2xl font-sans font-medium mb-4">{step.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center relative z-10">
            <p className="text-white/60 text-sm italic mb-8">
              *Timeline requires client feedback within 24 hours to ensure delivery.
            </p>
            <a href="https://tally.so/r/2EBZlV" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-5 text-lg shadow-lg shadow-purple-500/20">
                Book 15-min intro
              </Button>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
