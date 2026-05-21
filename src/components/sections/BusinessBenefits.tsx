import React from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';
import { benefitsCopy } from '../../data/copy/benefits';
import { useAppLanguage } from '../../hooks/useAppLanguage';

interface BusinessBenefitsProps {
  onCalculateClick?: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const }
  }
};
export const BusinessBenefits: React.FC<BusinessBenefitsProps> = ({
  onCalculateClick
}) => {
  const { lang } = useAppLanguage();
  const content = benefitsCopy[lang];



  return (
    <section className="py-24 bg-surface-darker text-content-inverse">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold tracking-wider text-sm uppercase mb-4 block"
          >
            {content.tagline}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-heading leading-tight"
          >
            {content.heading}
          </motion.h2>
        </div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {content.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-surface-dark/40 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-accent/40 transition-all duration-500 overflow-hidden"
              >
                {/* Background Decorative Element */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />

                <div className="relative z-10">
                  <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-surface-darker border border-white/10 group-hover:border-accent/30 group-hover:scale-110 group-hover:glow-accent transition-all duration-500">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-surface-white group-hover:text-accent transition-colors tracking-tight">
                    {item.title}
                  </h3>

                  <div className="w-10 h-0.5 bg-accent/30 mb-4 group-hover:w-20 transition-all duration-500" />

                  <p className="text-content-light/70 leading-relaxed text-sm group-hover:text-content-light transition-colors">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <button
            onClick={onCalculateClick}
            className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-content-main px-8 py-4 rounded-lg font-bold transition-all"
          >
            <Calculator className="w-5 h-5" />
            {content.cta}
          </button>
        </motion.div>

      </div>
    </section>
  );
};