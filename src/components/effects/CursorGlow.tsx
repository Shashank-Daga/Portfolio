"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) return;

    // Disable the effect for touch devices.
    const isTouchDevice =
      window.matchMedia("(hover: none), (pointer: coarse)").matches;

    if (isTouchDevice) return;

    // Respect reduced-motion preferences.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    let mouseX = -500;
    let mouseY = -500;

    let currentX = mouseX;
    let currentY = mouseY;

    let animationFrame: number;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      // Smooth interpolation.
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;

      glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{
        background: `
          radial-gradient(
            circle,
            rgba(232, 163, 61, 0.11) 0%,
            rgba(232, 163, 61, 0.055) 25%,
            rgba(61, 217, 196, 0.025) 45%,
            transparent 70%
          )
        `,
        filter: "blur(8px)",
        willChange: "transform",
      }}
    />
  );
}
