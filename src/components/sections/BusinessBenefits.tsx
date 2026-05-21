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
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] as const }
  }
};

export const BusinessBenefits: React.FC<BusinessBenefitsProps> = ({
  onCalculateClick
}) => {
  const { lang } = useAppLanguage();
  const content = benefitsCopy[lang];

  return (
    <section className="py-28 bg-surface-darker text-content-inverse relative overflow-hidden">
      {/* Ambient Sci-Fi Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[35rem] h-[35rem] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[35rem] h-[35rem] bg-electric/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-8 h-[1px] bg-accent/40" />
            <span className="text-accent font-bold tracking-[0.25em] text-xs uppercase">
              {content.tagline}
            </span>
            <span className="w-8 h-[1px] bg-accent/40" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl md:text-5xl font-black font-heading leading-tight text-surface-white tracking-tight"
          >
            {content.heading}
          </motion.h2>
        </div>

        {/* Benefits Glassmorphism Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {content.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative glass-card p-8 rounded-[2.2rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)] hover:border-accent/40 flex flex-col h-full overflow-hidden bg-surface-darkest/20"
              >
                {/* Internal Card Geometric Ray Overlay */}
                <div className="absolute -right-10 -top-10 w-36 h-36 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/15 transition-all duration-700 ease-out" />

                <div className="relative z-10 flex-grow flex flex-col">
                  {/* High-Tech Icon Container */}
                  <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-surface-darkest/60 backdrop-blur-md border border-white/10 group-hover:border-accent/40 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all duration-500 shadow-inner">
                    <Icon className="w-5 h-5 text-accent group-hover:rotate-3 transition-transform" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-surface-white group-hover:text-accent transition-colors duration-300 tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  {/* Sleek Line Accent */}
                  <div className="w-6 h-[2px] bg-white/10 mb-5 group-hover:bg-accent group-hover:w-12 transition-all duration-500 ease-out" />

                  <p className="text-content-light/70 leading-relaxed text-sm group-hover:text-content-inverse transition-colors duration-300 font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Interactive CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <button
            onClick={onCalculateClick}
            className="group relative inline-flex items-center justify-center gap-3 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-surface-darkest px-8 py-4 rounded-xl font-bold transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <Calculator className="w-4 h-4 relative z-10 group-hover:animate-bounce" />
            <span className="relative z-10 tracking-wide">{content.cta}</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};