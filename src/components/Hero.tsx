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
  Sparkles,
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

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const handleSelectSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  // Touch Swipe gestures for mobile hero slider
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNextSlide();
      } else {
        handlePrevSlide();
      }
    }
    touchStartX.current = null;
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
      <section
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative bg-slate-900 text-white min-h-[600px] sm:min-h-[680px] lg:min-h-[740px] flex flex-col justify-between overflow-visible select-none"
      >
        {/* Background Image Slider with Crossfade & Ken Burns Zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
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
                  className={`w-full h-full object-cover filter brightness-[0.78] contrast-[1.06] transition-transform duration-[6000ms] ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                />
              </div>
            );
          })}

          {/* Gradients for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[280px] bg-[#1ca8cb]/15 blur-[140px] rounded-full pointer-events-none" />
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

        {/* Hero Content Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-14 pb-20 sm:pb-28 lg:pb-32 flex-1 flex flex-col justify-center text-center lg:text-left w-full">
          
          {/* Top Destination Selector Pills & Slideshow Controls */}
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-3 mb-6 sm:mb-8">
            {/* Destination Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 max-w-full">
              {heroSlides.map((slide, idx) => {
                const isActive = idx === currentSlideIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => handleSelectSlide(idx)}
                    className={`px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer shrink-0 ${
                      isActive
                        ? 'bg-[#1ca8cb] text-white shadow-lg shadow-[#1ca8cb]/40 scale-105'
                        : 'bg-black/40 hover:bg-black/60 text-white/85 hover:text-white border border-white/20 backdrop-blur-md'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-[#1ca8cb]'}`} />
                    <span>{slide.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Slide Player Controls (Prev, Pause/Play, Next) */}
            <div className="hidden sm:flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/20 rounded-full p-1">
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-[#1ca8cb]/50 text-[#1ca8cb] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 shadow-lg animate-fadeIn">
              <MapPin className="w-3.5 h-3.5 text-[#1ca8cb] shrink-0 animate-pulse" />
              <span className="font-bold text-white">{currentSlide.name}</span>
              <span className="w-1 h-1 rounded-full bg-[#1ca8cb]" />
              <span className="text-cyan-200 font-normal truncate">
                {currentSlide.tagline}
              </span>
            </div>

            {/* Script Subtitle matching reference */}
            <div className="mb-2">
              <span className="font-script text-[#1ca8cb] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide drop-shadow-md inline-block animate-float-slow">
                {currentSlide.subtitle}
              </span>
            </div>

            {/* Main Headline matching reference */}
            <h1 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-black font-heading text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)] animate-fadeInUp">
              Explore beauty of <br />
              <span className="text-white">the whole world</span>
            </h1>

            {/* Action Buttons matching reference */}
            <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              {/* Primary Cyan Pill Button with Shimmer */}
              <button
                onClick={() => onOpenInquiry({ tourTitle: `${currentSlide.name} Rajasthan Tour` })}
                className="btn-shimmer w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-[#1ca8cb] hover:bg-white text-white hover:text-[#113d48] font-bold text-sm sm:text-base shadow-xl shadow-[#1ca8cb]/40 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group active:scale-95"
              >
                <span>Book A Tour</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>

              {/* Video Play Button with Radar Pulse Halo */}
              <button
                onClick={() => setIsVideoOpen(true)}
                className="flex items-center justify-center gap-3 text-white hover:text-[#1ca8cb] transition-colors group cursor-pointer py-1"
              >
                <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1ca8cb]/30 backdrop-blur-md border border-white/40 group-hover:bg-[#1ca8cb] group-hover:border-[#1ca8cb] transition-all duration-300 animate-radar group-hover:scale-105">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white relative z-10 ml-0.5" />
                </div>
                <span className="font-bold text-sm sm:text-base drop-shadow-sm group-hover:translate-x-1 transition-transform duration-300">
                  Watch Video
                </span>
              </button>
            </div>
          </div>

          {/* Slider Pagination Indicator Dots */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mt-6 sm:mt-8">
            {heroSlides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => handleSelectSlide(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentSlideIndex === dotIdx
                    ? 'w-7 h-2 bg-[#1ca8cb]'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Floating Search Filter Bar Overlapping Bottom matching reference */}
        <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 w-full -mb-10 sm:-mb-12">
          <form
            onSubmit={handleSearchSubmit}
            className="bg-white rounded-2xl lg:rounded-full shadow-2xl hover:shadow-[0_25px_60px_-12px_rgba(28,168,203,0.3)] transition-all duration-500 p-4 lg:p-3 border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-3 text-slate-800"
          >
            {/* Field 1: Destination */}
            <div className="w-full lg:w-1/4 px-2 sm:px-3 py-1 flex items-center gap-3 border-b lg:border-b-0 lg:border-r border-slate-100 pb-2.5 lg:pb-0 group">
              <div className="w-9 h-9 rounded-full bg-[#f0f9fb] group-hover:bg-[#1ca8cb]/15 group-hover:scale-105 transition-all duration-300 flex items-center justify-center text-[#1ca8cb] shrink-0">
                <MapPin className="w-4 h-4 group-hover:rotate-6 transition-transform" />
              </div>
              <div className="flex-1 min-w-0">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Where to?
                </label>
                <select
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-bold text-[#113d48] focus:outline-none cursor-pointer truncate py-1"
                >
                  <option value="all">All Destinations</option>
                  <option value="Udaipur">Udaipur</option>
                  <option value="Jaisalmer">Jaisalmer</option>
                  <option value="Jodhpur">Jodhpur</option>
                  <option value="Kumbhalgarh">Kumbhalgarh</option>
                </select>
              </div>
            </div>

            {/* Field 2: Tour Type */}
            <div className="w-full lg:w-1/4 px-2 sm:px-3 py-1 flex items-center gap-3 border-b lg:border-b-0 lg:border-r border-slate-100 pb-2.5 lg:pb-0 group">
              <div className="w-9 h-9 rounded-full bg-[#f0f9fb] group-hover:bg-[#1ca8cb]/15 group-hover:scale-105 transition-all duration-300 flex items-center justify-center text-[#1ca8cb] shrink-0">
                <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </div>
              <div className="flex-1 min-w-0">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Tour Type
                </label>
                <select
                  value={selectedTourType}
                  onChange={(e) => setSelectedTourType(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-bold text-[#113d48] focus:outline-none cursor-pointer truncate py-1"
                >
                  <option value="all">All Tour Types</option>
                  <option value="Strangers Trip">15 Strangers Trip</option>
                  <option value="Group Trip">Group Trip</option>
                  <option value="Customise Trip">Custom Trip</option>
                </select>
              </div>
            </div>

            {/* Field 3: Duration */}
            <div className="w-full lg:w-1/4 px-2 sm:px-3 py-1 flex items-center gap-3 border-b lg:border-b-0 lg:border-r border-slate-100 pb-2.5 lg:pb-0 group">
              <div className="w-9 h-9 rounded-full bg-[#f0f9fb] group-hover:bg-[#1ca8cb]/15 group-hover:scale-105 transition-all duration-300 flex items-center justify-center text-[#1ca8cb] shrink-0">
                <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex-1 min-w-0">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Duration / When
                </label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-bold text-[#113d48] focus:outline-none cursor-pointer truncate py-1"
                >
                  <option value="all">Any Duration</option>
                  <option value="2D1N">2 Days | 1 Night</option>
                  <option value="3D2N">3 Days | 2 Nights</option>
                  <option value="5D4N">5 Days | 4 Nights</option>
                </select>
              </div>
            </div>

            {/* Field 4: Travelers */}
            <div className="w-full lg:w-1/4 px-2 sm:px-3 py-1 flex items-center gap-3 pb-2.5 lg:pb-0 group">
              <div className="w-9 h-9 rounded-full bg-[#f0f9fb] group-hover:bg-[#1ca8cb]/15 group-hover:scale-105 transition-all duration-300 flex items-center justify-center text-[#1ca8cb] shrink-0">
                <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex-1 min-w-0">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Travelers
                </label>
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                  className="w-full bg-transparent text-xs sm:text-sm font-bold text-[#113d48] focus:outline-none cursor-pointer truncate py-1"
                >
                  <option value={1}>1 Solo Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4+ Guests</option>
                </select>
              </div>
            </div>

            {/* Submit Button: Cyan Pill */}
            <div className="w-full lg:w-auto shrink-0 pt-1 lg:pt-0">
              <button
                type="submit"
                className="btn-shimmer w-full lg:w-auto px-7 py-3.5 rounded-full bg-[#1ca8cb] hover:bg-[#113d48] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#1ca8cb]/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95 group/search"
              >
                <Search className="w-4 h-4 group-hover/search:scale-110 transition-transform" />
                <span>Search</span>
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
