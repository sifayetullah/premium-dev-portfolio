import { useRef, useEffect } from "react";
import { Globe, Code, Compass, ArrowUpRight, Check } from "lucide-react";
import { SERVICES } from "../data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-node",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Map icon strings to Lucide components
  const getIconElement = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="text-[#c5a880]" size={28} />;
      case "Code":
        return <Code className="text-[#c5a880]" size={28} />;
      case "Compass":
        return <Compass className="text-[#c5a880]" size={28} />;
      default:
        return <Globe className="text-[#c5a880]" size={28} />;
    }
  };

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative w-full py-24 md:py-32 bg-bg-dark border-t border-white/[0.03] overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.02]">
        <div className="absolute top-[10%] left-[30%] w-[500px] h-[500px] rounded-full bg-white filter blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs tracking-widest text-[#c5a880] uppercase block mb-3">
              SERVICES // SPECIALIZATION
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-white uppercase">
              PROFESSIONAL OFFERS <br />
              <span className="text-zinc-500">ENGINEERED FOR EXCELLENCE</span>
            </h2>
          </div>
          <div className="h-[1px] bg-white/[0.08] flex-grow mx-8 hidden lg:block mb-3" />
          <div className="text-zinc-500 font-mono text-xs uppercase tracking-wider md:mb-3">
            03 / CAPABILITIES AREA
          </div>
        </div>

        {/* Services Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="service-node group relative glass-panel glass-panel-hover p-8 md:p-10 rounded-2xl border border-white/[0.04] flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Header item */}
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-white/[0.03] border border-white/[0.05] rounded-xl group-hover:bg-gold/15 group-hover:border-gold/30 transition-all duration-500">
                    {getIconElement(service.icon)}
                  </div>
                  
                  {/* Digital spec indicators index */}
                  <span className="font-mono text-xs text-zinc-600">
                    [0{index + 1}]
                  </span>
                </div>

                {/* Scope of service */}
                <h3 className="font-display text-xl md:text-2xl font-medium text-white group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  {service.description}
                </p>

                {/* Horizontal divider */}
                <div className="h-[1px] bg-white/[0.05]" />

                {/* Deliverables checklists */}
                <div className="space-y-3">
                  <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase block">
                    INCLUDED SPECIFICATIONS //
                  </span>
                  <div className="space-y-2.5">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-2">
                        <Check size={14} className="text-[#c5a880] mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300 text-xs font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom footer for services */}
              <div className="pt-8 mt-8 border-t border-white/[0.03] flex items-center justify-between text-xs">
                <span className="text-zinc-500 font-mono text-[10px]">60FPS PERFORMANCE TARGET</span>
                <span className="text-[#c5a880] group-hover:text-white transition-colors duration-300 flex items-center gap-1 font-mono text-[11px] font-medium uppercase tracking-wider">
                  Inquire <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Global capability summary banner */}
        <div className="service-node mt-12 bg-white/[0.01] border border-white/[0.03] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-sm font-medium text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#c5a880]" /> Enterprise System Integrity
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              All deliveries come equipped with structured API security declarations, end-to-end performance logs, responsive layouts conforming to WCAG AAA contrast standard, and exhaustive type protection layers.
            </p>
          </div>
          <div className="flex-shrink-0 text-right">
            <span className="font-mono text-xs text-zinc-600 block">STANDARD ARRANGEMENTS</span>
            <span className="font-display text-[#c5a880] font-medium text-lg mt-1 block">FIXED RATES OR MONTHLY RETAINERS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
