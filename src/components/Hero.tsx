import React, { useState } from 'react';
import { PageType, SearchQuery } from '../types';
import { VideoModal } from './VideoModal';
import {
  MapPin,
  Calendar,
  Users,
  Compass,
  Search,
  Play,
  ArrowRight,
} from 'lucide-react';

interface HeroProps {
  onNavigate: (page: PageType) => void;
  onSearch: (query: SearchQuery) => void;
  onOpenInquiry: (initialData?: { tourTitle?: string; message?: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onSearch, onOpenInquiry }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string>('all');
  const [selectedTourType, setSelectedTourType] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [travelers, setTravelers] = useState<number>(1);

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
      <section className="relative bg-slate-900 text-white min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] flex flex-col justify-between overflow-visible">
        {/* Full-bleed Scenic Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
            alt="Scenic tropical world travel beach and boats"
            className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.05]"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/30" />
        </div>

        {/* Hero Content Section matching reference */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28 pb-20 sm:pb-28 lg:pb-32 flex-1 flex flex-col justify-center text-center lg:text-left">
          <div className="max-w-3xl mx-auto lg:mx-0">
            {/* Script Subtitle matching reference */}
            <div className="mb-2">
              <span className="font-script text-[#1ca8cb] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide drop-shadow-md inline-block animate-float-slow">
                Get Unforgettable Pleasure With Us
              </span>
            </div>

            {/* Main Headline matching reference */}
            <h1 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-black font-heading text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] animate-fadeInUp">
              Explore beauty of <br />
              <span className="text-white">the whole world</span>
            </h1>

            {/* Action Buttons matching reference */}
            <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              {/* Primary Cyan Pill Button with Shimmer */}
              <button
                onClick={() => onOpenInquiry({ tourTitle: 'General Rajasthan Tour' })}
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
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </>
  );
};
