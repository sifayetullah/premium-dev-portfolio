import { useRef, useEffect } from "react";
import { Award, Briefcase, Cpu, Eye, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in blocks when they enter view
      gsap.fromTo(
        ".about-reveal",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Stat bubble count up simulation or simple scroll trigger
      gsap.from(".stat-number", {
        textContent: 0,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: "Core Languages",
      icon: <Cpu size={16} className="text-gold" />,
      items: ["TypeScript", "JavaScript", "C++", "Python", "SQL", "HTML5/CSS3"]
    },
    {
      title: "Frameworks & UI",
      icon: <Zap size={16} className="text-gold" />,
      items: ["React (19+)", "Vue.js", "Express.js", "Tailwind CSS", "Next.js", "Three.js"]
    },
    {
      title: "Interaction",
      icon: <Eye size={16} className="text-gold" />,
      items: ["GSAP ScrollTrigger", "Motion", "WebGL Shaders", "Canvas API", "SVG Morphing"]
    },
    {
      title: "Tools & Clouds",
      icon: <Briefcase size={16} className="text-gold" />,
      items: ["Git", "Docker", "Google Cloud / GCP", "Firebase/Firestore", "Vite/esbuild", "Node.js"]
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-24 md:py-32 bg-bg-dark border-t border-white/[0.03] overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.02]">
        <div className="absolute top-[20%] left-[5%] w-[800px] h-[800px] rounded-full bg-white filter blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="about-reveal flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs tracking-widest text-[#c5a880] uppercase block mb-3">
              ABOUT ME // BIOGRAPHY
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-white uppercase">
              CREATIVE ENGINEER <br />
              <span className="text-zinc-500">WITH PURPOSE</span>
            </h2>
          </div>
          <div className="h-[1px] bg-white/[0.08] flex-grow mx-8 hidden lg:block mb-3" />
          <div className="text-zinc-500 font-mono text-xs uppercase tracking-wider md:mb-3">
            01 / METACURATION
          </div>
        </div>

        {/* Core Bento Grid Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Story Panel */}
          <div className="about-reveal lg:col-span-8 glass-panel p-8 md:p-10 rounded-2xl border border-white/[0.05] h-full flex flex-col justify-between">
            <div className="space-y-6">
              <span className="font-mono text-[10px] tracking-widest text-[#c5a880] uppercase block">
                PHILOSOPHY & EXPERIENCE //
              </span>
              <p className="text-lg md:text-xl font-light text-zinc-200 leading-relaxed">
                I build digital infrastructure that bridges high-end artistry with strong, optimized system architecture. I believe websites shouldn't just run fast—they must capture attention, evoke emotion, and operate flawlessly across all devices.
              </p>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                For the past 6+ years, I have worked with boutique agencies, luxury brands, and fast-paced tech startups to engineer fully custom platforms. Whether crafting real-time WebGL graphics, building serverless APIs, or tuning animations to hit steady 60fps on mobile screens, I strive for coding craft and aesthetic value in equal measure.
              </p>
            </div>

            {/* Core statistics tracker inside the story panel */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-10 border-t border-white/[0.05]">
              <div className="interactive-node">
                <div className="text-3xl md:text-4xl font-display font-medium text-white flex items-baseline">
                  <span className="stat-number text-[#c5a880]">6</span>+
                </div>
                <div className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase mt-2">
                  Years Exp
                </div>
              </div>
              
              <div className="interactive-node">
                <div className="text-3xl md:text-4xl font-display font-medium text-white flex items-baseline">
                  <span className="stat-number text-[#c5a880]">30</span>+
                </div>
                <div className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase mt-2">
                  Shipped Work
                </div>
              </div>

              <div className="interactive-node">
                <div className="text-3xl md:text-4xl font-display font-medium text-white flex items-baseline">
                  <span className="stat-number text-[#c5a880]">100</span>%
                </div>
                <div className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase mt-2">
                  Client Love
                </div>
              </div>

              <div className="interactive-node">
                <div className="text-3xl md:text-4xl font-display font-medium text-white flex items-baseline">
                  <span className="stat-number text-[#c5a880]">3</span>
                </div>
                <div className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase mt-2">
                  Awwwards Hms
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Panel */}
          <div className="about-reveal lg:col-span-4 glass-panel p-8 rounded-2xl border border-white/[0.05] flex flex-col justify-between h-full bg-gradient-to-br from-white/[0.01] to-[#c5a880]/[0.02]">
            <div className="space-y-4">
              <span className="font-mono text-[10px] tracking-widest text-[#c5a880] uppercase block">
                METRICS AT A GLANCE //
              </span>
              <h3 className="font-display text-white text-lg font-medium leading-tight">
                COMPREHENSIVE CODE COMPLIANCE
              </h3>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                By optimizing and compressing assets, utilizing serverless functions, and tuning motion states, my code delivers exceptional speed and polish.
              </p>
            </div>

            <div className="space-y-3 mt-6">
              <div className="flex items-center justify-between text-xs py-2 border-b border-white/[0.03]">
                <span className="text-zinc-400">FPS animations standard</span>
                <span className="text-[#c5a880] font-mono font-medium">60 FPS</span>
              </div>
              <div className="flex items-center justify-between text-xs py-2 border-b border-white/[0.03]">
                <span className="text-zinc-400">SEO Audit Ranking</span>
                <span className="text-[#c5a880] font-mono font-medium">100 / 100</span>
              </div>
              <div className="flex items-center justify-between text-xs py-2 border-b border-white/[0.03]">
                <span className="text-zinc-400">Type coverage target</span>
                <span className="text-[#c5a880] font-mono font-medium">&gt; 98%</span>
              </div>
              <div className="flex items-center justify-between text-xs py-2">
                <span className="text-zinc-400">Interactive standard</span>
                <span className="text-[#c5a880] font-mono font-medium">WCAG AAA</span>
              </div>
            </div>

            <div className="p-4 bg-white/5 border border-white/5 rounded-xl flex items-center gap-3 mt-6">
              <Award className="text-[#c5a880] flex-shrink-0" size={20} />
              <div className="text-[11px] font-mono text-zinc-300 leading-tight">
                Awarded Clean Code Certifications for 2024 and 2025.
              </div>
            </div>
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="mt-12">
          <h3 className="about-reveal font-mono text-xs tracking-widest text-zinc-500 uppercase block mb-6">
            ACTIVE SKILL MATRIX // CATEGORIES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="about-reveal glass-panel-hover glass-panel p-6 rounded-xl border border-white/[0.04] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    {category.icon}
                    <h4 className="text-sm font-semibold text-white tracking-wide">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, si) => (
                      <span
                        key={si}
                        className="px-2.5 py-1 rounded bg-[#070708]/70 border border-white/[0.04] text-[11px] text-zinc-300 font-mono hover:text-gold hover:border-gold/30 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
