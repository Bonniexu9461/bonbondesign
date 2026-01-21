import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Layout, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "14-Day Turnaround",
    description: "From kickoff to launch in just two weeks. No lengthy delays or endless revisions."
  },
  {
    icon: Layout,
    title: "5 Premium Pages",
    description: "Home, Services, About, Contact, and one custom page tailored to your needs."
  },
  {
    icon: DollarSign,
    title: "Fixed Pricing",
    description: "$2,400 flat fee. No hidden costs, no surprise invoices. 50% deposit to start."
  }
];

export const ServicesOverview = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Why Choose a Sprint?</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Traditional web design takes months. We deliver high-end results in days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="p-8 rounded-2xl bg-background border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
