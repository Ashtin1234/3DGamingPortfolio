'use client';

import { useEffect, useState } from 'react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
      style={{
        opacity: done ? 0 : 1,
        transition: 'opacity 0.6s ease-out',
      }}
    >
      <div className="grid-bg absolute inset-0 opacity-30" />

      {/* Rotating hexagon rings */}
      <div className="relative mb-8 h-32 w-32">
        <div
          className="absolute inset-0 rounded-full border-2 border-primary/30"
          style={{ animation: 'spin 2s linear infinite' }}
        />
        <div
          className="absolute inset-4 rounded-full border-2 border-accent/40"
          style={{ animation: 'spin-reverse 3s linear infinite' }}
        />
        <div
          className="absolute inset-8 rounded-full border-2 border-primary/60"
          style={{ animation: 'spin 1.5s linear infinite' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="font-display text-2xl font-bold text-primary neon-text-cyan"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {Math.min(100, Math.floor(progress))}
          </div>
        </div>
      </div>

      <div className="font-display text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
        Initializing System
      </div>

      {/* Progress bar */}
      <div className="relative h-1 w-64 max-w-[80vw] overflow-hidden rounded-full bg-secondary">
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-primary transition-all duration-100"
          style={{
            width: `${Math.min(100, progress)}%`,
            boxShadow: '0 0 10px hsl(190 95% 50%)',
          }}
        />
      </div>

      <div className="mt-3 font-display text-xs text-muted-foreground/60">
        LOADING ASSETS
      </div>
    </div>
  );
}
