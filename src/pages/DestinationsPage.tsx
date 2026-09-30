import React from 'react';
import { PageType, SearchQuery } from '../types';
import { destinationsData, Destination } from '../data/destinations';
import { MapPin, Calendar, ArrowRight, Sparkles, Check } from 'lucide-react';

interface DestinationsPageProps {
  onNavigate: (page: PageType) => void;
  onSearch: (query: SearchQuery) => void;
  selectedDestinationInitial?: Destination | null;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({
  onNavigate,
  onSearch,
}) => {

  const handleExploreTours = (destName: string) => {
    onSearch({
      destination: destName,
      departureCity: 'all',
      travelDate: '',
      travelers: 1,
      tourType: 'all',
    });
    onNavigate('trips');
  };

  return (
    <div className="pt-24 pb-20 bg-[#fafbfc] text-slate-900 min-h-screen">
      {/* Page Header */}
      <div className="relative py-12 sm:py-20 bg-[#113d48] border-b border-[#0e333d] text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/jodhpur-mehrangarh-sunset.jpg"
            alt="Rajasthan Destinations"
            className="w-full h-full object-cover filter brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#113d48] via-[#113d48]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold tracking-widest text-[#1ca8cb] uppercase mb-3 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/80 border border-[#1ca8cb]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Rajasthan Circuits</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight">
            Explore <span className="text-[#1ca8cb]">Destinations</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto px-2">
            Discover the iconic royal cities and mountain valleys covered in our handcrafted itineraries.
          </p>
        </div>
      </div>

      {/* Destinations List Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="space-y-8 sm:space-y-12">
          {destinationsData.map((dest, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={dest.id}
                className="relative bg-white border border-slate-200/90 hover:border-[#1ca8cb] rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_-15px_rgba(28,168,203,0.22)] group before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-[#1ca8cb] before:via-[#189bbd] before:to-[#113d48] before:scale-x-0 group-hover:before:scale-x-100 before:transition-transform before:duration-500 before:origin-left"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center p-5 sm:p-8">
                  {/* Image Column (5 cols) */}
                  <div
                    className={`lg:col-span-5 relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-md card-shimmer ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 bg-slate-950/75 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-[#1ca8cb] border border-slate-700/80 flex items-center gap-1.5 shadow-md group-hover:scale-105 transition-transform duration-300">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{dest.state}, India</span>
                    </div>

                    <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-xs text-white bg-slate-950/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-700/80 shadow-lg">
                      <span className="flex items-center gap-1.5 text-slate-300 text-[11px] sm:text-xs">
                        <Calendar className="w-3.5 h-3.5 text-[#1ca8cb]" />
                        Best: {dest.bestTimeToVisit}
                      </span>
                      <span className="font-bold text-[#1ca8cb] text-[11px] sm:text-xs bg-[#1ca8cb]/10 px-2.5 py-0.5 rounded-md border border-[#1ca8cb]/20">
                        {dest.associatedToursCount} Active Tours
                      </span>
                    </div>
                  </div>

                  {/* Content Column (7 cols) */}
                  <div
                    className={`lg:col-span-7 space-y-4 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs uppercase font-bold tracking-widest text-[#113d48] mb-1">
                        <Sparkles className="w-3.5 h-3.5 text-[#1ca8cb]" />
                        <span>{dest.tagline}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-slate-900 group-hover:text-[#113d48] transition-colors duration-300">
                        {dest.name}
                      </h2>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {dest.longDescription}
                    </p>

                    {/* Highlights */}
                    <div className="bg-[#1ca8cb]/5 rounded-2xl p-4 sm:p-5 border border-[#1ca8cb]/20 space-y-2.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                        Included In Our Tour Highlights:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {dest.highlights.map((h, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs text-slate-700 bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#1ca8cb]/20 shadow-2xs hover:border-[#1ca8cb] transition-colors"
                          >
                            <div className="w-4 h-4 rounded-full bg-[#1ca8cb]/15 text-[#113d48] flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 stroke-[2.5]" />
                            </div>
                            <span className="font-medium">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action */}
                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      <button
                        onClick={() => handleExploreTours(dest.name)}
                        className="btn-shimmer w-full sm:w-auto min-h-[44px] justify-center px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#1ca8cb] to-[#113d48] hover:opacity-95 shadow-md shadow-[#1ca8cb]/20 group/btn transition-all duration-300 flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
                      >
                        <span>View {dest.name} Packages</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      <span className="text-xs text-slate-500 text-center sm:text-left font-medium">
                        Departures from Ahmedabad & Udaipur
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
