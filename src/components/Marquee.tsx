import React from 'react';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: 'normal' | 'fast' | 'slow';
  theme?: 'light' | 'dark' | 'yellow';
  separator?: string;
  size?: 'normal' | 'large' | 'huge';
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  direction = 'left',
  speed = 'normal',
  theme = 'light',
  separator = '•',
  size = 'large',
  className = '',
}) => {
  const repeated = [...items, ...items, ...items, ...items];

  // Colors
  const themeClasses = {
    light: 'bg-[#F7F6F2] text-[#050505] border-y border-[#050505]/15',
    dark: 'bg-[#050505] text-[#F7F6F2] border-y border-[#F7F6F2]/20',
    yellow: 'bg-[#F4B63E] text-[#050505] border-y border-[#050505]/20 font-bold',
  }[theme];

  // Font Size
  const sizeClasses = {
    normal: 'text-lg md:text-xl py-3 tracking-widest uppercase font-semibold',
    large: 'text-2xl md:text-4xl py-4 font-display font-extrabold tracking-tight uppercase',
    huge: 'text-5xl md:text-7xl lg:text-8xl py-6 font-display font-black tracking-tighter uppercase',
  }[size];

  // Animation class
  const animClass =
    direction === 'right'
      ? 'animate-marquee-right'
      : speed === 'fast'
      ? 'animate-marquee-left-fast'
      : 'animate-marquee-left';

  return (
    <div className={`overflow-hidden select-none whitespace-nowrap ${themeClasses} ${className}`}>
      <div className={animClass}>
        {repeated.map((item, idx) => (
          <span key={idx} className={`inline-flex items-center px-4 md:px-8 ${sizeClasses}`}>
            <span>{item}</span>
            <span className="mx-4 md:mx-8 opacity-40 font-normal">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
};
