'use client';

import React, { useEffect, useRef, useState } from 'react';

function UfoSvg({ isBeaming }: { isBeaming: boolean }) {
  const matrix = [
    "      4444      ",
    "     444444     ",
    "    44444444    ",
    "  111111111111  ",
    " 11111111111111 ",
    "1011011011011011",
    " 11111111111111 "
  ];
  
  const colors: Record<string, string> = {
    "1": "#9ca3af",
    "4": "#7dd3fc",
    "0": "#fef08a",
    "2": "#60a5fa"
  };

  const pixelSize = 1.3;
  const width = pixelSize * matrix[0].length;
  const height = pixelSize * matrix.length;

  return (
    <div className="relative flex flex-col items-center">
      {/* UFO Sprite */}
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className={`transition-transform duration-300 ${isBeaming ? 'scale-110 drop-shadow-[0_0_8px_var(--accent)]' : ''}`}
      >
        {matrix.map((row, rowIndex) =>
          row.split("").map((char, colIndex) => {
            if (char === " ") return null;
            return (
              <rect
                key={`${colIndex}-${rowIndex}`}
                x={colIndex * pixelSize}
                y={rowIndex * pixelSize}
                width={pixelSize}
                height={pixelSize}
                fill={colors[char] || '#f59e0b'}
              />
            );
          })
        )}
      </svg>

      {/* Option A: Glowing Amber Gold Tractor Beam */}
      <div
        className={`absolute top-[85%] flex flex-col items-center pointer-events-none transition-all duration-300 origin-top ${
          isBeaming
            ? 'opacity-100 scale-y-100'
            : 'opacity-0 scale-y-50'
        }`}
        style={{ width: '64px' }}
      >
        {/* Glowing Source Node at UFO Base */}
        <div className="w-2.5 h-1 bg-[#f59e0b] rounded-full shadow-[0_0_10px_#f59e0b] animate-pulse -mb-0.5" />

        {/* Conical Light Beam */}
        <div
          className="w-full h-18 relative animate-pulse"
          style={{
            clipPath: 'polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)',
            background: 'linear-gradient(180deg, rgba(245, 158, 11, 0.85) 0%, rgba(251, 191, 36, 0.40) 45%, rgba(245, 158, 11, 0.05) 100%)',
            filter: 'drop-shadow(0 0 10px rgba(245, 158, 11, 0.6))',
          }}
        >
          {/* Subtle inner scanline rays */}
          <div
            className="w-full h-full opacity-60"
            style={{
              background: 'repeating-linear-gradient(180deg, transparent, transparent 3px, rgba(255, 255, 255, 0.25) 4px)',
            }}
          />
        </div>

        {/* Ground Target Light Pool */}
        <div
          className="w-12 h-2.5 rounded-[50%] bg-[#f59e0b]/35 shadow-[0_0_16px_#f59e0b] -mt-1.5 border border-[#f59e0b]/60 animate-ping"
          style={{ animationDuration: '2s' }}
        />
      </div>
    </div>
  );
}

export function UfoCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;

      // Detect if cursor is over any clickable / actionable element
      const elem = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      if (elem) {
        const isClickable = !!elem.closest('a, button, input, textarea, select, [role="button"], .chip, .cursor-pointer, [tabindex="0"]');
        setIsHovering(isClickable);
      } else {
        setIsHovering(false);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        target.current.x = e.touches[0].clientX;
        target.current.y = e.touches[0].clientY;

        const elem = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY) as HTMLElement | null;
        if (elem) {
          const isClickable = !!elem.closest('a, button, input, textarea, select, [role="button"], .chip, .cursor-pointer');
          setIsHovering(isClickable);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchstart", handleTouchMove, { passive: true });

    const loop = () => {
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;

      current.current.x += dx * 0.05;
      current.current.y += dy * 0.05;

      if (cursorRef.current) {
        // Center the UFO right over the pointer
        cursorRef.current.style.transform = `translate3d(${current.current.x - 12}px, ${current.current.y - 28}px, 0) rotate(${dx * 0.1}deg)`;
      }

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ willChange: 'transform' }}
    >
      <UfoSvg isBeaming={isHovering} />
    </div>
  );
}
