'use client';

import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;

    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);

      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest('a, button, input, textarea, [role="button"], [data-cursor="hover"]') !== null;
      setHovering(isInteractive);
    };

    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);
    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.documentElement.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.7 : hovering ? 2.5 : 1})`,
        }}
      >
        <div
          className="rounded-full border-2"
          style={{
            width: 16,
            height: 16,
            borderColor: hovering ? 'hsl(320 90% 55%)' : 'hsl(190 95% 50%)',
            boxShadow: `0 0 10px ${hovering ? 'hsl(320 90% 55%)' : 'hsl(190 95% 50%)'}`,
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
        />
      </div>
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          opacity: hovering ? 0 : 1,
        }}
      >
        <div
          className="rounded-full bg-primary"
          style={{ width: 4, height: 4, boxShadow: '0 0 6px hsl(190 95% 50%)' }}
        />
      </div>
    </>
  );
}
