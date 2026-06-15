import { Project, Service, Experience, Testimonial } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "aether-agency",
    title: "Aether Digital",
    category: "Creative Agency Platform",
    description: "An Awwwards-nominated immersive website utilizing custom WebGL, smooth-scroll inertia, and dynamic interactive typography.",
    tags: ["React", "Three.js", "GSAP ScrollTrigger", "GLSL shaders"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800 &h=550",
    liveUrl: "https://example.com/aether",
    githubUrl: "https://github.com/example/aether",
    details: {
      overview: "Aether is a cutting-edge design and development platform featuring procedural organic wave shaders, state-driven immersive transitions, and fluid dynamic typography. Built for a premium Paris-based boutique agency.",
      role: "Lead Creative Technologist",
      year: "2025",
      deliverables: ["WebGL Canvas Architecture", "GLSL Shader Programming", "GSAP Smooth Interaction Integration", "Performance Optimization (60fps on mobile)"]
    }
  },
  {
    id: "chronos-wealth",
    title: "Chronos Wealth",
    category: "Next-Gen Fintech App",
    description: "High-net-worth wealth management workspace featuring low-latency Canvas tickers, premium dark theme design, and secure OAuth portals.",
    tags: ["TypeScript", "Canvas API", "Tailwind CSS", "Recharts", "NodeJS"],
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800 &h=550",
    liveUrl: "https://example.com/chronos",
    githubUrl: "https://github.com/example/chronos",
    details: {
      overview: "Designed and engineered an elite financial terminal serving ultra-high-net-worth clients. Replaced heavy chart elements with an ultrafast custom HTML5 Canvas rendering tree, slashing dashboard CPU overhead by 70%.",
      role: "Full-Stack Engineer",
      year: "2025",
      deliverables: ["High performance Canvas visualizer", "Real-time pricing aggregation engine", "Adaptive responsive secure lock screens", "Localized multi-currency charting"]
    }
  },
  {
    id: "komorebi-editorial",
    title: "Komorebi Living",
    category: "E-Commerce Experience",
    description: "Japan-inspired minimalist furniture showcase featuring responsive multi-layer parallax galleries and micro-interaction buttons.",
    tags: ["React 19", "Motion", "Tailwind CSS", "Stripe API"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800 &h=550",
    liveUrl: "https://example.com/komorebi",
    githubUrl: "https://github.com/example/komorebi",
    details: {
      overview: "A premium, design-forward shopping interface tailored for Kyoto artisan imports. Leveraged spatial item grids, magnetic add-to-cart nodes, and custom fluid sheet transitions for a highly physical, elegant touch-optimized feel.",
      role: "Lead UI Developer",
      year: "2024",
      deliverables: ["Fluid product configuration grid", "Bespoke checkout animation curves", "Stripe integration proxy layer", "Image pre-loading & cache management"]
    }
  },
  {
    id: "apex-visuals",
    title: "Apex Architectural",
    category: "Luxury Studio Portfolio",
    description: "High-end architecture firm project list with scroll-based image scaling, layout cross-fades, and a dynamic grid catalog.",
    tags: ["GSAP ScrollTrigger", "Vite", "CSS Filters", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800 &h=550",
    liveUrl: "https://example.com/apex",
    githubUrl: "https://github.com/example/apex",
    details: {
      overview: "A heavy imagery-focused visual database for architectural marvels. Integrates advanced CSS clipping anims, ScrollTrigger element pin effects, and responsive WebP dynamic resizing to keep premium photography flawless.",
      role: "Interaction Engineer",
      year: "2024",
      deliverables: ["Parallax page scroll structure", "Responsive image grid filter pipeline", "Magnetic interactive navigation anchor", "Custom SVG structural layout overlays"]
    }
  }
];

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    icon: "Globe",
    title: "Full-Stack Web Development",
    description: "Architecting reliable, high-performance web systems utilizing cloud-native databases, atomic security layers, and resilient APIs.",
    features: [
      "Serverless & Edge execution models",
      "Robust state management & real-time sockets",
      "Strict schema Firestore / Postgres architecture",
      "SEO-optimized rendering & routing networks"
    ]
  },
  {
    id: "frontend-dev",
    icon: "Code",
    title: "High-End Frontend Engineering",
    description: "Crafting modern, buttery-smooth interactive user interfaces featuring customized layouts, precise motion curves, and fluid typography.",
    features: [
      "GSAP, Framer Motion, & Canvas wizards",
      "Tailwind optimization & fluid modular typography",
      "Performance benchmarking and light load weights",
      "Cross-browser and mobile-first precise responsiveness"
    ]
  },
  {
    id: "ui-ux",
    icon: "Compass",
    title: "Premium User Experience UI/UX",
    description: "Bridging the gap between brand identity and human-centered design. Developing visual language and interactive layouts that stick.",
    features: [
      "Interactive high-fidelity wireframing",
      "Spatial, rhythmic micro-interactions",
      "Aesthetic typographic hierarchies and pairings",
      "Intuitive navigation patterns & modular design systems"
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Creative Engineer",
    company: "Vanguard Studios",
    location: "San Francisco, CA (Remote)",
    period: "2024 - Present",
    description: "Lead front-end and creative development of high-profile marketing campaigns and interactive luxury platforms.",
    achievements: [
      "Architected bespoke interactive smooth-scroll components, improving visitor retention duration by 42%.",
      "Mentored junior technologists on modern CSS composition, React Hooks lifecycle patterns, and asset pipeline compression.",
      "Shipped 12 award-winning client portals utilizing React + GSAP with sub-second paint times."
    ],
    skills: ["GSAP", "React", "WebGL", "TypeScript", "Performance Auditing"]
  },
  {
    id: "exp-2",
    role: "Frontend Architect",
    company: "Lumina Labs",
    location: "New York, NY",
    period: "2022 - 2024",
    description: "Engineered next-generation interface patterns for complex data dashboarding, CRM platforms, and client portals.",
    achievements: [
      "Converted core Angular application to Vite-backed React SPA, saving dev hot-reload cycles and reducing build size by 50%.",
      "Wrote high-speed Canvas-based tabular drawing utility to plot up to 50k nodes in real-time.",
      "Spearheaded custom design system implementation leveraging Tailwind tokens and accessible semantic components."
    ],
    skills: ["React", "HTML5 Canvas", "Tailwind CSS", "Web accessibility (WCAG)", "REST APIs"]
  },
  {
    id: "exp-3",
    role: "Creative Developer",
    company: "Aura Creative",
    location: "London, UK (Remote)",
    period: "2020 - 2022",
    description: "Designed and developed highly artistic, transition-heavy web platforms for editorial, lifestyle, and fashion brands.",
    achievements: [
      "Collaborated closely with designers on custom SVG path animations and dynamic text reveals.",
      "Integrated secure payment gateways (Stripe, Apple Pay) into premium artisan checkout structures.",
      "Optimized Core Web Vitals to achieve all-green 100% scores across desktop and mobile devices."
    ],
    skills: ["SVG Animation", "Vue.js", "GreenSock GSAP", "E-commerce integrations", "Sass"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Genevieve Moreau",
    role: "Creative Director",
    company: "Maison de L'art",
    quote: "Working with this developer was a game-changer. They translated our dense editorial photography layout into a living, breathing digital canvas. The smooth momentum scrolling and micro-animations exceeded our grandest expectations.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "t-2",
    name: "Marcus Vance",
    role: "VP of Engineering",
    company: "Sovereign Fin",
    quote: "Most creative developers compromise on code quality. That is not the case here. The Canvas-based ticker is extremely performant and structured flawlessly, while being wrapped in a robust, type-safe React workflow.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "t-3",
    name: "Kaito Tanaka",
    role: "Founder",
    company: "Zen Garden Imports",
    quote: "A sublime eye for detail. The spatial product grid and magnetic micro-interactions gave our artisanal e-commerce shop a deeply tactile, luxurious feel. Sales conversion grew by 30% within a month of launch.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  }
];
