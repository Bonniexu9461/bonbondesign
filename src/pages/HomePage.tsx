import React from 'react';
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
