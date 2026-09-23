import React, { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  Play,
  Mail,
  MessageCircle,
  Copy,
  Check,
  Film,
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
  Award,
  Sparkles,
  Smartphone
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
  isShort?: boolean;
}

// Interactive YouTube Video Card: Shows official YouTube thumbnail with play button.
// Clicking it directly opens the video or short on YouTube with auto-play in a fresh tab,
// completely avoiding the Google account/workspace iframe restrictions.
function YouTubePlayer({
  videoId,
  title,
  className = "",
  aspectRatio = "video",
  isShort = false,
}: {
  videoId: string;
  title: string;
  className?: string;
  aspectRatio?: "video" | "short";
  isShort?: boolean;
}) {
  const [imgSrc, setImgSrc] = useState(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
  const youtubeUrl = isShort 
    ? `https://www.youtube.com/shorts/${videoId}` 
    : `https://www.youtube.com/watch?v=${videoId}&autoplay=1`;

  return (
    <div className={`relative w-full ${aspectRatio === 'short' ? 'aspect-[9/16]' : 'aspect-video'} rounded-2xl overflow-hidden bg-black border border-slate-700/80 shadow-2xl group ${className}`}>
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full h-full flex items-center justify-center overflow-hidden cursor-pointer block"
        aria-label={`Watch ${title} directly on YouTube`}
        title="Click to play directly on YouTube"
      >
        {/* Official YouTube Thumbnail */}
        <img
          src={imgSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => {
            // Fallback to high-quality thumbnail if maxres is unavailable
            if (!imgSrc.includes('hqdefault')) {
              setImgSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
            }
          }}
        />

        {/* Ambient Dark Gradient Overlay with hover lift */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 group-hover:from-black/60 transition-colors" />

        {/* Prominent Red YouTube Play Button with Pulse on Hover */}
        <div className="relative z-10 flex flex-col items-center gap-2">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:bg-red-500 group-hover:scale-110 transition-all duration-300 border-2 border-white/50 group-hover:shadow-red-600/50">
            <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1 transition-transform group-hover:scale-110" />
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[10px] sm:text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-black/85 text-white border border-white/20 backdrop-blur-sm shadow-lg flex items-center gap-1">
            <span>{isShort ? 'Watch Short' : 'Play on YouTube'}</span>
            <ArrowUpRight className="w-3 h-3 text-red-400" />
          </span>
        </div>

        {/* Bottom Bar: Title & Direct YouTube badge */}
        <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 z-10 flex items-center justify-between text-white/95 text-xs font-semibold bg-gradient-to-t from-black/90 via-black/60 to-transparent">
          <span className="truncate pr-2 group-hover:text-red-300 transition-colors">{title}</span>
          <span className="px-2.5 py-1 rounded-md bg-red-600 hover:bg-red-500 text-[10px] font-bold tracking-wider uppercase text-white shrink-0 flex items-center gap-1 shadow-md transition-colors">
            <YouTubeIcon className="w-3.5 h-3.5" />
            <span>{isShort ? 'Short' : 'Watch'}</span>
          </span>
        </div>
      </a>
    </div>
  );
}

// User-provided portfolio videos & shorts:
// Long-form / Standard 16:9 Projects:
// 1. https://youtu.be/kuIQFjypFSs (Featured)
// 2. https://youtu.be/oZdRVLPeWlg (New)
// 3. https://youtu.be/qUkSfM-V4oc (New)
// 4. https://youtu.be/7d1hAfH7egc
// 5. https://youtu.be/1u6Tp4tM2lY
// Shorts / Vertical 9:16:
// 6. https://youtube.com/shorts/Czw6vV-Eklk?feature=share (New)
// 7. https://youtube.com/shorts/loftNkx9sOs?feature=share (New)
const PORTFOLIO_VIDEOS: VideoItem[] = [
  {
    id: 'vid-featured',
    youtubeId: 'kuIQFjypFSs',
    url: 'https://youtu.be/kuIQFjypFSs',
    title: 'Featured Master Cut — Cinematic Showcase Trailer',
    badge: 'Featured Masterpiece',
    role: 'Lead Editor, Sound Design & Color Grade',
    duration: '2:30',
    description: 'My showcase trailer featuring precise pacing, deep sound design layering, dynamic speed transitions, and high-contrast cinematic atmosphere.',
    tags: ['Full Audio Mix', 'Color Grading', 'Kinetic Rhythm', 'Showreel']
  },
  {
    id: 'vid-ozdrv',
    youtubeId: 'oZdRVLPeWlg',
    url: 'https://youtu.be/oZdRVLPeWlg',
    title: 'Cinematic Storytelling & Visual Narrative Cut',
    badge: 'Narrative Project',
    role: 'Visual Cut, SFX & Atmosphere',
    duration: 'Full Cut',
    description: 'A deep atmospheric edit emphasizing pacing, immersive sound design layers, natural dialogue dynamics, and rich cinematic tones.',
    tags: ['Visual Story', 'Pacing & Tone', 'Sound Design', 'Color Grading']
  },
  {
    id: 'vid-quksf',
    youtubeId: 'qUkSfM-V4oc',
    url: 'https://youtu.be/qUkSfM-V4oc',
    title: 'Kinetic Motion & Dynamic Transition Edit',
    badge: 'Motion Reel',
    role: 'Beat Sync, Speed Ramping & Color',
    duration: 'Full Cut',
    description: 'Fast-paced rhythmic cut synced precisely to audio transients, multi-layered foley effects, and punchy visual contrast.',
    tags: ['Kinetic Cuts', 'Beat Matching', 'Color Pass', 'Audio SFX']
  },
  {
    id: 'vid-1',
    youtubeId: '7d1hAfH7egc',
    url: 'https://youtu.be/7d1hAfH7egc',
    title: 'Narrative Short & Atmospheric Cut',
    badge: 'Narrative Atmosphere',
    role: 'Editorial Pacing & Ambient Sound',
    duration: '2:14',
    description: 'A study in emotional pacing, ambient audio layering, and building cinematic tension with rhythmic matched cuts and natural dialogue flow.',
    tags: ['Emotional Flow', 'Sound Atmosphere', 'Matched Cuts', 'Dialogue Editing']
  },
  {
    id: 'vid-2',
    youtubeId: '1u6Tp4tM2lY',
    url: 'https://youtu.be/1u6Tp4tM2lY',
    title: 'High-Energy Commercial Motion Reel',
    badge: 'Commercial Reel',
    role: 'Dynamic Cuts & Audio SFX Sync',
    duration: '1:48',
    description: 'Fast-paced cuts matched precisely to musical transients with punchy foley sound effects, kinetic speed ramps, and stylized color contrast.',
    tags: ['Beat Sync', 'Speed Ramps', 'Impact SFX', 'Color Contrast']
  }
];

const PORTFOLIO_SHORTS: VideoItem[] = [
  {
    id: 'short-czw6v',
    youtubeId: 'Czw6vV-Eklk',
    url: 'https://youtube.com/shorts/Czw6vV-Eklk?feature=share',
    title: 'Shorts: Visual Impact Cut',
    badge: 'YouTube Short',
    role: 'Fast Hook & Viral Pacing',
    duration: '< 60s',
    description: 'High-retention vertical edit crafted for maximum engagement, punchy opening hook, and seamless looping rhythm.',
    tags: ['Vertical Video', 'Hook Design', 'High Retention', 'Speed Ramp'],
    isShort: true
  },
  {
    id: 'short-loftn',
    youtubeId: 'loftNkx9sOs',
    url: 'https://youtube.com/shorts/loftNkx9sOs?feature=share',
    title: 'Shorts: Kinetic Audio Sync',
    badge: 'YouTube Short',
    role: 'Micro-editing & SFX Layers',
    duration: '< 60s',
    description: 'Punchy mobile-first short form cut with synchronized sound effects, crisp color grading, and dynamic frame transitions.',
    tags: ['Sound Sync', 'Micro Cuts', 'Reels / Shorts', 'Color Pop'],
    isShort: true
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
              Video Works
            </a>
            <a
              href="#shorts"
              className={`transition-colors hover:text-rose-500 flex items-center gap-1.5 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              <span>Shorts</span>
              <span className="px-1.5 py-0.2 rounded text-[9px] font-extrabold uppercase bg-red-600 text-white">
                New
              </span>
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
              className={`p-2.5 rounded-xl transition-all duration-200 border flex items-center gap-2 text-xs font-medium cursor-pointer ${
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
                  treatment. Watch all my video projects below!
                </p>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <a
                    href="#videos"
                    className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white transition-all shadow-md shadow-rose-600/25 hover:scale-[1.02]"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch All Videos</span>
                  </a>

                  <a
                    href="#shorts"
                    className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold border border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all shadow-sm hover:scale-[1.02]"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Watch Shorts (2)</span>
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
                    className={`inline-flex items-center gap-1.5 py-2.5 px-3.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
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

            {/* DIRECTLY UNDER THE PROFILE DETAILS: THE REQUESTED VIDEO EMBED */}
            <div className="mt-8 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500">
                  <Play className="w-4 h-4 fill-rose-500" />
                  <span>Featured Video Trailer · NAEIM Visual</span>
                </div>
                <a
                  href="https://youtu.be/kuIQFjypFSs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-500 hover:text-rose-400 transition-colors"
                >
                  <YouTubeIcon className="w-4 h-4" />
                  <span>https://youtu.be/kuIQFjypFSs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <YouTubePlayer
                videoId="kuIQFjypFSs"
                title="Featured Video Trailer - NAEIM Visual"
              />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: MORE PROJECT VIDEOS (16:9)                                     */}
        {/* YouTube embeds load cleanly with title, direct open, and responsive ratio */}
        {/* ========================================================================= */}
        <section id="videos" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b pb-4 border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 mb-1">
                <Tv className="w-4 h-4" />
                <span>Cinematic Video Works</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                Featured & Additional Video Projects
              </h2>
            </div>
            <p
              className={`text-xs sm:text-sm max-w-md ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Editorial pacing, sound design, and color contrast. Play any project directly or open on YouTube.
            </p>
          </div>

          {/* VIDEOS GRID (4 Projects) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {PORTFOLIO_VIDEOS.slice(1).map((video) => (
                <div
                  key={video.id}
                  className={`group rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col ${
                    isDark
                      ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:shadow-black/70'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-slate-200/90'
                  }`}
                >
                  {/* Responsive 16:9 interactive video with YouTube thumbnail */}
                  <YouTubePlayer
                    videoId={video.youtubeId}
                    title={video.title}
                  />

                  {/* Card Information */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
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
                    </div>

                    {/* Direct YouTube Link and Info */}
                    <div className="pt-4 mt-2 border-t border-slate-200/40 dark:border-slate-800/40 flex items-center justify-between text-xs">
                      <span
                        className={`text-[11px] font-mono truncate max-w-[170px] ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                        title={video.url}
                      >
                        {video.url}
                      </span>
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-bold text-rose-500 hover:text-rose-400 transition-colors"
                      >
                        <YouTubeIcon className="w-3.5 h-3.5 text-rose-500" />
                        <span>Open Video</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2.5: YOUTUBE SHORTS & VERTICAL FORMAT                             */}
        {/* ========================================================================= */}
        <section id="shorts" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b pb-4 border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 mb-1">
                <Smartphone className="w-4 h-4 text-rose-500" />
                <span>Short-Form & Vertical Video</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                YouTube Shorts Showcase
              </h2>
            </div>
            <p
              className={`text-xs sm:text-sm max-w-md ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              High-retention vertical edits designed for Reels, TikTok & YouTube Shorts with fast-paced retention hooks.
            </p>
          </div>

          {/* SHORTS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {PORTFOLIO_SHORTS.map((short) => (
              <div
                key={short.id}
                className={`group rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col ${
                  isDark
                    ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:shadow-black/70'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-slate-200/90'
                }`}
              >
                {/* 9:16 Vertical Video Frame with YouTube Thumbnail */}
                <div className="p-4 sm:p-5 flex justify-center bg-black/40">
                  <div className="w-full max-w-[280px]">
                    <YouTubePlayer
                      videoId={short.youtubeId}
                      title={short.title}
                      aspectRatio="short"
                      isShort={true}
                    />
                  </div>
                </div>

                {/* Shorts Card Details */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-600/15 text-red-500 border border-red-600/25 flex items-center gap-1.5">
                        <YouTubeIcon className="w-3 h-3" />
                        <span>{short.badge}</span>
                      </span>
                      <span
                        className={`flex items-center gap-1.5 font-medium text-xs ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5" />
                        <span>{short.duration}</span>
                        <span aria-hidden="true">·</span>
                        <span>{short.role}</span>
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold tracking-tight group-hover:text-rose-500 transition-colors">
                      {short.title}
                    </h3>

                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {short.description}
                    </p>

                    {/* Tags */}
                    <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap gap-1.5">
                      {short.tags.map((tag) => (
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
                  </div>

                  {/* Direct YouTube Short Link */}
                  <div className="pt-4 mt-2 border-t border-slate-200/40 dark:border-slate-800/40 flex items-center justify-between text-xs">
                    <span
                      className={`text-[11px] font-mono truncate max-w-[170px] ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}
                      title={short.url}
                    >
                      {short.url}
                    </span>
                    <a
                      href={short.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-bold text-red-500 hover:text-red-400 transition-colors"
                    >
                      <YouTubeIcon className="w-3.5 h-3.5 text-red-500" />
                      <span>Watch Short</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: ABOUT ME (BIO) SECTION                                         */}
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
                <h4 className="font-heading font-bold text-sm mb-1">Kinetic Transitions</h4>
                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Speed ramps, dynamic whipping, seamless audio wipes, and punch-ins that keep engagement high.
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
        {/* SECTION 4: GET IN TOUCH SECTION                                           */}
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
                    className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
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
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white transition-all shadow-md shadow-rose-600/25 hover:scale-[1.02] cursor-pointer"
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
