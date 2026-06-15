import { useState, useEffect } from "react";
import { Menu, X, Code } from "lucide-react";

interface NavbarProps {
  onScrollTo: (id: string) => void;
}

export default function Navbar({ onScrollTo }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Work" },
    { id: "services", label: "Services" },
    { id: "timeline", label: "History" },
    { id: "testimonials", label: "Reviews" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      setIsScrolled(window.scrollY > 50);

      // Section intersection active highlighting
      const scrollPos = window.scrollY + 160;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onScrollTo(id);
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-out ${
        isScrolled
          ? "py-4 bg-[#070708]/75 backdrop-blur-md border-b border-white/[0.04]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand/Logo */}
        <button
          onClick={() => handleLinkClick("hero")}
          id="nav-logo-btn"
          className="flex items-center gap-2 group font-display font-semibold text-lg tracking-wider text-white"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded bg-gradient-to-br from-gold/30 to-zinc-800 border border-gold/40 text-gold group-hover:scale-105 transition-all duration-300">
            <Code size={16} />
          </span>
          <span className="font-mono text-sm tracking-tight text-zinc-400 group-hover:text-white transition-colors duration-300">
            METADOT<span className="text-gold">.</span>DEV
          </span>
        </button>

        {/* Desktop Menu */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1.5 glass-panel px-4 py-1.5 rounded-full border border-white/[0.03]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`px-3.5 py-1.5 text-xs font-medium tracking-wide uppercase transition-all duration-500 rounded-full cursor-pointer ${
                activeSection === item.id
                  ? "bg-gold text-[#070708] font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <button
            onClick={() => handleLinkClick("contact")}
            id="nav-cta-btn"
            className="group relative px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest overflow-hidden border border-gold/40 text-white transition-all duration-500 hover:border-white cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-gold/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
            Connect Now
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          id="mobile-menu-trigger"
          className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors duration-300 rounded"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Slideout */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-[#070708]/98 backdrop-blur-xl z-30 flex flex-col justify-between px-8 py-12 border-t border-white/[0.04] transition-all duration-500 overflow-y-auto"
        >
          <div className="flex flex-col gap-5">
            <span className="font-mono text-xs tracking-widest text-[#c5a880] uppercase">Navigation</span>
            <div className="h-[1px] w-full bg-white/[0.06] mb-2" />
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="text-left py-2 font-display text-3xl font-light tracking-wide text-zinc-300 hover:text-gold hover:pl-2 transition-all duration-300"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <div className="h-[1px] w-full bg-white/[0.06] my-2" />
            <div className="flex items-center justify-between text-zinc-500 font-mono text-[11px]">
              <span>AVAILABLE FOR OFFERS</span>
              <span className="text-green-400 animate-pulse">● LIVE</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
