import React from 'react';
import { ContactForm } from '../components/contact/ContactForm';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { SEO } from '../components/SEO';

export const ContactPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <SEO 
        title="Contact Us | Bonbon Design - Start Your Project"
        description="Ready to transform your online presence? Contact Bonbon Design in Brisbane to start your 14-day website sprint today."
        url="https://www.bonbondesign.com.au/contact"
      />
      <section className="pt-20 pb-12 md:pt-32 md:pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-7xl font-serif">Let's Start Your Sprint</h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Ready to transform your online presence? Fill out the form to secure your spot. 
                We'll review your details and get back to you within 24 hours.
              </p>
              
              <div className="space-y-6 pt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                    <Mail />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <a href="mailto:hello@bonbondesign.com" className="text-text-muted hover:text-primary transition-colors">
                      hello@bonbondesign.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                    <MapPin />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className="text-text-muted">
                      Brisbane, Australia<br />
                      Serving clients worldwide
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};
