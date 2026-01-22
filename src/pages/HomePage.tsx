import React from 'react';
import { SEO } from '../components/SEO';
import { HeroSection } from '../components/home/HeroSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { ShowcaseSection } from '../components/home/ShowcaseSection';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { StatementSection } from '../components/home/StatementSection';
import { PricingSection } from '../components/home/PricingSection';
import { FAQSection } from '../components/home/FAQSection';

export const HomePage = () => {
  return (
    <>
      <SEO 
        title="Bonbon Design | Custom Websites in 14 Days"
        description="Get a high-performance, custom-coded website tailored to your brand in just 14 days. No templates, just speed and style. Book your sprint today."
      />
      <HeroSection />
      <ProcessSection />
      <ShowcaseSection />
      <FeaturesSection />
      <StatementSection />
      <PricingSection />
      <FAQSection />
    </>
  );
};
