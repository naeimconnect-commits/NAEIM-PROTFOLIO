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
  Smartphone,
  Phone
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
      <path d="M22 7h-7v2h7V7zm1.726 10c-.442 1.297-2.029 3-4.976 3-3.419 0-5.75-2.327-5.75-5.955 0-3.565 2.279-6.045 5.688-6.045 3.328 0 5.343 2.378 5.343 5.805 0 .463-.047.905-.119 1.309h-8.082c.159 1.748 1.487 2.766 3.197 2.766 1.438 0 2.457-.611 2.871-1.488l1.828.608zm-7.939-3.454h5.275c-.139-1.503-1.127-2.39-2.585-2.39-1.559 0-2.529.919-2.69 2.39zM8.808 13.313c.839-.54 1.307-1.442 1.307-2.482 0-2.355-1.782-3.831-4.542-3.831H0v14h5.774c2.834 0 4.81-1.597 4.81-4.08 0-1.521-.734-2.825-1.776-3.607zm-5.783-4.14h2.463c1.373 0 2.222.709 2.222 1.838 0 1.15-.849 1.884-2.222 1.884H3.025V9.173zm2.666 9.654H3.025v-4.032h2.666c1.554 0 2.502.778 2.502 2.016 0 1.261-.948 2.016-2.502 2.016z" />
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

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.031 0C5.396 0 .029 5.367.029 12.003c0 2.12.553 4.188 1.603 6.009L0 24l6.169-1.619a11.967 11.967 0 0 0 5.862 1.511h.005c6.634 0 12.001-5.367 12.001-12.003C24.037 5.367 18.669 0 12.031 0zm-.005 21.892a9.92 9.92 0 0 1-5.06-1.385l-.363-.215-3.76.986 1.003-3.665-.236-.375a9.924 9.924 0 0 1-1.523-5.235c0-5.485 4.463-9.948 9.948-9.948 2.656 0 5.155 1.034 7.034 2.913a9.882 9.882 0 0 1 2.91 7.035c0 5.486-4.463 9.949-9.953 9.949zm5.45-7.447c-.299-.149-1.77-.873-2.044-.973-.274-.1-.473-.149-.672.15-.199.299-.772.973-.946 1.172-.174.199-.349.224-.648.075-.299-.149-1.262-.465-2.404-1.484-.889-.793-1.489-1.773-1.663-2.072-.174-.299-.019-.461.131-.61.135-.134.299-.349.448-.523.149-.174.199-.299.299-.498.1-.199.05-.374-.025-.523-.075-.149-.672-1.62-.921-2.219-.243-.583-.49-.504-.672-.513l-.573-.01c-.199 0-.523.075-.797.374-.274.299-1.046 1.022-1.046 2.493 0 1.471 1.071 2.891 1.221 3.091.15.199 2.108 3.219 5.107 4.514.714.308 1.271.492 1.706.63.717.228 1.369.196 1.884.119.574-.086 1.77-.723 2.019-1.421.249-.698.249-1.296.174-1.421-.075-.125-.274-.199-.573-.349z" />
    </svg>
  );
}

function GmailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.572l8.073-6.079C21.691 2.279 24 3.434 24 5.457z" />
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
        <div className="relative z-10 flex flex-col items-center gap-1.5 sm:gap-2">
          <div className="w-9 h-9 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:bg-red-500 group-hover:scale-110 transition-all duration-300 border border-white/50 group-hover:shadow-red-600/50">
            <Play className="w-4 h-4 sm:w-8 sm:h-8 fill-current ml-0.5 sm:ml-1 transition-transform group-hover:scale-110" />
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[9px] sm:text-[11px] font-bold tracking-wide uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/85 text-white border border-white/20 backdrop-blur-sm shadow-lg flex items-center gap-1 hidden xs:flex">
            <span>{isShort ? 'Watch Short' : 'Play on YouTube'}</span>
            <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-400" />
          </span>
        </div>

        {/* Bottom Bar: Title & Direct YouTube badge */}
        <div className="absolute bottom-0 inset-x-0 p-1.5 sm:p-3.5 z-10 flex items-center justify-between text-white/95 text-[10px] sm:text-xs font-semibold bg-gradient-to-t from-black/90 via-black/60 to-transparent">
          <span className="truncate pr-1 sm:pr-2 group-hover:text-red-300 transition-colors text-[10px] sm:text-xs">{title}</span>
          <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded sm:rounded-md bg-red-600 hover:bg-red-500 text-[8px] sm:text-[10px] font-bold tracking-wider uppercase text-white shrink-0 flex items-center gap-0.5 sm:gap-1 shadow-md transition-colors">
            <YouTubeIcon className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
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

  // WhatsApp number state (initialized to user's exact number: 01610977029)
  const [whatsAppNumber, setWhatsAppNumber] = useState('01610977029');
  const [isEditingWhatsApp, setIsEditingWhatsApp] = useState(false);
  const [tempWhatsApp, setTempWhatsApp] = useState('01610977029');
  const [showEmailModal, setShowEmailModal] = useState(false);

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

  const getWhatsAppLink = (num: string) => {
    let cleaned = num.replace(/[^\d]/g, '');
    if (cleaned.startsWith('0')) {
      cleaned = '88' + cleaned;
    } else if (!cleaned.startsWith('880') && cleaned.length === 10) {
      cleaned = '880' + cleaned;
    }
    const msg = encodeURIComponent('Hi Naeim, I saw your video editor portfolio and would like to collaborate on a video project!');
    return `https://wa.me/${cleaned}?text=${msg}`;
  };

  const handleSaveWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempWhatsApp.trim()) {
      setWhatsAppNumber(tempWhatsApp.trim());
      setIsEditingWhatsApp(false);
    }
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
              {/* Profile Picture with Perfectly Aligned Revolving Circular Badges in Authentic Official Brand Colors */}
              <div className="relative shrink-0 flex items-center justify-center p-8 sm:p-10 select-none">
                {/* 1. Subtle Ambient Outer Glow Pulse */}
                <div
                  aria-hidden="true"
                  className="absolute inset-2 rounded-full bg-gradient-to-tr from-amber-500/25 via-rose-500/20 to-cyan-500/25 blur-2xl animate-glow-spin pointer-events-none"
                />

                {/* 2. Rotating Orbit Ring */}
                <div
                  className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full border-2 border-amber-500/50 dark:border-amber-400/40 shadow-[0_0_25px_rgba(245,158,11,0.3)] animate-orbit pointer-events-auto"
                >
                  {/* Badge 1: Premiere Pro (Angle 0° - Top) - Official Premiere Purple #9999FF / #00005B */}
                  <div
                    className="absolute -top-5 left-1/2 -translate-x-1/2"
                    title="Adobe Premiere Pro"
                  >
                    <div className="animate-counter-spin">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex flex-col items-center justify-center bg-[#00005b] text-[#9999ff] border-2 border-[#9999ff] shadow-xl shadow-purple-950/80 hover:scale-120 transition-transform cursor-pointer">
                        <span className="font-black text-sm leading-none text-[#9999ff] drop-shadow">Pr</span>
                        <span className="text-[6.5px] font-black tracking-tight uppercase text-white/90">Premiere</span>
                      </div>
                    </div>
                  </div>

                  {/* Badge 2: After Effects (Angle 60° - Top Right) - Official After Effects Violet #D291FF / #00005B */}
                  <div
                    className="absolute top-[25%] right-[-16px] translate-x-1 -translate-y-1/2"
                    title="Adobe After Effects"
                  >
                    <div className="animate-counter-spin">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex flex-col items-center justify-center bg-[#00005b] text-[#d291ff] border-2 border-[#d291ff] shadow-xl shadow-purple-950/80 hover:scale-120 transition-transform cursor-pointer">
                        <span className="font-black text-sm leading-none text-[#d291ff] drop-shadow">Ae</span>
                        <span className="text-[6.5px] font-black tracking-tight uppercase text-white/90">AfterFX</span>
                      </div>
                    </div>
                  </div>

                  {/* Badge 3: Photoshop (Angle 120° - Bottom Right) - Official Photoshop Cyan Blue #31A8FF / #001E36 */}
                  <div
                    className="absolute top-[75%] right-[-16px] translate-x-1 -translate-y-1/2"
                    title="Adobe Photoshop"
                  >
                    <div className="animate-counter-spin">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex flex-col items-center justify-center bg-[#001e36] text-[#31a8ff] border-2 border-[#31a8ff] shadow-xl shadow-blue-950/80 hover:scale-120 transition-transform cursor-pointer">
                        <span className="font-black text-sm leading-none text-[#31a8ff] drop-shadow">Ps</span>
                        <span className="text-[6.5px] font-black tracking-tight uppercase text-white/90">Photoshop</span>
                      </div>
                    </div>
                  </div>

                  {/* Badge 4: Illustrator (Angle 180° - Bottom) - Official Illustrator Orange #FF9A00 / #330000 */}
                  <div
                    className="absolute -bottom-5 left-1/2 -translate-x-1/2"
                    title="Adobe Illustrator"
                  >
                    <div className="animate-counter-spin">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex flex-col items-center justify-center bg-[#330000] text-[#ff9a00] border-2 border-[#ff9a00] shadow-xl shadow-amber-950/80 hover:scale-120 transition-transform cursor-pointer">
                        <span className="font-black text-sm leading-none text-[#ff9a00] drop-shadow">Ai</span>
                        <span className="text-[6.5px] font-black tracking-tight uppercase text-white/90">Illustrator</span>
                      </div>
                    </div>
                  </div>

                  {/* Badge 5: Meta (Angle 240° - Bottom Left) - Official Meta Blue #0081FB / #002F6C */}
                  <div
                    className="absolute top-[75%] left-[-16px] -translate-x-1 -translate-y-1/2"
                    title="Meta Platforms & Video Ads"
                  >
                    <div className="animate-counter-spin">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex flex-col items-center justify-center bg-[#002f6c] text-[#0081fb] border-2 border-[#0081fb] shadow-xl shadow-blue-950/80 hover:scale-120 transition-transform cursor-pointer">
                        <span className="font-black text-base leading-none text-[#0081fb] drop-shadow">∞</span>
                        <span className="text-[6.5px] font-black tracking-tight uppercase text-white/90">Meta</span>
                      </div>
                    </div>
                  </div>

                  {/* Badge 6: Digital Marketing (Angle 300° - Top Left) - Official Cyan/Sky Marketing #0EA5E9 / #0F172A */}
                  <div
                    className="absolute top-[25%] left-[-16px] -translate-x-1 -translate-y-1/2"
                    title="Digital Marketing & Growth"
                  >
                    <div className="animate-counter-spin">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex flex-col items-center justify-center bg-[#0f172a] text-[#38bdf8] border-2 border-[#38bdf8] shadow-xl shadow-cyan-950/80 hover:scale-120 transition-transform cursor-pointer">
                        <Sparkles className="w-3.5 h-3.5 text-[#38bdf8] drop-shadow" />
                        <span className="text-[6px] font-black tracking-tight uppercase text-white/90">Marketing</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Center Profile Photo with Glowing Amber/Gold Gradient Border */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-400 shadow-2xl z-10">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-amber-200/60 bg-slate-950 relative">
                    <img
                      src={imgSrc}
                      alt="NAEIM Visual - Profile"
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      onError={() => {
                        if (imgSrc !== 'https://i.postimg.cc/k4qKT7NH/afad9c06-d5bb-4290jjj.png') {
                          setImgSrc('https://i.postimg.cc/k4qKT7NH/afad9c06-d5bb-4290jjj.png');
                        }
                      }}
                    />
                  </div>

                  {/* Available badge */}
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg flex items-center gap-1 whitespace-nowrap border border-white/40 z-20">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-200 animate-ping" />
                    <span>Open to Work</span>
                  </div>
                </div>
              </div>

              {/* Name, Social Logos Under Name, Greeting & CTAs */}
              <div className="flex-1 text-center md:text-left space-y-4">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span className="px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider bg-rose-500/15 text-rose-500 border border-rose-500/30 flex items-center gap-1.5 shadow-sm">
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

                {/* EXTRA BOLD & HIGHLY PROMINENT NAME */}
                <div className="space-y-1.5">
                  <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none drop-shadow-md">
                    <span className="bg-gradient-to-r from-amber-400 via-rose-500 to-amber-300 bg-clip-text text-transparent filter drop-shadow-[0_6px_20px_rgba(245,158,11,0.5)]">
                      NAEIM Visual
                    </span>
                  </h1>
                  <p
                    className={`text-base sm:text-lg font-black tracking-wide ${
                      isDark ? 'text-slate-100' : 'text-slate-900'
                    }`}
                  >
                    Dynamic Video Editor & Creative Motion Designer
                  </p>
                </div>

                {/* 1. SOCIAL BRAND CHANNELS (Facebook, Behance, YouTube) */}
                <div className="pt-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-center md:justify-start gap-1.5">
                    <Share2 className="w-3.5 h-3.5 text-rose-500" />
                    <span>Official Creative Channels</span>
                  </div>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                    {/* Facebook Button */}
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 py-2 px-3.5 rounded-xl border border-[#1877f2] font-bold text-xs transition-all duration-200 bg-[#1877f2] text-white hover:bg-[#166fe5] hover:shadow-lg hover:shadow-[#1877f2]/30 hover:scale-105"
                      title="Connect on Facebook"
                    >
                      <FacebookIcon className="w-4 h-4 text-white transition-transform group-hover/btn:scale-110" />
                      <span className="text-white font-extrabold tracking-wide">Facebook</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover/btn:text-white" />
                    </a>

                    {/* Behance Button */}
                    <a
                      href="https://www.behance.net/mdnaeim26"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 py-2 px-3.5 rounded-xl border border-[#0057ff] font-bold text-xs transition-all duration-200 bg-[#0057ff] text-white hover:bg-[#0047d4] hover:shadow-lg hover:shadow-[#0057ff]/30 hover:scale-105"
                      title="View Projects on Behance (mdnaeim26)"
                    >
                      <BehanceIcon className="w-4 h-4 text-white transition-transform group-hover/btn:scale-110" />
                      <span className="text-white font-extrabold tracking-wide">Behance</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover/btn:text-white" />
                    </a>

                    {/* YouTube Button */}
                    <a
                      href="https://www.youtube.com/@MdNaeim-u8x"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 py-2 px-3.5 rounded-xl border border-[#ff0000] font-bold text-xs transition-all duration-200 bg-[#ff0000] text-white hover:bg-[#cc0000] hover:shadow-lg hover:shadow-[#ff0000]/30 hover:scale-105"
                      title="Subscribe on YouTube (@MdNaeim-u8x)"
                    >
                      <YouTubeIcon className="w-4 h-4 text-white transition-transform group-hover/btn:scale-110" />
                      <span className="text-white font-extrabold tracking-wide">YouTube</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover/btn:text-white" />
                    </a>
                  </div>
                </div>

                {/* 2. DIRECT CONTACT BUTTONS: EMAIL, WHATSAPP & DIRECT CALL */}
                <div className="pt-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-center md:justify-start gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Direct Inquiries & WhatsApp Chat</span>
                  </div>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                    {/* Compact Email Button */}
                    <button
                      type="button"
                      onClick={() => setShowEmailModal(true)}
                      className="group/btn inline-flex items-center gap-2 py-2 px-3.5 rounded-xl border border-rose-500 font-bold text-xs transition-all duration-200 bg-gradient-to-r from-rose-600 to-rose-700 text-white hover:from-rose-500 hover:to-rose-600 hover:shadow-lg hover:shadow-rose-600/30 hover:scale-105 cursor-pointer"
                      title="Send Email / Message"
                    >
                      <GmailIcon className="w-4 h-4 text-white transition-transform group-hover/btn:scale-110" />
                      <span className="text-white font-extrabold tracking-wide">Email</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover/btn:text-white" />
                    </button>

                    {/* WhatsApp Button (Clean, NO number displayed here, directly opens WhatsApp for 01610977029) */}
                    <a
                      href={getWhatsAppLink(whatsAppNumber)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 py-2 px-3.5 rounded-xl border border-emerald-500 font-bold text-xs transition-all duration-200 bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-500 hover:to-green-500 hover:shadow-lg hover:shadow-emerald-600/30 hover:scale-105"
                      title="Direct Chat on WhatsApp"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white transition-transform group-hover/btn:scale-110" />
                      <span className="text-white font-extrabold tracking-wide">WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover/btn:text-white" />
                    </a>

                    {/* Contact Phone Button (Direct telephone contact replacing number) */}
                    <a
                      href="tel:+8801610977029"
                      className="group/btn inline-flex items-center gap-2 py-2 px-3.5 rounded-xl border border-amber-500 font-bold text-xs transition-all duration-200 bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-500 hover:to-orange-500 hover:shadow-lg hover:shadow-amber-600/30 hover:scale-105"
                      title="Direct Phone Call: +8801610977029"
                    >
                      <Phone className="w-4 h-4 text-white transition-transform group-hover/btn:scale-110" />
                      <span className="text-white font-extrabold tracking-wide">Contact</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover/btn:text-white" />
                    </a>
                  </div>
                </div>

                {/* Clean, punchy bio without text clutter */}
                <p
                  className={`text-sm leading-relaxed max-w-2xl ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  Passionate video editor & visual storyteller. Specializing in cinematic pacing, dynamic sound design, and color grading.
                </p>

                {/* Quick Scroll Links */}
                <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3">
                  <a
                    href="#videos"
                    className="inline-flex items-center gap-2 py-2 px-3.5 rounded-xl text-xs font-bold bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white transition-all shadow-md shadow-rose-600/25 hover:scale-[1.02]"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Videos</span>
                  </a>

                  <a
                    href="#shorts"
                    className="inline-flex items-center gap-2 py-2 px-3.5 rounded-xl text-xs font-bold border border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all shadow-sm hover:scale-[1.02]"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Shorts</span>
                  </a>

                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 py-2 px-3.5 rounded-xl text-xs font-bold border transition-colors ${
                      isDark
                        ? 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white'
                        : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100 shadow-sm'
                    }`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Contact</span>
                  </a>

                  <button
                    type="button"
                    onClick={copyEmailToClipboard}
                    className={`inline-flex items-center gap-1.5 py-2 px-3 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                      isDark
                        ? 'border-slate-800 bg-slate-800/60 text-slate-400 hover:text-slate-200'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900'
                    }`}
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
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
        <section id="videos" className="space-y-6 sm:space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b pb-4 border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 mb-1">
                <Tv className="w-4 h-4" />
                <span>Cinematic Video Works</span>
              </div>
              <h2 className="font-heading text-xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                Video Projects
              </h2>
            </div>
            <p
              className={`text-xs sm:text-sm max-w-md ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Editorial pacing, sound design, and color contrast. Click to play on YouTube.
            </p>
          </div>

          {/* VIDEOS GRID: 2 columns on mobile (grid-cols-2) and 2 on tablet/desktop */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
              {PORTFOLIO_VIDEOS.slice(1).map((video) => (
                <div
                  key={video.id}
                  className={`group rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col ${
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

                  {/* Card Information - Compact & Clean */}
                  <div className="p-3 sm:p-5 space-y-2 sm:space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5 sm:space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] sm:text-xs">
                        <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded text-[9px] sm:text-[11px] font-bold uppercase tracking-wider bg-rose-500/10 text-rose-500 border border-rose-500/20 truncate max-w-[110px] sm:max-w-none">
                          {video.badge}
                        </span>
                        <span
                          className={`hidden sm:flex items-center gap-1 font-medium ${
                            isDark ? 'text-slate-400' : 'text-slate-500'
                          }`}
                        >
                          <Clock className="w-3 h-3" />
                          <span>{video.duration}</span>
                        </span>
                      </div>

                      <h3 className="font-heading text-xs sm:text-lg font-bold tracking-tight group-hover:text-rose-500 transition-colors line-clamp-2 leading-snug">
                        {video.title}
                      </h3>

                      <p
                        className={`text-[11px] sm:text-xs leading-relaxed hidden sm:block ${
                          isDark ? 'text-slate-400' : 'text-slate-600'
                        }`}
                      >
                        {video.description}
                      </p>
                    </div>

                    {/* Direct YouTube Link and Info */}
                    <div className="pt-2 border-t border-slate-200/40 dark:border-slate-800/40 flex items-center justify-between text-[11px] sm:text-xs">
                      <span className="hidden sm:inline font-mono text-[10px] text-slate-500 truncate max-w-[100px]">
                        YouTube
                      </span>
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-rose-500 hover:text-rose-400 transition-colors text-[10px] sm:text-xs ml-auto"
                      >
                        <YouTubeIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-500" />
                        <span>Watch</span>
                        <ArrowUpRight className="w-3 h-3" />
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
        <section id="shorts" className="space-y-6 sm:space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b pb-4 border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 mb-1">
                <Smartphone className="w-4 h-4 text-rose-500" />
                <span>Short-Form Video</span>
              </div>
              <h2 className="font-heading text-xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                YouTube Shorts
              </h2>
            </div>
            <p
              className={`text-xs sm:text-sm max-w-md ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              High-retention vertical edits designed for Reels & YouTube Shorts. Click to play.
            </p>
          </div>

          {/* SHORTS GRID: 2 columns on mobile (grid-cols-2) and 2 on tablet/desktop */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8 max-w-3xl mx-auto">
            {PORTFOLIO_SHORTS.map((short) => (
              <div
                key={short.id}
                className={`group rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col ${
                  isDark
                    ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:shadow-black/70'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-slate-200/90'
                }`}
              >
                {/* 9:16 Vertical Video Frame with YouTube Thumbnail */}
                <div className="p-2 sm:p-4 flex justify-center bg-black/40">
                  <div className="w-full max-w-[220px]">
                    <YouTubePlayer
                      videoId={short.youtubeId}
                      title={short.title}
                      aspectRatio="short"
                      isShort={true}
                    />
                  </div>
                </div>

                {/* Shorts Card Details - Compact */}
                <div className="p-3 sm:p-5 space-y-2 sm:space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1 sm:space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] sm:text-xs">
                      <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded text-[9px] sm:text-[11px] font-bold uppercase tracking-wider bg-red-600/15 text-red-500 border border-red-600/25 flex items-center gap-1">
                        <YouTubeIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        <span>Short</span>
                      </span>
                    </div>

                    <h3 className="font-heading text-xs sm:text-base font-bold tracking-tight group-hover:text-rose-500 transition-colors line-clamp-2 leading-snug">
                      {short.title}
                    </h3>
                  </div>

                  {/* Direct YouTube Short Link */}
                  <div className="pt-2 border-t border-slate-200/40 dark:border-slate-800/40 flex items-center justify-end text-xs">
                    <a
                      href={short.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold text-red-500 hover:text-red-400 transition-colors text-[10px] sm:text-xs"
                    >
                      <YouTubeIcon className="w-3 h-3 text-red-500" />
                      <span>Watch</span>
                      <ArrowUpRight className="w-3 h-3" />
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
        <section id="about" className="space-y-6 sm:space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b pb-4 border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 mb-1">
                <Sliders className="w-4 h-4" />
                <span>Story & Style</span>
              </div>
              <h2 className="font-heading text-xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                About NAEIM Visual
              </h2>
            </div>
          </div>

          <div
            className={`p-5 sm:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-300 space-y-6 ${
              isDark
                ? 'bg-slate-900/60 border-slate-800'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            {/* Direct Honest Bio */}
            <blockquote
              className={`text-sm sm:text-base lg:text-lg font-normal leading-relaxed italic border-l-4 border-rose-500 pl-3 sm:pl-5 ${
                isDark ? 'text-slate-200' : 'text-slate-700'
              }`}
            >
              &ldquo;I am a video editor dedicated to cinematic visual storytelling. I bring fresh creativity, precise rhythm, dynamic audio mixing, and modern aesthetics to every project.&rdquo;
            </blockquote>

            {/* Core Pillars: 2x2 grid on mobile & tablet */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div
                className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border ${
                  isDark ? 'bg-slate-900/90 border-slate-800/80' : 'bg-slate-50 border-slate-200/80'
                }`}
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center mb-2">
                  <Film className="w-4 h-4" />
                </div>
                <h4 className="font-heading font-bold text-xs sm:text-sm mb-0.5">Rhythm & Pacing</h4>
                <p
                  className={`text-[11px] sm:text-xs leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Seamless cuts matched to mood and beat.
                </p>
              </div>

              <div
                className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border ${
                  isDark ? 'bg-slate-900/90 border-slate-800/80' : 'bg-slate-50 border-slate-200/80'
                }`}
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center mb-2">
                  <Volume2 className="w-4 h-4" />
                </div>
                <h4 className="font-heading font-bold text-xs sm:text-sm mb-0.5">Sound Design</h4>
                <p
                  className={`text-[11px] sm:text-xs leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Layered ambient SFX, whooshes, and hits.
                </p>
              </div>

              <div
                className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border ${
                  isDark ? 'bg-slate-900/90 border-slate-800/80' : 'bg-slate-50 border-slate-200/80'
                }`}
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-2">
                  <Palette className="w-4 h-4" />
                </div>
                <h4 className="font-heading font-bold text-xs sm:text-sm mb-0.5">Color Grading</h4>
                <p
                  className={`text-[11px] sm:text-xs leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Rich cinematic tones and mood pallets.
                </p>
              </div>

              <div
                className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border ${
                  isDark ? 'bg-slate-900/90 border-slate-800/80' : 'bg-slate-50 border-slate-200/80'
                }`}
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-2">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="font-heading font-bold text-xs sm:text-sm mb-0.5">Transitions</h4>
                <p
                  className={`text-[11px] sm:text-xs leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Dynamic speed ramps and motion cues.
                </p>
              </div>
            </div>

            {/* Software Arsenal */}
            <div className="space-y-2 pt-1">
              <span
                className={`text-[11px] font-bold uppercase tracking-wider ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Editing Tools
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
                {[
                  'Adobe Premiere Pro',
                  'Adobe After Effects',
                  'DaVinci Resolve',
                  'Photoshop',
                  'Audio Mixing',
                  'Color Grading'
                ].map((tool) => (
                  <span
                    key={tool}
                    className={`py-1 px-2.5 sm:py-1.5 sm:px-3 rounded-lg sm:rounded-xl border font-semibold ${
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
                    <WhatsAppIcon className="w-5 h-5 text-emerald-500" />
                  </span>
                  <div>
                    <h4 className="font-heading font-bold text-sm">WhatsApp Direct Chat</h4>
                    <p
                      className={`text-xs ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      Instant reply & collaboration for your video projects
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={getWhatsAppLink(whatsAppNumber)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md hover:scale-[1.02]"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Start WhatsApp Chat</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="tel:+8801610977029"
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white transition-all shadow-md hover:scale-[1.02]"
                    title="Direct Phone Call"
                  >
                    <Phone className="w-3.5 h-3.5 text-white" />
                    <span>Contact Call</span>
                  </a>
                </div>
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
                    href="https://www.behance.net/mdnaeim26"
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
                    href="https://www.youtube.com/@MdNaeim-u8x"
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

          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#1877f2] text-white hover:bg-[#166fe5] transition-all hover:scale-105 shadow-sm"
              title="Facebook"
            >
              <FacebookIcon className="w-4 h-4 text-white" />
            </a>
            <a
              href="https://www.behance.net/mdnaeim26"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#0057ff] text-white hover:bg-[#0047d4] transition-all hover:scale-105 shadow-sm"
              title="Behance (mdnaeim26)"
            >
              <BehanceIcon className="w-4 h-4 text-white" />
            </a>
            <a
              href="https://www.youtube.com/@MdNaeim-u8x"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#ff0000] text-white hover:bg-[#cc0000] transition-all hover:scale-105 shadow-sm"
              title="YouTube (@MdNaeim-u8x)"
            >
              <YouTubeIcon className="w-4 h-4 text-white" />
            </a>
            <a
              href={getWhatsAppLink(whatsAppNumber)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba59] transition-all hover:scale-105 shadow-sm"
              title="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
            </a>
          </div>

          <p className="text-xs opacity-70">
            Crafted with passion, rhythm & high-energy editing.
          </p>
        </div>
      </footer>

      {/* Direct Email Modal Dialog */}
      {showEmailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-modal">
          <div
            className={`w-full max-w-md rounded-2xl border p-6 shadow-2xl space-y-4 ${
              isDark
                ? 'bg-slate-900 border-slate-700 text-slate-100'
                : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-rose-500/15 text-rose-500">
                  <GmailIcon className="w-5 h-5 text-rose-500" />
                </span>
                <div>
                  <h3 className="font-heading font-black text-base">Direct Email Contact</h3>
                  <p className="text-[11px] text-slate-400">Collaborate with NAEIM Visual</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowEmailModal(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-200 hover:bg-slate-800 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-400">Official Inquiries Email:</span>
              <div className="p-3 rounded-xl border border-rose-500/30 bg-rose-500/10 flex items-center justify-between gap-2">
                <span className="font-mono text-sm font-bold text-rose-500 select-all">
                  naeim.connect@gmail.com
                </span>
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick message form inside modal */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const msgInput = form.elements.namedItem('modalMessage') as HTMLTextAreaElement;
                const msg = msgInput?.value || '';
                const subject = encodeURIComponent('Video Editing Project Inquiry - NAEIM Visual');
                const body = encodeURIComponent(msg || 'Hi Naeim, I would like to collaborate with you on a video project.');
                window.location.href = `mailto:naeim.connect@gmail.com?subject=${subject}&body=${body}`;
                setShowEmailModal(false);
              }}
              className="space-y-3 pt-1"
            >
              <label htmlFor="modalMessage" className="text-xs font-semibold text-slate-400 block">
                Write a quick message to Naeim:
              </label>
              <textarea
                id="modalMessage"
                name="modalMessage"
                rows={3}
                placeholder="Hi Naeim, I have a video editing project and need your services..."
                className={`w-full p-2.5 rounded-xl border text-xs outline-none focus:ring-2 focus:ring-rose-500 ${
                  isDark
                    ? 'bg-slate-950 border-slate-700 text-slate-100 placeholder:text-slate-500'
                    : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                }`}
              />

              <div className="flex items-center gap-2.5 pt-1">
                <button
                  type="submit"
                  className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Email Directly</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowEmailModal(false)}
                  className="py-2.5 px-4 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
