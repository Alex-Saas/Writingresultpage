import { useState, useRef, useEffect } from 'react';

export function SmartTooltip({ borderColor, children }: { borderColor: string; children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState<{ top?: string; bottom?: string; left?: string; right?: string; arrowTop?: boolean; arrowLeft?: number }>({ bottom: '100%', right: '0', arrowLeft: 24 });

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const parent = el.parentElement;
    const rect = el.getBoundingClientRect();
    const parentRect = parent?.getBoundingClientRect();
    const vw = window.innerWidth;
    const tooltipW = 256; // 16rem
    const newPos: typeof pos = {};

    // Vertical: show below if not enough space above
    if (rect.top < 10) {
      newPos.top = '100%';
      newPos.arrowTop = true;
    } else {
      newPos.bottom = '100%';
      newPos.arrowTop = false;
    }

    // Horizontal: center tooltip on parent word, clamp to viewport
    if (parentRect) {
      const parentCenter = parentRect.left + parentRect.width / 2;
      let tooltipLeft = parentCenter - tooltipW / 2;
      // Clamp to viewport
      if (tooltipLeft < 10) tooltipLeft = 10;
      if (tooltipLeft + tooltipW > vw - 10) tooltipLeft = vw - 10 - tooltipW;

      // Convert to offset relative to parent
      const offsetLeft = tooltipLeft - parentRect.left;
      newPos.left = `${offsetLeft}px`;
      newPos.right = undefined;

      // Arrow points to center of parent word relative to tooltip
      const arrowPos = parentCenter - tooltipLeft;
      newPos.arrowLeft = Math.max(12, Math.min(arrowPos, tooltipW - 12));
    } else {
      newPos.right = '0';
      newPos.arrowLeft = 24;
    }

    setPos(newPos);
  }, []);

  const style: React.CSSProperties = {
    position: 'absolute',
    zIndex: 9999,
    width: '16rem',
    ...(pos.bottom ? { bottom: pos.bottom, marginBottom: '0.5rem' } : {}),
    ...(pos.top ? { top: pos.top, marginTop: '0.5rem' } : {}),
    ...(pos.right !== undefined ? { right: pos.right } : {}),
    ...(pos.left !== undefined ? { left: pos.left } : {}),
  };

  return (
    <span
      ref={ref}
      className={`bg-white border-2 rounded-[12px] p-4 shadow-lg`}
      style={{ ...style, borderColor }}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
      <span
        className="absolute w-0 h-0 border-l-8 border-r-8 border-l-transparent border-r-transparent"
        style={
          pos.arrowTop
            ? { bottom: '100%', left: `${pos.arrowLeft ?? 24}px`, transform: 'translateX(-8px)', borderBottom: `8px solid ${borderColor}` }
            : { top: '100%', left: `${pos.arrowLeft ?? 24}px`, transform: 'translateX(-8px)', borderTop: `8px solid ${borderColor}` }
        }
      ></span>
    </span>
  );
}
