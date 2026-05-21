import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
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
    <section className="py-24 bg-surface-light text-content-main">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary-hover font-semibold tracking-wider text-sm uppercase mb-4 block">
            {content.tagline}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-content-main mb-6">
            {content.heading}
          </h2>
          <p className="text-content-muted text-lg">
            {content.description}
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 p-2 bg-surface-dark/20 backdrop-blur-md rounded-2xl border border-border-light/5 w-fit mx-auto">
          {(Object.keys(content.filters) as FleetCategory[]).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeFilter === filter
                ? 'bg-accent text-surface-darkest shadow-lg glow-accent'
                : 'text-content-muted hover:text-primary hover:bg-white/50'
                }`}
            >
              {content.filters[filter]}
            </button>
          ))}
        </div>

        {/* Fleet Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredFleet.map((vehicle) => (
              <motion.div
                key={vehicle.id}
                layout
                className="group relative rounded-3xl overflow-hidden shadow-2xl bg-surface-darkest aspect-[4/5] cursor-pointer"
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />

                {/* Gradient Overlay yang lebih dramatis */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-darker via-surface-darker/20 to-transparent opacity-90" />

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 transform transition-all duration-500">
                  <div className="glass-dark p-6 rounded-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-accent text-xs font-bold uppercase tracking-widest mb-1">{vehicle.category}</p>
                        <h3 className="text-surface-white text-2xl font-bold tracking-tight">{vehicle.name}</h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-content-light/80 text-sm">
                      <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                        <span className="text-accent">Range</span>
                        <span className="font-bold text-surface-white">{vehicle.range}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onCheckAvailabilityClick}
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-content-main px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105"
          >
            <Search className="w-5 h-5" />
            {content.cta}
          </button>
        </div>

      </div >
    </section >
  );
};