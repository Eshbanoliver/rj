import React, { useState, useEffect, useRef } from 'react';
import { PageType, SearchQuery } from '../types';
import { VideoModal } from './VideoModal';
import {
  MapPin,
  Calendar,
  Users,
  Compass,
  Search,
  Play,
  Pause,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from 'lucide-react';

interface HeroProps {
  onNavigate: (page: PageType) => void;
  onSearch: (query: SearchQuery) => void;
  onOpenInquiry: (initialData?: { tourTitle?: string; message?: string }) => void;
}

interface HeroSlide {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  image: string;
  highlight: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 'udaipur',
    name: 'Udaipur',
    subtitle: 'Get Unforgettable Pleasure With Us',
    tagline: 'The City of Lakes & Royal Palaces',
    image: '/images/hero-udaipur.jpg',
    highlight: 'Lake Pichola • City Palace • Bahubali Hills',
  },
  {
    id: 'jaisalmer',
    name: 'Jaisalmer',
    subtitle: 'Golden Sand Dunes & Starlit Camps',
    tagline: 'The Golden City & Thar Desert Dunes',
    image: '/images/hero-jaisalmer.jpg',
    highlight: 'Sam Sand Dunes • Sunset Camel Safari • Swiss Tents',
  },
  {
    id: 'jodhpur',
    name: 'Jodhpur',
    subtitle: 'Royal Sun City Heritage & Blue Alleys',
    tagline: 'The Majestic Blue City & Cliff Forts',
    image: '/images/hero-jodhpur.jpg',
    highlight: 'Mehrangarh Fort • Blue City • Jaswant Thada',
  },
  {
    id: 'kumbhalgarh',
    name: 'Kumbhalgarh',
    subtitle: 'The Great Wall of India & Cloud Citadel',
    tagline: 'Cloud Citadel & Aravali Valleys',
    image: '/images/hero-kumbhalgarh.jpg',
    highlight: '36km Perimeter Wall • Badal Mahal • Nature Safari',
  },
  {
    id: 'haldighati',
    name: 'Haldighati',
    subtitle: 'The Historic Canyon of Bravery & Valor',
    tagline: 'Historic Canyon Pass & Turmeric Sands',
    image: '/images/hero-haldighati.jpg',
    highlight: 'Historic Pass • Chetak Smarak • Aravali Ridges',
  },
  {
    id: 'world',
    name: 'World Travel',
    subtitle: 'Explore Hidden Wonders of the World',
    tagline: 'Scenic Expeditions Across The Globe',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop',
    highlight: 'Curated Group Odysseys & 15 Strangers Batches',
  },
];

export const Hero: React.FC<HeroProps> = ({ onNavigate, onSearch, onOpenInquiry }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string>('all');
  const [selectedTourType, setSelectedTourType] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [travelers, setTravelers] = useState<number>(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const pillRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Auto-play timer for crossfade slides
  useEffect(() => {
    if (!isPlaying) return;

    timerRef.current = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5200);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentSlideIndex]);

  // Smoothly scroll active destination pill into view on mobile
  useEffect(() => {
    if (pillRefs.current[currentSlideIndex]) {
      pillRefs.current[currentSlideIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [currentSlideIndex]);

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const handleSelectSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  // Touch Swipe gestures for hero slider banner - ensures horizontal intent
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;

    // Only swipe if horizontal movement is clearly dominant and meets threshold
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) {
      if (diffX > 0) {
        handleNextSlide();
      } else {
        handlePrevSlide();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const currentSlide = heroSlides[currentSlideIndex];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      destination: selectedDestination,
      departureCity: 'all',
      travelDate: '',
      travelers: Number(travelers),
      tourType: selectedTourType,
    });
    onNavigate('trips');
  };

  return (
    <>
      <section className="relative bg-slate-900 text-white min-h-[520px] sm:min-h-[620px] lg:min-h-[720px] flex flex-col justify-between overflow-visible">
        {/* Background Image Slider with Crossfade & Ken Burns Zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          {heroSlides.map((slide, index) => {
            const isActive = index === currentSlideIndex;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.image}
                  alt={`${slide.name} - ${slide.tagline}`}
                  className={`w-full h-full object-cover filter brightness-[0.78] contrast-[1.06] transition-transform duration-[6000ms] ease-out will-change-transform ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                />
              </div>
            );
          })}

          {/* Gradients for high text contrast across mobile and desktop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[550px] h-[220px] sm:h-[280px] bg-[#1ca8cb]/15 blur-[120px] sm:blur-[140px] rounded-full pointer-events-none" />
        </div>

        {/* Desktop Side Navigation Arrows */}
        <button
          onClick={handlePrevSlide}
          aria-label="Previous destination slide"
          className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-black/40 hover:bg-[#1ca8cb] text-white hover:text-white border border-white/25 backdrop-blur-md items-center justify-center transition-all duration-300 shadow-xl cursor-pointer active:scale-95 group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button
          onClick={handleNextSlide}
          aria-label="Next destination slide"
          className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-black/40 hover:bg-[#1ca8cb] text-white hover:text-white border border-white/25 backdrop-blur-md items-center justify-center transition-all duration-300 shadow-xl cursor-pointer active:scale-95 group"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Hero Interactive Banner Section with Touch Swipe Attached */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-10 lg:pt-14 pb-12 sm:pb-24 lg:pb-28 flex-1 flex flex-col justify-center text-center lg:text-left w-full select-none"
        >
          {/* Top Destination Selector Pills & Slideshow Controls */}
          <div className="w-full flex items-center justify-between gap-2.5 sm:gap-3 mb-4 sm:mb-7">
            {/* Destination Pills - Edge-to-edge touch horizontal scroll on mobile */}
            <div
              onTouchStart={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 w-full -mx-4 px-4 sm:mx-0 sm:px-0 snap-x"
            >
              {heroSlides.map((slide, idx) => {
                const isActive = idx === currentSlideIndex;
                return (
                  <button
                    key={slide.id}
                    ref={(el) => {
                      pillRefs.current[idx] = el;
                    }}
                    onClick={() => handleSelectSlide(idx)}
                    className={`px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer shrink-0 snap-center ${
                      isActive
                        ? 'bg-[#1ca8cb] text-white shadow-lg shadow-[#1ca8cb]/40 scale-105'
                        : 'bg-black/45 hover:bg-black/65 text-white/90 hover:text-white border border-white/20 backdrop-blur-md'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-[#1ca8cb]'}`} />
                    <span>{slide.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Desktop Slide Player Controls (Prev, Pause/Play, Next) */}
            <div className="hidden sm:flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/20 rounded-full p-1 shrink-0">
              <button
                onClick={handlePrevSlide}
                aria-label="Previous slide"
                className="w-7 h-7 rounded-full hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                className="w-7 h-7 rounded-full hover:bg-white/20 text-[#1ca8cb] flex items-center justify-center transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={handleNextSlide}
                aria-label="Next slide"
                className="w-7 h-7 rounded-full hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="max-w-3xl mx-auto lg:mx-0">
            {/* Active Destination Chip */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-[#1ca8cb]/50 text-[#1ca8cb] text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-2 sm:mb-3 shadow-lg animate-fadeIn max-w-[92vw]">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1ca8cb] shrink-0 animate-pulse" />
              <span className="font-bold text-white shrink-0">{currentSlide.name}</span>
              <span className="w-1 h-1 rounded-full bg-[#1ca8cb] shrink-0" />
              <span className="text-cyan-200 font-normal truncate">
                {currentSlide.tagline}
              </span>
            </div>

            {/* Script Subtitle matching reference */}
            <div className="mb-1 sm:mb-2">
              <span className="font-script text-[#1ca8cb] text-lg xs:text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide drop-shadow-md inline-block animate-float-slow">
                {currentSlide.subtitle}
              </span>
            </div>

            {/* Main Headline matching reference */}
            <h1 className="text-2.5xl xs:text-4xl sm:text-6xl lg:text-7xl font-black font-heading text-white tracking-tight leading-[1.14] drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)] animate-fadeInUp">
              Explore beauty of <br className="hidden xs:inline" />
              <span className="text-white">the whole world</span>
            </h1>

            {/* Action Buttons: Responsive row to stay above fold on mobile */}
            <div className="mt-5 sm:mt-8 flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-5 flex-wrap">
              {/* Primary Cyan Pill Button with Shimmer */}
              <button
                onClick={() => onOpenInquiry({ tourTitle: `${currentSlide.name} Rajasthan Tour` })}
                className="btn-shimmer min-h-[44px] px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-[#1ca8cb] hover:bg-white text-white hover:text-[#113d48] font-bold text-xs sm:text-sm shadow-xl shadow-[#1ca8cb]/40 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group active:scale-95 shrink-0"
              >
                <span>Book A Tour</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>

              {/* Video Play Button with Radar Pulse Halo */}
              <button
                onClick={() => setIsVideoOpen(true)}
                className="min-h-[44px] flex items-center justify-center gap-2.5 sm:gap-3 text-white hover:text-[#1ca8cb] transition-colors group cursor-pointer py-1 px-2 shrink-0"
              >
                <div className="relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#1ca8cb]/30 backdrop-blur-md border border-white/40 group-hover:bg-[#1ca8cb] group-hover:border-[#1ca8cb] transition-all duration-300 animate-radar group-hover:scale-105 shrink-0">
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white fill-white relative z-10 ml-0.5" />
                </div>
                <span className="font-bold text-xs sm:text-sm drop-shadow-sm group-hover:translate-x-1 transition-transform duration-300">
                  Watch Video
                </span>
              </button>
            </div>
          </div>

          {/* Slider Pagination Indicator Dots */}
          <div className="flex items-center justify-center lg:justify-start gap-1 sm:gap-1.5 mt-5 sm:mt-7 mb-2 sm:mb-0">
            {heroSlides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => handleSelectSlide(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className="p-1 cursor-pointer flex items-center justify-center"
              >
                <div
                  className={`transition-all duration-300 rounded-full ${
                    currentSlideIndex === dotIdx
                      ? 'w-6 sm:w-7 h-2 bg-[#1ca8cb]'
                      : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Floating Search Filter Bar Overlapping Bottom */}
        <div className="relative z-30 max-w-5xl mx-auto px-3 sm:px-6 w-full -mb-10 sm:-mb-12">
          <form
            onSubmit={handleSearchSubmit}
            className="bg-white rounded-2xl lg:rounded-full shadow-2xl hover:shadow-[0_25px_60px_-12px_rgba(28,168,203,0.3)] transition-all duration-500 p-2.5 sm:p-4 lg:p-3 border border-slate-100 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-2.5 sm:gap-3 text-slate-800"
          >
            {/* Mobile 2x2 Grid / Desktop 4-col Inline Fields */}
            <div className="grid grid-cols-2 lg:flex lg:flex-1 items-stretch lg:items-center gap-2 sm:gap-3">
              {/* Field 1: Destination */}
              <div className="lg:w-1/4 px-2.5 sm:px-3 py-2 lg:py-1 rounded-xl lg:rounded-none bg-slate-50/80 lg:bg-transparent border border-slate-100/90 lg:border-0 lg:border-r lg:border-slate-100 group transition-colors hover:bg-[#f0f9fb] lg:hover:bg-transparent flex flex-col justify-center">
                <div className="flex items-center gap-1.5 mb-1 lg:mb-0">
                  <div className="w-5 h-5 lg:w-9 lg:h-9 rounded-full bg-[#1ca8cb]/10 lg:bg-[#f0f9fb] group-hover:bg-[#1ca8cb]/20 group-hover:scale-105 transition-all duration-300 flex items-center justify-center text-[#1ca8cb] shrink-0">
                    <MapPin className="w-3 h-3 lg:w-4 lg:h-4 group-hover:rotate-6 transition-transform" />
                  </div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block truncate">
                    Where to?
                  </label>
                </div>
                <div className="relative pl-0 lg:pl-10 lg:-mt-2 flex items-center">
                  <select
                    value={selectedDestination}
                    onChange={(e) => setSelectedDestination(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-bold text-[#113d48] focus:outline-none cursor-pointer truncate py-0.5 pr-4 appearance-none"
                  >
                    <option value="all">All Places</option>
                    <option value="Udaipur">Udaipur</option>
                    <option value="Jaisalmer">Jaisalmer</option>
                    <option value="Jodhpur">Jodhpur</option>
                    <option value="Kumbhalgarh">Kumbhalgarh</option>
                    <option value="Haldighati">Haldighati</option>
                  </select>
                  <ChevronDown className="w-3 h-3 text-slate-400 absolute right-0 pointer-events-none" />
                </div>
              </div>

              {/* Field 2: Tour Type */}
              <div className="lg:w-1/4 px-2.5 sm:px-3 py-2 lg:py-1 rounded-xl lg:rounded-none bg-slate-50/80 lg:bg-transparent border border-slate-100/90 lg:border-0 lg:border-r lg:border-slate-100 group transition-colors hover:bg-[#f0f9fb] lg:hover:bg-transparent flex flex-col justify-center">
                <div className="flex items-center gap-1.5 mb-1 lg:mb-0">
                  <div className="w-5 h-5 lg:w-9 lg:h-9 rounded-full bg-[#1ca8cb]/10 lg:bg-[#f0f9fb] group-hover:bg-[#1ca8cb]/20 group-hover:scale-105 transition-all duration-300 flex items-center justify-center text-[#1ca8cb] shrink-0">
                    <Compass className="w-3 h-3 lg:w-4 lg:h-4 group-hover:rotate-45 transition-transform" />
                  </div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block truncate">
                    Tour Type
                  </label>
                </div>
                <div className="relative pl-0 lg:pl-10 lg:-mt-2 flex items-center">
                  <select
                    value={selectedTourType}
                    onChange={(e) => setSelectedTourType(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-bold text-[#113d48] focus:outline-none cursor-pointer truncate py-0.5 pr-4 appearance-none"
                  >
                    <option value="all">All Tours</option>
                    <option value="Strangers Trip">15 Strangers</option>
                    <option value="Group Trip">Group Trip</option>
                    <option value="Customise Trip">Custom Trip</option>
                  </select>
                  <ChevronDown className="w-3 h-3 text-slate-400 absolute right-0 pointer-events-none" />
                </div>
              </div>

              {/* Field 3: Duration */}
              <div className="lg:w-1/4 px-2.5 sm:px-3 py-2 lg:py-1 rounded-xl lg:rounded-none bg-slate-50/80 lg:bg-transparent border border-slate-100/90 lg:border-0 lg:border-r lg:border-slate-100 group transition-colors hover:bg-[#f0f9fb] lg:hover:bg-transparent flex flex-col justify-center">
                <div className="flex items-center gap-1.5 mb-1 lg:mb-0">
                  <div className="w-5 h-5 lg:w-9 lg:h-9 rounded-full bg-[#1ca8cb]/10 lg:bg-[#f0f9fb] group-hover:bg-[#1ca8cb]/20 group-hover:scale-105 transition-all duration-300 flex items-center justify-center text-[#1ca8cb] shrink-0">
                    <Calendar className="w-3 h-3 lg:w-4 lg:h-4 group-hover:scale-110 transition-transform" />
                  </div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block truncate">
                    Duration
                  </label>
                </div>
                <div className="relative pl-0 lg:pl-10 lg:-mt-2 flex items-center">
                  <select
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-bold text-[#113d48] focus:outline-none cursor-pointer truncate py-0.5 pr-4 appearance-none"
                  >
                    <option value="all">Any Duration</option>
                    <option value="2D1N">2D | 1N</option>
                    <option value="3D2N">3D | 2N</option>
                    <option value="5D4N">5D | 4N</option>
                  </select>
                  <ChevronDown className="w-3 h-3 text-slate-400 absolute right-0 pointer-events-none" />
                </div>
              </div>

              {/* Field 4: Travelers */}
              <div className="lg:w-1/4 px-2.5 sm:px-3 py-2 lg:py-1 rounded-xl lg:rounded-none bg-slate-50/80 lg:bg-transparent border border-slate-100/90 lg:border-0 group transition-colors hover:bg-[#f0f9fb] lg:hover:bg-transparent flex flex-col justify-center">
                <div className="flex items-center gap-1.5 mb-1 lg:mb-0">
                  <div className="w-5 h-5 lg:w-9 lg:h-9 rounded-full bg-[#1ca8cb]/10 lg:bg-[#f0f9fb] group-hover:bg-[#1ca8cb]/20 group-hover:scale-105 transition-all duration-300 flex items-center justify-center text-[#1ca8cb] shrink-0">
                    <Users className="w-3 h-3 lg:w-4 lg:h-4 group-hover:scale-110 transition-transform" />
                  </div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block truncate">
                    Travelers
                  </label>
                </div>
                <div className="relative pl-0 lg:pl-10 lg:-mt-2 flex items-center">
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                    className="w-full bg-transparent text-xs sm:text-sm font-bold text-[#113d48] focus:outline-none cursor-pointer truncate py-0.5 pr-4 appearance-none"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4+ Guests</option>
                  </select>
                  <ChevronDown className="w-3 h-3 text-slate-400 absolute right-0 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Submit Button: Cyan Pill */}
            <div className="w-full lg:w-auto shrink-0 pt-0.5 lg:pt-0">
              <button
                type="submit"
                className="btn-shimmer min-h-[46px] lg:min-h-[44px] w-full lg:w-auto px-7 py-3 rounded-xl lg:rounded-full bg-[#1ca8cb] hover:bg-[#113d48] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#1ca8cb]/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95 group/search"
              >
                <Search className="w-4 h-4 group-hover/search:scale-110 transition-transform" />
                <span>Search Tours</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Video Modal Popup */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </>
  );
};
