import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Search, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { fleetCopy, fleetSliderItems, type FleetCategory } from '../../data/copy/fleet';
import { EV_SALES_SLUG } from '../../data/catalog/services';
import { useAppLanguage } from '../../hooks/useAppLanguage';

interface FleetShowcaseProps {
  onCheckAvailabilityClick?: () => void;
}

type FleetSliderItem = (typeof fleetSliderItems)[number];

type FleetCategoryCardProps = {
  item: FleetSliderItem;
  label: string;
  onClick: () => void;
  className?: string;
};

const FleetCategoryCard = ({ item, label, onClick, className = '' }: FleetCategoryCardProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`group relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)] border border-border-light/40 bg-surface-darkest cursor-pointer text-left ${className}`}
  >
    <img
      src={item.image}
      alt={label}
      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
      loading="lazy"
      draggable={false}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-surface-darkest via-surface-darkest/30 to-transparent opacity-90" />
    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
      <div className="glass-card border-white/15 p-6 rounded-[1.75rem] shadow-2xl translate-y-2 group-hover:translate-y-0 transition-all duration-500 hover:border-accent/40 bg-surface-darkest/30">
        <h3 className="text-surface-white text-2xl font-black tracking-tight font-heading group-hover:text-accent transition-colors duration-300 mb-3">
          {label}
        </h3>
        <span className="inline-flex items-center gap-2 text-sm font-bold text-surface-white/90 group-hover:text-accent transition-colors">
          Lihat Katalog
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </div>
  </button>
);

export const FleetShowcase: React.FC<FleetShowcaseProps> = ({
  onCheckAvailabilityClick
}) => {
  const { lang } = useAppLanguage();
  const content = fleetCopy[lang];
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ startX: 0, scrollLeft: 0, moved: false });

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/layanan/${EV_SALES_SLUG}?category=${categoryId}`);
  };

  const getLabel = (key: FleetSliderItem['key']) =>
    content.filters[key as FleetCategory];

  const updateActiveIndexFromScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container || container.children.length === 0) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const slide = child as HTMLElement;
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(containerCenter - slideCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const slide = container.children[index] as HTMLElement | undefined;
    if (!slide) return;

    container.scrollTo({
      left: slide.offsetLeft - (container.clientWidth - slide.offsetWidth) / 2,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  }, []);

  const goToSlide = (index: number) => {
    scrollToIndex((index + fleetSliderItems.length) % fleetSliderItems.length);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container) return;

    dragRef.current = {
      startX: e.clientX,
      scrollLeft: container.scrollLeft,
      moved: false,
    };
    setIsDragging(true);
    container.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container || !container.hasPointerCapture(e.pointerId)) return;

    const dx = e.clientX - dragRef.current.startX;
    if (Math.abs(dx) > 4) dragRef.current.moved = true;
    container.scrollLeft = dragRef.current.scrollLeft - dx;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container) return;

    if (container.hasPointerCapture(e.pointerId)) {
      container.releasePointerCapture(e.pointerId);
    }
    setIsDragging(false);
    updateActiveIndexFromScroll();
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => updateActiveIndexFromScroll();
    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, [updateActiveIndexFromScroll]);

  return (
    <section className="py-24 bg-surface-light text-content-main relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black font-heading text-primary mb-6 tracking-tight leading-tight">
            {content.heading}
          </h2>
          <p className="text-content-muted text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            {content.description}
          </p>
        </div>

        {/* Grid — md ke atas */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-20">
          {fleetSliderItems.map((item) => (
            <FleetCategoryCard
              key={item.categoryId}
              item={item}
              label={getLabel(item.key)}
              onClick={() => handleCategoryClick(item.categoryId)}
            />
          ))}
        </div>

        {/* Slider — di bawah lg, bisa di-grab */}
        <div className="lg:hidden relative mb-20">
          <div
            ref={scrollRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            className={`flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none px-1 pb-2 select-none touch-pan-x ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
              }`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {fleetSliderItems.map((item) => (
              <div key={item.categoryId} className="snap-center shrink-0 w-[85vw] max-w-sm">
                <FleetCategoryCard
                  item={item}
                  label={getLabel(item.key)}
                  onClick={() => {
                    if (!dragRef.current.moved) {
                      handleCategoryClick(item.categoryId);
                    }
                  }}
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => goToSlide(activeIndex - 1)}
            aria-label="Slide sebelumnya"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-border-light shadow-md flex items-center justify-center text-primary hover:text-accent hover:border-accent/40 transition-colors cursor-pointer z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => goToSlide(activeIndex + 1)}
            aria-label="Slide berikutnya"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-border-light shadow-md flex items-center justify-center text-primary hover:text-accent hover:border-accent/40 transition-colors cursor-pointer z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-3 mt-6">
            {fleetSliderItems.map((item, index) => (
              <button
                key={item.categoryId}
                type="button"
                onClick={() => scrollToIndex(index)}
                aria-label={getLabel(item.key)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${index === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-primary/25 hover:bg-primary/50'
                  }`}
              />
            ))}
          </div>
        </div>

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
