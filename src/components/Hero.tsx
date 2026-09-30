import React, { useState } from 'react';
import { PageType, SearchQuery } from '../types';
import { companyData } from '../data/company';
import { VideoModal } from './VideoModal';
import {
  MapPin,
  Calendar,
  Users,
  Compass,
  Search,
  Play,
  ArrowRight,
  MessageSquare
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
      <section className="relative bg-slate-900 text-white min-h-[600px] sm:min-h-[660px] lg:min-h-[720px] flex flex-col justify-between overflow-visible">
        {/* Full-bleed Scenic Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
            alt="Scenic tropical world travel beach and boats"
            className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.05]"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/30" />
        </div>

        {/* Hero Content Section matching reference */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-24 sm:pb-32 flex-1 flex flex-col justify-center">
          <div className="max-w-3xl">
            {/* Script Subtitle matching reference */}
            <div className="mb-2">
              <span className="font-script text-[#1ca8cb] text-3xl sm:text-4xl font-bold tracking-wide drop-shadow-md">
                Get Unforgettable Pleasure With Us
              </span>
            </div>

            {/* Main Headline matching reference */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
              Explore beauty of <br />
              <span className="text-white">the whole world</span>
            </h1>

            {/* Action Buttons matching reference */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Primary Cyan Pill Button */}
              <button
                onClick={() => onOpenInquiry({ tourTitle: 'General Rajasthan Tour' })}
                className="px-8 py-3.5 sm:py-4 rounded-full bg-[#1ca8cb] hover:bg-white text-white hover:text-[#113d48] font-bold text-sm sm:text-base shadow-xl shadow-[#1ca8cb]/40 transition-all duration-300 flex items-center gap-2 cursor-pointer group active:scale-95"
              >
                <span>Book A Tour</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Video Play Button with Pulsing Halo */}
              <button
                onClick={() => setIsVideoOpen(true)}
                className="flex items-center gap-3.5 text-white hover:text-[#1ca8cb] transition-colors group cursor-pointer"
              >
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 group-hover:bg-[#1ca8cb] group-hover:border-[#1ca8cb] transition-all">
                  <div className="absolute inset-0 rounded-full bg-[#1ca8cb]/40 animate-ping" />
                  <Play className="w-5 h-5 text-white fill-white relative z-10 ml-0.5" />
                </div>
                <span className="font-bold text-sm sm:text-base drop-shadow-sm">
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
            className="bg-white rounded-2xl lg:rounded-full shadow-2xl p-4 lg:p-3 border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-3 text-slate-800"
          >
            {/* Field 1: Destination */}
            <div className="w-full lg:w-1/4 px-3 py-1 flex items-center gap-3 border-b lg:border-b-0 lg:border-r border-slate-100 pb-2 lg:pb-0">
              <div className="w-9 h-9 rounded-full bg-[#f0f9fb] flex items-center justify-center text-[#1ca8cb] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Where to?
                </label>
                <select
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-bold text-[#113d48] focus:outline-none cursor-pointer"
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
            <div className="w-full lg:w-1/4 px-3 py-1 flex items-center gap-3 border-b lg:border-b-0 lg:border-r border-slate-100 pb-2 lg:pb-0">
              <div className="w-9 h-9 rounded-full bg-[#f0f9fb] flex items-center justify-center text-[#1ca8cb] shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Tour Type
                </label>
                <select
                  value={selectedTourType}
                  onChange={(e) => setSelectedTourType(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-bold text-[#113d48] focus:outline-none cursor-pointer"
                >
                  <option value="all">All Tour Types</option>
                  <option value="Strangers Trip">15 Strangers Trip</option>
                  <option value="Group Trip">Group Trip</option>
                  <option value="Customise Trip">Custom Trip</option>
                </select>
              </div>
            </div>

            {/* Field 3: Duration */}
            <div className="w-full lg:w-1/4 px-3 py-1 flex items-center gap-3 border-b lg:border-b-0 lg:border-r border-slate-100 pb-2 lg:pb-0">
              <div className="w-9 h-9 rounded-full bg-[#f0f9fb] flex items-center justify-center text-[#1ca8cb] shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Duration / When
                </label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-bold text-[#113d48] focus:outline-none cursor-pointer"
                >
                  <option value="all">Any Duration</option>
                  <option value="2D1N">2 Days | 1 Night</option>
                  <option value="3D2N">3 Days | 2 Nights</option>
                  <option value="5D4N">5 Days | 4 Nights</option>
                </select>
              </div>
            </div>

            {/* Field 4: Travelers */}
            <div className="w-full lg:w-1/4 px-3 py-1 flex items-center gap-3 pb-2 lg:pb-0">
              <div className="w-9 h-9 rounded-full bg-[#f0f9fb] flex items-center justify-center text-[#1ca8cb] shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Travelers
                </label>
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                  className="w-full bg-transparent text-xs sm:text-sm font-bold text-[#113d48] focus:outline-none cursor-pointer"
                >
                  <option value={1}>1 Solo Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4+ Guests</option>
                </select>
              </div>
            </div>

            {/* Submit Button: Cyan Pill */}
            <div className="w-full lg:w-auto shrink-0">
              <button
                type="submit"
                className="w-full lg:w-auto px-7 py-3 rounded-full bg-[#1ca8cb] hover:bg-[#113d48] text-white text-sm font-bold shadow-lg shadow-[#1ca8cb]/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Search className="w-4 h-4" />
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
