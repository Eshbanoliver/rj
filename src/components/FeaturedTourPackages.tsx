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
    <section className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-amber-400 uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Brochure Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight">
            Featured <span className="text-amber-400">Journeys</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            All packages feature fixed transparent pricing, verified luxury accommodations, curated community activities, and comfortable AC coach travel.
          </p>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tourPackages.map((tour) => {
            return (
              <div
                key={tour.id}
                className="bg-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 group"
              >
                {/* Image & Badges */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tour.heroImage}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                      {tour.badge || '15 Strangers'}
                    </span>
                    <span className="bg-slate-950/80 backdrop-blur-md border border-slate-700 text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      {tour.duration}
                    </span>
                  </div>

                  {/* Departure Tag */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-slate-200 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>Ex-{tour.departureCity}</span>
                  </div>
                </div>

                {/* Tour Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Schedule */}
                    <div className="flex items-center gap-2 text-xs font-medium text-amber-400 mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{tour.departureSchedule.split('(')[0]}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                      {tour.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs text-slate-400 italic mt-1 mb-4">
                      "{tour.tagline}"
                    </p>

                    {/* Key Inclusions preview */}
                    <div className="space-y-1.5 border-t border-slate-800/80 pt-4 mb-4">
                      {tour.inclusions.slice(0, 3).map((inc, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action */}
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all hover:scale-105"
          >
            <span>View All Upcoming Trips & Batches</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
