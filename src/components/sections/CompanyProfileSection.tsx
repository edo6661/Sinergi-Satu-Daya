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
    <section className="py-24 bg-surface-white text-content-main overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-hover font-semibold tracking-wider text-sm uppercase mb-4 block">
              {content.tagline}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-content-main leading-tight mb-6">
              {content.heading}
            </h2>
            <p className="text-lg text-content-muted leading-relaxed mb-8">
              {content.description}
            </p>

            <button
              onClick={onCtaClick}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-surface-white px-8 py-4 rounded-lg font-medium transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              {content.cta}
              <ArrowRight className="w-5 h-5 text-accent" />
            </button>
          </motion.div>

          {/* Right Column: Visual & Badges Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Image Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-2xl relative">
              <img
                src="/company-profile/ev-ecosystem.jpg"
                alt="Fasilitas pool kendaraan listrik Sinergi Satu Daya yang dilengkapi sistem keselamatan kebakaran LFK"
                className="w-full h-[400px] object-cover"
                loading='lazy'
                decoding='async'
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>

            {/* Overlapping Trust Badges Container */}
            <div className="absolute -bottom-12 -left-8 md:-left-16 flex flex-col gap-4 z-20">
              {content.badges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                    className="glass-dark p-5 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] flex items-center gap-5 max-w-[320px] border border-white/10 hover:border-accent/40 transition-all group"
                  >
                    <div className="bg-accent/10 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-surface-white text-sm tracking-tight">{badge.title}</h4>
                      <p className="text-[11px] text-content-light/50 uppercase font-black tracking-widest mt-1">{badge.desc}</p>
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