import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Zap } from 'lucide-react';
import { fleetCopy, fleetData, type FleetCategory } from '../../data/copy/fleet';
import { useAppLanguage } from '../../hooks/useAppLanguage';

interface FleetShowcaseProps {
  onCheckAvailabilityClick?: () => void;
}

export const FleetShowcase: React.FC<FleetShowcaseProps> = ({
  onCheckAvailabilityClick
}) => {
  const { lang } = useAppLanguage();
  const content = fleetCopy[lang];
  const [activeFilter, setActiveFilter] = useState<FleetCategory>('all');

  const filteredFleet = fleetData.filter(
    (car) => activeFilter === 'all' || car.category === activeFilter
  );

  return (
    <section className="py-24 bg-surface-light text-content-main relative overflow-hidden">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* Glow Ambient behind section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-primary/30" />
            <span className="text-primary font-bold tracking-widest text-xs uppercase">
              {content.tagline}
            </span>
            <span className="w-8 h-px bg-primary/30" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-heading text-primary mb-6 tracking-tight leading-tight">
            {content.heading}
          </h2>
          <p className="text-content-muted text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            {content.description}
          </p>
        </div>

        {/* Premium Pill Filters dengan Animasi Sliding */}
        <div className="flex flex-wrap justify-center gap-2 mb-20 p-2 bg-white/60 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.03)] rounded-full border border-border-light w-fit mx-auto relative z-20">
          {(Object.keys(content.filters) as FleetCategory[]).map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-8 py-3 rounded-full text-sm font-bold transition-colors duration-300 outline-none cursor-pointer z-10 ${isActive ? 'text-surface-white' : 'text-content-muted hover:text-primary'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFleetFilter"
                    className="absolute inset-0 bg-surface-darkest rounded-full shadow-md -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {content.filters[filter]}
              </button>
            );
          })}
        </div>

        {/* Fleet Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredFleet.map((vehicle) => (
              <motion.div
                key={vehicle.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-[2.5rem] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)] border border-border-light/40 bg-surface-darkest aspect-[4/5] cursor-pointer transition-all duration-500"
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110 opacity-75 group-hover:opacity-90"
                  loading="lazy"
                />

                {/* Dramatic Vignette Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-darkest via-surface-darkest/30 to-transparent opacity-90 transition-opacity duration-500" />

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 transform transition-all duration-500">
                  <div className="glass-card border-white/15 p-6 rounded-[1.75rem] shadow-2xl translate-y-2 group-hover:translate-y-0 transition-all duration-500 hover:border-accent/40 bg-surface-darkest/30">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-accent text-[10px] font-black uppercase tracking-[0.25em] mb-2">{content.filters[vehicle.category as FleetCategory] || vehicle.category}</p>
                        <h3 className="text-surface-white text-2xl font-black tracking-tight font-heading group-hover:text-accent transition-colors duration-300">
                          {vehicle.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-content-light/90 text-sm border-t border-white/5 pt-4">
                      <div className="flex items-center gap-2 bg-surface-darkest/60 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-sm shadow-inner group-hover:border-accent/30 transition-colors duration-300">
                        <Zap className="w-4 h-4 text-accent animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-content-light/60">Max Range</span>
                        <span className="font-black text-surface-white font-heading text-xs tracking-wide">{vehicle.range}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Button */}
        <div className="text-center relative z-20">
          <button
            onClick={onCheckAvailabilityClick}
            className="group inline-flex items-center justify-center gap-3 bg-white border border-border-light hover:border-accent text-primary hover:text-accent px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-sm hover:shadow-[0_12px_40px_rgba(245,158,11,0.18)] transform hover:-translate-y-1 cursor-pointer"
          >
            <Search className="w-4 h-4 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
            {content.cta}
          </button>
        </div>

      </div>
    </section>
  );
};