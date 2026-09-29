import React, { useState, useEffect, useRef } from 'react';
import { PageType, SearchQuery } from '../types';
import { tourPackages } from '../data/tours';
import { companyData } from '../data/company';
import {
  MapPin,
  Calendar,
  Users,
  Compass,
  Search,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play
} from 'lucide-react';

interface HeroProps {
  onNavigate: (page: PageType) => void;
  onSearch: (query: SearchQuery) => void;
  onOpenInquiry: (initialData?: { tourTitle?: string }) => void;
}

interface HeroSlide {
  id: string;
  name: string;
  tagline: string;
  image: string;
  highlight: string;
  state: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 'udaipur',
    name: 'Udaipur',
    tagline: 'The City of Lakes & Royal Palaces',
    image: '/images/hero-udaipur.jpg',
    highlight: 'Lake Pichola • Grand City Palace • Aravali Hills',
    state: 'Rajasthan',
  },
  {
    id: 'jaisalmer',
    name: 'Jaisalmer',
    tagline: 'The Golden City & Thar Desert Dunes',
    image: '/images/hero-jaisalmer.jpg',
    highlight: 'Sam Sand Dunes • Sunset Camel Safari • Sonar Qila',
    state: 'Rajasthan',
  },
  {
    id: 'jodhpur',
    name: 'Jodhpur',
    tagline: 'The Majestic Blue City & Cliff Forts',
    image: '/images/hero-jodhpur.jpg',
    highlight: 'Mehrangarh Fort • Blue City • Jaswant Thada',
    state: 'Rajasthan',
  },
  {
    id: 'kumbhalgarh',
    name: 'Kumbhalgarh',
    tagline: 'The Great Wall of India & Cloud Citadel',
    image: '/images/hero-kumbhalgarh.jpg',
    highlight: '36km Perimeter Wall • Badal Mahal • Aravali Ridges',
    state: 'Rajasthan',
  },
  {
    id: 'haldighati',
    name: 'Haldighati',
    tagline: 'The Historic Pass of Valor & Turmeric Sands',
    image: '/images/hero-haldighati.jpg',
    highlight: 'Historic Canyon Pass • Chetak Smarak • Aravali Trails',
    state: 'Rajasthan',
  },
];

export const Hero: React.FC<HeroProps> = ({ onNavigate, onSearch, onOpenInquiry }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [selectedDestination, setSelectedDestination] = useState<string>('all');
  const [selectedDeparture, setSelectedDeparture] = useState<string>('all');
  const [travelers, setTravelers] = useState<number>(1);
  const [tourType, setTourType] = useState<string>('all');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;

    timerRef.current = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5500);

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

  const currentSlide = heroSlides[currentSlideIndex];

  const handleWhatsAppEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const dep = selectedDeparture === 'all' ? 'Any Departure Hub (Ahmedabad / Udaipur)' : selectedDeparture;
    const dest =
      selectedDestination === 'all'
        ? 'All Rajasthan Circuits'
        : selectedDestination === 'Jaisalmer'
        ? 'Jodhpur & Jaisalmer'
        : 'Udaipur, Haldighati & Kumbhalgarh';
    const style = tourType === 'all' ? '15 Strangers / Group Trip' : tourType;
    const text = `Hello R Journey! I want to enquire about upcoming tour batches:
• Departure From: ${dep}
• Destination: ${dest}
• Travelers: ${travelers} ${travelers === 1 ? 'Person' : 'People'}
• Trip Style: ${style}

Please share available batch dates, itinerary details & seat reservation process.`;

    const url = `https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleBrowseOnline = () => {
    onSearch({
      destination: selectedDestination,
      departureCity: selectedDeparture,
      travelDate: '',
      travelers: Number(travelers),
      tourType: tourType,
    });
    onNavigate('trips');
  };

  return (
    <section className="relative flex flex-col justify-between bg-black text-white overflow-hidden min-h-[640px] sm:min-h-[700px]">
      {/* Background Image Slider with Crossfade & Subtle Ken Burns Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {heroSlides.map((slide, index) => {
          const isActive = index === currentSlideIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={`${slide.name} - ${slide.tagline}`}
                className={`w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.04] transition-transform duration-[6000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          );
        })}

        {/* Minimal neutral dark gradients for natural image colors and text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[280px] bg-[#1ca8cb]/15 blur-[140px] rounded-full pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 lg:pt-16 pb-6 sm:pb-8 flex-1 flex flex-col justify-center w-full">
        {/* Top Destination Slider Pills / Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8">
          {/* Destination Selector Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1">
            {heroSlides.map((slide, idx) => {
              const isActive = idx === currentSlideIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => handleSelectSlide(idx)}
                  className={`px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-[#1ca8cb] text-[#113d48] shadow-lg shadow-[#1ca8cb]/30 scale-105 font-black'
                      : 'bg-black/50 hover:bg-black/75 text-white/90 hover:text-white border border-white/20 backdrop-blur-md'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#113d48]' : 'bg-[#1ca8cb]'}`} />
                  <span>{slide.name}</span>
                </button>
              );
            })}
          </div>

          {/* Slider Prev / Next Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevSlide}
              aria-label="Previous destination"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/55 hover:bg-[#1ca8cb] hover:text-[#113d48] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/55 hover:bg-black/80 text-[#1ca8cb] border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95 text-xs font-bold"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={handleNextSlide}
              aria-label="Next destination"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/55 hover:bg-[#1ca8cb] hover:text-[#113d48] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        <div className="max-w-3xl">
          {/* Eyebrow Badge with Active Slide Location Info */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#1ca8cb]/40 text-[#1ca8cb] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-4 sm:mb-5 shadow-lg transition-all duration-500">
            <MapPin className="w-3.5 h-3.5 text-[#1ca8cb] shrink-0 animate-pulse" />
            <span className="font-bold text-white">{currentSlide.name}</span>
            <span className="w-1 h-1 rounded-full bg-[#1ca8cb]" />
            <span className="text-cyan-200 font-normal truncate">
              {currentSlide.tagline}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black font-heading tracking-tight leading-[1.1] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Where Strangers <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#1ca8cb] via-[#5dd3ee] to-white bg-clip-text text-transparent">
              Become Stories.
            </span>
          </h1>

          {/* Subtitle / Philosophy */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-lg lg:text-xl text-slate-100 font-normal leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            Curated group journeys across Rajasthan designed for solo travelers, couples & friends.
            Experience royal forts, thrilling Thar desert safaris, poolside DJ parties, and campfire nights.
          </p>

          {/* Active Location Key Highlights Banner */}
          <div className="mt-4 sm:mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/55 border border-white/15 backdrop-blur-md text-xs sm:text-sm text-slate-200 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#1ca8cb] shrink-0" />
            <span className="text-[#1ca8cb] font-bold">{currentSlide.name} Circuit:</span>
            <span className="text-slate-100 font-medium">{currentSlide.highlight}</span>
          </div>

          {/* Value Highlights */}
          <div className="mt-4 sm:mt-5 flex flex-wrap gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-300 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#1ca8cb] shrink-0" />
              Verified 3-Star Resorts & Desert Swiss Tents
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#1ca8cb] shrink-0" />
              Starting at just ₹6,999/-
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#1ca8cb] shrink-0" />
              ₹3,500 Token Deposit
            </span>
          </div>

          {/* Call-to-action Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('trips')}
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-black text-sm sm:text-base text-slate-950 bg-gradient-to-r from-[#1ca8cb] to-[#3dbedc] hover:from-[#35bad8] hover:to-[#1ca8cb] shadow-lg shadow-[#1ca8cb]/30 hover:shadow-xl hover:shadow-[#1ca8cb]/40 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Upcoming Trips</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenInquiry({ tourTitle: `${currentSlide.name} Package` })}
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-black/60 hover:bg-black/80 border border-white/20 hover:border-[#1ca8cb]/60 backdrop-blur-md active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Plan A Custom Trip</span>
            </button>
          </div>
        </div>
      </div>

      {/* Travel Search & WhatsApp Enquiry Box (Light Theme) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10 pb-8 sm:pb-12 w-full">
        <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl shadow-black/25 text-slate-800">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h2 className="text-xs sm:text-base font-bold text-[#113d48] tracking-wide uppercase font-heading">
                Find Your Journey & Enquire
              </h2>
            </div>
            <span className="text-[11px] sm:text-xs text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full font-semibold flex items-center gap-1">
              <MessageSquare className="w-3 h-3 text-emerald-600" />
              <span>Instant WhatsApp Response</span>
            </span>
          </div>

          <form onSubmit={handleWhatsAppEnquiry} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 items-end">
            {/* Departure Hub */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#1ca8cb]" />
                Departure From
              </label>
              <select
                value={selectedDeparture}
                onChange={(e) => setSelectedDeparture(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#1ca8cb] focus:bg-white transition-colors cursor-pointer"
              >
                <option value="all">Any Departure Hub</option>
                <option value="Ahmedabad">Ahmedabad (Thu/Fri)</option>
                <option value="Udaipur">Udaipur (Fri)</option>
              </select>
            </div>

            {/* Destination */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#1ca8cb]" />
                Destination
              </label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#1ca8cb] focus:bg-white transition-colors cursor-pointer"
              >
                <option value="all">All Rajasthan Circuits</option>
                <option value="Jaisalmer">Jodhpur & Jaisalmer</option>
                <option value="Udaipur">Udaipur, Haldighati & Kumbhalgarh</option>
              </select>
            </div>

            {/* Travelers */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#1ca8cb]" />
                Travelers
              </label>
              <select
                value={travelers}
                onChange={(e) => setTravelers(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#1ca8cb] focus:bg-white transition-colors cursor-pointer"
              >
                <option value="1">1 Solo (Strangers Batch)</option>
                <option value="2">2 Travelers (Duo / Couple)</option>
                <option value="3">3 Travelers (Triple Sharing)</option>
                <option value="4">4+ Group / Friends Circle</option>
              </select>
            </div>

            {/* Tour Type */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#1ca8cb]" />
                Trip Style
              </label>
              <select
                value={tourType}
                onChange={(e) => setTourType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#1ca8cb] focus:bg-white transition-colors cursor-pointer"
              >
                <option value="all">All Trip Styles</option>
                <option value="15 Strangers Social Trip">15 Strangers Social Trip</option>
                <option value="College Trip">College / Student Trip</option>
                <option value="Group Trip">Group / Family Trip</option>
                <option value="Corporate Trip">Corporate Offsite</option>
                <option value="Customise Trip">Customised Tour</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2 lg:col-span-1">
              <button
                type="submit"
                className="w-full min-h-[44px] py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 shadow-md shadow-emerald-600/30 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                title="Send Enquiry Directly to WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Enquire on WhatsApp</span>
              </button>
            </div>
          </form>

          {/* Quick links footer */}
          <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
            <span className="flex items-center gap-1.5 text-slate-600">
              <Sparkles className="w-3.5 h-3.5 text-[#1ca8cb]" />
              <span>Verified 15 Strangers batches & private custom packages</span>
            </span>
            <button
              type="button"
              onClick={handleBrowseOnline}
              className="text-[#113d48] hover:text-[#1ca8cb] font-bold hover:underline flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>Or browse all packages online</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
