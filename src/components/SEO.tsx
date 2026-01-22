import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  name?: string;
  type?: string;
  image?: string;
  url?: string;
}

export const SEO = ({
  title = "Bonbon Design | Custom Websites in 14 Days",
  description = "Professional, AI-augmented websites delivered in just 14 days. Bonbon Design builds high-performance, custom-coded sites tailored to your industry.",
  name = "Bonbon Design",
  type = "website",
  image = "/images/og-image.jpg", // Make sure to add an actual OG image later
  url = "https://bonbondesign.com" // Replace with actual domain
}: SEOProps) => {
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebDesignAgency",
    "name": "Bonbon Design",
    "url": url,
    "logo": `${url}/images/logo/bonbon-logo-2-reversed.svg`,
    "description": description,
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brisbane",
      "addressRegion": "QLD",
      "addressCountry": "AU"
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "sameAs": [
      "https://www.instagram.com/bonbondesign", // Example
      "https://www.linkedin.com/company/bonbondesign" // Example
    ]
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name="keywords" content="web design, brisbane web design, custom websites, fast website design, AI web design, small business website" />
      
      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* End Twitter tags */}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
