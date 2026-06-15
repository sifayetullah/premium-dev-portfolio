import { useEffect, useRef } from "react";
import { ArrowDown, Code2, Sparkles, Globe } from "lucide-react";
import gsap from "gsap";

interface HeroProps {
  onScrollTo: (id: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Elegant intro animations with GSAP
    const ctx = gsap.context(() => {
      // Fluid drift animations for ambient backdrop orbs
      gsap.to(orb1Ref.current, {
        x: "30%",
        y: "20%",
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb2Ref.current, {
        x: "-40%",
        y: "-30%",
        duration: 22,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Split-text entrance delay
      gsap.fromTo(
        ".hero-fade",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.2 }
      );

      // Mini text reveal
      gsap.fromTo(
        ".reveal-line",
        { width: 0 },
        { width: "100%", duration: 1.5, ease: "power3.inOut", delay: 0.6 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center bg-bg-dark pt-24 pb-12 overflow-hidden"
    >
      {/* Immersive Glowing Orbs Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <div
          ref={orb1Ref}
          className="glow-blur absolute top-[10%] left-[20%] w-[380px] md:w-[650px] h-[385px] md:h-[650px] rounded-full bg-gold/10"
        />
        <div
          ref={orb2Ref}
          className="glow-blur absolute bottom-[15%] right-[10%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] rounded-full bg-zinc-800/20"
        />
        {/* Subtle dot matrix grid overlaid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-grow">
        {/* Core Headline Context */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          {/* Status Capsule */}
          <div className="hero-fade inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/15 bg-gold/5 max-w-max mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            <span className="font-mono text-[10px] tracking-widest text-[#c5a880] uppercase">
              Available for Elite Engagements
            </span>
          </div>

          {/* Large display titles */}
          <h1
            ref={headlineRef}
            className="hero-fade font-display text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-medium tracking-tight leading-[1.05] text-white"
          >
            ENGINEERING <br />
            <span className="text-[#c5a880]">IMMERSIVE</span> DIGITAL <br />
            EXPERIENCES
          </h1>

          <div className="reveal-line h-[1px] bg-gradient-to-r from-gold/30 to-transparent w-full my-8" />

          {/* Short description */}
          <div ref={subtitleRef} className="hero-fade max-w-xl">
            <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed">
              Hey, I am a creative engineer specializing in modern, butter-smooth web experiences. Inspired by high-end agency portfolios and Awwwards websites, I construct fast, delightful digital platforms using robust full-stack software architectures.
            </p>
          </div>

          {/* Call to Actions (CTAs) */}
          <div className="hero-fade flex flex-wrap gap-4 items-center mt-10">
            <button
              onClick={() => onScrollTo("projects")}
              id="hero-cta-view"
              className="group px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-gold text-[#070708] shadow-lg hover:shadow-gold/10 hover:bg-white transition-all duration-500 cursor-pointer flex items-center gap-2"
            >
              View My Work
              <span className="inline-block transform group-hover:translate-y-1 transition-transform duration-300">
                <ArrowDown size={14} />
              </span>
            </button>

            <button
              onClick={() => onScrollTo("contact")}
              id="hero-cta-contact"
              className="group px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-white/10 text-white hover:border-gold hover:bg-gold/5 transition-all duration-500 cursor-pointer"
            >
              Let's Connect
            </button>
          </div>
        </div>

        {/* Floating Side Info Card (Editorial layout look) */}
        <div className="lg:col-span-4 hidden lg:block hero-fade">
          <div className="glass-panel p-8 rounded-2xl border border-white/[0.05] relative overflow-hidden backdrop-blur-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full filter blur-2xl" />
            
            <span className="font-mono text-[10px] tracking-widest text-[#c5a880] block mb-4">SPECIFICATIONS //</span>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-white/5 border border-white/5 text-gold mt-0.5">
                  <Code2 size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Full-Stack Tech Stack</h4>
                  <p className="text-xs text-zinc-400 mt-1">TypeScript, Node.js, React 19, GSAP, Tailwind CSS, Firestore, Cloud Systems</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-white/5 border border-white/5 text-gold mt-0.5">
                  <Globe size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Geographical Nodes</h4>
                  <p className="text-xs text-zinc-400 mt-1">Operating globally, remote or client-site, collaborating across timezones.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-white/5 border border-white/5 text-gold mt-0.5">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Focus Standards</h4>
                  <p className="text-xs text-zinc-400 mt-1">60fps animations, semantic type-safe codebases, ultra-low asset weights.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>SEO CORE RATING</span>
              <span className="text-[#c5a880]">100% PERFECT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Prompt */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center mt-auto">
        <div className="flex gap-8 text-[11px] font-mono text-zinc-500">
          <div>
            <span className="text-zinc-600">01 / LOCAL TIME:</span> <span className="text-zinc-300">GMT-7 SF</span>
          </div>
          <div>
            <span className="text-zinc-600">02 / CORE EDITION:</span> <span className="text-zinc-300">2026.06 v1.0</span>
          </div>
        </div>

        <button
          onClick={() => onScrollTo("about")}
          id="hero-scroll-btn"
          className="group flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-gold transition-colors duration-300 cursor-pointer"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">DISCOVER BIOGRAPHY</span>
          <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 group-hover:border-gold/30 group-hover:bg-gold/5 transition-all duration-300">
            <ArrowDown size={12} className="animate-bounce" />
          </span>
        </button>
      </div>
    </section>
  );
}
