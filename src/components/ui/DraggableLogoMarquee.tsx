import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { LogoItem } from '../../data/copy/clientsPartners';

interface DraggableLogoMarqueeProps {
  items: readonly LogoItem[];
  speed?: number;
  reverse?: boolean;
  fadeFrom?: string;
}

function LogoCell({ item }: { item: LogoItem }) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = item.image && !imgFailed;

  return (
    <div className="flex-shrink-0 w-44 sm:w-52 md:w-60 h-28 sm:h-32 md:h-36 bg-surface-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-border-light flex items-center justify-center p-2 sm:p-3 select-none">
      {showImage ? (
        <img
          src={item.image}
          alt={item.name}
          className="max-h-full max-w-full w-full h-full object-contain pointer-events-none"
          draggable={false}
          loading="lazy"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span className="text-[10px] sm:text-xs font-bold text-primary/80 text-center leading-tight line-clamp-3 pointer-events-none">
          {item.name}
        </span>
      )}
    </div>
  );
}

export const DraggableLogoMarquee: React.FC<DraggableLogoMarqueeProps> = ({
  items,
  speed = 0.6,
  reverse = false,
  fadeFrom = 'var(--color-surface-light)',
}) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragRef = useRef({ startX: 0, startOffset: 0, moved: false });
  const setWidthRef = useRef(0);
  const rafRef = useRef<number>(0);
  const [isDragging, setIsDragging] = useState(false);

  const duplicated = [...items, ...items, ...items];

  const normalizeOffset = useCallback(() => {
    const setWidth = setWidthRef.current;
    if (!setWidth) return;
    while (offsetRef.current <= -setWidth) offsetRef.current += setWidth;
    while (offsetRef.current > 0) offsetRef.current -= setWidth;
  }, []);

  const applyTransform = useCallback(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    }
  }, []);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      setWidthRef.current = trackRef.current.scrollWidth / 3;
      normalizeOffset();
      applyTransform();
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [items, normalizeOffset, applyTransform]);

  useEffect(() => {
    const direction = reverse ? 1 : -1;

    const tick = () => {
      if (!isDraggingRef.current && setWidthRef.current > 0) {
        offsetRef.current += speed * direction;
        normalizeOffset();
        applyTransform();
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, reverse, normalizeOffset, applyTransform]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    dragRef.current = { startX: e.clientX, startOffset: offsetRef.current, moved: false };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - dragRef.current.startX;
    if (Math.abs(dx) > 3) dragRef.current.moved = true;
    offsetRef.current = dragRef.current.startOffset + dx;
    normalizeOffset();
    applyTransform();
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 z-10"
        style={{ background: `linear-gradient(to right, ${fadeFrom}, transparent)` }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 z-10"
        style={{ background: `linear-gradient(to left, ${fadeFrom}, transparent)` }}
      />

      <div
        ref={viewportRef}
        className={`overflow-hidden touch-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        role="region"
        aria-label="Logo slider"
      >
        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-5 w-max will-change-transform"
          style={{ transform: 'translate3d(0, 0, 0)' }}
        >
          {duplicated.map((item, index) => (
            <LogoCell key={`${item.id}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
