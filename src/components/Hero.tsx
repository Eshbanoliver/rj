import React, { useState } from 'react';
import { PageType, SearchQuery } from '../types';
import { tourPackages } from '../data/tours';
import { companyData } from '../data/company';
import { MapPin, Calendar, Users, Compass, Search, Sparkles, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: PageType) => void;
  onSearch: (query: SearchQuery) => void;
  onOpenInquiry: (initialData?: { tourTitle?: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onSearch, onOpenInquiry }) => {
  const [selectedDestination, setSelectedDestination] = useState<string>('all');
  const [selectedDeparture, setSelectedDeparture] = useState<string>('all');
  const [travelers, setTravelers] = useState<number>(1);
  const [tourType, setTourType] = useState<string>('all');

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
    <section className="relative flex flex-col justify-between bg-slate-950 text-white">
      {/* Background Image with Cinematic Gradient Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/strangers-sunset-community.jpg"
          alt="15 Strangers Traveling together in Rajasthan - R Journey"
          className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.05]"
        />
        {/* Layered gradients for text contrast and premium cinematic feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
        {/* Decorative ambient elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-amber-500/15 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* Decorative ambient elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-amber-500/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-20 pb-6 sm:pb-10 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-amber-500/30 text-amber-400 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-4 sm:mb-6 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>EXPLORE • EXPERIENCE • ENJOY</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-amber-400" />
            <span className="hidden sm:inline text-slate-300 font-normal normal-case">
              15 Strangers Batches
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black font-heading tracking-tight leading-[1.1] text-white">
            Where Strangers <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
              Become Stories.
            </span>
          </h1>

          {/* Subtitle / Philosophy */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow-sm">
            Curated group journeys across Rajasthan designed for solo travelers, couples & friends.
            Experience royal forts, thrilling Thar desert safaris, poolside DJ parties, and campfire nights.
          </p>

          {/* Value Highlights */}
          <div className="mt-5 sm:mt-6 flex flex-wrap gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-300 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              Verified 3-Star Resorts & Desert Swiss Tents
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              Starting at just ₹6,999/-
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              ₹3,500 Token Deposit
            </span>
          </div>

          {/* Call-to-action Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('trips')}
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Upcoming Trips</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenInquiry()}
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 backdrop-blur-md active:scale-98 transition-all flex items-center justify-center gap-2"
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
              <h2 className="text-xs sm:text-base font-bold text-slate-900 tracking-wide uppercase font-heading">
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
                <Compass className="w-3.5 h-3.5 text-amber-500" />
                Departure From
              </label>
              <select
                value={selectedDeparture}
                onChange={(e) => setSelectedDeparture(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors cursor-pointer"
              >
                <option value="all">Any Departure Hub</option>
                <option value="Ahmedabad">Ahmedabad (Thu/Fri)</option>
                <option value="Udaipur">Udaipur (Fri)</option>
              </select>
            </div>

            {/* Destination */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                Destination
              </label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors cursor-pointer"
              >
                <option value="all">All Rajasthan Circuits</option>
                <option value="Jaisalmer">Jodhpur & Jaisalmer</option>
                <option value="Udaipur">Udaipur, Haldighati & Kumbhalgarh</option>
              </select>
            </div>

            {/* Travelers */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-amber-500" />
                Travelers
              </label>
              <select
                value={travelers}
                onChange={(e) => setTravelers(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors cursor-pointer"
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
                <Calendar className="w-3.5 h-3.5 text-amber-500" />
                Trip Style
              </label>
              <select
                value={tourType}
                onChange={(e) => setTourType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors cursor-pointer"
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
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Verified 15 Strangers batches & private custom packages</span>
            </span>
            <button
              type="button"
              onClick={handleBrowseOnline}
              className="text-amber-600 hover:text-amber-700 font-bold hover:underline flex items-center gap-1 cursor-pointer"
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
