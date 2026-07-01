import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Newspaper } from 'lucide-react';
import { mediaHighlightsCopy } from '../../data/copy/mediaHighlights';
import { useAppLanguage } from '../../hooks/useAppLanguage';

interface MediaHighlightsSectionProps {
  onCtaClick?: () => void;
}

export const MediaHighlightsSection: React.FC<MediaHighlightsSectionProps> = ({
  onCtaClick,
}) => {
  const { lang } = useAppLanguage();
  const content = mediaHighlightsCopy[lang];

  return (
    <section className="py-28 bg-surface-darkest text-content-inverse overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-10 left-1/4 w-[45rem] h-[45rem] bg-accent/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 right-1/4 w-[35rem] h-[35rem] bg-electric/5 rounded-full blur-[110px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header — famindofast clients style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            className="text-3xl md:text-5xl font-black font-heading tracking-tight leading-tight mb-6"
          >
            <span className="text-gradient-accent italic">{content.heading}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-content-light/70 text-base md:text-lg leading-relaxed font-medium"
          >
            {content.description}
          </motion.p>
        </div>


        {/* News clipping cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
          {content.articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="group flex flex-col h-full rounded-[1.75rem] overflow-hidden border border-white/10 bg-surface-darker/50 hover:border-accent/35 hover:shadow-[0_25px_55px_rgba(0,0,0,0.45)] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-dark">
                <img
                  src={article.image}
                  alt={article.headline}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-darkest/80 via-transparent to-transparent" />
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white shadow-lg"
                  style={{ backgroundColor: article.sourceColor }}
                >
                  {article.source}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6 gap-2">
                <h3 className="text-surface-white font-bold text-sm leading-snug line-clamp-3 group-hover:text-accent transition-colors duration-300">
                  {article.headline}
                </h3>

                <p className="text-content-light/60 text-xs leading-relaxed mb-6 line-clamp-4 flex-grow">
                  {article.excerpt}
                </p>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-hover text-[11px] font-bold uppercase tracking-wider transition-colors mt-auto"
                >
                  {content.readMore}
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
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
