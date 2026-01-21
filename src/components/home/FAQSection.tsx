import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { 
    q: "How can you build a custom site in only 14 days?", 
    a: "Most agencies are slow because they are bogged down by manual coding and back-and-forth emails. I use an advanced, AI-augmented development stack that automates the \"boring\" parts of coding. This frees me up to spend 100% of my time on your design, brand strategy, and user experience. By working smarter, I can launch a site in two weeks that would take an old-school agency two months." 
  },
  { 
    q: "Is this just a template?", 
    a: "No. Because I use a custom-coded environment (not a restrictive drag-and-drop builder), your site is tailored to your specific brand. We start with your style references—sites you love and aesthetics you admire—and I build a bespoke digital presence that reflects your unique professional authority." 
  },
  { 
    q: "What do I need to provide before we start?", 
    a: "To maintain the 14-day timeline, I require a completed \"Discovery Questionnaire\" and any existing brand assets (like your headshots) before the clock starts. Don't worry about the writing—I use AI-assisted copywriting tools to help draft your professional text, which we then polish together." 
  },
  { 
    q: "Where is my website hosted?", 
    a: "I host all sites on Vercel, an enterprise-grade global edge network. This means your site isn't just \"on the internet\"—it's on the same high-performance infrastructure used by the world's biggest brands. It ensures 99.9% uptime and lightning-fast loading speeds on mobile and desktop." 
  },
  { 
    q: "Will I be able to update the site myself?", 
    a: "I build your site using high-performance code, not restrictive drag-and-drop templates. While this makes the site faster and more secure, it means updates are handled through my Concierge Care service. For $199/month, I act as your 'on-call' developer—you simply email me your changes, and they are live within 24 hours. This ensures your site’s code remains clean, fast, and professional without you ever having to touch a line of tech." 
  },
  { 
    q: "Is my site secure?", 
    a: "Yes. Unlike platforms like WordPress, which are prone to hacking and require constant plugin updates, my tech stack is \"serverless.\" This architecture is inherently more secure, meaning you never have to worry about security patches or your site being \"down\" due to a hack." 
  },
  { 
    q: "What is included in the \"Strategic Branding\" package?", 
    a: "We build your visual identity from the ground up. This includes a professional logo system, a curated color palette, typography selection, and a Brand Guidelines PDF. We also provide a \"Social Media Launch Kit\" so your LinkedIn and Instagram match your new high-end website the day you go live." 
  },
  { 
    q: "What if I already have a logo I love?", 
    a: "We can definitely work with your existing logo! In that case, we focus the Branding Sprint on \"Leveling Up\" your visual ecosystem—optimizing your colors, refining your fonts, and ensuring your existing brand feels \"premium\" in a modern digital context." 
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans text-text-dark">
            Frequently <span className="font-serif italic font-normal">asked questions.</span>
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
