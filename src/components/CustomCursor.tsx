import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const isOverInteractiveCard = Boolean(
        target?.closest('#portfolio') ||
        target?.closest('#skills') ||
        target?.closest('[data-cursor-view]')
      );
      setIsHoveringCard(isOverInteractiveCard);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div
      id="custom-editorial-cursor"
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      {isHoveringCard ? (
        <div className="-translate-x-1/2 -translate-y-1/2 px-3.5 py-1.5 rounded-full bg-[#F4B63E] text-[#050505] font-display font-black text-[11px] tracking-wider uppercase shadow-xl flex items-center gap-1">
          <span>VIEW</span>
          <span>→</span>
        </div>
      ) : (
        <div className="-translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-[#050505]/60 bg-[#050505]/20 backdrop-blur-[1px]" />
      )}
    </div>
  );
};
