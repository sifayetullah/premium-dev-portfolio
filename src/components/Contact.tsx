import { useState, useRef, useEffect, FormEvent } from "react";
import { Send, CheckCircle2, Mail, MapPin, Globe2, Github, Linkedin, Twitter, MessageSquare, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    // Elegant slide entrance for the form grids
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-reveal",
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
            toggleActions: "play none none none"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError("");

    // Simple validations
    if (!name || !email || !message) {
      setFormError("All critical markers (*) must be completed before submission.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setFormError("The configured email address schema must conform to typical formats.");
      return;
    }

    setIsSubmitting(true);

    // Simulate elite network latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset variables
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 1800);
  };

  const handleResetForm = () => {
    setSubmitSuccess(false);
    setFormError("");
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative w-full py-24 md:py-32 bg-bg-dark border-t border-white/[0.03] overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.02]">
        <div className="absolute top-[30%] left-[10%] w-[700px] h-[700px] rounded-full bg-gold filter blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
          <div>
            <span className="font-mono text-xs tracking-widest text-[#c5a880] uppercase block mb-3">
              CONNECT // INQUIRY
            </span>
            <span className="font-display text-3xl md:text-5xl font-medium tracking-tight text-white uppercase block">
              LAUNCH A PROJECT
            </span>
          </div>
          <div className="h-[1px] bg-white/[0.08] flex-grow mx-8 hidden lg:block mb-3" />
          <div className="text-zinc-500 font-mono text-xs uppercase tracking-wider md:mb-3">
            05 / CONTACT PORTAL
          </div>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column - Contact Coordinates */}
          <div className="contact-reveal lg:col-span-4 flex flex-col justify-between space-y-12 h-full">
            <div className="space-y-6">
              <span className="font-mono text-[10px] tracking-widest text-[#c5a880] uppercase block">
                PRIMARY COORDINATES //
              </span>
              <h3 className="font-display text-white text-2xl font-light leading-tight">
                LET'S SHAPE THE <span className="text-[#c5a880] font-medium">NEXT ERA</span> OF INTERACTION
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                Have a challenging project, a premium design blueprint, or a long-term collaboration in mind? Submit an inquiry, and let's craft something memorable.
              </p>
            </div>

            {/* Direct coordinate nodes */}
            <div className="space-y-5">
              <a
                href="mailto:sifayet2004@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-xl border border-white/[0.03] bg-white/[0.01] hover:bg-gold/5 hover:border-gold/30 transition-all duration-300"
              >
                <div className="p-2.5 rounded bg-white/5 border border-white/5 text-gold">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">DIRECT EMAIL</span>
                  <span className="text-sm font-medium text-white group-hover:text-gold transition-colors duration-300">
                    sifayet2004@gmail.com
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.03] bg-white/[0.01]">
                <div className="p-2.5 rounded bg-white/5 border border-white/5 text-gold">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">SPATIAL NODE</span>
                  <span className="text-sm font-medium text-white">United States &mdash; Remote Global</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.03] bg-white/[0.01]">
                <div className="p-2.5 rounded bg-white/5 border border-white/5 text-gold">
                  <Globe2 size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">LOCAL AVAILABILITY</span>
                  <span className="text-sm font-medium text-white flex items-center gap-1.5">
                    GMT-7 (PST) Node Active
                  </span>
                </div>
              </div>
            </div>

            {/* Social Anchor networks */}
            <div className="space-y-4 pt-6 border-t border-white/[0.04]">
              <span className="font-mono text-[9px] tracking-widest text-zinc-550 uppercase block">
                CYBERNETIC CHANNELS //
              </span>
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white/[0.02] border border-white/[0.04] rounded-lg text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-350 cursor-pointer"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white/[0.02] border border-white/[0.04] rounded-lg text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-350 cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white/[0.02] border border-white/[0.04] rounded-lg text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-350 cursor-pointer"
                  aria-label="Twitter Profile"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Glass Form Block */}
          <div className="contact-reveal lg:col-span-8 h-full">
            <div className="glass-panel p-8 md:p-10 rounded-2xl border border-white/[0.06] h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <MessageSquare className="text-gold" size={18} />
                      <span className="font-mono text-xs text-zinc-400 uppercase">Interactive Inquiry Slate</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name field */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-zinc-400 uppercase flex items-center gap-1">
                          Your Identity <span className="text-gold">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Genevieve Moreau"
                          className="w-full text-sm py-3 px-4 rounded-xl border border-white/[0.06] bg-[#070708]/60 text-white placeholder-zinc-650 focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] focus:outline-none transition-all duration-300"
                        />
                      </div>

                      {/* Email field */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-zinc-400 uppercase flex items-center gap-1">
                          Inbound Address <span className="text-gold">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. genevieve@artmaison.com"
                          className="w-full text-sm py-3 px-4 rounded-xl border border-white/[0.06] bg-[#070708]/60 text-white placeholder-zinc-650 focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Subject field */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-zinc-400 uppercase">
                        Subject Metric
                      </label>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="e.g. Luxury Editorial Campaign Collaboration"
                        className="w-full text-sm py-3 px-4 rounded-xl border border-white/[0.06] bg-[#070708]/60 text-white placeholder-zinc-650 focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] focus:outline-none transition-all duration-300"
                      />
                    </div>

                    {/* Message field */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-zinc-400 uppercase flex items-center gap-1">
                        Inquiry Narrative <span className="text-gold">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Detail your parameters, deliverables, timelines, and budget constraints here..."
                        className="w-full text-sm py-3 px-4 rounded-xl border border-white/[0.06] bg-[#070708]/60 text-white placeholder-zinc-650 focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] focus:outline-none transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Error container */}
                    {formError && (
                      <p className="text-red-400 font-mono text-xs p-3 bg-red-950/20 border border-red-500/10 rounded-lg">
                        {formError}
                      </p>
                    )}

                    {/* Submit action */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="submit-contact-btn"
                      className={`group relative flex items-center justify-center gap-2.5 w-full py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-widest cursor-pointer transition-all duration-500 overflow-hidden ${
                        isSubmitting
                          ? "bg-zinc-800 text-zinc-500 border border-transparent"
                          : "bg-gold text-[#070708] hover:bg-white hover:shadow-lg hover:shadow-gold/5"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin h-4 w-4 border-2 border-zinc-500 border-t-white rounded-full" />
                          TRANSMITTING PACKETS...
                        </>
                      ) : (
                        <>
                          TRANSMIT INQUIRY
                          <Send size={13} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                    
                    {/* Privacy clause */}
                    <div className="flex items-center gap-2 justify-center text-[10px] font-mono text-zinc-600 pt-2">
                      <ShieldCheck size={12} />
                      <span>SECURE HTTPS CHANNEL // 256-BIT ENCRYPTION ACTIVE</span>
                    </div>
                  </form>
                ) : (
                  // Elegant Success State Card representation
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="text-center py-12 space-y-6 flex flex-col items-center"
                  >
                    <div className="h-16 w-16 bg-gold/10 border border-gold/40 rounded-full flex items-center justify-center text-gold mb-2">
                      <CheckCircle2 size={36} className="animate-pulse" />
                    </div>

                    <div className="space-y-2">
                      <span className="font-mono text-[10px] tracking-widest text-gold uppercase">TRANSMISSION COMPLETION</span>
                      <h3 className="font-display text-2xl md:text-3xl font-medium text-white uppercase">
                        INQUIRY HANDSHAKE SECURED
                      </h3>
                      <p className="text-zinc-400 text-sm max-w-md font-light leading-relaxed">
                        Excellent. Your packet has bypassed security filters and successfully landed in my primary inbox pool. A human dispatcher will reach back to you within 8-12 hours.
                      </p>
                    </div>

                    <div className="p-4 bg-[#070708] border border-white/[0.04] rounded-xl font-mono text-[10px] text-zinc-500 space-y-1 w-full max-w-sm text-left">
                      <div><span className="text-zinc-600">INBOUND REF:</span> <span className="text-zinc-300">METADOT-INQ-{(Math.random() * 100000).toFixed(0)}</span></div>
                      <div><span className="text-zinc-600">TIMESTAMP:</span> <span className="text-zinc-300">2026-06-15 UTC SECURE</span></div>
                      <div><span className="text-zinc-600">MARKER STATUS:</span> <span className="text-[#c5a880]">QUEUED FROM EDGE NODE</span></div>
                    </div>

                    <button
                      onClick={handleResetForm}
                      className="px-6 py-2.5 rounded-full border border-white/10 text-white hover:border-gold hover:bg-gold/5 text-xs font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer"
                    >
                      Close and Reset Slate
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
