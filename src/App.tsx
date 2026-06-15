import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import custom sections
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

import { Code2, Github, Linkedin, Twitter, ArrowUp, RefreshCw } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll engine
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // beautiful luxury easing
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Sync GSAP ScrollTrigger with Lenis raf cycle
    lenis.on("scroll", ScrollTrigger.update);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Initializer cleanups
    return () => {
      lenis.destroy();
    };
  }, []);

  // Handlers for premium targeted scrolls
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el && lenisRef.current) {
      // Offset matches height of fixed header
      lenisRef.current.scrollTo(el, {
        offset: -80,
        offer: true,
        duration: 1.4,
        ease: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      // Native fallback
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="developer-portfolio-root" className="relative min-h-screen bg-bg-dark text-[#e4e4e7] antialiased selection:bg-gold/25 selection:text-white">
      {/* Precision UI Custom Mouse Tracker */}
      <CustomCursor />

      {/* Floating Header Navigation */}
      <Navbar onScrollTo={handleScrollTo} />

      {/* Main Sections Structure Stack */}
      <main id="app-main-content">
        {/* Section 1: Hero view */}
        <Hero onScrollTo={handleScrollTo} />

        {/* Section 2: Biography & Bento grid stats */}
        <About />

        {/* Section 3: CASE showcase project list & detail portals */}
        <Projects />

        {/* Section 4: Specialization Services cards */}
        <Services />

        {/* Section 6: Chronological vertical milestones */}
        <ExperienceTimeline />

        {/* Section 5: Auto-sliding recommendations */}
        <Testimonials />

        {/* Section 7: Form & direct communication coordinates */}
        <Contact />
      </main>

      {/* Dynamic luxury structural developer footer */}
      <footer id="app-footer" className="relative bg-[#050506] border-t border-white/[0.03] py-16 md:py-24 overflow-hidden">
        {/* Fine matrix backdrop */}
        <div className="absolute inset-0 z-0 opacity-[0.01] pointer-events-none bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:20px_20px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.04] items-start">
            {/* Fine column 1 - Identity */}
            <div className="md:col-span-4 space-y-6">
              <button
                onClick={() => handleScrollTo("hero")}
                id="footer-logo-btn"
                className="flex items-center gap-2 group text-left cursor-pointer font-display text-white"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded bg-gradient-to-br from-gold/20 to-zinc-800 border border-gold/30 text-gold font-bold">
                  <Code2 size={15} />
                </span>
                <span className="font-mono text-xs tracking-tight text-zinc-400 group-hover:text-white transition-colors">
                  METADOT<span className="text-gold">.</span>DEV
                </span>
              </button>
              
              <p className="text-zinc-500 text-xs font-light leading-relaxed max-w-xs">
                A top-tier creative technology portfolio dedicated to fluid design layers, resilient architectural pipelines, and clean functional systems.
              </p>
            </div>

            {/* Fine column 2 - Sitemaps */}
            <div className="md:col-span-4 space-y-4">
              <span className="font-mono text-[9px] tracking-widest text-[#c5a880] uppercase block">
                CYBER INDEX // Sitemap
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => handleScrollTo("hero")}
                  className="text-left text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  Return Home
                </button>
                <button
                  onClick={() => handleScrollTo("about")}
                  className="text-left text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  Biography
                </button>
                <button
                  onClick={() => handleScrollTo("projects")}
                  className="text-left text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  Case Studies
                </button>
                <button
                  onClick={() => handleScrollTo("services")}
                  className="text-left text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  Specializations
                </button>
                <button
                  onClick={() => handleScrollTo("timeline")}
                  className="text-left text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  History Timeline
                </button>
                <button
                  onClick={() => handleScrollTo("contact")}
                  className="text-left text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  Direct Inquiry
                </button>
              </div>
            </div>

            {/* Fine column 3 - System specs and stats */}
            <div className="md:col-span-4 space-y-4">
              <span className="font-mono text-[9px] tracking-widest text-[#c5a880] uppercase block">
                NODE METADATA // SECURITY
              </span>
              <div className="space-y-2 text-[11px] font-mono text-zinc-650">
                <div className="flex items-center justify-between">
                  <span>TLS COMPLIANT</span>
                  <span className="text-green-400">ACTIVE OVER EDGE</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>FRAMEWORK STANDARD</span>
                  <span className="text-white">VITE + REACT 19</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>MOTION DRIVER</span>
                  <span className="text-white">GSAP SCROLLTRIGGER</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright line */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-zinc-600">
            <div>
              &copy; 2026 METADOT NETWORK. ALL RIGHTS RESERVED. CODE LICENSED UNDER APACHE-2.0.
            </div>
            
            <div className="flex items-center gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#c5a880] transition-colors"
              >
                GITHUB
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#c5a880] transition-colors"
              >
                LINKEDIN
              </a>
              <button
                onClick={() => handleScrollTo("hero")}
                id="footer-back-to-top"
                className="group flex items-center gap-1 hover:text-[#c5a880] transition-colors cursor-pointer font-semibold"
              >
                BACK TO TOP <ArrowUp size={11} className="transform group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
