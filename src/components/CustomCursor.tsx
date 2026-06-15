import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    // Detect mobile / touch devices to completely disable the cursor
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) {
      setIsHidden(true);
      return;
    }

    setIsHidden(false);

    const onMouseMove = (e: MouseEvent) => {
      // Small dot follows immediately
      gsap.to(dotRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        overwrite: "auto",
      });

      // Large ring follows with a smooth lag (spring elastic feel)
      gsap.to(ringRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over standard anchor tag, button, or elements with magnetic/clickable triggers
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.closest(".interactive-node")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    // Fade in on entry
    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Tiny solid dot */}
      <div
        ref={dotRef}
        id="meta-cursor-dot"
        className={`custom-cursor fixed top-0 left-0 ${
          isHovered ? "w-3 h-3 bg-white" : "w-2.5 h-2.5 bg-gold"
        }`}
        style={{ transform: "translate(-50%, -50%)" }}
      />
      {/* Outer elegant ring */}
      <div
        ref={ringRef}
        id="meta-cursor-ring"
        className={`custom-cursor-ring fixed top-0 left-0 ${
          isHovered
            ? "w-16 h-16 border-white bg-white/10 scale-110"
            : "w-10 h-10 border-gold/40"
        }`}
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
