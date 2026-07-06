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
    <section className="py-24 bg-surface-white text-content-main relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="w-8 h-px bg-accent/50" />
            <span className="text-accent font-bold tracking-widest text-xs uppercase">
              {content.tagline}
            </span>
            <span className="w-8 h-px bg-accent/50" />
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

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {content.plans.map((plan, index) => {
            const isHighlighted = plan.isPopular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.215, 0.610, 0.355, 1.000] }}
                className={`relative rounded-[2.5rem] p-8 md:p-10 border transition-all duration-500 flex flex-col h-full ${isHighlighted
                  ? 'bg-surface-darkest text-content-inverse border-accent/30 shadow-[0_30px_60px_rgba(245,158,11,0.12)] md:-translate-y-4 z-10 ring-1 ring-accent/20'
                  : 'bg-surface-light text-content-main border-border-light hover:border-primary/20 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]'
                  }`}
              >


                {/* Ambient glow effects hidden inside the card */}
                {isHighlighted && (
                  <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] pointer-events-none">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-accent/10 rounded-full blur-[90px]" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-electric/5 rounded-full blur-[90px]" />
                  </div>
                )}

                  {isHighlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-accent to-orange-500 text-surface-darkest px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-accent/20 border border-white/20 whitespace-nowrap z-20">
                    {lang === 'id' ? 'Rekomendasi B2B' : 'Recommended for B2B'}
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-8 relative z-10">
                  <h3 className={`text-2xl font-black mb-4 tracking-tight font-heading ${isHighlighted ? 'text-surface-white' : 'text-primary'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm leading-relaxed font-medium min-h-[44px] ${isHighlighted ? 'text-content-light/70' : 'text-content-muted'}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Plan Price */}
                <div className="mb-10 flex items-baseline gap-1 relative z-10 border-b border-dashed pb-6 border-current/10">
                  <span className={`text-4xl md:text-5xl font-black font-heading tracking-tighter ${isHighlighted ? 'text-accent' : 'text-primary'}`}>
                    {plan.price}
                  </span>
                  {plan.price.includes('Rp') && (
                    <span className={`text-xs font-bold tracking-wider uppercase ml-1.5 ${isHighlighted ? 'text-content-light/40' : 'text-content-muted/60'}`}>
                      {content.monthly}
                    </span>
                  )}
                </div>

                {/* Plan Features */}
                <ul className="space-y-4 mb-12 flex-grow relative z-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3.5 group/item">
                      <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors ${isHighlighted ? 'bg-accent/10 group-hover/item:bg-accent/20' : 'bg-primary/5 group-hover/item:bg-primary/10'
                        }`}>
                        <CheckCircle2 className={`w-3.5 h-3.5 ${isHighlighted ? 'text-accent' : 'text-primary'}`} />
                      </div>
                      <span className={`text-sm font-semibold leading-relaxed ${isHighlighted ? 'text-content-inverse/85 group-hover/item:text-surface-white' : 'text-content-main/75 group-hover/item:text-primary'} transition-colors duration-200`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => onPlanSelect?.(plan.id)}
                  className={`w-full py-4.5 rounded-xl font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 relative z-10 overflow-hidden cursor-pointer ${isHighlighted
                    ? 'bg-accent hover:bg-accent-hover text-surface-darkest shadow-[0_12px_24px_rgba(245,158,11,0.25)] transform hover:-translate-y-1 animate-shimmer'
                    : 'bg-white hover:bg-surface-darkest hover:text-white text-primary border border-border-light hover:border-surface-darkest transform hover:-translate-y-1 shadow-sm'
                    }`}
                >
                  <span className="relative z-10">{plan.cta}</span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};