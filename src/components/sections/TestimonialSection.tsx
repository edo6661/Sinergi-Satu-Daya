import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { testimonialCopy } from '../../data/copy/testimonials';
import { useAppLanguage } from '../../hooks/useAppLanguage';

interface TestimonialSectionProps {
  onCtaClick?: () => void;
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  onCtaClick
}) => {
  const { lang } = useAppLanguage();
  const content = testimonialCopy[lang];

  return (
    <section className="py-24 bg-surface-darkest text-content-inverse overflow-hidden relative">
      {/* Background Decorator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
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
            className="text-3xl md:text-4xl font-bold font-heading text-surface-white"
          >
            {content.heading}
          </motion.h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {content.reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-dark border border-white/5 rounded-3xl p-10 relative group hover:border-accent/20 transition-all duration-500 flex flex-col h-full"
            >
              {/* Decorative Quote Icon */}
              <Quote className="absolute top-10 right-10 w-12 h-12 text-white/5 group-hover:text-accent/10 transition-colors duration-500" />

              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 50}ms` }} />
                ))}
              </div>

              <p className="text-content-light/90 text-lg leading-relaxed mb-10 font-medium italic">
                "{review.quote}"
              </p>

              <div className="flex items-center gap-5 border-t border-white/5 pt-8 mt-auto"> {/* items-center memastikan keselarasan vertikal avatar-teks */}
                <div className="relative flex-shrink-0"> {/* flex-shrink-0 agar avatar tidak mengecil */}
                  {/* Avatar Avatar tetap sama */}
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-surface-darkest rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-accent/50 transition-all">
                    <span className="text-accent font-black font-heading text-xl">
                      {review.author.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-4 border-surface-darkest" />
                </div>

                {/* Blok Teks Penulis yang Terorganisir */}
                <div className="flex-grow"> {/* flex-grow agar teks ambil sisa ruang */}
                  <h4 className="text-surface-white font-bold text-base tracking-tight">{review.author}</h4>
                  <p className="text-content-muted text-xs font-semibold uppercase tracking-wider mt-1 leading-relaxed">
                    {review.role}
                    {/* Pembatas Teks yang Elegan & Selaras Horizontal */}
                    <span className="inline-block mx-3 w-px h-3 bg-white/10 rotate-[20deg]" />
                    <span className="text-accent">{review.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <button
            onClick={onCtaClick}
            className="inline-flex items-center justify-center gap-2 text-surface-white hover:text-accent font-medium transition-colors"
          >
            {content.cta}
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};