import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { companyProfileCopy, type ProfileLanguage } from '../../data/copy/companyProfile';
import { useAppLanguage } from '../../hooks/useAppLanguage';

interface CompanyProfileProps {
  lang?: ProfileLanguage;
  onCtaClick?: () => void;
}

export const CompanyProfileSection: React.FC<CompanyProfileProps> = ({
  onCtaClick
}) => {
  const { lang } = useAppLanguage();
  const content = companyProfileCopy[lang];

  return (
    <section className="py-28 bg-surface-light text-content-main overflow-hidden relative">
      {/* Dynamic Background Gradient Block */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-surface-white via-surface-light to-surface-white pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Core Narrative & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-accent" />
              <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">
                {content.tagline}
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black font-heading text-primary leading-[1.18] mb-8 tracking-tight">
              {content.heading}
            </h2>
            <p className="text-lg text-content-muted leading-relaxed mb-12 font-medium">
              {content.description}
            </p>

            <button
              onClick={onCtaClick}
              className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-surface-white px-8 py-4.5 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-[0_12px_40px_rgba(30,41,59,0.15)] cursor-pointer"
            >
              {content.cta}
              <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-1.5 transition-transform" />
            </button>
          </motion.div>

          {/* Right Column: Premium Visual & Floating Trust Badges */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            className="relative mt-16 lg:mt-0 pb-12 lg:pb-0"
          >
            {/* Subtle Abstract Geometry Frame */}
            <div className="absolute -inset-6 border-[1.5px] border-primary/10 rounded-[3rem] -z-10 translate-x-6 translate-y-6 hidden sm:block" />

            {/* Main Focal Image */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.12)] relative group border border-white">
              <img
                src="/company-profile/ev-ecosystem.jpg"
                alt="Fasilitas pool kendaraan listrik Sinergi Satu Daya"
                className="w-full h-[480px] object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/0 to-transparent mix-blend-multiply" />
            </div>

            {/* Stacked Overlapping Badges */}
            <div className="absolute -bottom-12 -left-4 sm:-left-12 flex flex-col gap-4 z-20 w-[95%] sm:w-auto">
              {content.badges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.35 + index * 0.12 }}
                    className="bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-[0_12px_45px_rgba(0,0,0,0.06)] flex items-center gap-5 sm:max-w-[340px] border border-border-light hover:border-accent/40 transition-all duration-300 group/badge hover:-translate-y-1.5 hover:bg-white"
                  >
                    <div className="bg-surface-light p-3.5 rounded-xl group-hover/badge:bg-accent/10 transition-colors duration-300 shadow-inner">
                      <Icon className="w-6 h-6 text-primary group-hover/badge:text-accent transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-black text-primary text-sm tracking-tight mb-0.5">{badge.title}</h4>
                      <p className="text-[10px] text-content-muted uppercase font-bold tracking-[0.15em] leading-relaxed">{badge.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};