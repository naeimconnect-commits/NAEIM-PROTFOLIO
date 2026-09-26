import React, { useState, useEffect, useRef } from 'react';
import {
  Sun,
  Moon,
  Play,
  Pause,
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
  Sparkles,
  Smartphone,
  Phone,
  Globe,
  Eye,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ArrowDown,
  ArrowUp,
  Zap,
  LayoutGrid,
  ListVideo
} from 'lucide-react';
import { translations, Language } from './translations';
import lanyardArtboard2 from './assets/images/lanyard-Artboard-2final.png';
import lanyardArtboard3 from './assets/images/lanyard-Artboard-3final.png';
import lanyardArtboard4 from './assets/images/lanyard-Artboard-4final.png';
import lanyardArtboard5 from './assets/images/lanyard-Artboard-5final.png';
import graphicNaeim3847 from './assets/images/graphic_naeim_3847.jpg';
import graphicBrochure222 from './assets/images/graphic_brochure_222.jpg';
import graphicIslamicDsi from './assets/images/graphic_islamic_dsi.jpg';
import graphicNaeimul3847 from './assets/images/graphic_naeimul_3847.jpg';
import graphicDesign8a58 from './assets/images/graphic_design_8a58.jpg';
import graphicDesignB300 from './assets/images/graphic_design_b300.jpg';
import graphicDesignProfil from './assets/images/graphic_design_profil.jpg';

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

const YOUTUBE_PLAYLIST_ID = 'PLPSDvuSFbUN8';
const YOUTUBE_PLAYLIST_URL = 'https://www.youtube.com/playlist?list=PLPSDvuSFbUN8';

// Interactive YouTube Video Card: Shows official YouTube thumbnail with play button.
// Loads YouTube embedded player with full playlist support when played.
function YouTubePlayer({
  videoId,
  title,
  className = "",
  aspectRatio = "video",
  isShort = false,
  playlistId = YOUTUBE_PLAYLIST_ID,
}: {
  videoId: string;
  title: string;
  className?: string;
  aspectRatio?: "video" | "short";
  isShort?: boolean;
  playlistId?: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgSrc, setImgSrc] = useState(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);

  const watchUrl = playlistId
    ? `https://www.youtube.com/watch?v=${videoId}&list=${playlistId}`
    : (isShort ? `https://www.youtube.com/shorts/${videoId}` : `https://www.youtube.com/watch?v=${videoId}&autoplay=1`);

  const embedUrl = playlistId
    ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&list=${playlistId}&rel=0`
    : `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;

  if (isPlaying) {
    return (
      <div className={`relative w-full ${aspectRatio === 'short' ? 'aspect-[9/16]' : 'aspect-video'} rounded-2xl overflow-hidden bg-black border border-slate-700/80 shadow-2xl ${className}`}>
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        {playlistId && (
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 right-2 z-20 px-2 py-1 rounded-lg bg-black/80 hover:bg-red-600 text-white text-[9px] sm:text-[10px] font-bold tracking-wide backdrop-blur-md border border-white/20 transition-all flex items-center gap-1 shadow-lg"
            title="Open playlist in new tab"
          >
            <ListVideo className="w-3 h-3 text-red-400" />
            <span className="hidden sm:inline">YouTube Playlist</span>
            <ArrowUpRight className="w-2.5 h-2.5" />
          </a>
        )}
      </div>
    );
  }

  return (
    <div className={`relative w-full ${aspectRatio === 'short' ? 'aspect-[9/16]' : 'aspect-video'} rounded-2xl overflow-hidden bg-black border border-slate-700/80 shadow-2xl group ${className}`}>
      {/* Click thumbnail to play inline with playlist */}
      <button
        type="button"
        onClick={() => setIsPlaying(true)}
        className="relative w-full h-full flex items-center justify-center overflow-hidden cursor-pointer block text-left"
        aria-label={`Play ${title}`}
      >
        {/* Official YouTube Thumbnail */}
        <img
          src={imgSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => {
            if (!imgSrc.includes('hqdefault')) {
              setImgSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
            }
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 group-hover:from-black/60 transition-colors" />

        {/* Play Button */}
        <div className="relative z-10 flex flex-col items-center gap-1.5 sm:gap-2">
          <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:bg-red-500 group-hover:scale-110 transition-all duration-300 border border-white/50 group-hover:shadow-red-600/50">
            <Play className="w-4 h-4 sm:w-8 sm:h-8 fill-current ml-0.5 sm:ml-1 transition-transform group-hover:scale-110" />
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[9px] sm:text-[11px] font-bold tracking-wide uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/85 text-white border border-white/20 backdrop-blur-sm shadow-lg flex items-center gap-1 hidden xs:flex">
            <span>Play Video</span>
            <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-red-400 text-red-400" />
          </span>
        </div>

        {/* Bottom Bar: Title & Direct YouTube badge */}
        <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3.5 z-10 flex items-center justify-between text-white/95 text-[10px] sm:text-xs font-semibold bg-gradient-to-t from-black/90 via-black/60 to-transparent">
          <span className="truncate pr-1 sm:pr-2 group-hover:text-red-300 transition-colors text-[10px] sm:text-xs">{title}</span>
          <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded sm:rounded-md bg-red-600 hover:bg-red-500 text-[8px] sm:text-[10px] font-bold tracking-wider uppercase text-white shrink-0 flex items-center gap-0.5 sm:gap-1 shadow-md transition-colors">
            <YouTubeIcon className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
            <span>Play</span>
          </span>
        </div>
      </button>

      {/* Direct link to YouTube playlist */}
      <a
        href={watchUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="absolute top-2 right-2 z-20 px-2 py-1 rounded-lg bg-black/80 hover:bg-red-600 text-white text-[9px] sm:text-[10px] font-bold tracking-wide backdrop-blur-md border border-white/20 transition-all flex items-center gap-1 shadow-lg"
        title="Open in YouTube with Playlist"
      >
        <ListVideo className="w-3 h-3 text-red-400" />
        <span className="hidden sm:inline">Playlist</span>
        <ArrowUpRight className="w-2.5 h-2.5" />
      </a>
    </div>
  );
}

// Portfolio 16:9 Long-form videos (All 5 items in the official showcase playlist)
const PORTFOLIO_VIDEOS: VideoItem[] = [
  {
    id: 'vid-featured',
    youtubeId: 'GPIDQ0odAnA',
    url: 'https://www.youtube.com/watch?v=GPIDQ0odAnA&list=PLPSDvuSFbUN8',
    title: 'Featured Master Cut — Video Editing Showcase',
    badge: 'Featured Masterpiece',
    role: 'Lead Editor, Sound Design & Color Grade',
    duration: 'Full Cut',
    description: 'Premier showcase edit featuring dynamic cuts, sound layering, precision motion pacing, and visual storytelling.',
    tags: ['Full Audio Mix', 'Color Grading', 'Kinetic Rhythm', 'Showreel']
  },
  {
    id: 'vid-as-sunnah',
    youtubeId: 'YH1vjumjM70',
    url: 'https://www.youtube.com/watch?v=YH1vjumjM70&list=PLPSDvuSFbUN8',
    title: 'My three-month experience at As-Sunnah Skill.',
    badge: 'Experience Story',
    role: 'Documentary Cut, Pacing & Sound Design',
    duration: 'Full Cut',
    description: 'A reflective narrative edit recounting three months of learning and growth at As-Sunnah Skill, featuring seamless pacing and layered audio.',
    tags: ['Documentary', 'Storytelling', 'Audio Mix', 'Narrative Cut']
  },
  {
    id: 'vid-sans-anim',
    youtubeId: 'V1nLl2XMKhU',
    url: 'https://www.youtube.com/watch?v=V1nLl2XMKhU&list=PLPSDvuSFbUN8',
    title: 'Sans Video Animation',
    badge: 'Animation Project',
    role: 'Animation, Motion Design & Audio Sync',
    duration: 'Full Cut',
    description: 'Creative character animation video featuring custom motion pacing, dynamic visual transitions, and synchronized sound effects.',
    tags: ['Animation', 'Motion Graphics', 'Keyframing', 'Sound Sync']
  },
  {
    id: 'vid-bangladesh-problem',
    youtubeId: 'ahXJhrEtweM',
    url: 'https://www.youtube.com/watch?v=ahXJhrEtweM&list=PLPSDvuSFbUN8',
    title: 'The biggest problem in Bangladesh',
    badge: 'Social Documentary',
    role: 'Editorial Cut, Pacing & Visual Story',
    duration: 'Full Cut',
    description: 'A compelling social documentary cut addressing a critical perspective in Bangladesh with tight narrative pacing and layered audio storytelling.',
    tags: ['Documentary', 'Visual Story', 'Pacing & Tone', 'Sound Design']
  },
  {
    id: 'vid-outdoor-training',
    youtubeId: 'GkLtTGZ5kJI',
    url: 'https://www.youtube.com/watch?v=GkLtTGZ5kJI&list=PLPSDvuSFbUN8',
    title: 'Outdoor training beyond skill-based training',
    badge: 'Outdoor Training',
    role: 'Visual Cut, Movement & Action Edit',
    duration: 'Full Cut',
    description: 'Dynamic visual documentation of outdoor training beyond skill-based training with engaging momentum and rhythmic sound flow.',
    tags: ['Outdoor Training', 'Dynamic Cut', 'Action Pacing', 'Sound Design']
  }
];

// Vertical 9:16 Shorts
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

interface GraphicDesignItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  fallbackUrl: string;
  postimgUrl: string;
  artboardNum: string;
}

const GRAPHIC_DESIGNS: GraphicDesignItem[] = [
  {
    id: 'graphic-naeimul-3847',
    title: 'কালজিরা ফুলের মধু - Falak Food Packaging',
    subtitle: 'Pure Honey Bottle & Social Media Promotional Artwork',
    category: 'Product & Social Ad',
    image: graphicNaeimul3847,
    fallbackUrl: 'https://i.postimg.cc/NFSSx7GJ/3847-Naeimul-Islam-(2).jpg',
    postimgUrl: 'https://postimg.cc/9wPLm97Z',
    artboardNum: 'Product 01'
  },
  {
    id: 'graphic-design-8a58',
    title: 'Corporate Roll-Up Banner Collection',
    subtitle: 'Classera Workshops & Amana Umrah Retractable Banners',
    category: 'Roll-Up Banner',
    image: graphicDesign8a58,
    fallbackUrl: 'https://i.postimg.cc/hPxc5fFv/6a8142b1-8a58-44a9-8726-b05361777b98.jpg',
    postimgUrl: 'https://postimages.org/',
    artboardNum: 'Roll-Up 02'
  },
  {
    id: 'graphic-design-b300',
    title: 'Special Delicious Burger Billboard',
    subtitle: 'High-Impact Fast Food Billboard & Outdoor Advertising',
    category: 'Outdoor Billboard',
    image: graphicDesignB300,
    fallbackUrl: 'https://i.postimg.cc/wTtds3x4/b3003d58-7342-472d-b30d-3da2ce644569.jpg',
    postimgUrl: 'https://postimages.org/',
    artboardNum: 'Billboard 03'
  },
  {
    id: 'graphic-design-profil',
    title: 'ملتقى الطلاب - Student Gathering Event Flyer',
    subtitle: 'Academic Educational Seminar & Lecture Poster Layout',
    category: 'Event Flyer',
    image: graphicDesignProfil,
    fallbackUrl: 'https://i.postimg.cc/Jz2D5sZv/profil.jpg',
    postimgUrl: 'https://postimg.cc/HrbkpsS9',
    artboardNum: 'Flyer 04'
  },
  {
    id: 'graphic-naeim-3847',
    title: 'Brand Identity & 3D Logo Presentation',
    subtitle: 'Agency Mockup & Creative Visual Identity Design',
    category: 'Brand Identity',
    image: graphicNaeim3847,
    fallbackUrl: 'https://i.postimg.cc/YCcjv63p/3847-Naeim-(2).jpg',
    postimgUrl: 'https://postimg.cc/4m5XMhqM',
    artboardNum: 'Brand 05'
  },
  {
    id: 'graphic-brochure-222',
    title: 'Corporate Tri-Fold & Bi-Fold Brochure',
    subtitle: 'Professional Clean Layout for Business Profile & Marketing',
    category: 'Print & Brochure',
    image: graphicBrochure222,
    fallbackUrl: 'https://i.postimg.cc/kg86s14V/brusiar-222.jpg',
    postimgUrl: 'https://postimages.org/',
    artboardNum: 'Print 06'
  },
  {
    id: 'graphic-islamic-dsi',
    title: 'Islamic Cultural & Event Banner Design',
    subtitle: 'Spiritual Typography & Social Media Visual Artwork',
    category: 'Social Banner',
    image: graphicIslamicDsi,
    fallbackUrl: 'https://i.postimg.cc/hv5zyNT4/islamic-dsi.jpg',
    postimgUrl: 'https://postimg.cc/QKcdV4fv',
    artboardNum: 'Banner 07'
  },
  {
    id: 'lanyard-artboard-2',
    title: 'Lanyard Artboard 2 Final',
    subtitle: 'Official Corporate Identity & Lanyard Mockup Design',
    category: 'Lanyard Branding',
    image: lanyardArtboard2,
    fallbackUrl: 'https://i.postimg.cc/2SHFpXY9/lanyard-Artboard-2final.png',
    postimgUrl: 'https://postimg.cc/hXd7TsfV',
    artboardNum: 'Artboard 08'
  },
  {
    id: 'lanyard-artboard-3',
    title: 'Lanyard Artboard 3 Final',
    subtitle: 'Premium Conference & Employee Pass Ribbon Design',
    category: 'Corporate Mockup',
    image: lanyardArtboard3,
    fallbackUrl: 'https://i.postimg.cc/yxz0hMh4/lanyard-Artboard-3final.png',
    postimgUrl: 'https://postimg.cc/BLM84wwM',
    artboardNum: 'Artboard 09'
  },
  {
    id: 'lanyard-artboard-4',
    title: 'Lanyard Artboard 4 Final',
    subtitle: 'Executive Event Badge & Accreditation Ribbon',
    category: 'Event Identity',
    image: lanyardArtboard4,
    fallbackUrl: 'https://i.postimg.cc/Nj0mx7Xf/lanyard-Artboard-4final.png',
    postimgUrl: 'https://postimg.cc/GHZ4LDzZ',
    artboardNum: 'Artboard 10'
  },
  {
    id: 'lanyard-artboard-5',
    title: 'Lanyard Artboard 5 Final',
    subtitle: 'Modern Minimal Brand Lanyard Strap & Holder',
    category: 'Stationery Identity',
    image: lanyardArtboard5,
    fallbackUrl: 'https://i.postimg.cc/cCMwFFTr/lanyard-Artboard-5final.png',
    postimgUrl: 'https://postimg.cc/JH0sncfL',
    artboardNum: 'Artboard 11'
  }
];

export default function App() {
  // Theme state: dark mode default as requested
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme-mode');
      if (saved) return saved === 'dark';
    }
    return true;
  });

  // Language state (Bengali default as requested, toggleable to English)
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('preferred-lang');
      if (savedLang === 'en' || savedLang === 'bn') return savedLang;
    }
    return 'bn';
  });

  const t = translations[lang];

  // Save language preference
  const toggleLanguage = () => {
    const nextLang: Language = lang === 'bn' ? 'en' : 'bn';
    setLang(nextLang);
    localStorage.setItem('preferred-lang', nextLang);
  };

  // Email copy feedback
  const [copiedEmail, setCopiedEmail] = useState(false);

  // WhatsApp number
  const whatsAppNumber = '01610977029';
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [selectedGraphic, setSelectedGraphic] = useState<GraphicDesignItem | null>(null);

  // Graphic Section Interactive Stacked Showcase States
  const [graphicViewMode, setGraphicViewMode] = useState<'showcase' | 'grid'>('showcase');
  const [activeGraphicIndex, setActiveGraphicIndex] = useState(0);
  const [isGraphicAnimating, setIsGraphicAnimating] = useState(false);
  const [autoPlayShowcase, setAutoPlayShowcase] = useState(true);
  const touchStartY = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const lastWheelTime = useRef<number>(0);

  const nextGraphic = () => {
    setIsGraphicAnimating(true);
    setActiveGraphicIndex((prev) => (prev + 1) % GRAPHIC_DESIGNS.length);
    setTimeout(() => setIsGraphicAnimating(false), 260);
  };

  const prevGraphic = () => {
    setIsGraphicAnimating(true);
    setActiveGraphicIndex((prev) => (prev - 1 + GRAPHIC_DESIGNS.length) % GRAPHIC_DESIGNS.length);
    setTimeout(() => setIsGraphicAnimating(false), 260);
  };

  const jumpToGraphic = (index: number) => {
    if (index === activeGraphicIndex) return;
    setIsGraphicAnimating(true);
    setActiveGraphicIndex(index % GRAPHIC_DESIGNS.length);
    setTimeout(() => setIsGraphicAnimating(false), 260);
  };

  // Touch Swipe handlers for finger scroll
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null || touchStartX.current === null) return;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;

    // Detect swipe up or swipe left to bring next design up
    if (deltaY > 35 || deltaX > 45) {
      nextGraphic();
    } else if (deltaY < -35 || deltaX < -45) {
      prevGraphic();
    }
    touchStartY.current = null;
    touchStartX.current = null;
  };

  // Mouse wheel scroll handler
  const handleWheelScroll = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 350) return;
    if (Math.abs(e.deltaY) > 20) {
      lastWheelTime.current = now;
      if (e.deltaY > 0) {
        nextGraphic();
      } else {
        prevGraphic();
      }
    }
  };

  // Subtle auto-rotation every 4.8s if autoplay enabled
  useEffect(() => {
    if (!autoPlayShowcase || graphicViewMode !== 'showcase') return;
    const timer = setInterval(() => {
      nextGraphic();
    }, 4800);
    return () => clearInterval(timer);
  }, [autoPlayShowcase, graphicViewMode, activeGraphicIndex]);

  // Profile image fallback state
  const [profileImg, setProfileImg] = useState('profile.jpg');

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
                {t.videoEditorTitle}
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
              {t.navProfile}
            </a>
            <a
              href="#videos"
              className={`transition-colors hover:text-rose-500 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {t.navVideos}
            </a>
            <a
              href="#shorts"
              className={`transition-colors hover:text-rose-500 flex items-center gap-1.5 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              <span>{t.navShorts}</span>
              <span className="px-1.5 py-0.2 rounded text-[9px] font-extrabold uppercase bg-red-600 text-white">
                New
              </span>
            </a>
            <a
              href="#graphics"
              className={`transition-colors hover:text-[#0057ff] flex items-center gap-1.5 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              <span>{t.navGraphics}</span>
            </a>
            <a
              href="#about"
              className={`transition-colors hover:text-rose-500 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {t.navAbout}
            </a>
            <a
              href="#contact"
              className={`transition-colors hover:text-rose-500 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {t.navContact}
            </a>
          </nav>

          {/* Right Controls: Language Switcher + Dark/Light Toggle + CTA */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Language Switcher Button (Bangla <-> English) */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="p-2 sm:px-3 sm:py-2 rounded-xl transition-all duration-200 border flex items-center gap-1.5 text-xs font-bold bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 border-rose-500/30 cursor-pointer shadow-sm hover:scale-105"
              title={lang === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
            >
              <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-500" />
              <span className="text-[11px] sm:text-xs tracking-wide">
                {lang === 'bn' ? 'English' : 'বাংলা'}
              </span>
            </button>

            {/* Dark/Light mode toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              type="button"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`p-2 sm:p-2.5 rounded-xl transition-all duration-200 border flex items-center gap-1.5 text-xs font-medium cursor-pointer ${
                isDark
                  ? 'bg-slate-800/90 border-slate-700 text-amber-300 hover:bg-slate-700 hover:text-white shadow-sm'
                  : 'bg-slate-100 border-slate-300/80 text-slate-700 hover:bg-slate-200 hover:text-slate-900 shadow-sm'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
                  <span className="hidden lg:inline text-slate-200 font-semibold text-xs">{t.lightMode}</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
                  <span className="hidden lg:inline text-slate-700 font-semibold text-xs">{t.darkMode}</span>
                </>
              )}
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 py-2 px-3.5 sm:px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white transition-all shadow-md shadow-rose-600/25 hover:scale-[1.02]"
            >
              <span>{t.hireMe}</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-16 sm:space-y-24">
        {/* ========================================================================= */}
        {/* SECTION 1: PROFILE PICTURE WITH HIGHLIGHTED NAME & SOCIAL LOGOS           */}
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
              {/* Profile Picture with Orbiting Circular Badges in Authentic Official Brand Colors */}
              <div className="relative shrink-0 flex items-center justify-center p-8 sm:p-10 select-none">
                {/* Subtle Ambient Outer Glow Pulse */}
                <div
                  aria-hidden="true"
                  className="absolute inset-2 rounded-full bg-gradient-to-tr from-amber-500/25 via-rose-500/20 to-cyan-500/25 blur-2xl animate-glow-spin pointer-events-none"
                />

                {/* Rotating Orbit Ring */}
                <div
                  className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full border-2 border-amber-500/50 dark:border-amber-400/40 shadow-[0_0_25px_rgba(245,158,11,0.3)] animate-orbit pointer-events-auto"
                >
                  {/* Badge 1: Premiere Pro (Top) */}
                  <div
                    className="absolute -top-5 left-1/2 -translate-x-1/2"
                    title="Adobe Premiere Pro"
                  >
                    <div className="animate-counter-spin">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-[#00005b] text-[#9999ff] border-2 border-[#9999ff] shadow-xl shadow-purple-950/80 hover:scale-125 transition-transform cursor-pointer">
                        <span className="font-black text-base sm:text-lg leading-none text-[#9999ff] drop-shadow">Pr</span>
                      </div>
                    </div>
                  </div>

                  {/* Badge 2: After Effects (Top Right) */}
                  <div
                    className="absolute top-[25%] right-[-16px] translate-x-1 -translate-y-1/2"
                    title="Adobe After Effects"
                  >
                    <div className="animate-counter-spin">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-[#00005b] text-[#d291ff] border-2 border-[#d291ff] shadow-xl shadow-purple-950/80 hover:scale-125 transition-transform cursor-pointer">
                        <span className="font-black text-base sm:text-lg leading-none text-[#d291ff] drop-shadow">Ae</span>
                      </div>
                    </div>
                  </div>

                  {/* Badge 3: Photoshop (Bottom Right) */}
                  <div
                    className="absolute top-[75%] right-[-16px] translate-x-1 -translate-y-1/2"
                    title="Adobe Photoshop"
                  >
                    <div className="animate-counter-spin">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-[#001e36] text-[#31a8ff] border-2 border-[#31a8ff] shadow-xl shadow-blue-950/80 hover:scale-125 transition-transform cursor-pointer">
                        <span className="font-black text-base sm:text-lg leading-none text-[#31a8ff] drop-shadow">Ps</span>
                      </div>
                    </div>
                  </div>

                  {/* Badge 4: Illustrator (Bottom) */}
                  <div
                    className="absolute -bottom-5 left-1/2 -translate-x-1/2"
                    title="Adobe Illustrator"
                  >
                    <div className="animate-counter-spin">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-[#330000] text-[#ff9a00] border-2 border-[#ff9a00] shadow-xl shadow-amber-950/80 hover:scale-125 transition-transform cursor-pointer">
                        <span className="font-black text-base sm:text-lg leading-none text-[#ff9a00] drop-shadow">Ai</span>
                      </div>
                    </div>
                  </div>

                  {/* Badge 5: Meta (Bottom Left) */}
                  <div
                    className="absolute top-[75%] left-[-16px] -translate-x-1 -translate-y-1/2"
                    title="Meta Platforms & Video Ads"
                  >
                    <div className="animate-counter-spin">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-[#002f6c] text-[#0081fb] border-2 border-[#0081fb] shadow-xl shadow-blue-950/80 hover:scale-125 transition-transform cursor-pointer">
                        <span className="font-black text-xl leading-none text-[#0081fb] drop-shadow">∞</span>
                      </div>
                    </div>
                  </div>

                  {/* Badge 6: Digital Marketing (Top Left) */}
                  <div
                    className="absolute top-[25%] left-[-16px] -translate-x-1 -translate-y-1/2"
                    title="Digital Marketing & Growth"
                  >
                    <div className="animate-counter-spin">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-[#0f172a] text-[#38bdf8] border-2 border-[#38bdf8] shadow-xl shadow-cyan-950/80 hover:scale-125 transition-transform cursor-pointer">
                        <Sparkles className="w-5 h-5 text-[#38bdf8] drop-shadow" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Profile Photo with Glowing Amber/Gold Gradient Border */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-400 shadow-2xl z-10">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-amber-200/60 bg-slate-950 relative">
                    <img
                      src={profileImg}
                      alt="NAEIM Visual - Profile"
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      onError={() => {
                        if (profileImg !== 'https://i.postimg.cc/k4qKT7NH/afad9c06-d5bb-4290jjj.png') {
                          setProfileImg('https://i.postimg.cc/k4qKT7NH/afad9c06-d5bb-4290jjj.png');
                        }
                      }}
                    />
                  </div>

                  {/* Available badge */}
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg flex items-center gap-1 whitespace-nowrap border border-white/40 z-20">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-200 animate-ping" />
                    <span>{t.openToWork}</span>
                  </div>
                </div>
              </div>

              {/* Name, Social Logos, Bio & CTAs */}
              <div className="flex-1 text-center md:text-left space-y-4">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span className="px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider bg-rose-500/15 text-rose-500 border border-rose-500/30 flex items-center gap-1.5 shadow-sm">
                    <Flame className="w-3.5 h-3.5 fill-rose-500" />
                    {t.roleBadge}
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {t.roleSubBadge}
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
                    {t.profileSubtitle}
                  </p>
                </div>

                {/* 1. SOCIAL BRAND CHANNELS (Facebook, Behance, YouTube) */}
                <div className="pt-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-center md:justify-start gap-1.5">
                    <Share2 className="w-3.5 h-3.5 text-rose-500" />
                    <span>{t.officialChannels}</span>
                  </div>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                    {/* Facebook Button */}
                    <a
                      href="https://www.facebook.com/share/1CZ22kJcXR/"
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
                      href="https://www.youtube.com/@niislamicmedia1757/videos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 py-2 px-3.5 rounded-xl border border-[#ff0000] font-bold text-xs transition-all duration-200 bg-[#ff0000] text-white hover:bg-[#cc0000] hover:shadow-lg hover:shadow-[#ff0000]/30 hover:scale-105"
                      title="Subscribe on YouTube (@niislamicmedia1757)"
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
                    <span>{t.directContact}</span>
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
                      <span className="text-white font-extrabold tracking-wide">{t.emailBtn}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover/btn:text-white" />
                    </button>

                    {/* WhatsApp Button (Clean, directly opens WhatsApp for 01610977029) */}
                    <a
                      href={getWhatsAppLink(whatsAppNumber)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 py-2 px-3.5 rounded-xl border border-emerald-500 font-bold text-xs transition-all duration-200 bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-500 hover:to-green-500 hover:shadow-lg hover:shadow-emerald-600/30 hover:scale-105"
                      title="Direct Chat on WhatsApp"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white transition-transform group-hover/btn:scale-110" />
                      <span className="text-white font-extrabold tracking-wide">{t.whatsAppBtn}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover/btn:text-white" />
                    </a>

                    {/* Contact Phone Button */}
                    <a
                      href="tel:+8801610977029"
                      className="group/btn inline-flex items-center gap-2 py-2 px-3.5 rounded-xl border border-amber-500 font-bold text-xs transition-all duration-200 bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-500 hover:to-orange-500 hover:shadow-lg hover:shadow-amber-600/30 hover:scale-105"
                      title="Direct Phone Call: +8801610977029"
                    >
                      <Phone className="w-4 h-4 text-white transition-transform group-hover/btn:scale-110" />
                      <span className="text-white font-extrabold tracking-wide">{t.contactCallBtn}</span>
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
                  {t.aboutQuote}
                </p>

                {/* Quick Scroll Links */}
                <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3">
                  <a
                    href="#videos"
                    className="inline-flex items-center gap-2 py-2 px-3.5 rounded-xl text-xs font-bold bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white transition-all shadow-md shadow-rose-600/25 hover:scale-[1.02]"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{t.watchShowreel}</span>
                  </a>

                  <a
                    href="#shorts"
                    className="inline-flex items-center gap-2 py-2 px-3.5 rounded-xl text-xs font-bold border border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all shadow-sm hover:scale-[1.02]"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>{t.watchShorts}</span>
                  </a>

                  <a
                    href="#graphics"
                    className="inline-flex items-center gap-2 py-2 px-3.5 rounded-xl text-xs font-bold border border-[#0057ff]/30 bg-[#0057ff]/10 text-[#0084ff] hover:bg-[#0057ff] hover:text-white transition-all shadow-sm hover:scale-[1.02]"
                  >
                    <Palette className="w-3.5 h-3.5" />
                    <span>{t.navGraphics}</span>
                  </a>

                  <a
                    href="#about"
                    className={`inline-flex items-center gap-2 py-2 px-3.5 rounded-xl text-xs font-bold border transition-colors ${
                      isDark
                        ? 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white'
                        : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100 shadow-sm'
                    }`}
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>{t.navAbout}</span>
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 py-2 px-3.5 rounded-xl text-xs font-bold border border-rose-500/30 bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white transition-all shadow-sm hover:scale-[1.02]"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{t.navContact}</span>
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
                        <span className="text-emerald-500 font-semibold">{t.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t.copyEmail}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* DIRECTLY UNDER THE PROFILE DETAILS: THE FEATURED TRAILER VIDEO EMBED */}
            <div className="mt-8 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500">
                  <Play className="w-4 h-4 fill-rose-500" />
                  <span>{t.featuredTrailer}</span>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=GPIDQ0odAnA&list=${YOUTUBE_PLAYLIST_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-500 hover:text-rose-400 transition-colors"
                >
                  <ListVideo className="w-3.5 h-3.5 text-rose-500" />
                  <span>{t.openFullPlaylist}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <YouTubePlayer
                videoId="GPIDQ0odAnA"
                title="Featured Video Trailer - NAEIM Visual"
                playlistId={YOUTUBE_PLAYLIST_ID}
              />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: MORE PROJECT VIDEOS (16:9)                                     */}
        {/* ========================================================================= */}
        <section id="videos" className="space-y-6 sm:space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b pb-4 border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 mb-1">
                <Tv className="w-4 h-4" />
                <span>{t.videoSectionBadge}</span>
              </div>
              <h2 className="font-heading text-xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                {t.videoSectionTitle}
              </h2>
            </div>
            <p
              className={`text-xs sm:text-sm max-w-md ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {t.videoSectionDesc}
            </p>
          </div>

          {/* Official YouTube Playlist Banner Card */}
          <div className={`p-4 sm:p-5 rounded-2xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all ${
            isDark 
              ? 'bg-gradient-to-r from-red-950/40 via-slate-900/80 to-slate-900 border-red-900/40 shadow-lg shadow-black/40' 
              : 'bg-gradient-to-r from-red-50 via-rose-50/50 to-white border-red-200/80 shadow-md shadow-rose-100/50'
          }`}>
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-red-600/30">
                <ListVideo className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-500/20 text-red-600 dark:text-red-400 border border-red-500/30">
                    {t.playlistBannerBadge}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    5 Projects
                  </span>
                </div>
                <h3 className="font-heading text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {t.playlistBannerTitle}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xl">
                  {t.playlistBannerDesc}
                </p>
              </div>
            </div>

            <a
              href={YOUTUBE_PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg shadow-red-600/25 transition-all hover:scale-[1.02] shrink-0"
            >
              <YouTubeIcon className="w-4 h-4" />
              <span>{t.openFullPlaylist}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* VIDEOS GRID: 2 columns on mobile and 2 on desktop */}
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
                  playlistId={YOUTUBE_PLAYLIST_ID}
                />

                {/* Card Information */}
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

                  {/* Direct YouTube Link */}
                  <div className="pt-2 border-t border-slate-200/40 dark:border-slate-800/40 flex items-center justify-between text-[11px] sm:text-xs">
                    <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-slate-500 truncate">
                      <ListVideo className="w-3 h-3 text-red-500" />
                      <span>Playlist</span>
                    </span>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold text-rose-500 hover:text-rose-400 transition-colors text-[10px] sm:text-xs ml-auto"
                    >
                      <YouTubeIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-500" />
                      <span>{t.watchWithPlaylist}</span>
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
                <span>{t.shortsSectionBadge}</span>
              </div>
              <h2 className="font-heading text-xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                {t.shortsSectionTitle}
              </h2>
            </div>
            <p
              className={`text-xs sm:text-sm max-w-md ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {t.shortsSectionDesc}
            </p>
          </div>

          {/* SHORTS GRID: 2 columns on mobile and desktop */}
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
                {/* 9:16 Vertical Video Frame */}
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

                {/* Shorts Card Details */}
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
                      <span>{t.watchShort}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2.7: GRAPHIC DESIGN (LANYARD ARTBOARDS) & PROMINENT BEHANCE CTA  */}
        {/* ========================================================================= */}
        <section id="graphics" className="space-y-6 sm:space-y-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-4 border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0057ff] mb-1">
                <Palette className="w-4 h-4 text-[#0057ff]" />
                <span>{t.graphicsBadge}</span>
              </div>
              <h2 className="font-heading text-xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                {t.graphicsTitle}
              </h2>
              <p
                className={`text-xs sm:text-sm max-w-lg mt-1 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {t.graphicsDesc}
              </p>
            </div>

            {/* View Mode & Carousel Controls */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 self-start md:self-end">
              {/* Carousel / Grid Toggle */}
              <div className="p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-1 shadow-sm">
                <button
                  type="button"
                  onClick={() => setGraphicViewMode('showcase')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    graphicViewMode === 'showcase'
                      ? 'bg-[#0057ff] text-white shadow-md'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                  title={t.carouselView}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span className="text-[11px] sm:text-xs">{t.carouselView}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setGraphicViewMode('grid')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    graphicViewMode === 'grid'
                      ? 'bg-[#0057ff] text-white shadow-md'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                  title={t.gridView}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="text-[11px] sm:text-xs">{t.gridView}</span>
                </button>
              </div>

              {/* Showcase Navigation Arrow Buttons */}
              {graphicViewMode === 'showcase' && (
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={prevGraphic}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-[#0057ff] hover:text-white dark:hover:bg-[#0057ff] text-slate-700 dark:text-slate-200 shadow-sm flex items-center justify-center transition-all cursor-pointer"
                    title={t.prevDesign}
                  >
                    <ChevronUp className="w-4 h-4 sm:hidden" />
                    <ChevronLeft className="w-4 h-4 hidden sm:inline" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setAutoPlayShowcase(!autoPlayShowcase)}
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-center transition-all cursor-pointer ${
                      autoPlayShowcase
                        ? 'bg-blue-50 dark:bg-blue-950/40 text-[#0057ff] border-[#0057ff]/30'
                        : 'bg-white dark:bg-slate-900 text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                    title={autoPlayShowcase ? 'Pause Autoplay' : 'Play Autoplay'}
                  >
                    {autoPlayShowcase ? (
                      <Pause className="w-3.5 h-3.5" />
                    ) : (
                      <Play className="w-3.5 h-3.5 fill-current" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={nextGraphic}
                    className="px-3 h-8 sm:h-9 rounded-xl bg-[#0057ff] hover:bg-[#0047d4] text-white font-bold text-xs shadow-md flex items-center gap-1.5 transition-all cursor-pointer group"
                    title={t.nextDesign}
                  >
                    <span>{t.nextDesign}</span>
                    <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:translate-y-0.5 transition-transform" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* VIEW MODE 1: STACKED SHOWCASE (1 big top card, 2 blurred upcoming cards below, swift arrow navigation & gestures) */}
          {graphicViewMode === 'showcase' ? (
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onWheel={handleWheelScroll}
              className="relative max-w-3xl mx-auto select-none space-y-4 sm:space-y-5"
            >
              {(() => {
                const activeItem = GRAPHIC_DESIGNS[activeGraphicIndex];
                const nextItem1 = GRAPHIC_DESIGNS[(activeGraphicIndex + 1) % GRAPHIC_DESIGNS.length];
                const nextItem2 = GRAPHIC_DESIGNS[(activeGraphicIndex + 2) % GRAPHIC_DESIGNS.length];

                return (
                  <div className="space-y-4 sm:space-y-5">
                    {/* 1. TOP MAIN FEATURED CARD (স্পষ্ট, বড় ও ফোকাসড কার্ড) */}
                    <div
                      key={activeItem.id}
                      className={`relative rounded-3xl overflow-hidden border-2 transition-all duration-300 shadow-2xl ${
                        isDark
                          ? 'bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-[#0057ff]/40 shadow-[#0057ff]/10'
                          : 'bg-white border-blue-200/80 shadow-xl shadow-blue-500/10'
                      }`}
                    >
                      {/* Image Frame with Aspect Square/4:3 and upward rise transition */}
                      <div
                        className="relative aspect-square sm:aspect-[4/3] w-full overflow-hidden bg-slate-950 flex items-center justify-center cursor-pointer group"
                        onClick={() => setSelectedGraphic(activeItem)}
                        title={`${activeItem.title} - ${t.tapToView}`}
                      >
                        <div
                          className={`w-full h-full flex items-center justify-center transition-all duration-300 ${
                            isGraphicAnimating
                              ? 'translate-y-6 opacity-40 scale-95'
                              : 'translate-y-0 opacity-100 scale-100'
                          }`}
                        >
                          <img
                            src={activeItem.image}
                            alt={activeItem.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                            onError={(e) => {
                              if (activeItem.fallbackUrl && e.currentTarget.src !== activeItem.fallbackUrl) {
                                e.currentTarget.src = activeItem.fallbackUrl;
                              }
                            }}
                          />
                        </div>

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                          <span className="px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider bg-black/80 backdrop-blur-md text-amber-300 border border-amber-400/30 shadow-lg">
                            {activeItem.artboardNum}
                          </span>
                          <span className="px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-extrabold uppercase tracking-wide bg-[#0057ff]/90 text-white backdrop-blur-md shadow-lg">
                            {activeItem.category}
                          </span>
                        </div>

                        <div className="absolute top-3 right-3 z-10">
                          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-black/75 backdrop-blur-md text-white border border-white/20 shadow-lg flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>{activeGraphicIndex + 1} / {GRAPHIC_DESIGNS.length}</span>
                          </span>
                        </div>

                        {/* Center Hover View Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                          <span className="px-4 py-2 rounded-full bg-[#0057ff] text-white text-xs font-bold tracking-wide flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                            <Eye className="w-4 h-4" />
                            <span>{t.tapToView}</span>
                          </span>
                        </div>

                        {/* Prominent Next Arrow Action Button (তীরের মতো বোতাম) on Card */}
                        <div className="absolute bottom-3 right-3 z-20">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              nextGraphic();
                            }}
                            className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-gradient-to-r from-[#0057ff] to-cyan-500 hover:from-[#0047d4] hover:to-cyan-600 text-white font-extrabold text-xs sm:text-sm shadow-2xl shadow-blue-900/60 flex items-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95 border border-white/20"
                            title={t.nextDesign}
                          >
                            <span>{t.nextDesign}</span>
                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                            </div>
                          </button>
                        </div>
                      </div>

                      {/* Card Info Bar */}
                      <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-200/50 dark:border-slate-800/80">
                        <div>
                          <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#0057ff] block">
                            {activeItem.category}
                          </span>
                          <h3 className="font-heading text-base sm:text-lg font-bold tracking-tight">
                            {activeItem.title}
                          </h3>
                          <p className={`text-xs sm:text-sm mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            {activeItem.subtitle}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => setSelectedGraphic(activeItem)}
                            className="px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-[#0057ff] hover:text-[#0057ff] text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>{t.tapToView}</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* 2. TWO BLURRED UPCOMING CARDS BELOW (নিচে দুইটা হালকা একটু ঝাপসা করে শো করবে) */}
                    <div>
                      <div className="flex items-center justify-between mb-2 px-1">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                          <ArrowUp className="w-3.5 h-3.5 text-[#0057ff]" />
                          <span>{lang === 'bn' ? 'পরবর্তী ২টি ডিজাইন (ক্লিক করলে বা স্ক্রল করলে উপরে উঠবে)' : 'Next 2 in Queue (Click or scroll to bring up)'}</span>
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium">
                          {t.nextUp}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {/* Blurred Card 1 */}
                        <div
                          onClick={nextGraphic}
                          className={`relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border cursor-pointer transition-all duration-300 group hover:scale-[1.02] ${
                            isDark
                              ? 'bg-slate-900 border-slate-800 hover:border-[#0057ff]'
                              : 'bg-slate-100 border-slate-300 hover:border-[#0057ff]'
                          }`}
                          title={`${nextItem1.title} - ${lang === 'bn' ? 'উপরে আনতে ক্লিক করুন' : 'Click to bring up'}`}
                        >
                          <img
                            src={nextItem1.image}
                            alt={nextItem1.title}
                            className="w-full h-full object-cover filter blur-[2px] opacity-60 group-hover:blur-0 group-hover:opacity-100 transition-all duration-300"
                            loading="lazy"
                            onError={(e) => {
                              if (nextItem1.fallbackUrl && e.currentTarget.src !== nextItem1.fallbackUrl) {
                                e.currentTarget.src = nextItem1.fallbackUrl;
                              }
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-2.5 sm:p-3">
                            <span className="self-start px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider bg-black/70 text-amber-300 border border-white/20 backdrop-blur-sm">
                              {nextItem1.artboardNum}
                            </span>
                            <div className="text-white">
                              <p className="text-[10px] sm:text-xs font-bold line-clamp-1 group-hover:text-blue-300">
                                {nextItem1.title}
                              </p>
                              <span className="text-[9px] text-blue-400 font-extrabold flex items-center gap-1 mt-0.5">
                                <ArrowUp className="w-3 h-3" />
                                <span>{lang === 'bn' ? 'উপরে আনুন' : 'Bring Up'}</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Blurred Card 2 */}
                        <div
                          onClick={() => jumpToGraphic((activeGraphicIndex + 2) % GRAPHIC_DESIGNS.length)}
                          className={`relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border cursor-pointer transition-all duration-300 group hover:scale-[1.02] ${
                            isDark
                              ? 'bg-slate-900 border-slate-800 hover:border-[#0057ff]'
                              : 'bg-slate-100 border-slate-300 hover:border-[#0057ff]'
                          }`}
                          title={`${nextItem2.title} - ${lang === 'bn' ? 'উপরে আনতে ক্লিক করুন' : 'Click to bring up'}`}
                        >
                          <img
                            src={nextItem2.image}
                            alt={nextItem2.title}
                            className="w-full h-full object-cover filter blur-[2px] opacity-60 group-hover:blur-0 group-hover:opacity-100 transition-all duration-300"
                            loading="lazy"
                            onError={(e) => {
                              if (nextItem2.fallbackUrl && e.currentTarget.src !== nextItem2.fallbackUrl) {
                                e.currentTarget.src = nextItem2.fallbackUrl;
                              }
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-2.5 sm:p-3">
                            <span className="self-start px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider bg-black/70 text-amber-300 border border-white/20 backdrop-blur-sm">
                              {nextItem2.artboardNum}
                            </span>
                            <div className="text-white">
                              <p className="text-[10px] sm:text-xs font-bold line-clamp-1 group-hover:text-blue-300">
                                {nextItem2.title}
                              </p>
                              <span className="text-[9px] text-blue-400 font-extrabold flex items-center gap-1 mt-0.5">
                                <ArrowUp className="w-3 h-3" />
                                <span>{lang === 'bn' ? 'উপরে আনুন' : 'Bring Up'}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick navigation hint & dot indicators */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-2 px-1">
                      <p className="text-[11px] sm:text-xs text-slate-400 dark:text-slate-500 font-medium text-center sm:text-left flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{t.swipeOrScrollHint}</span>
                      </p>

                      {/* Dots to jump to any item */}
                      <div className="flex items-center gap-1.5">
                        {GRAPHIC_DESIGNS.map((_, dotIdx) => (
                          <button
                            key={dotIdx}
                            type="button"
                            onClick={() => jumpToGraphic(dotIdx)}
                            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                              dotIdx === activeGraphicIndex
                                ? 'w-7 bg-[#0057ff]'
                                : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                            }`}
                            title={`Go to design ${dotIdx + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          ) : (
            /* VIEW MODE 2: FULL GRID VIEW (2 cols on mobile, 4 on desktop) */
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6">
              {GRAPHIC_DESIGNS.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedGraphic(item)}
                  className={`group cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col ${
                    isDark
                      ? 'bg-slate-900/90 border-slate-800 hover:border-[#0057ff]/60 hover:shadow-[#0057ff]/20'
                      : 'bg-white border-slate-200 hover:border-[#0057ff]/60 hover:shadow-blue-500/20 shadow-md'
                  }`}
                  title={`${item.title} - ${t.tapToView}`}
                >
                  {/* 1:1 Aspect Ratio Matching Original Artboard */}
                  <div className="relative aspect-square w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        if (item.fallbackUrl && e.currentTarget.src !== item.fallbackUrl) {
                          e.currentTarget.src = item.fallbackUrl;
                        }
                      }}
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-full bg-[#0057ff] text-white text-[10px] sm:text-xs font-bold tracking-wide flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-3.5 h-3.5" />
                        <span>{t.tapToView}</span>
                      </span>
                    </div>

                    {/* Corner Badge */}
                    <div className="absolute top-2 left-2 z-10">
                      <span className="px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-black/80 backdrop-blur-md text-amber-300 border border-white/20">
                        {item.artboardNum}
                      </span>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-3 sm:p-4 space-y-1 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-[#0057ff] block">
                        {item.category}
                      </span>
                      <h3 className="font-heading text-xs sm:text-sm font-bold tracking-tight line-clamp-1 group-hover:text-[#0057ff] transition-colors">
                        {item.title}
                      </h3>
                      <p
                        className={`text-[10px] sm:text-[11px] line-clamp-1 sm:line-clamp-2 ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between text-[10px] sm:text-xs">
                      <span className="text-slate-400 font-medium truncate max-w-[90px]">{item.category}</span>
                      <span className="text-[#0057ff] font-bold flex items-center gap-0.5 shrink-0">
                        <span>View</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ===================================================================== */}
          {/* BIG PROMINENT BEHANCE CALLOUT BANNER                                  */}
          {/* "বাকি কাজ দেখতে চাইলে বিহান্সে ক্লিক করুন"                              */}
          {/* ===================================================================== */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#0057ff]/40 bg-gradient-to-br from-[#0057ff]/15 via-blue-950/40 to-slate-900/90 p-6 sm:p-10 shadow-2xl group transition-all duration-300 hover:border-[#0057ff]/80 hover:shadow-2xl hover:shadow-[#0057ff]/25">
            {/* Ambient backdrop glow elements */}
            <div
              aria-hidden="true"
              className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#0057ff]/25 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700"
            />
            <div
              aria-hidden="true"
              className="absolute -left-10 -top-10 w-60 h-60 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none"
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
              {/* Left Side: Big Behance Logo + Text */}
              <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 max-w-2xl">
                {/* Big Glowing Behance Logo Badge */}
                <div className="relative shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-[#0057ff] to-[#0091ff] text-white flex items-center justify-center shadow-xl shadow-[#0057ff]/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border-2 border-white/40">
                    <BehanceIcon className="w-9 h-9 sm:w-11 sm:h-11 text-white" />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center text-white text-[9px] font-bold">
                    ✓
                  </span>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider bg-[#0057ff]/20 text-[#0084ff] border border-[#0057ff]/30">
                    <BehanceIcon className="w-3.5 h-3.5" />
                    <span>Behance Official Portfolio</span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-slate-900 dark:text-white leading-snug">
                    {t.behanceBigBannerTitle}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed max-w-xl ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {t.behanceBigBannerDesc}
                  </p>
                </div>
              </div>

              {/* Right Side: Big Clickable Action Button */}
              <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://www.behance.net/mdnaeim26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 py-3.5 sm:py-4 px-6 sm:px-8 rounded-2xl font-black text-sm sm:text-base tracking-wide bg-gradient-to-r from-[#0057ff] to-[#0077ff] hover:from-[#0047e0] hover:to-[#0057ff] text-white shadow-xl shadow-[#0057ff]/40 hover:shadow-[#0057ff]/60 hover:scale-105 active:scale-95 transition-all duration-200 border border-white/30 cursor-pointer"
                  title="Open Behance Profile: mdnaeim26"
                >
                  <BehanceIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  <span>{t.behanceBtnText}</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/90" />
                </a>
              </div>
            </div>
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
                <span>{t.aboutBadge}</span>
              </div>
              <h2 className="font-heading text-xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                {t.aboutTitle}
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
            {/* Direct Bio Quote */}
            <blockquote
              className={`text-sm sm:text-base lg:text-lg font-normal leading-relaxed italic border-l-4 border-rose-500 pl-3 sm:pl-5 ${
                isDark ? 'text-slate-200' : 'text-slate-700'
              }`}
            >
              &ldquo;{t.aboutQuote}&rdquo;
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
                <h4 className="font-heading font-bold text-xs sm:text-sm mb-0.5">{t.pillar1Title}</h4>
                <p
                  className={`text-[11px] sm:text-xs leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {t.pillar1Desc}
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
                <h4 className="font-heading font-bold text-xs sm:text-sm mb-0.5">{t.pillar2Title}</h4>
                <p
                  className={`text-[11px] sm:text-xs leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {t.pillar2Desc}
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
                <h4 className="font-heading font-bold text-xs sm:text-sm mb-0.5">{t.pillar3Title}</h4>
                <p
                  className={`text-[11px] sm:text-xs leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {t.pillar3Desc}
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
                <h4 className="font-heading font-bold text-xs sm:text-sm mb-0.5">{t.pillar4Title}</h4>
                <p
                  className={`text-[11px] sm:text-xs leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {t.pillar4Desc}
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
                {t.toolsTitle}
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
                {[
                  'Adobe Premiere Pro',
                  'Adobe After Effects',
                  'DaVinci Resolve',
                  'Adobe Photoshop',
                  'Adobe Illustrator',
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
        {/* ========================================================================= */}
        <section id="contact" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b pb-4 border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 mb-1">
                <MessageCircle className="w-4 h-4" />
                <span>{t.contactBadge}</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                {t.contactTitle}
              </h2>
            </div>
            <p
              className={`text-xs sm:text-sm max-w-md ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {t.contactDesc}
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
                    <h4 className="font-heading font-bold text-sm">{t.directEmailTitle}</h4>
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
                    <span>{t.emailBtn}</span>
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
                    <h4 className="font-heading font-bold text-sm">{t.whatsAppDirectTitle}</h4>
                    <p
                      className={`text-xs ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {t.whatsAppDirectDesc}
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
                    <span>{t.startWhatsApp}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="tel:+8801610977029"
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white transition-all shadow-md hover:scale-[1.02]"
                    title="Direct Phone Call"
                  >
                    <Phone className="w-3.5 h-3.5 text-white" />
                    <span>{t.contactCall}</span>
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
                  {t.creativeProfiles}
                </h4>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/share/1CZ22kJcXR/"
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
                    href="https://www.youtube.com/@niislamicmedia1757/videos"
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
                  <h3 className="font-heading font-black text-xl">{t.sendMessageTitle}</h3>
                  <p
                    className={`text-xs ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {t.sendMessageDesc}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="client-name"
                      className="text-xs font-bold uppercase tracking-wider block opacity-80"
                    >
                      {t.yourName}
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      placeholder={t.namePlaceholder}
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
                      {t.yourEmail}
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      placeholder={t.emailPlaceholder}
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
                    {t.yourMessage}
                  </label>
                  <textarea
                    id="client-message"
                    rows={4}
                    placeholder={t.messagePlaceholder}
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
                    <span>{t.sendBtn}</span>
                  </button>

                  {formSent && (
                    <span className="text-xs font-bold text-emerald-500 flex items-center gap-1.5 animate-pulse">
                      <Check className="w-4 h-4" />
                      {t.sendSuccess}
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
                {t.footerTagline}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/share/1CZ22kJcXR/"
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
              href="https://www.youtube.com/@niislamicmedia1757/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#ff0000] text-white hover:bg-[#cc0000] transition-all hover:scale-105 shadow-sm"
              title="YouTube (@niislamicmedia1757)"
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
            {t.footerBottom}
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
                  <h3 className="font-heading font-black text-base">{t.emailModalTitle}</h3>
                  <p className="text-[11px] text-slate-400">{t.emailModalSubtitle}</p>
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
              <span className="text-xs font-semibold text-slate-400">{t.directEmailTitle}:</span>
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
                      <span>{t.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.copyEmail}</span>
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
                {t.writeQuickMsg}
              </label>
              <textarea
                id="modalMessage"
                name="modalMessage"
                rows={3}
                placeholder={t.modalPlaceholder}
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
                  <span>{t.sendDirectBtn}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowEmailModal(false)}
                  className="py-2.5 px-4 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  {t.closeModalBtn}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Graphic Design Image Lightbox Modal with Slider Navigation */}
      {selectedGraphic && (() => {
        const currentIndex = GRAPHIC_DESIGNS.findIndex(g => g.id === selectedGraphic.id);
        const handlePrevModal = (e: React.MouseEvent) => {
          e.stopPropagation();
          const prevIdx = (currentIndex - 1 + GRAPHIC_DESIGNS.length) % GRAPHIC_DESIGNS.length;
          setSelectedGraphic(GRAPHIC_DESIGNS[prevIdx]);
        };
        const handleNextModal = (e: React.MouseEvent) => {
          e.stopPropagation();
          const nextIdx = (currentIndex + 1) % GRAPHIC_DESIGNS.length;
          setSelectedGraphic(GRAPHIC_DESIGNS[nextIdx]);
        };

        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-modal"
            onClick={() => setSelectedGraphic(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[92vh] flex flex-col rounded-3xl overflow-hidden bg-slate-900 border border-slate-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-3 sm:p-4 flex items-center justify-between border-b border-slate-800 bg-slate-950/80">
                <div className="flex items-center gap-2.5">
                  <span className="p-1.5 rounded-lg bg-[#0057ff]/20 text-[#0084ff]">
                    <BehanceIcon className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white flex items-center gap-2">
                      <span>{selectedGraphic.title}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
                        {currentIndex + 1} / {GRAPHIC_DESIGNS.length}
                      </span>
                    </h4>
                    <p className="text-[11px] text-slate-400">{selectedGraphic.subtitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://www.behance.net/mdnaeim26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-[#0057ff] hover:bg-[#0047d4] text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <BehanceIcon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Behance</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedGraphic(null)}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Close Preview"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Modal Image with Navigation Arrows */}
              <div className="relative flex-1 overflow-auto p-2 sm:p-4 bg-black/90 flex items-center justify-center">
                {/* Modal Prev Arrow */}
                <button
                  type="button"
                  onClick={handlePrevModal}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-950/80 hover:bg-[#0057ff] text-white border border-slate-700/80 flex items-center justify-center shadow-lg transition-all cursor-pointer hover:scale-110"
                  title="Previous Graphic"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <img
                  src={selectedGraphic.image}
                  alt={selectedGraphic.title}
                  className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-slate-800"
                  onError={(e) => {
                    if (selectedGraphic.fallbackUrl && e.currentTarget.src !== selectedGraphic.fallbackUrl) {
                      e.currentTarget.src = selectedGraphic.fallbackUrl;
                    }
                  }}
                />

                {/* Modal Next Arrow */}
                <button
                  type="button"
                  onClick={handleNextModal}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-950/80 hover:bg-[#0057ff] text-white border border-slate-700/80 flex items-center justify-center shadow-lg transition-all cursor-pointer hover:scale-110"
                  title="Next Graphic"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
