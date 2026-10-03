import React, { useState, useMemo } from 'react';
import { PageType, SearchQuery } from '../types';
import { tourPackages, TourPackage } from '../data/tours';
import {
  Search,
  MapPin,
  Clock,
  Calendar,
  Check,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  FileDown,
  Users,
} from 'lucide-react';

interface ToursPageProps {
  onNavigate?: (page: PageType) => void;
  onSelectTour: (tour: TourPackage) => void;
  onOpenInquiry: (initialData?: { tourTitle?: string; message?: string }) => void;
  initialQuery?: SearchQuery;
}

export const ToursPage: React.FC<ToursPageProps> = ({
  onNavigate: _onNavigate,
  onSelectTour,
  onOpenInquiry,
  initialQuery,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDestination, setSelectedDestination] = useState<string>(
    initialQuery?.destination || 'all'
  );
  const [selectedDeparture, setSelectedDeparture] = useState<string>(
    initialQuery?.departureCity || 'all'
  );
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const filteredTours = useMemo(() => {
    return tourPackages
      .filter((tour) => {
        // Search term filter
        const matchesSearch =
          searchTerm === '' ||
          tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tour.destinations.some((d) =>
            d.toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          tour.departureCity.toLowerCase().includes(searchTerm.toLowerCase());

        // Destination filter
        const matchesDest =
          selectedDestination === 'all' ||
          tour.destinations.some((d) =>
            d.toLowerCase().includes(selectedDestination.toLowerCase())
          );

        // Departure city filter
        const matchesDeparture =
          selectedDeparture === 'all' ||
          tour.departureCity.toLowerCase() === selectedDeparture.toLowerCase();

        return matchesSearch && matchesDest && matchesDeparture;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.startingPrice - b.startingPrice;
        if (sortBy === 'price-desc') return b.startingPrice - a.startingPrice;
        return 0;
      });
  }, [searchTerm, selectedDestination, selectedDeparture, sortBy]);

  const upcomingDestinations = [
    'Jammu',
    'Manali',
    'Himachal',
    'Shimla',
    'Spiti Valley',
    'Goa',
  ];

  const showUpcomingCard = useMemo(() => {
    const searchLower = searchTerm.toLowerCase().trim();
    const destLower = selectedDestination.toLowerCase().trim();

    const matchesUpcomingKeyword =
      upcomingDestinations.some(
        (dest) =>
          dest.toLowerCase().includes(searchLower) ||
          searchLower.includes(dest.toLowerCase())
      ) ||
      destLower.includes('upcoming') ||
      upcomingDestinations.some((dest) => destLower.includes(dest.toLowerCase()));

    const isDefaultFilter = selectedDestination === 'all' && selectedDeparture === 'all';

    return isDefaultFilter || matchesUpcomingKeyword;
  }, [searchTerm, selectedDestination, selectedDeparture]);

  return (
    <div className="pt-24 pb-20 bg-[#fafbfc] text-slate-900 min-h-screen">
      {/* Page Header */}
      <div className="relative py-12 sm:py-20 bg-[#113d48] border-b border-[#0e333d] text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/strangers-sunset-community.jpg"
            alt="Rajasthan Tours"
            className="w-full h-full object-cover filter brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#113d48] via-[#113d48]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold tracking-widest text-[#1ca8cb] uppercase mb-3 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/80 border border-[#1ca8cb]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Departures & Batches</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight">
            Upcoming <span className="text-[#1ca8cb]">Trips</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto px-2">
            Curated group journeys with 15 strangers. Transparent fixed pricing, luxury stays, pool parties & desert safaris.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm mb-8 sm:mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="relative">
              <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                Search Journeys
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Forts, desert, lakes, mountains..."
                  className="w-full min-h-[44px] bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#1ca8cb] focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Destination Filter */}
            <div>
              <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                Destination
              </label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full min-h-[44px] bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#1ca8cb] focus:bg-white transition-colors"
              >
                <option value="all">All Destinations</option>
                <option value="Jaisalmer">Jaisalmer & Desert Dunes</option>
                <option value="Jodhpur">Jodhpur (Blue City)</option>
                <option value="Udaipur">Udaipur (City of Lakes)</option>
                <option value="Kumbhalgarh">Kumbhalgarh Fort</option>
                <option value="upcoming">Upcoming (Jammu, Manali, Himachal, Shimla, Spiti, Goa)</option>
              </select>
            </div>

            {/* Departure Hub */}
            <div>
              <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                Departure Hub
              </label>
              <select
                value={selectedDeparture}
                onChange={(e) => setSelectedDeparture(e.target.value)}
                className="w-full min-h-[44px] bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#1ca8cb] focus:bg-white transition-colors"
              >
                <option value="all">All Departure Hubs</option>
                <option value="Ahmedabad">Ex-Ahmedabad (Thu/Fri)</option>
                <option value="Udaipur">Ex-Udaipur (Fri)</option>
              </select>
            </div>

            {/* Sort Options */}
            <div>
              <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                Sort By Price
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full min-h-[44px] bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#1ca8cb] focus:bg-white transition-colors"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Active Results Counter */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>
              Showing <strong className="text-slate-900">{filteredTours.length}</strong> tour packages
            </span>
            {(selectedDestination !== 'all' || selectedDeparture !== 'all' || searchTerm) && (
              <button
                onClick={() => {
                  setSelectedDestination('all');
                  setSelectedDeparture('all');
                  setSearchTerm('');
                }}
                className="text-[#113d48] hover:underline font-semibold"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Tour Cards Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="relative overflow-hidden bg-white border border-slate-200/90 hover:border-[#1ca8cb]/90 rounded-2xl sm:rounded-3xl flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_45px_-12px_rgba(28,168,203,0.22)] group h-full card-shimmer before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-[#1ca8cb] before:via-[#189bbd] before:to-[#113d48] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-10"
            >
              {/* Image & Badges */}
              <div className="relative h-56 sm:h-64 overflow-hidden shrink-0">
                <img
                  src={tour.heroImage}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-black/30" />

                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="bg-gradient-to-r from-[#1ca8cb] to-[#189bbd] text-slate-950 text-[11px] sm:text-xs font-black px-3 py-1 rounded-full shadow-lg uppercase tracking-wider flex items-center gap-1 group-hover:scale-105 transition-transform duration-300">
                    <Sparkles className="w-3 h-3 text-slate-950" />
                    <span>{tour.badge || '15 Strangers'}</span>
                  </span>
                  <span className="bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md group-hover:scale-105 transition-transform duration-300">
                    <Clock className="w-3 h-3 text-[#1ca8cb]" />
                    {tour.duration}
                  </span>
                </div>

                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-100 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 shadow-sm">
                    <MapPin className="w-3.5 h-3.5 text-[#1ca8cb]" />
                    <span>Ex-{tour.departureCity}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-300 bg-emerald-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-emerald-500/40 shadow-sm">
                    <span>Token ₹{tour.registrationAmount.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#113d48] bg-[#1ca8cb]/10 border border-[#1ca8cb]/25 px-2.5 py-0.5 rounded-md mb-2">
                    <Calendar className="w-3.5 h-3.5 text-[#1ca8cb]" />
                    <span>{tour.departureSchedule.split('(')[0]}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 group-hover:text-[#113d48] transition-colors line-clamp-2">
                    {tour.title}
                  </h3>

                  <p className="text-xs text-slate-500 italic mt-1 mb-4 line-clamp-1">
                    "{tour.tagline}"
                  </p>

                  {/* Highlights checklist as modern chips */}
                  <div className="space-y-1.5 border-t border-slate-100 pt-3.5 mb-4">
                    {tour.inclusions.slice(0, 3).map((inc, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50/80 group-hover:bg-[#1ca8cb]/5 px-2.5 py-1.5 rounded-lg border border-slate-100/90 group-hover:border-[#1ca8cb]/30 transition-colors"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="line-clamp-1">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="border-t border-slate-100 pt-4 mt-2">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
                        Triple Sharing Starting At
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="line-through text-slate-400 text-xs font-medium">
                          ₹{(tour.startingPrice + 2500).toLocaleString('en-IN')}
                        </span>
                        <span className="text-2xl sm:text-3xl font-black font-heading text-[#113d48]">
                          ₹{tour.startingPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-slate-500">/person</span>
                      </div>
                    </div>

                    <div className="text-right bg-slate-50 px-2.5 py-1 rounded-xl border border-slate-200/70">
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
                        Double Sharing
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800">
                        ₹{tour.doubleSharingPrice.toLocaleString('en-IN')}/-
                      </span>
                    </div>
                  </div>

                  {/* Official PDF Brochure Link */}
                  {tour.brochureUrl && (
                    <div className="mb-2.5">
                      <a
                        href={tour.brochureUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-1.5 px-3 rounded-xl text-[11px] font-bold text-[#113d48] bg-[#1ca8cb]/10 hover:bg-[#1ca8cb]/20 border border-[#1ca8cb]/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs hover:scale-[1.01]"
                      >
                        <FileDown className="w-3.5 h-3.5 text-[#1ca8cb]" />
                        <span>Download Brochure (PDF)</span>
                      </a>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectTour(tour)}
                      className="min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 hover:text-slate-950 border border-slate-200/90 active:scale-95 transition-all text-center cursor-pointer flex items-center justify-center shadow-xs"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => onOpenInquiry({ tourTitle: tour.title })}
                      className="btn-shimmer min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#1ca8cb] to-[#113d48] hover:opacity-95 shadow-md shadow-[#1ca8cb]/25 active:scale-95 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer group/btn"
                    >
                      <span>Book Seat</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Advance Seat Token: ₹{tour.registrationAmount.toLocaleString('en-IN')} only
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Single Card for Upcoming Trips: Jammu, Manali, Himachal, Shimla, Spiti Valley, Goa */}
          {showUpcomingCard && (
            <div className="relative overflow-hidden bg-white border-2 border-dashed border-[#1ca8cb]/50 hover:border-[#1ca8cb] rounded-2xl sm:rounded-3xl flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_45px_-12px_rgba(28,168,203,0.3)] group h-full card-shimmer before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:bg-gradient-to-r before:from-[#1ca8cb] before:via-[#0ea5e9] before:to-[#113d48] before:z-10">
              {/* Image Banner */}
              <div className="relative h-56 sm:h-64 overflow-hidden shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop"
                  alt="Upcoming Trips: Jammu, Manali, Himachal, Shimla, Spiti Valley, Goa"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-black/30" />

                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 text-[11px] sm:text-xs font-black px-3 py-1 rounded-full shadow-lg uppercase tracking-wider flex items-center gap-1 group-hover:scale-105 transition-transform duration-300">
                    <Sparkles className="w-3 h-3 text-slate-950" />
                    <span>Coming Soon</span>
                  </span>
                  <span className="bg-slate-950/80 backdrop-blur-md border border-white/20 text-cyan-200 text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md group-hover:scale-105 transition-transform duration-300">
                    <Clock className="w-3 h-3 text-[#1ca8cb]" />
                    <span>Next Batches</span>
                  </span>
                </div>

                {/* Bottom Badges */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-100 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 shadow-sm">
                    <Users className="w-3.5 h-3.5 text-[#1ca8cb]" />
                    <span>15 Strangers Format</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-amber-300 bg-amber-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-500/40 shadow-sm">
                    <span>Priority Access</span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#113d48] bg-[#1ca8cb]/10 border border-[#1ca8cb]/25 px-2.5 py-0.5 rounded-md mb-2">
                    <Calendar className="w-3.5 h-3.5 text-[#1ca8cb]" />
                    <span>Announcing Next Season Departures</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black font-heading text-slate-900 group-hover:text-[#113d48] transition-colors leading-snug">
                    Himalayan Valleys & Goa Coastal Expeditions
                  </h3>

                  <p className="text-xs text-slate-600 italic mt-1 mb-3">
                    "Snow passes, pine valleys, mountain homestays & sun-kissed beaches with 15 strangers."
                  </p>

                  {/* 6 Destination Badges: Jammu, Manali, Himachal, Shimla, Spiti Valley, Goa */}
                  <div className="mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                      Featured Destinations
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-lg bg-cyan-50 border border-cyan-200 text-[#113d48] text-xs font-bold flex items-center gap-1 shadow-2xs">
                        <span>🏔️</span>
                        <span>Jammu</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-sky-50 border border-sky-200 text-[#113d48] text-xs font-bold flex items-center gap-1 shadow-2xs">
                        <span>❄️</span>
                        <span>Manali</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-[#113d48] text-xs font-bold flex items-center gap-1 shadow-2xs">
                        <span>🌲</span>
                        <span>Himachal</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-[#113d48] text-xs font-bold flex items-center gap-1 shadow-2xs">
                        <span>🏰</span>
                        <span>Shimla</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-purple-50 border border-purple-200 text-[#113d48] text-xs font-bold flex items-center gap-1 shadow-2xs">
                        <span>🌌</span>
                        <span>Spiti Valley</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-[#113d48] text-xs font-bold flex items-center gap-1 shadow-2xs">
                        <span>🌊</span>
                        <span>Goa</span>
                      </span>
                    </div>
                  </div>

                  {/* Highlights checklist */}
                  <div className="space-y-1.5 border-t border-slate-100 pt-3 mb-4">
                    <div className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50/80 px-2.5 py-1.5 rounded-lg border border-slate-100">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="line-clamp-1">Curated 15 Strangers Social Group Dynamics</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50/80 px-2.5 py-1.5 rounded-lg border border-slate-100">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="line-clamp-1">Handpicked Scenic Homestays, Camps & Stays</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50/80 px-2.5 py-1.5 rounded-lg border border-slate-100">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="line-clamp-1">R Journey Verified Captains & 24/7 Safety</span>
                    </div>
                  </div>
                </div>

                {/* Status & Pre-Register Actions */}
                <div className="border-t border-slate-100 pt-4 mt-2">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
                        Batch Status
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl sm:text-2xl font-black font-heading text-[#113d48]">
                          Opening Soon
                        </span>
                      </div>
                    </div>

                    <div className="text-right bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-200/70">
                      <span className="text-[10px] text-amber-700 uppercase tracking-wider block font-semibold">
                        Priority List
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-amber-900">
                        Pre-Register Open
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="https://wa.me/918094268991?text=Hi%20R%20Journey!%20I%20want%20to%20get%20updates%20for%20your%20upcoming%20trips%20to%20Jammu,%20Manali,%20Himachal,%20Shimla,%20Spiti%20Valley,%20and%20Goa."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-bold text-[#113d48] bg-slate-100 hover:bg-[#1ca8cb]/15 border border-slate-200/90 active:scale-95 transition-all text-center cursor-pointer flex items-center justify-center gap-1 shadow-xs"
                    >
                      <span>WhatsApp Us</span>
                    </a>
                    <button
                      onClick={() =>
                        onOpenInquiry({
                          tourTitle:
                            'Upcoming Expeditions: Jammu, Manali, Himachal, Shimla, Spiti Valley, Goa',
                          message:
                            'Hi R Journey team! I would like to pre-register my interest for your upcoming trips to Jammu, Manali, Himachal, Shimla, Spiti Valley, and Goa. Please notify me when dates and itineraries are announced!',
                        })
                      }
                      className="btn-shimmer min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#1ca8cb] to-[#113d48] hover:opacity-95 shadow-md shadow-[#1ca8cb]/25 active:scale-95 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer group/btn"
                    >
                      <span>Pre-Register</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="inline-flex items-center gap-1 text-[11px] text-sky-800 font-semibold bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200/60">
                      <Sparkles className="w-3.5 h-3.5 text-[#1ca8cb]" />
                      Early-bird discounts & first access to batch dates
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
