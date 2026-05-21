import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { heroCopy } from '../../data/copy/hero';
import { useAppLanguage } from '../../hooks/useAppLanguage';

interface HeroSectionProps {
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onPrimaryClick,
  onSecondaryClick
}) => {
  const { lang } = useAppLanguage();
  const content = heroCopy[lang];

  return (
    <section className="relative min-h-screen flex items-center bg-surface-darkest text-content-inverse overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-surface-darkest via-surface-darkest/90 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop"
          alt="Armada kendaraan listrik premium SSD sedang mengisi daya di charging station terintegrasi"
          className="w-full h-full object-cover object-right"
          fetchPriority="high"
          decoding="sync"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent-hover border border-accent/20 text-sm font-semibold tracking-wider mb-6">
              {content.surtitle}
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold font-heading leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {content.headline}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-content-light leading-relaxed mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {content.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              onClick={onPrimaryClick}
              className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-content-main px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 active:scale-95"
            >
              {content.primaryCta}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={onSecondaryClick}
              className="flex items-center justify-center gap-2 border border-border-strong hover:border-content-light hover:bg-surface-dark text-surface-white px-8 py-4 rounded-lg font-medium transition-all"
            >
              {content.secondaryCta}
              <ChevronDown className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};