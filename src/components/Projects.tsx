import { useState, useRef, useEffect } from "react";
import { X, ExternalLink, Github, Sparkles, FolderClosed } from "lucide-react";
import { Project } from "../types";
import { PROJECTS } from "../data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll-triggered image scaling and card stagger
    const cards = gsap.utils.toArray(".project-card");
    
    cards.forEach((card: any) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, []);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    // Disable main page scrolling while modal is open
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative w-full py-24 md:py-32 bg-bg-dark border-t border-white/[0.03] overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.03]">
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gold filter blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs tracking-widest text-[#c5a880] uppercase block mb-3">
              PORTFOLIO // FEATURED WORK
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-white uppercase">
              CRAFTED PROJECTS <br />
              <span className="text-zinc-500">THAT DELIVER VALUE</span>
            </h2>
          </div>
          <div className="h-[1px] bg-white/[0.08] flex-grow mx-8 hidden lg:block mb-3" />
          <div className="text-zinc-500 font-mono text-xs uppercase tracking-wider md:mb-3">
            02 / HIGH CRAFTSMANSHIP
          </div>
        </div>

        {/* Project grid - stagger layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="project-card group relative bg-zinc-950/40 rounded-2xl border border-white/[0.04] overflow-hidden flex flex-col justify-between"
            >
              {/* Image Container with Parallax / Scale effects */}
              <div 
                onClick={() => openProjectDetails(project)}
                className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/30 z-10 group-hover:bg-black/10 transition-colors duration-500" />
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Floating tags */}
                <div className="absolute top-5 left-5 z-20 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-black/70 backdrop-blur-md rounded-full text-[10px] font-mono uppercase tracking-widest text-[#c5a880] border border-white/5">
                    {project.category}
                  </span>
                </div>

                {/* Hover Reveal interactive circle */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#070708] font-mono text-xs font-semibold uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <Sparkles size={14} /> EXPLORE CASE
                  </span>
                </div>
              </div>

              {/* Project simple details card foot */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between border-t border-white/[0.03]">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-medium text-white group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm font-light mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Tag lines */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.slice(0, 3).map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.04] text-[10px] text-zinc-500 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.04] text-[10px] text-zinc-500 font-mono">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/[0.03]">
                  <button
                    onClick={() => openProjectDetails(project)}
                    className="text-xs font-semibold uppercase tracking-widest text-[#c5a880] hover:text-white transition-colors duration-300"
                  >
                    View Specifications
                  </button>
                  <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
                  <span className="text-xs font-mono text-zinc-600">
                    {project.details.year} // DELIVERED
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Big CTA for work */}
        <div className="mt-16 flex justify-center project-card">
          <div className="glass-panel px-6 py-4 rounded-xl border border-white/[0.05] flex items-center justify-between gap-6 max-w-lg w-full">
            <div className="flex items-center gap-3">
              <FolderClosed className="text-gold flex-shrink-0" size={20} />
              <div className="text-xs text-zinc-300 font-light">
                Looking for alternative project verticals?
              </div>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold uppercase tracking-widest text-[#c5a880] hover:text-white transition-colors duration-300"
            >
              Explore Github
            </a>
          </div>
        </div>
      </div>

      {/* Case Study Details Modal */}
      {selectedProject && (
        <div id="project-case-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-[#070708]/90 backdrop-blur-md overflow-y-auto">
          {/* Modal box */}
          <div className="relative w-full max-w-4xl bg-zinc-950 rounded-2xl border border-white/[0.08] shadow-2xl glass-panel animate-in fade-in-50 zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto flex flex-col">
            {/* Modal Header */}
            <div className="sticky top-0 z-30 bg-zinc-950/90 backdrop-blur-md border-b border-white/[0.06] flex items-center justify-between px-6 py-5">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono text-xs text-zinc-400">ACTIVE PROJECT BLUEPRINT //</span>
              </div>
              
              <button
                onClick={closeProjectDetails}
                className="p-1 px-3 py-1.5 text-xs text-zinc-400 hover:text-white bg-white/5 border border-white/5 hover:border-white/10 rounded-full font-mono transition-all uppercase"
              >
                Close Case Window
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-10 space-y-8 flex-grow">
              {/* Cover visual Banner */}
              <div className="relative aspect-[21/9] w-full rounded-xl overflow-hidden border border-white/[0.05]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[11px] font-mono text-[#c5a880] uppercase tracking-widest block mb-1">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-display text-2xl md:text-4xl font-semibold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Grid content columns */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
                {/* Left columns: Project description */}
                <div className="lg:col-span-8 space-y-6">
                  <div>
                    <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-3">
                      OVERVIEW // METRICS
                    </h4>
                    <p className="text-zinc-200 text-base md:text-lg font-light leading-relaxed">
                      {selectedProject.details.overview}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-3">
                      CORE DELIVERABLES
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.details.deliverables.map((item, didx) => (
                        <li key={didx} className="flex items-start gap-2.5 text-zinc-400 text-sm">
                          <span className="text-[#c5a880] text-sm font-bold mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right columns: project spec sidebar */}
                <div className="lg:col-span-4 bg-white/[0.01] border border-white/[0.04] p-6 rounded-xl space-y-6">
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block">ROLE</span>
                    <span className="text-sm font-medium text-white block mt-1">{selectedProject.details.role}</span>
                  </div>

                  <div className="h-[1px] bg-white/[0.04]" />

                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block">DELIVERY DATE</span>
                    <span className="text-sm font-medium text-white block mt-1">Calendar Year {selectedProject.details.year}</span>
                  </div>

                  <div className="h-[1px] bg-white/[0.04]" />

                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block">CORE TECH STACK</span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {selectedProject.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="px-2 py-0.5 bg-white/5 rounded text-[10px] font-mono text-zinc-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="h-[1px] bg-white/[0.04]" />

                  {/* Actions buttons */}
                  <div className="space-y-3 pt-2">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-gold text-[#070708] font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-all duration-300"
                      >
                        Launch Live View <ExternalLink size={14} />
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300"
                      >
                        Source Code Repository <Github size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
