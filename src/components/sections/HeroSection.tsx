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
    <section className="relative min-h-screen flex items-center bg-surface-darkest text-content-inverse overflow-hidden pt-24 md:pt-32 pb-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-surface-darkest via-surface-darkest/95 to-surface-darkest/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-darkest via-transparent to-surface-darkest/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop"
          alt="Armada kendaraan listrik premium SSD sedang mengisi daya"
          className="w-full h-full object-cover object-right opacity-50 mix-blend-luminosity"
          fetchPriority="high"
          decoding="sync"
        />
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-[-10%] w-[40rem] h-[40rem] bg-accent/15 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[10%] w-[30rem] h-[30rem] bg-electric/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-surface-white/5 border border-white/10 text-content-light text-xs font-bold tracking-[0.2em] mb-8 uppercase backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              {content.surtitle}
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black font-heading leading-[1.15] mb-8 tracking-tight text-surface-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            {content.headline.split(' ').map((word, i) =>
              (word.toLowerCase() === 'electric' || word.toLowerCase() === 'mobility') ?
                <span key={i} className="text-gradient-accent drop-shadow-lg">{word} </span> :
                word + ' '
            )}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-content-light/90 leading-relaxed mb-12 max-w-2xl font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {content.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <button
              onClick={onPrimaryClick}
              className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-accent to-orange-500 text-surface-darkest px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-95 glow-accent-hover shadow-[0_10px_40px_rgba(245,158,11,0.25)] overflow-hidden animate-shimmer"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">{content.primaryCta}</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={onSecondaryClick}
              className="group flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md hover:bg-white/10 text-surface-white px-8 py-4 rounded-xl font-semibold transition-all border border-white/10 hover:border-white/30 shadow-lg hover:shadow-xl"
            >
              {content.secondaryCta}
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1.5 transition-transform text-accent" />
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 cursor-pointer text-content-light/40 hover:text-accent transition-colors"
        onClick={() => document.getElementById('profile-section')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase">Scroll to Discover</span>
        <div className="w-6 h-10 rounded-full border-[1.5px] border-current flex justify-center p-1 opacity-70">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-2 bg-current rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};