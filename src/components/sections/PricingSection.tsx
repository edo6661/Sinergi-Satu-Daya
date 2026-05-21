import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { pricingCopy, type PricingLanguage } from '../../data/copy/pricing';
import { useAppLanguage } from '../../hooks/useAppLanguage';

interface PricingSectionProps {
  onPlanSelect?: (planId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onPlanSelect
}) => {
  const { lang } = useAppLanguage();
  const content = pricingCopy[lang as PricingLanguage];

  return (
    <section className="py-24 bg-surface-white text-content-main">
      <div className="container mx-auto px-6 lg:px-12">

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
            className="text-3xl md:text-4xl font-bold font-heading text-content-main"
          >
            {content.heading}
          </motion.h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {content.plans.map((plan, index) => {
            const isHighlighted = plan.isPopular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative rounded-3xl p-10 border transition-all duration-500 flex flex-col h-full ${isHighlighted
                    ? 'bg-surface-darkest text-content-inverse border-accent/30 shadow-[0_20px_50px_rgba(245,158,11,0.15)] md:-translate-y-6 z-10'
                    : 'bg-white text-content-main border-border-light shadow-xl hover:border-accent/20'
                  }`}
              >
                {isHighlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-surface-darkest px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest glow-accent">
                    Recommended for B2B
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`text-2xl font-bold mb-3 tracking-tight ${isHighlighted ? 'text-surface-white' : 'text-primary'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isHighlighted ? 'text-content-light/70' : 'text-content-muted'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8 flex items-baseline gap-1">
                  <span className={`text-4xl font-black font-heading tracking-tighter ${isHighlighted ? 'text-accent' : 'text-primary'}`}>
                    {plan.price}
                  </span>
                  {plan.price.includes('Rp') && (
                    <span className={`text-sm font-semibold ${isHighlighted ? 'text-content-light/50' : 'text-content-muted'}`}>
                      {content.monthly}
                    </span>
                  )}
                </div>

                <ul className="space-y-5 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 group/item">
                      <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${isHighlighted ? 'bg-accent/10' : 'bg-primary/5'}`}>
                        <CheckCircle2 className={`w-3.5 h-3.5 ${isHighlighted ? 'text-accent' : 'text-primary'}`} />
                      </div>
                      <span className={`text-sm font-medium ${isHighlighted ? 'text-content-inverse/90' : 'text-content-main/80'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onPlanSelect?.(plan.id)}
                  className={`w-full py-5 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all duration-300 ${isHighlighted
                      ? 'bg-accent hover:bg-accent-hover text-surface-darkest shadow-lg glow-accent transform hover:-translate-y-1'
                      : 'bg-surface-light hover:bg-primary hover:text-white text-primary border border-primary/10'
                    }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};