import React, { useState, useMemo } from 'react';
import { PageType, SearchQuery } from '../types';
import { tourPackages, TourPackage } from '../data/tours';
import {
  Search,
  Filter,
  MapPin,
  Clock,
  Calendar,
  Check,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  SlidersHorizontal,
} from 'lucide-react';

interface ToursPageProps {
  onNavigate: (page: PageType) => void;
  onSelectTour: (tour: TourPackage) => void;
  onOpenInquiry: (initialData?: { tourTitle?: string }) => void;
  initialQuery?: SearchQuery;
}

export const ToursPage: React.FC<ToursPageProps> = ({
  onNavigate,
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
            Weekly departures from Ahmedabad & Udaipur. Transparent fixed pricing, luxury stays, pool parties & Thar desert safaris.
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
                  placeholder="Forts, desert, lakes..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#1ca8cb] focus:bg-white transition-colors"
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
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#1ca8cb] focus:bg-white transition-colors"
              >
                <option value="all">All Destinations</option>
                <option value="Jaisalmer">Jaisalmer & Desert Dunes</option>
                <option value="Jodhpur">Jodhpur (Blue City)</option>
                <option value="Udaipur">Udaipur (City of Lakes)</option>
                <option value="Kumbhalgarh">Kumbhalgarh Fort</option>
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
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#1ca8cb] focus:bg-white transition-colors"
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
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#1ca8cb] focus:bg-white transition-colors"
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
        </div>
      </div>
    </div>
  );
};
