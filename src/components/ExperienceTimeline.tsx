import { useRef, useEffect } from "react";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";
import { EXPERIENCES } from "../data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the vertical timeline center line downwards as you scroll! (extremely cool Awwwards effect)
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );

      // Fade-reveal timeline nodes stagger
      gsap.fromTo(
        ".timeline-node",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.25,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="timeline"
      className="relative w-full py-24 md:py-32 bg-bg-dark border-t border-white/[0.03] overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.02]">
        <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] rounded-full bg-white filter blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
          <div>
            <span className="font-mono text-xs tracking-widest text-[#c5a880] uppercase block mb-3">
              JOURNEY // CHRONICLE
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-white uppercase">
              PROFESSIONAL TIMELINE <br />
              <span className="text-zinc-500">CAREER ARCHITECTURE</span>
            </h2>
          </div>
          <div className="h-[1px] bg-white/[0.08] flex-grow mx-8 hidden lg:block mb-3" />
          <div className="text-zinc-500 font-mono text-xs uppercase tracking-wider md:mb-3">
            04 / HISTORIC TRACK RECORD
          </div>
        </div>

        {/* Vertical Timeline Wrapper */}
        <div className="relative max-w-4xl mx-auto py-4">
          {/* Timeline Center Line (Dotted background) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/[0.06] -translate-x-1/2" />
          
          {/* Timeline Center Line (Liquid color fill on scroll) */}
          <div
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold via-white/80 to-[#c5a880] -translate-x-1/2 origin-top"
          />

          {/* Timeline Item list */}
          <div className="space-y-16">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`timeline-node relative flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Outer circle node in the middle line */}
                  <div className="absolute left-4 md:left-1/2 top-6 h-6 w-6 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center -translate-x-1/2 z-20 group">
                    <div className="h-2 w-2 rounded-full bg-gold group-hover:scale-150 transition-transform duration-300 animate-pulse" />
                  </div>

                  {/* Left Column Space filler for desktop */}
                  <div className="hidden md:block w-1/2 px-12" />

                  {/* Right Column Content Box representation */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <div className="glass-panel glass-panel-hover p-6 md:p-8 rounded-2xl border border-white/[0.04]">
                      {/* Timeline cap */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        {/* Period Capsule */}
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-[10px] font-mono tracking-wider text-gold uppercase">
                          <Calendar size={11} /> {exp.period}
                        </span>

                        {/* Location Node */}
                        <span className="flex items-center gap-1 text-[11px] font-mono text-zinc-500">
                          <MapPin size={11} /> {exp.location}
                        </span>
                      </div>

                      {/* Title headings */}
                      <h3 className="font-display text-lg md:text-xl font-medium text-white">
                        {exp.role}
                      </h3>
                      <span className="font-mono text-xs text-zinc-400 mt-1 block">
                        {exp.company}
                      </span>

                      {/* Main Paragraph */}
                      <p className="text-zinc-500 text-xs font-light mt-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* List of concrete achievements */}
                      <div className="mt-5 space-y-3 pt-4 border-t border-white/[0.03]">
                        <span className="font-mono text-[9px] tracking-widest text-[#c5a880] uppercase block">
                          SPECIFIC IMPACTS DELIVERED //
                        </span>
                        <ul className="space-y-2">
                          {exp.achievements.map((ach, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2.5 text-xs text-zinc-350 font-light leading-relaxed">
                              <Sparkles size={11} className="text-gold mt-1 flex-shrink-0" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills Tags row */}
                      <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-white/[0.03]">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded bg-[#070708] border border-white/[0.04] text-[9px] text-zinc-450 font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
