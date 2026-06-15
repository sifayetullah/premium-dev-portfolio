import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-sliding loop
  useEffect(() => {
    if (!isAutoplay) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000); // 6s rotation

    return () => clearInterval(timer);
  }, [isAutoplay]);

  useEffect(() => {
    // Reveal container
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const handleNext = () => {
    setIsAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setIsAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="relative w-full py-24 md:py-32 bg-bg-dark border-t border-white/[0.03] overflow-hidden"
    >
      {/* Subtle overlay ambient glow */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.02] z-0">
        <div className="absolute bottom-[10%] left-[15%] w-[600px] h-[600px] rounded-full bg-gold filter blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="font-mono text-xs tracking-widest text-[#c5a880] uppercase block">
            TESTIMONIALS // REPUTATION
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-white uppercase">
            HUMAN RECOMMENDATIONS
          </h2>
          <div className="w-12 h-[1px] bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Carousel Deck */}
        <div 
          className="relative glass-panel bg-zinc-950/20 rounded-3xl border border-white/[0.05] p-8 md:p-14 md:pb-10 overflow-hidden flex flex-col justify-between min-h-[380px]"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
        >
          {/* Decorative Giant quote backplane */}
          <div className="absolute top-8 right-10 text-white/[0.015] pointer-events-none select-none">
            <Quote size={180} />
          </div>

          {/* Active testimonial container using Framer Motion */}
          <div className="relative z-10 flex-grow flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                {/* Review Message Quote */}
                <p className="text-zinc-200 text-lg md:text-2xl font-light leading-relaxed italic pr-4">
                  "{current.quote}"
                </p>

                {/* Profile Meta Cards */}
                <div className="flex items-center gap-4 pt-6">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border border-white/[0.08]">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white tracking-wide">
                      {current.name}
                    </h4>
                    <p className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase mt-1">
                      {current.role} &mdash; <span className="text-[#c5a880]">{current.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Actions & Carousel Indicators */}
          <div className="relative z-10 flex items-center justify-between pt-10 mt-8 border-t border-white/[0.04]">
            {/* Nav Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                id="testimonial-prev-btn"
                className="group flex items-center justify-center h-10 w-10 rounded-full border border-white/10 hover:border-[#c5a880] hover:bg-gold/5 text-zinc-400 hover:text-gold transition-all duration-300 cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ArrowLeft size={16} className="transform group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={handleNext}
                id="testimonial-next-btn"
                className="group flex items-center justify-center h-10 w-10 rounded-full border border-white/10 hover:border-[#c5a880] hover:bg-gold/5 text-zinc-400 hover:text-gold transition-all duration-300 cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ArrowRight size={16} className="transform group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Slider Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => {
                    setIsAutoplay(false);
                    setActiveIndex(dotIdx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                    activeIndex === dotIdx ? "w-6 bg-gold" : "w-1.5 bg-zinc-750 hover:bg-zinc-650"
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Small Ticker info */}
            <div className="hidden sm:block font-mono text-[9px] text-zinc-600 tracking-wider">
              AUTO-CYCLE MODE: {isAutoplay ? "ENABLED" : "PAUSED"} //
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
