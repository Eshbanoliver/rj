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
    <div className="pt-24 pb-20 bg-slate-950 text-white min-h-screen">
      {/* Page Header */}
      <div className="relative py-20 bg-slate-900 border-b border-slate-800 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/strangers-sunset-community.jpg"
            alt="Rajasthan Tours"
            className="w-full h-full object-cover filter brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-amber-400 uppercase mb-3 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Brochure Tour Packages</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight">
            Tour <span className="text-amber-400">Packages</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Weekly departures from Ahmedabad & Udaipur. Transparent fixed pricing, luxury stays, pool parties & Thar desert safaris.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="relative">
              <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Search Journeys
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Forts, desert, lakes..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            {/* Destination Filter */}
            <div>
              <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Destination
              </label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
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
              <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Departure Hub
              </label>
              <select
                value={selectedDeparture}
                onChange={(e) => setSelectedDeparture(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
              >
                <option value="all">All Departure Hubs</option>
                <option value="Ahmedabad">Ex-Ahmedabad (Thu/Fri)</option>
                <option value="Udaipur">Ex-Udaipur (Fri)</option>
              </select>
            </div>

            {/* Sort Options */}
            <div>
              <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Sort By Price
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Active Results Counter */}
          <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>
              Showing <strong className="text-white">{filteredTours.length}</strong> tour packages
            </span>
            {(selectedDestination !== 'all' || selectedDeparture !== 'all' || searchTerm) && (
              <button
                onClick={() => {
                  setSelectedDestination('all');
                  setSelectedDeparture('all');
                  setSearchTerm('');
                }}
                className="text-amber-400 hover:underline"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Tour Cards Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 group"
            >
              {/* Image & Badges */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tour.heroImage}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/40" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                    {tour.badge || '15 Strangers'}
                  </span>
                  <span className="bg-slate-950/80 backdrop-blur-md border border-slate-700 text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    {tour.duration}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-slate-200 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ex-{tour.departureCity}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-amber-400 mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{tour.departureSchedule.split('(')[0]}</span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                    {tour.title}
                  </h3>

                  <p className="text-xs text-slate-400 italic mt-1 mb-4">
                    "{tour.tagline}"
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-1.5 border-t border-slate-800 pt-4 mb-4">
                    {tour.inclusions.slice(0, 3).map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="border-t border-slate-800 pt-4 mt-2">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                        Triple Sharing Starting At
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black font-heading text-amber-400">
                          ₹{tour.startingPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-slate-400">/person</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                        Double Sharing
                      </span>
                      <span className="text-sm font-bold text-slate-200">
                        ₹{tour.doubleSharingPrice.toLocaleString('en-IN')}/-
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectTour(tour)}
                      className="py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors text-center"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => onOpenInquiry({ tourTitle: tour.title })}
                      className="py-2.5 px-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 active:scale-95 transition-all text-center flex items-center justify-center gap-1.5"
                    >
                      <span>Book Seat</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                      <ShieldCheck className="w-3 h-3" />
                      Advance Deposit: ₹{tour.registrationAmount.toLocaleString('en-IN')} only
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
