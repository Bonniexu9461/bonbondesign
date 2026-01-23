import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { SEO } from '../components/SEO';

export const ServicesPage = () => {
  const features = [
    "5 Premium Framer Pages",
    "Mobile & Tablet Responsive",
    "SEO Optimization",
    "CMS Setup for Blog/Portfolio",
    "Custom Interactions & Animations",
    "Contact Form Integration",
    "Domain Connection",
    "1 Hour Training Session"
  ];

  return (
    <div className="bg-background">
      <SEO 
        title="Our Services | Bonbon Design - Web Design Sprints"
        description="Explore our 7-Day Web Design Sprint. A complete website package including SEO, CMS, and custom design for a fixed price."
        url="https://www.bonbondesign.com.au/services"
      />
      {/* Hero */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-6">The 7-Day Sprint</h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Everything you need to launch a high-end website in one week.
          </p>
        </motion.div>
      </section>

      {/* Pricing Card */}
      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-serif">Complete Website Package</h2>
              <p className="text-text-muted">
                Perfect for service businesses, agencies, and consultants who need a professional online presence without the wait.
              </p>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent-dark">
                      <Check size={14} className="text-green-600" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="w-full md:w-auto md:min-w-[350px] bg-background rounded-2xl p-8 text-center border border-gray-100">
              <p className="text-text-muted mb-2">Fixed Investment</p>
              <div className="text-5xl font-serif font-bold mb-2">$2,400</div>
              <p className="text-sm text-text-muted mb-8">AUD + GST</p>
              
              <Link to="/contact">
                <Button size="lg" className="w-full mb-4">
                  Book Your Sprint
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <p className="text-xs text-text-muted">
                50% deposit to secure your two-week sprint.
                <br />Remaining 50% on completion.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Reuse */}
      <ProcessTimeline />

      {/* FAQ or Additional Info */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Ready to get started?</h2>
          <p className="text-text-muted mb-8">
            We only take on a limited number of sprints per month to ensure quality and focus.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline">
              Check Availability
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
