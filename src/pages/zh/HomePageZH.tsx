import React from 'react';
import { SEO } from '../../components/SEO';
import { HeroSectionZH } from '../../components/home/zh/HeroSectionZH';
import { AboutSectionZH } from '../../components/home/zh/AboutSectionZH';
import { ShowcaseSectionZH } from '../../components/home/zh/ShowcaseSectionZH';
import { ProcessSectionZH } from '../../components/home/zh/ProcessSectionZH';
import { FeaturesSectionZH } from '../../components/home/zh/FeaturesSectionZH';
import { PricingSectionZH } from '../../components/home/zh/PricingSectionZH';
import { FAQSectionZH } from '../../components/home/zh/FAQSectionZH';

export const HomePageZH = () => {
  return (
    <>
      <SEO 
        title="布里斯班网站设计 | 14天定制化网站 | Bonbon Design"
        description="为布里斯班中小企业和初创公司提供网站设计。只需14天，即可获得为您品牌量身定制的高性能网站。"
      />
      <HeroSectionZH />
      <AboutSectionZH />
      <ShowcaseSectionZH />
      <ProcessSectionZH />
      <FeaturesSectionZH />
      <PricingSectionZH />
      <FAQSectionZH />
    </>
  );
};
