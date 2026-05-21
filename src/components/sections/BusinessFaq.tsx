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
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Buka FAQ pertama secara default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-surface-light text-content-main">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-hover font-semibold tracking-wider text-sm uppercase mb-4 block"
          >
            {content.tagline}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-heading text-content-main"
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`border rounded-xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-surface-white border-primary hover:border-primary-hover shadow-md' : 'bg-surface-white border-border-light hover:border-border-strong/50'
                  }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-bold pr-4 ${isOpen ? 'text-primary' : 'text-content-main'}`}>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : 'text-content-muted'
                      }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-content-muted leading-relaxed text-sm border-t border-border-light pt-4 mt-2">
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
          transition={{ delay: 0.5 }}
          className="mt-12 text-center flex flex-col items-center justify-center gap-4"
        >
          <p className="text-content-muted">{content.footerText}</p>
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 text-primary-hover font-bold hover:text-accent transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="underline underline-offset-4">{content.cta}</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};