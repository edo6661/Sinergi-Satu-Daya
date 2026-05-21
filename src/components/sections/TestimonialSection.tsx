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
    <section className="py-28 bg-surface-darkest text-content-inverse overflow-hidden relative">
      {/* Premium Spatial Ambient Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-10 left-1/4 w-[45rem] h-[45rem] bg-accent/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 right-1/4 w-[35rem] h-[35rem] bg-electric/5 rounded-full blur-[110px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-accent/50" />
            <span className="text-accent font-bold tracking-widest text-xs uppercase">
              {content.tagline}
            </span>
            <span className="w-8 h-[1px] bg-accent/50" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black font-heading text-surface-white tracking-tight leading-tight"
          >
            {content.heading}
          </motion.h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {content.reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
              className="glass-card rounded-[2.2rem] p-8 md:p-10 relative group hover:border-accent/40 hover:shadow-[0_25px_55px_rgba(0,0,0,0.4)] transition-all duration-500 flex flex-col h-full bg-surface-darker/40 backdrop-blur-xl"
            >
              {/* Luxury Styled Quote Background Sign */}
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/[0.03] group-hover:text-accent/10 transition-all duration-700 transform group-hover:scale-110 group-hover:-rotate-6" />

              {/* Star Rating Panel */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent group-hover:scale-105 transition-transform"
                    style={{ transitionDelay: `${i * 30}ms` }}
                  />
                ))}
              </div>

              {/* Core Quote Narrative */}
              <p className="text-content-light/90 text-base leading-relaxed mb-10 font-medium italic relative z-10 group-hover:text-surface-white transition-colors duration-300">
                "{review.quote}"
              </p>

              {/* Author Profile Footer Block */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto group-hover:border-accent/20 transition-colors duration-500">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-surface-dark to-primary rounded-xl flex items-center justify-center border border-white/10 group-hover:border-accent/40 transition-all duration-300 shadow-md">
                    <span className="text-accent font-black font-heading text-lg">
                      {review.author.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-success rounded-full border-2 border-surface-darkest" />
                </div>

                <div className="flex-grow min-w-0">
                  <h4 className="text-surface-white font-bold text-sm tracking-tight mb-0.5 truncate">{review.author}</h4>
                  <p className="text-content-light/50 text-[10px] font-bold uppercase tracking-wider leading-none">
                    {review.role}
                    <span className="block text-accent font-semibold mt-1 truncate">{review.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call To Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <button
            onClick={onCtaClick}
            className="group inline-flex items-center justify-center gap-2 text-surface-white hover:text-accent font-bold tracking-[0.2em] uppercase text-xs transition-colors cursor-pointer"
          >
            {content.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform text-accent" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};