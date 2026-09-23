import React, { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Mail,
  MessageCircle,
  Copy,
  Check,
  Film,
  Sparkles,
  ExternalLink,
  Layers,
  Sliders,
  Volume2,
  Palette,
  Clock,
  ArrowUpRight,
  Send,
  Share2,
  Tv,
  Flame,
  Award
} from 'lucide-react';

// Custom SVG Brand Icons for Facebook, Behance & YouTube
function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function BehanceIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M7.65 11.5c.78-.3 1.25-.97 1.25-1.92 0-1.85-1.42-2.58-3.32-2.58H1v10h4.82c2.08 0 3.58-.91 3.58-2.92 0-1.31-.69-2.18-1.75-2.58zM3.48 8.7h1.93c.95 0 1.57.34 1.57 1.15 0 .85-.62 1.2-1.57 1.2H3.48V8.7zm2.14 6.6H3.48v-2.7h2.14c1.1 0 1.76.4 1.76 1.35 0 .96-.66 1.35-1.76 1.35zm12.38-4.8c-2.3 0-3.9 1.7-3.9 4s1.6 4 3.9 4c1.65 0 2.92-.85 3.48-2.22h-1.9c-.3.45-.88.75-1.58.75-1.12 0-1.88-.72-1.98-1.78h5.58c.05-.25.07-.5.07-.75 0-2.3-1.62-4-3.67-4zm-1.88 3.12c.15-.95.82-1.62 1.88-1.62 1.02 0 1.68.67 1.83 1.62h-3.71zm.38-4.62h3v1h-3v-1z" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

interface GraphicItem {
  id: number;
  filename: string;
  title: string;
  category: string;
  description: string;
}

const GRAPHIC_ITEMS: GraphicItem[] = [
  {
    id: 1,
    filename: 'graphic1.jpg',
    title: 'Cyber Horizon',
    category: 'Key Art & Movie Poster',
    description: 'Neo-noir futuristic visual identity with textured film grain and typographic hierarchy.'
  },
  {
    id: 2,
    filename: 'graphic2.jpg',
    title: 'Echo Soundscape',
    category: 'Audio Visual & Event Teaser',
    description: 'Dynamic soundwave composition pairing bold modern typography with high-contrast duotone palettes.'
  },
  {
    id: 3,
    filename: 'graphic3.jpg',
    title: 'Urban Drift',
    category: 'Brand Lookbook & Editorial',
    description: 'High-energy streetwear campaign poster featuring dramatic street photography and brutalist framing.'
  },
  {
    id: 4,
    filename: 'graphic4.jpg',
    title: 'Silent Summit',
    category: 'Documentary Film Artwork',
    description: 'Atmospheric cold-toned cinematic poster with minimalist serif typography and festival laurels.'
  },
  {
    id: 5,
    filename: 'graphic5.jpg',
    title: 'Velocity Motion',
    category: 'Motion Studio Identity',
    description: 'Dynamic kinetic light streak design exploring velocity, speed trails, and geometric title layouts.'
  },
  {
    id: 6,
    filename: 'graphic6.jpg',
    title: 'Apex Finals',
    category: 'Sports Hype Reel Artwork',
    description: 'High-intensity athletic cover artwork with dramatic stadium lighting, glowing embers, and textured grit.'
  }
];

interface VideoItem {
  id: string;
  youtubeId: string;
  url: string;
  title: string;
  badge: string;
  role: string;
  duration: string;
  description: string;
  tags: string[];
}

const PORTFOLIO_VIDEOS: VideoItem[] = [
  {
    id: 'vid-featured',
    youtubeId: 'kuIQFjypFSs',
    url: 'https://youtu.be/kuIQFjypFSs',
    title: 'Featured Master Cut — Cinematic Showcase Trailer',
    badge: 'Featured Masterpiece',
    role: 'Lead Editor, Sound Design & Color Grade',
    duration: '2:30',
    description: 'My absolute best showcase trailer featuring precise pacing, deep sound design layering, dynamic speed transitions, and high-contrast cinematic atmosphere.',
    tags: ['Full Audio Mix', 'Color Grading', 'Kinetic Rhythm', 'Showreel']
  },
  {
    id: 'vid-1',
    youtubeId: '7d1hAfH7egc',
    url: 'https://youtu.be/7d1hAfH7egc',
    title: 'Narrative Short & Atmospheric Cut',
    badge: 'Narrative Atmosphere',
    role: 'Editorial Pacing & Ambient Sound',
    duration: '2:14',
    description: 'A study in emotional pacing, ambient audio layering, and building cinematic tension without rushed transitions.',
    tags: ['Emotional Flow', 'Sound Atmosphere', 'Matched Cuts']
  },
  {
    id: 'vid-2',
    youtubeId: '1u6Tp4tM2lY',
    url: 'https://youtu.be/1u6Tp4tM2lY',
    title: 'High-Energy Commercial Motion Reel',
    badge: 'Commercial Reel',
    role: 'Dynamic Cuts & Audio SFX Sync',
    duration: '1:48',
    description: 'Fast-paced cuts matched precisely to musical transients with punchy foley sound effects, speed ramps, and stylized color contrast.',
    tags: ['Beat Sync', 'Speed Ramps', 'Impact SFX']
  }
];

export default function App() {
  // Theme state: dark mode default as requested
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme-mode');
      if (saved) return saved === 'dark';
    }
    return true; // Default dark
  });

  // Lightbox state for graphic images
  const [activeGraphicIndex, setActiveGraphicIndex] = useState<number | null>(null);

  // Email copy feedback
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Profile image fallback state
  const [imgSrc, setImgSrc] = useState('profile.jpg');

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  // Apply dark mode class to html document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme-mode', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme-mode', 'light');
    }
  }, [isDark]);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeGraphicIndex === null) return;
      if (e.key === 'Escape') {
        setActiveGraphicIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveGraphicIndex((prev) =>
          prev !== null ? (prev + 1) % GRAPHIC_ITEMS.length : null
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveGraphicIndex((prev) =>
          prev !== null ? (prev - 1 + GRAPHIC_ITEMS.length) % GRAPHIC_ITEMS.length : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeGraphicIndex]);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('naeim.connect@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail || !contactMessage) return;

    const subject = encodeURIComponent(`Project Inquiry from ${contactName || 'Collaborator'}`);
    const body = encodeURIComponent(
      `Hi Naeim,\n\n${contactMessage}\n\nFrom: ${contactName}\nReply to: ${contactEmail}`
    );
    window.location.href = `mailto:naeim.connect@gmail.com?subject=${subject}&body=${body}`;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans ${
        isDark ? 'bg-[#090d16] text-slate-100' : 'bg-[#f8fafc] text-slate-900'
      }`}
    >
      {/* ========================================================================= */}
      {/* 1. TOP NAVIGATION BAR                                                     */}
      {/* Minimalist header with highlighted name on left, Dark/Light toggle on right*/}
      {/* ========================================================================= */}
      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors duration-300 ${
          isDark
            ? 'bg-[#090d16]/90 border-slate-800/80 text-white'
            : 'bg-white/90 border-slate-200/80 text-slate-900'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand Name on Left */}
          <a href="#profile" className="flex items-center gap-3 group">
            <div className="relative">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 via-amber-500 to-rose-400 flex items-center justify-center text-white shadow-lg shadow-rose-500/25 transition-transform duration-300 group-hover:scale-105">
                <Film className="w-5 h-5" />
              </span>
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#090d16]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-lg sm:text-xl tracking-tight bg-gradient-to-r from-white via-rose-300 to-amber-300 bg-clip-text text-transparent group-hover:from-rose-400 group-hover:to-amber-400 transition-all">
                NAEIM Visual
              </span>
              <span
                className={`text-[10px] tracking-widest uppercase font-semibold flex items-center gap-1.5 ${
                  isDark ? 'text-rose-400/90' : 'text-rose-600'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                Video Editor & Visual Storyteller
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold tracking-wider uppercase">
            <a
              href="#profile"
              className={`transition-colors hover:text-rose-500 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Profile
            </a>
            <a
              href="#videos"
              className={`transition-colors hover:text-rose-500 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Videos
            </a>
            <a
              href="#graphics"
              className={`transition-colors hover:text-rose-500 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Graphics
            </a>
            <a
              href="#about"
              className={`transition-colors hover:text-rose-500 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              About
            </a>
            <a
              href="#contact"
              className={`transition-colors hover:text-rose-500 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Right Controls: Dark/Light Toggle + CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              type="button"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`p-2.5 rounded-xl transition-all duration-200 border flex items-center gap-2 text-xs font-medium ${
                isDark
                  ? 'bg-slate-800/90 border-slate-700 text-amber-300 hover:bg-slate-700 hover:text-white shadow-sm'
                  : 'bg-slate-100 border-slate-300/80 text-slate-700 hover:bg-slate-200 hover:text-slate-900 shadow-sm'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
                  <span className="hidden sm:inline text-slate-200 font-semibold text-xs">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
                  <span className="hidden sm:inline text-slate-700 font-semibold text-xs">Dark</span>
                </>
              )}
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 py-2 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white transition-all shadow-md shadow-rose-600/25 hover:scale-[1.02]"
            >
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-16 sm:space-y-24">
        {/* ========================================================================= */}
        {/* USER REQUIREMENT:                                                         */}
        {/* "প্রোফাইল পিকচারটা নামসহ উপরে থাকবে আর ভিডিওগুলো সব সময় নিচে থাকবে।"      */}
        {/* "আর নামের নিচে ফেসবুকের লোগো, বিহান্সের লোগো, ইউটিউবের লোগো এগুলা দিয়ে দাও।" */}
        {/* ========================================================================= */}

        {/* ========================================================================= */}
        {/* SECTION 1: PROFILE PICTURE WITH HIGHLIGHTED NAME & SOCIAL LOGOS AT THE TOP*/}
        {/* ========================================================================= */}
        <section id="profile" className="scroll-mt-24">
          <div
            className={`p-6 sm:p-12 rounded-3xl border-2 transition-all duration-300 relative overflow-hidden ${
              isDark
                ? 'bg-gradient-to-br from-slate-900/95 via-slate-900/70 to-slate-950 border-slate-800 shadow-2xl shadow-black/70 ring-1 ring-rose-500/20'
                : 'bg-gradient-to-br from-white via-slate-50 to-slate-100 border-slate-200 shadow-xl shadow-slate-200/70 ring-1 ring-rose-500/10'
            }`}
          >
            {/* Ambient background glow aesthetics */}
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 w-80 h-80 bg-rose-500/15 rounded-full blur-3xl pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute -left-16 -bottom-16 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-12">
              {/* Profile Picture at Top */}
              <div className="relative shrink-0 group">
                {/* Glow ring around avatar */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-rose-600 via-amber-400 to-rose-500 opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl bg-slate-950">
                  <img
                    src={imgSrc}
                    alt="NAEIM Visual - Profile"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onError={() => {
                      if (imgSrc !== 'https://i.postimg.cc/k4qKT7NH/afad9c06-d5bb-4290jjj.png') {
                        setImgSrc('https://i.postimg.cc/k4qKT7NH/afad9c06-d5bb-4290jjj.png');
                      }
                    }}
                  />
                </div>

                {/* Available for projects badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  <span>Open for Projects</span>
                </div>
              </div>

              {/* Name, Social Logos Under Name, Greeting & CTAs */}
              <div className="flex-1 text-center md:text-left space-y-5">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span className="px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider bg-rose-500/15 text-rose-500 border border-rose-500/30 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 fill-rose-500" />
                    Video Editor & Motion Artist
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    Visual Storyteller · Sound Design · Color Grade
                  </span>
                </div>

                {/* PROMINENTLY HIGHLIGHTED NAME */}
                <div className="space-y-1">
                  <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                    <span className="bg-gradient-to-r from-rose-500 via-amber-400 to-rose-400 bg-clip-text text-transparent drop-shadow-sm">
                      NAEIM Visual
                    </span>
                  </h1>
                  <p
                    className={`text-base sm:text-lg font-semibold tracking-wide ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Dynamic Video Editor & Creative Visual Artist
                  </p>
                </div>

                {/* SOCIAL LOGOS DIRECTLY UNDER THE NAME (Facebook, Behance, YouTube) */}
                <div className="pt-1 pb-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center justify-center md:justify-start gap-1.5">
                    <Share2 className="w-3.5 h-3.5 text-rose-500" />
                    <span>Connect & Follow My Channels</span>
                  </div>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                    {/* 1. Facebook Logo Button */}
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2.5 py-2 px-4 rounded-xl border font-bold text-xs transition-all duration-200 bg-[#1877f2]/10 border-[#1877f2]/30 text-[#1877f2] dark:text-[#4294ff] hover:bg-[#1877f2] hover:text-white shadow-sm hover:shadow-md hover:scale-105"
                      title="Connect on Facebook"
                    >
                      <FacebookIcon className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                      <span>Facebook</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100" />
                    </a>

                    {/* 2. Behance Logo Button */}
                    <a
                      href="https://www.behance.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2.5 py-2 px-4 rounded-xl border font-bold text-xs transition-all duration-200 bg-[#0057ff]/10 border-[#0057ff]/30 text-[#0057ff] dark:text-[#3884ff] hover:bg-[#0057ff] hover:text-white shadow-sm hover:shadow-md hover:scale-105"
                      title="Follow on Behance"
                    >
                      <BehanceIcon className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                      <span>Behance</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100" />
                    </a>

                    {/* 3. YouTube Logo Button */}
                    <a
                      href="https://youtube.com/@naeimvisual"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2.5 py-2 px-4 rounded-xl border font-bold text-xs transition-all duration-200 bg-[#ff0000]/10 border-[#ff0000]/30 text-[#ff0000] dark:text-[#ff4e4e] hover:bg-[#ff0000] hover:text-white shadow-sm hover:shadow-md hover:scale-105"
                      title="Subscribe on YouTube"
                    >
                      <YouTubeIcon className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                      <span>YouTube</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100" />
                    </a>
                  </div>
                </div>

                {/* Short Welcome Greeting */}
                <p
                  className={`text-sm sm:text-base leading-relaxed max-w-2xl ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  Welcome to my portfolio! I transform raw footage into rhythmically driven visual
                  masterpieces with razor-sharp cuts, atmospheric sound design, and cohesive color
                  treatment. Explore all my featured video edits below!
                </p>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <a
                    href="#videos"
                    className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white transition-all shadow-md shadow-rose-600/25 hover:scale-[1.02]"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch All Videos Below</span>
                  </a>

                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold border transition-colors ${
                      isDark
                        ? 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white'
                        : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100 shadow-sm'
                    }`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Get in Touch</span>
                  </a>

                  <button
                    type="button"
                    onClick={copyEmailToClipboard}
                    className={`inline-flex items-center gap-1.5 py-2.5 px-3.5 rounded-xl text-xs font-medium border transition-colors ${
                      isDark
                        ? 'border-slate-800 bg-slate-800/60 text-slate-400 hover:text-slate-200'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900'
                    }`}
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500 font-semibold">Copied Email!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>naeim.connect@gmail.com</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: ALL VIDEOS ARE NOW ORGANIZED BELOW THE PROFILE                 */}
        {/* User requested: "আর ভিডিওগুলো সব সময় নিচে থাকবে।"                         */}
        {/* Featuring:                                                                */}
        {/* 1) Featured Trailer Video (kuIQFjypFSs) in high-impact responsive container*/}
        {/* 2) Portfolio Videos (7d1hAfH7egc & 1u6Tp4tM2lY)                           */}
        {/* ========================================================================= */}
        <section id="videos" className="space-y-10 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b pb-4 border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 mb-1">
                <Tv className="w-4 h-4" />
                <span>Video Showcase Portfolio</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                All Featured Videos & Edits
              </h2>
            </div>
            <p
              className={`text-xs sm:text-sm max-w-md ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Every cut, sound design layer, and color grade is crafted to captivate the viewer and
              elevate the story.
            </p>
          </div>

          {/* 2A: FEATURED / BEST VIDEO (At the top of the video section) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500">
                <Award className="w-4 h-4" />
                <span>Featured Showcase · Master Trailer</span>
              </div>
              <div
                className={`text-xs font-semibold flex items-center gap-2 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                <span>1080p 60fps</span>
                <span aria-hidden="true">·</span>
                <span>Sound Mastered</span>
              </div>
            </div>

            {/* Featured Video Container (16:9 aspect ratio with subtle shadow) */}
            <div
              className={`relative rounded-3xl overflow-hidden border-2 transition-all duration-300 shadow-2xl ${
                isDark
                  ? 'bg-slate-900/90 border-slate-800 shadow-black/80 ring-1 ring-rose-500/20'
                  : 'bg-white border-slate-200 shadow-slate-300/80 ring-1 ring-rose-500/10'
              }`}
            >
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/kuIQFjypFSs?rel=0&modestbranding=1"
                  title="Featured Video Trailer - NAEIM Visual"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                  loading="eager"
                />
              </div>

              {/* Meta bar */}
              <div
                className={`p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs border-t ${
                  isDark
                    ? 'bg-slate-900/95 border-slate-800 text-slate-300'
                    : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="p-1 rounded-md bg-rose-500/20 text-rose-500">
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </span>
                  <span className="font-bold text-sm tracking-tight text-white dark:text-slate-100">
                    Featured Master Showreel & Trailer Edit
                  </span>
                  <span className="hidden sm:inline opacity-40">|</span>
                  <span className="hidden sm:inline text-rose-400 font-medium">Original Cut by NAEIM Visual</span>
                </div>

                <a
                  href="https://youtu.be/kuIQFjypFSs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 transition-colors shadow-sm"
                >
                  <YouTubeIcon className="w-4 h-4" />
                  <span>Watch on YouTube</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* 2B: OTHER VIDEO PORTFOLIO WORKS (7d1hAfH7egc & 1u6Tp4tM2lY) */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500">
              <Film className="w-4 h-4" />
              <span>More Video Works</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {PORTFOLIO_VIDEOS.slice(1).map((video, idx) => (
                <div
                  key={video.id}
                  className={`group rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                    isDark
                      ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:shadow-black/70'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-slate-200/90'
                  }`}
                >
                  {/* Responsive 16:9 iframe embed */}
                  <div className="relative w-full aspect-video bg-black overflow-hidden">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Information */}
                  <div className="p-6 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-rose-500/10 text-rose-500 border border-rose-500/20">
                        {video.badge}
                      </span>
                      <span
                        className={`flex items-center gap-1.5 font-medium ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5" />
                        <span>{video.duration}</span>
                        <span aria-hidden="true">·</span>
                        <span>{video.role}</span>
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold tracking-tight group-hover:text-rose-500 transition-colors">
                      {video.title}
                    </h3>

                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {video.description}
                    </p>

                    {/* Tags */}
                    <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap gap-1.5">
                      {video.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[11px] px-2 py-0.5 rounded border font-medium ${
                            isDark
                              ? 'bg-slate-800/80 border-slate-700/80 text-slate-300'
                              : 'bg-slate-100 border-slate-200 text-slate-700'
                          }`}
                        >
                          ✓ {tag}
                        </span>
                      ))}
                    </div>

                    {/* Direct YouTube link */}
                    <div className="pt-2 flex items-center justify-between text-xs">
                      <span
                        className={`text-[11px] ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        Video link #{idx + 1}
                      </span>
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-bold text-rose-500 hover:text-rose-400 transition-colors"
                      >
                        <YouTubeIcon className="w-3.5 h-3.5 text-rose-500" />
                        <span>Open on YouTube</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: GRAPHIC WORK SECTION                                           */}
        {/* 6 image cards with exact filenames graphic1.jpg to graphic6.jpg           */}
        {/* Lightbox / Modal when clicked                                             */}
        {/* ========================================================================= */}
        <section id="graphics" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b pb-4 border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 mb-1">
                <Palette className="w-4 h-4" />
                <span>Graphic & Poster Designs</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                Visual Art & Key Frames
              </h2>
            </div>
            <p
              className={`text-xs sm:text-sm max-w-md ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Movie posters, music teasers, and thumbnail key art designed with strong typography
              and moody color treatment. Click any image to view in full resolution.
            </p>
          </div>

          {/* 6 Image Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GRAPHIC_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveGraphicIndex(idx)}
                className={`group cursor-pointer rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                  isDark
                    ? 'bg-slate-900/80 border-slate-800 hover:border-rose-500/50 hover:shadow-black/70'
                    : 'bg-white border-slate-200 hover:border-rose-500/40 hover:shadow-slate-200'
                }`}
              >
                {/* Poster Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-950">
                  <img
                    src={item.filename}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = `/${item.filename}`;
                    }}
                  />

                  {/* Dark overlay vignette on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-rose-400 mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-heading text-lg font-bold leading-tight mb-2">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-slate-200">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>Click to enlarge in Lightbox</span>
                    </div>
                  </div>
                </div>

                {/* Card Title & Category */}
                <div className="p-4 space-y-1">
                  <div
                    className={`text-[11px] font-semibold ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    <span>{item.category}</span>
                  </div>
                  <h3 className="font-heading font-bold text-sm tracking-tight group-hover:text-rose-500 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: DETAILED ABOUT ME (BIO) SECTION                                */}
        {/* Honest, passionate bio located below graphics                             */}
        {/* ========================================================================= */}
        <section id="about" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b pb-4 border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 mb-1">
                <Sliders className="w-4 h-4" />
                <span>The Story & Philosophy</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                About NAEIM Visual
              </h2>
            </div>
            <span
              className={`text-xs font-semibold ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              Honest Dedication · Daily Practice · High-Energy Delivery
            </span>
          </div>

          <div
            className={`p-6 sm:p-10 rounded-3xl border-2 transition-all duration-300 space-y-8 ${
              isDark
                ? 'bg-slate-900/60 border-slate-800'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            {/* User's Exact Honest Bio */}
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider font-extrabold text-rose-500">
                A Note From The Editor
              </span>
              <blockquote
                className={`text-base sm:text-lg lg:text-xl font-normal leading-relaxed italic border-l-4 border-rose-500 pl-4 sm:pl-6 ${
                  isDark ? 'text-slate-200' : 'text-slate-700'
                }`}
              >
                &ldquo;I am a passionate video editor dedicated to the art of visual storytelling.
                Over the past several months, I have immersed myself in learning the ins and outs of
                editing—practicing daily, refining my pacing, and perfecting my sound design. While I
                don&apos;t claim decades of industry experience, I bring fresh creativity, high-energy
                dedication, and a modern aesthetic to every frame. Let&apos;s create something memorable
                together.&rdquo;
              </blockquote>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div
                className={`p-5 rounded-2xl border ${
                  isDark ? 'bg-slate-900/90 border-slate-800/80' : 'bg-slate-50 border-slate-200/80'
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-3">
                  <Film className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-sm mb-1">Rhythm & Pacing</h4>
                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Cutting to narrative emotion rather than arbitrary timecodes; maintaining seamless momentum.
                </p>
              </div>

              <div
                className={`p-5 rounded-2xl border ${
                  isDark ? 'bg-slate-900/90 border-slate-800/80' : 'bg-slate-50 border-slate-200/80'
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-3">
                  <Volume2 className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-sm mb-1">Sound Design</h4>
                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Layered ambiences, precision whooshes, risers, and punchy hits that drive emotional impact.
                </p>
              </div>

              <div
                className={`p-5 rounded-2xl border ${
                  isDark ? 'bg-slate-900/90 border-slate-800/80' : 'bg-slate-50 border-slate-200/80'
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-3">
                  <Palette className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-sm mb-1">Color & Mood</h4>
                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Curating balanced tones, rich shadows, and cinematic color palettes that elevate production quality.
                </p>
              </div>

              <div
                className={`p-5 rounded-2xl border ${
                  isDark ? 'bg-slate-900/90 border-slate-800/80' : 'bg-slate-50 border-slate-200/80'
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-3">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-sm mb-1">Kinetic Typography</h4>
                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Integrating modern graphic posters, title cards, and lower thirds that reinforce the story.
                </p>
              </div>
            </div>

            {/* Software Arsenal */}
            <div className="space-y-3 pt-2">
              <span
                className={`text-xs font-bold uppercase tracking-wider ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Primary Creative Arsenal
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  'Adobe Premiere Pro',
                  'Adobe After Effects',
                  'DaVinci Resolve',
                  'Adobe Photoshop',
                  'Sound Foley & Audio Mastering',
                  'Dynamic Beat Sync',
                  'Color Grading & LUTs',
                  'Kinetic Motion Design'
                ].map((tool) => (
                  <span
                    key={tool}
                    className={`py-1.5 px-3.5 rounded-xl border font-semibold transition-colors ${
                      isDark
                        ? 'bg-slate-800/70 border-slate-700/80 text-slate-300'
                        : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: GET IN TOUCH SECTION                                           */}
        {/* Action buttons (Email, WhatsApp, Social Links: Facebook, Behance, YouTube)*/}
        {/* ========================================================================= */}
        <section id="contact" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b pb-4 border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 mb-1">
                <MessageCircle className="w-4 h-4" />
                <span>Let&apos;s Build Something Memorable</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                Get in Touch
              </h2>
            </div>
            <p
              className={`text-xs sm:text-sm max-w-md ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Have raw footage, a cinematic trailer, or a commercial video that needs punchy visual
              rhythm? Reach out directly!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Contact Info & Action Cards */}
            <div className="lg:col-span-5 space-y-4">
              {/* Direct Email Card */}
              <div
                className={`p-6 rounded-3xl border-2 transition-all duration-300 space-y-4 ${
                  isDark
                    ? 'bg-slate-900/80 border-slate-800'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="font-heading font-bold text-sm">Direct Email</h4>
                    <p
                      className={`text-xs ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      naeim.connect@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <a
                    href="mailto:naeim.connect@gmail.com"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white transition-colors shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Email</span>
                  </a>
                  <button
                    type="button"
                    onClick={copyEmailToClipboard}
                    className={`p-2.5 rounded-xl border transition-colors ${
                      isDark
                        ? 'border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700'
                        : 'border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div
                className={`p-6 rounded-3xl border-2 transition-all duration-300 space-y-4 ${
                  isDark
                    ? 'bg-slate-900/80 border-slate-800'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="font-heading font-bold text-sm">WhatsApp Chat</h4>
                    <p
                      className={`text-xs ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      Fast response for project inquiries & quotes
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/?text=Hi%20Naeim,%20I%20saw%20your%20video%20editor%20portfolio%20and%20would%20like%20to%20collaborate!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Social Channels with Official Brand Icons */}
              <div
                className={`p-6 rounded-3xl border-2 ${
                  isDark
                    ? 'bg-slate-900/60 border-slate-800'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider mb-3">
                  Official Creative Profiles
                </h4>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all text-center ${
                      isDark
                        ? 'border-slate-800 bg-slate-800/60 text-slate-300 hover:border-[#1877f2] hover:text-[#4294ff]'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-[#1877f2] hover:text-[#1877f2]'
                    }`}
                  >
                    <FacebookIcon className="w-5 h-5 text-[#1877f2]" />
                    <span className="font-semibold text-[11px]">Facebook</span>
                  </a>

                  {/* Behance */}
                  <a
                    href="https://www.behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all text-center ${
                      isDark
                        ? 'border-slate-800 bg-slate-800/60 text-slate-300 hover:border-[#0057ff] hover:text-[#3884ff]'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-[#0057ff] hover:text-[#0057ff]'
                    }`}
                  >
                    <BehanceIcon className="w-5 h-5 text-[#0057ff]" />
                    <span className="font-semibold text-[11px]">Behance</span>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://youtube.com/@naeimvisual"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all text-center ${
                      isDark
                        ? 'border-slate-800 bg-slate-800/60 text-slate-300 hover:border-[#ff0000] hover:text-[#ff4e4e]'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-[#ff0000] hover:text-[#ff0000]'
                    }`}
                  >
                    <YouTubeIcon className="w-5 h-5 text-[#ff0000]" />
                    <span className="font-semibold text-[11px]">YouTube</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Quick Project Inquiry Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleContactSubmit}
                className={`p-6 sm:p-10 rounded-3xl border-2 transition-all duration-300 space-y-5 ${
                  isDark
                    ? 'bg-slate-900/80 border-slate-800'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="space-y-1">
                  <h3 className="font-heading font-black text-xl">Send a Direct Message</h3>
                  <p
                    className={`text-xs ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Tell me a bit about your video footage, desired vibe, deadline, or general idea.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="client-name"
                      className="text-xs font-bold uppercase tracking-wider block opacity-80"
                    >
                      Your Name
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      placeholder="e.g. Alex Hunter"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      required
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-sm transition-colors outline-none focus:ring-2 focus:ring-rose-500 ${
                        isDark
                          ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-600'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="client-email"
                      className="text-xs font-bold uppercase tracking-wider block opacity-80"
                    >
                      Email Address
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      placeholder="alex@studio.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      required
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-sm transition-colors outline-none focus:ring-2 focus:ring-rose-500 ${
                        isDark
                          ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-600'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="client-message"
                    className="text-xs font-bold uppercase tracking-wider block opacity-80"
                  >
                    Project Details / Raw Footage Description
                  </label>
                  <textarea
                    id="client-message"
                    rows={4}
                    placeholder="Describe your raw video files, style preferences (fast-paced, cinematic trailer, social cuts), and estimated timeline..."
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    required
                    className={`w-full py-2.5 px-3.5 rounded-xl border text-sm transition-colors outline-none focus:ring-2 focus:ring-rose-500 resize-none ${
                      isDark
                        ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-600'
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                    }`}
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white transition-all shadow-md shadow-rose-600/25 hover:scale-[1.02]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Project Brief</span>
                  </button>

                  {formSent && (
                    <span className="text-xs font-bold text-emerald-500 flex items-center gap-1.5 animate-pulse">
                      <Check className="w-4 h-4" />
                      Email client prepared! Thank you.
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================================= */}
      {/* LIGHTBOX MODAL FOR GRAPHIC IMAGES                                         */}
      {/* Vanilla JS/React modal with close button, prev/next, and keyboard support */}
      {/* ========================================================================= */}
      {activeGraphicIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-modal"
          onClick={() => setActiveGraphicIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Modal Container */}
          <div
            className="relative max-w-4xl max-h-[92vh] w-full flex flex-col rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 flex items-center justify-between border-b border-slate-800/80 bg-slate-900/80">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                  {GRAPHIC_ITEMS[activeGraphicIndex].category}
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-sm font-bold text-white">
                  {GRAPHIC_ITEMS[activeGraphicIndex].title}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">
                  {activeGraphicIndex + 1} / {GRAPHIC_ITEMS.length}
                </span>
                <button
                  onClick={() => setActiveGraphicIndex(null)}
                  type="button"
                  aria-label="Close Lightbox"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Display */}
            <div className="relative flex-1 flex items-center justify-center p-2 sm:p-4 bg-black overflow-hidden max-h-[70vh]">
              <img
                src={GRAPHIC_ITEMS[activeGraphicIndex].filename}
                alt={GRAPHIC_ITEMS[activeGraphicIndex].title}
                className="max-h-[66vh] max-w-full object-contain rounded-lg"
              />

              {/* Prev button */}
              <button
                type="button"
                onClick={() =>
                  setActiveGraphicIndex((prev) =>
                    prev !== null ? (prev - 1 + GRAPHIC_ITEMS.length) % GRAPHIC_ITEMS.length : 0
                  )
                }
                className="absolute left-3 p-2 rounded-full bg-slate-900/80 text-white hover:bg-rose-600 transition-colors border border-slate-700 shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next button */}
              <button
                type="button"
                onClick={() =>
                  setActiveGraphicIndex((prev) =>
                    prev !== null ? (prev + 1) % GRAPHIC_ITEMS.length : 0
                  )
                }
                className="absolute right-3 p-2 rounded-full bg-slate-900/80 text-white hover:bg-rose-600 transition-colors border border-slate-700 shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Caption */}
            <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
              <p className="text-slate-300">
                {GRAPHIC_ITEMS[activeGraphicIndex].description}
              </p>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[11px] font-mono text-rose-400">
                  {GRAPHIC_ITEMS[activeGraphicIndex].filename}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* FOOTER                                                                    */}
      {/* ========================================================================= */}
      <footer
        className={`border-t py-8 sm:py-12 transition-colors duration-300 ${
          isDark
            ? 'bg-[#060910] border-slate-800/80 text-slate-400'
            : 'bg-white border-slate-200 text-slate-600'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-white font-bold text-sm">
              N
            </span>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm text-slate-200 dark:text-white">
                NAEIM Visual
              </span>
              <span className="text-[10px]">
                Video Editor & Visual Storyteller · Portfolio 2026
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
              title="Facebook"
            >
              <FacebookIcon className="w-4 h-4 text-[#1877f2]" />
            </a>
            <a
              href="https://www.behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
              title="Behance"
            >
              <BehanceIcon className="w-4 h-4 text-[#0057ff]" />
            </a>
            <a
              href="https://youtube.com/@naeimvisual"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
              title="YouTube"
            >
              <YouTubeIcon className="w-4 h-4 text-[#ff0000]" />
            </a>
          </div>

          <p className="text-xs opacity-70">
            Crafted with passion, rhythm & high-energy editing.
          </p>
        </div>
      </footer>
    </div>
  );
}
