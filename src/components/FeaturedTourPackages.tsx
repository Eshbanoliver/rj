import React, { useState } from 'react';
import { PageType } from '../types';
import { tourPackages, TourPackage } from '../data/tours';
import { Clock, MapPin, Star, ArrowRight, Sparkles, CheckCircle2, FileDown } from 'lucide-react';

interface FeaturedTourPackagesProps {
  onNavigate: (page: PageType) => void;
  onSelectTour: (tour: TourPackage) => void;
  onOpenInquiry: (initialData?: { tourTitle?: string }) => void;
}

export const FeaturedTourPackages: React.FC<FeaturedTourPackagesProps> = ({
  onNavigate: _onNavigate,
  onSelectTour,
  onOpenInquiry: _onOpenInquiry,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ex-ahm' | 'ex-delhi' | 'udaipur' | 'jawai' | 'jaisalmer'>('all');
  const [activeDot, setActiveDot] = useState(0);

  const filteredPackages = tourPackages
    .filter((p) => {
      if (activeFilter === 'all') return true;
      if (activeFilter === 'ex-ahm') return p.departureCity.toLowerCase().includes('ahmedabad');
      if (activeFilter === 'ex-delhi') return p.departureCity.toLowerCase().includes('delhi');
      if (activeFilter === 'udaipur') return p.destinations.includes('Udaipur');
      if (activeFilter === 'jawai') return p.destinations.includes('Jawai');
      if (activeFilter === 'jaisalmer') return p.destinations.includes('Jaisalmer');
      return true;
    })
    .sort((a, b) => a.startingPrice - b.startingPrice);

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-travel-doodles relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="font-script text-[#1ca8cb] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide inline-block transform -rotate-1">
            Get Special Offer
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#113d48] font-heading mt-1 tracking-tight">
            Popular Destination we offer for all
          </h2>
          <p className="mt-2.5 sm:mt-3 text-slate-600 text-xs sm:text-base leading-relaxed">
            Curated group tours & weekend getaways. All packages are Ex-Ahmedabad (with direct Ex-Delhi departures available).
          </p>
        </div>

        {/* Filter Pills for quick mobile & desktop filtering */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-3 sm:pb-0 mb-8 sm:mb-12 -mx-4 px-4 sm:mx-0 sm:px-0">
          {[
            { id: 'all', label: 'All Packages (6)' },
            { id: 'ex-ahm', label: 'Ex-Ahmedabad' },
            { id: 'ex-delhi', label: 'Ex-Delhi Special' },
            { id: 'udaipur', label: 'Udaipur & Kumbhalgarh' },
            { id: 'jawai', label: 'Jawai Safari' },
            { id: 'jaisalmer', label: 'Jodhpur & Jaisalmer' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveFilter(tab.id as any);
                setActiveDot(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#113d48] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tour Cards Grid (6 packages displayed cleanly in 3 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredPackages.map((tour, idx) => (
            <div
              key={tour.id}
              id={`tour-card-${idx}`}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-slate-100 card-interactive card-shimmer group transform hover:-translate-y-2"
            >
              {/* Image with badges */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={tour.heroImage}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Duration Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-[#113d48] shadow-md flex items-center gap-1 group-hover:scale-105 transition-transform duration-300">
                  <Clock className="w-3 h-3 text-[#1ca8cb]" />
                  <span>{tour.duration}</span>
                </div>

                {/* Badge Tag (e.g. Bestseller / Ex-Delhi / Weekend Special) */}
                {tour.badge && (
                  <div className="absolute top-3 right-3 bg-[#113d48]/90 text-white backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold shadow-md flex items-center gap-1 border border-white/20">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>{tour.badge}</span>
                  </div>
                )}

                {/* Rating Badge Bottom Left */}
                <div className="absolute bottom-3 left-3 bg-black/55 backdrop-blur-md px-2 py-0.5 rounded-full text-[11px] font-bold text-white shadow-md flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span>5.0</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Location & Departure Badge */}
                  <div className="flex items-center justify-between gap-2 text-xs mb-2">
                    <div className="flex items-center gap-1.5 text-slate-600 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-[#1ca8cb] shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="bg-[#1ca8cb]/10 text-[#113d48] px-2 py-0.5 rounded-md font-bold text-[11px]">
                        Ex-{tour.departureCity}
                      </span>
                    </div>

                    <span className="text-[11px] text-slate-500 font-medium">
                      {tour.days}D / {tour.nights}N
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => onSelectTour(tour)}
                    className="font-bold text-base sm:text-lg text-[#113d48] group-hover:text-[#1ca8cb] transition-colors line-clamp-2 leading-snug cursor-pointer font-heading"
                  >
                    {tour.title}
                  </h3>

                  {/* Tagline / Highlights */}
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">
                    {tour.tagline}
                  </p>

                  {/* Quick Feature Pill */}
                  <div className="mt-3 flex items-center gap-1 text-[11px] text-slate-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1ca8cb] shrink-0" />
                    <span className="truncate">{tour.departureSchedule}</span>
                  </div>
                </div>

                {/* Card Footer: Price with Asterisk & CTA */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-slate-400 font-medium block">Starting from</span>
                    <span className="text-lg sm:text-xl font-black text-[#1ca8cb]">
                      ₹{tour.startingPrice.toLocaleString('en-IN')}*
                    </span>
                    <span className="text-[9px] text-slate-400 block font-normal -mt-0.5">/ person</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {tour.brochureUrl && (
                      <a
                        href={tour.brochureUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Download Official PDF Brochure"
                        className="p-2 rounded-full border border-slate-200 hover:border-[#1ca8cb] text-slate-500 hover:text-[#113d48] bg-slate-50 hover:bg-white transition-all cursor-pointer shadow-2xs hover:scale-105"
                      >
                        <FileDown className="w-4 h-4 text-[#1ca8cb]" />
                      </a>
                    )}
                    <button
                      onClick={() => onSelectTour(tour)}
                      className="btn-shimmer min-h-[42px] px-4 py-2 rounded-full bg-[#113d48] group-hover:bg-[#1ca8cb] text-white text-xs font-bold transition-all duration-300 flex items-center gap-1 shadow-md cursor-pointer shrink-0 active:scale-95"
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Asterisk Pricing Disclaimer Banner */}
        <div className="mt-10 sm:mt-14 max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-sm text-center">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            <span className="font-extrabold text-[#113d48]">* Note on Pricing:</span> All packages are{' '}
            <strong className="text-[#1ca8cb] font-bold">Ex-Ahmedabad</strong> (except specified{' '}
            <strong className="text-[#1ca8cb] font-bold">Ex-Delhi</strong> packages). Prices mentioned are per person on triple-sharing basis. Double-sharing room upgrades available upon request. 5% GST, monument entrance tickets, and personal expenses are additional.
          </p>
        </div>

        {/* Mobile-only Navigator Dots that smooth-scroll to card */}
        <div className="flex sm:hidden items-center justify-center gap-2 mt-6">
          {filteredPackages.map((_, dot) => (
            <button
              key={dot}
              onClick={() => {
                setActiveDot(dot);
                const el = document.getElementById(`tour-card-${dot}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              }}
              aria-label={`Go to tour package ${dot + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeDot === dot
                  ? 'w-7 h-2.5 bg-[#1ca8cb]'
                  : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
