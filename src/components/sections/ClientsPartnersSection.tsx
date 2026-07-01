import React from 'react';
import { motion } from 'framer-motion';
import { clientsPartnersCopy } from '../../data/copy/clientsPartners';
import { DraggableLogoMarquee } from '../ui/DraggableLogoMarquee';
import { useAppLanguage } from '../../hooks/useAppLanguage';

export const ClientsPartnersSection: React.FC = () => {
  const { lang } = useAppLanguage();
  const content = clientsPartnersCopy[lang];

  return (
    <section className="py-24 md:py-28 bg-surface-light text-content-main relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="w-8 h-px bg-primary/30" />
            <span className="text-primary font-bold tracking-widest text-xs uppercase">
              {content.tagline}
            </span>
            <span className="w-8 h-px bg-primary/30" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black font-heading text-primary tracking-tight leading-tight"
          >
            {content.heading}
          </motion.h2>


        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-14"
        >
          <h3 className="text-primary font-black font-heading text-sm md:text-base uppercase tracking-[0.25em] mb-6 pl-1">
            {content.clientsLabel}
          </h3>
          <DraggableLogoMarquee items={content.clients} speed={0.55} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-primary font-black font-heading text-sm md:text-base uppercase tracking-[0.25em] mb-6 pl-1">
            {content.partnersLabel}
          </h3>
          <DraggableLogoMarquee items={content.partners} speed={0.5} reverse />
        </motion.div>
      </div>
    </section>
  );
};
