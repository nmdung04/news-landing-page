'use client';

import React, { useRef, useState, useCallback } from "react";

export default function ParallaxBox({
  layers = [],
  children,
  className,
  style,
  tiltMax = 8,
  translateMax = 16,
}) {
  const containerRef = useRef(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const handlePointerMove = useCallback((e) => {
    const node = containerRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX);
    const clientY = e.clientY ?? (e.touches && e.touches[0]?.clientY);
    if (clientX == null || clientY == null) return;

    const x = ((clientX - rect.left) / rect.width) * 2 - 1;  // [-1, 1]
    const y = ((clientY - rect.top) / rect.height) * 2 - 1;  // [-1, 1]
    setPointer({
      x: Math.max(-1, Math.min(1, x)),
      y: Math.max(-1, Math.min(1, y)),
    });
  }, []);

  const handlePointerLeave = useCallback(() => {
    setPointer({ x: 0, y: 0 });
  }, []);

  const rotateX = pointer.y * tiltMax;
  const rotateY = -pointer.x * tiltMax;

  const containerStyle = {
    position: "relative",
    overflow: "hidden",
    perspective: "800px",
    transformStyle: "preserve-3d",
    ...style,
  };

  const innerStyle = {
    position: "absolute",
    inset: 0,
    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    transformStyle: "preserve-3d",
    transition:
      pointer.x === 0 && pointer.y === 0 ? "transform 180ms ease-out" : "transform 16ms linear",
    willChange: "transform",
  };

  return (
    <div
      ref={containerRef}
      className={className}
      style={containerStyle}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerLeave}
    >
      <div style={innerStyle} aria-hidden>
        {layers.map((layer, i) => {
          const speed = layer.speed ?? 0.1;
          const dx = pointer.x * speed * translateMax;
          const dy = pointer.y * speed * translateMax;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                inset: 0,
                transform: `translate3d(${dx}px, ${dy}px, 0)`,
                willChange: "transform",
                pointerEvents: "none",
              }}
            >
              {layer.element}
            </div>
          );
        })}
        <div style={{ position: "relative", zIndex: 2 }}>
          {children}
        </div>
      </div>
    </div>
  );
}