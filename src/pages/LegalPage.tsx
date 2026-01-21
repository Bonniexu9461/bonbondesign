import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/layout/Layout';

export const LegalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="pt-32 pb-24 bg-background min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h1 className="text-5xl md:text-6xl font-sans font-medium mb-6 text-text-dark">
              Legal <span className="font-serif italic font-normal">Terms.</span>
            </h1>
            <p className="text-xl text-text-muted">
              Transparency is key to a good partnership.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-12 text-text-muted leading-relaxed"
          >
            <section>
              <h2 className="text-2xl font-bold text-text-dark mb-4">1. Services & Timeline</h2>
              <p className="mb-4">
                Bonbon Design agrees to provide the services described in the selected package (Essential, Professional, or Care Plan).
                The 14-day timeline begins only after all required assets (content, images, branding) and the "Discovery Questionnaire" are received from the Client.
                Delays in Client feedback (taking longer than 24 hours) may result in an extension of the launch date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-dark mb-4">2. Payments & Refunds</h2>
              <p className="mb-4">
                A 50% non-refundable deposit is required to secure your sprint slot. The remaining 50% is due upon project completion, before the website is transferred to your ownership.
                Due to the nature of digital work and the time reserved exclusively for your project, refunds are not issued for "change of mind" once the sprint has commenced.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-dark mb-4">3. Revisions</h2>
              <p className="mb-4">
                We include 2 rounds of revisions in our sprint process. A "round" is defined as a consolidated list of feedback provided by the Client.
                Additional revisions outside of these rounds, or changes to the project scope after approval, will be billed at our standard hourly rate of $150/hr.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-dark mb-4">4. Intellectual Property</h2>
              <p className="mb-4">
                Upon full payment, the Client owns the final website design and code. Bonbon Design reserves the right to display the project in our portfolio and marketing materials.
                We do not claim ownership of the Client's provided content or brand assets.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-dark mb-4">5. Limitation of Liability</h2>
              <p className="mb-4">
                Bonbon Design is not liable for any indirect, special, or consequential damages arising out of the use or inability to use the website.
                We do not guarantee specific SEO rankings or sales results, as these depend on market factors outside our control.
              </p>
            </section>

             <section>
              <h2 className="text-2xl font-bold text-text-dark mb-4">6. Privacy Policy</h2>
              <p className="mb-4">
                We respect your privacy. Any information collected during the project (login credentials, business data) is kept strictly confidential and used solely for the purpose of completing your website.
                We do not sell or share your data with third parties.
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </>
  );
};
