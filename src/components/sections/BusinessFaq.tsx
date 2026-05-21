import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { faqCopy, type FaqLanguage } from '../../data/copy/faq';
import { useAppLanguage } from '../../hooks/useAppLanguage';

interface BusinessFaqProps {
  onContactClick?: () => void;
}

export const BusinessFaq: React.FC<BusinessFaqProps> = ({
  onContactClick
}) => {
  const { lang } = useAppLanguage();
  const content = faqCopy[lang as FaqLanguage];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-28 bg-surface-light text-content-main relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-primary/30" />
            <span className="text-primary font-bold tracking-widest text-xs uppercase">
              {content.tagline}
            </span>
            <span className="w-8 h-[1px] bg-primary/30" />
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

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-4">
          {content.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group rounded-2xl overflow-hidden border transition-all duration-300 ${isOpen
                    ? 'bg-white border-accent shadow-[0_15px_35px_rgba(245,158,11,0.08)]'
                    : 'bg-white border-border-light hover:border-primary/30 hover:shadow-md'
                  }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 md:p-7 text-left focus:outline-none cursor-pointer"
                >
                  <span className={`font-bold pr-4 text-base transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-content-main group-hover:text-primary'}`}>
                    {item.question}
                  </span>
                  <div className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-accent/10' : 'bg-surface-light group-hover:bg-primary/5'}`}>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : 'text-content-muted group-hover:text-primary'
                        }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    >
                      <div className="px-6 md:px-7 pb-7 text-content-muted leading-relaxed font-medium text-sm border-t border-border-light/40 pt-5 bg-slate-50/50">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center flex flex-col items-center justify-center gap-4"
        >
          <p className="text-content-muted font-medium text-sm">{content.footerText}</p>
          <button
            onClick={onContactClick}
            className="group inline-flex items-center gap-2 text-primary font-black hover:text-accent transition-colors cursor-pointer text-sm tracking-wide"
          >
            <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="underline underline-offset-6 decoration-2 decoration-primary/20 group-hover:decoration-accent transition-colors">
              {content.cta}
            </span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};