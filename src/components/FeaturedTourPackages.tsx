import React from 'react';
import { PageType } from '../types';
import { tourPackages, TourPackage } from '../data/tours';
import { Clock, MapPin, Calendar, Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface FeaturedTourPackagesProps {
  onNavigate: (page: PageType) => void;
  onSelectTour: (tour: TourPackage) => void;
  onOpenInquiry: (initialData?: { tourTitle?: string }) => void;
}

export const FeaturedTourPackages: React.FC<FeaturedTourPackagesProps> = ({
  onNavigate,
  onSelectTour,
  onOpenInquiry,
}) => {
  return (
    <section className="py-20 bg-white text-slate-900 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#1ca8cb] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Brochure Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight">
            Featured <span className="text-[#1ca8cb]">Journeys</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            All packages feature fixed transparent pricing, verified luxury accommodations, curated community activities, and comfortable AC coach travel.
          </p>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tourPackages.map((tour) => {
            return (
              <div
                key={tour.id}
                className="relative overflow-hidden bg-white border border-slate-200/90 hover:border-[#1ca8cb]/90 rounded-2xl sm:rounded-3xl flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_45px_-12px_rgba(28,168,203,0.25)] group h-full before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-[#1ca8cb] before:via-[#3eb8d4] before:to-[#113d48] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-10"
              >
                {/* Image & Badges */}
                <div className="relative h-56 sm:h-64 overflow-hidden shrink-0">
                  <img
                    src={tour.heroImage}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-black/30" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="bg-gradient-to-r from-[#1ca8cb] to-[#113d48] text-white text-[11px] sm:text-xs font-black px-3 py-1 rounded-full shadow-lg uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-white" />
                      <span>{tour.badge || '15 Strangers'}</span>
                    </span>
                    <span className="bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                      <Clock className="w-3 h-3 text-[#1ca8cb]" />
                      {tour.duration}
                    </span>
                  </div>

                  {/* Bottom Tags */}
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

                {/* Tour Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Schedule */}
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#113d48] bg-[#1ca8cb]/10 border border-[#1ca8cb]/25 px-2.5 py-0.5 rounded-md mb-2">
                      <Calendar className="w-3.5 h-3.5 text-[#1ca8cb]" />
                      <span>{tour.departureSchedule.split('(')[0]}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 group-hover:text-[#113d48] transition-colors line-clamp-2">
                      {tour.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs text-slate-500 italic mt-1 mb-4 line-clamp-1">
                      "{tour.tagline}"
                    </p>

                    {/* Key Inclusions as modern chips */}
                    <div className="space-y-1.5 border-t border-slate-100 pt-3.5 mb-4">
                      {tour.inclusions.slice(0, 3).map((inc, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50/80 group-hover:bg-[#1ca8cb]/5 px-2.5 py-1.5 rounded-lg border border-slate-100/90 group-hover:border-[#1ca8cb]/25 transition-colors"
                        >
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="line-clamp-1">{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action */}
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
                        className="py-2.5 px-3 min-h-[44px] rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 hover:text-slate-950 border border-slate-200/90 active:scale-98 transition-all text-center flex items-center justify-center cursor-pointer shadow-xs"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => onOpenInquiry({ tourTitle: tour.title })}
                        className="py-2.5 px-3 min-h-[44px] rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#1ca8cb] via-[#1691af] to-[#113d48] hover:from-[#35bad8] hover:to-[#0f343e] shadow-md shadow-[#1ca8cb]/25 active:scale-98 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer group/btn"
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
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('trips')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all hover:scale-105 cursor-pointer"
          >
            <span>View All Upcoming Trips & Batches</span>
            <ArrowRight className="w-4 h-4 text-[#1ca8cb]" />
          </button>
        </div>
      </div>
    </section>
  );
};
