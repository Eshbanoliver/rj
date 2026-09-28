import React, { useState } from 'react';
import { PageType, SearchQuery } from '../types';
import { destinationsData, Destination } from '../data/destinations';
import { MapPin, Calendar, Compass, ArrowRight, Sparkles, Check } from 'lucide-react';

interface DestinationsPageProps {
  onNavigate: (page: PageType) => void;
  onSearch: (query: SearchQuery) => void;
  selectedDestinationInitial?: Destination | null;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({
  onNavigate,
  onSearch,
  selectedDestinationInitial,
}) => {
  const [activeModalDest, setActiveModalDest] = useState<Destination | null>(
    selectedDestinationInitial || null
  );

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
    <div className="pt-24 pb-20 bg-slate-950 text-white min-h-screen">
      {/* Page Header */}
      <div className="relative py-20 bg-slate-900 border-b border-slate-800 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/jodhpur-mehrangarh-sunset.jpg"
            alt="Rajasthan Destinations"
            className="w-full h-full object-cover filter brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-amber-400 uppercase mb-3 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Rajasthan Circuits</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight">
            Explore <span className="text-amber-400">Destinations</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Discover the iconic royal cities and mountain valleys covered in our handcrafted itineraries.
          </p>
        </div>
      </div>

      {/* Destinations List Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {destinationsData.map((dest, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={dest.id}
                className="bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8">
                  {/* Image Column (5 cols) */}
                  <div
                    className={`lg:col-span-5 relative h-72 sm:h-80 rounded-2xl overflow-hidden ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-amber-400 border border-slate-700 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{dest.state}, India</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800">
                      <span className="flex items-center gap-1 text-slate-300">
                        <Calendar className="w-3 h-3 text-amber-400" />
                        Best: {dest.bestTimeToVisit}
                      </span>
                      <span className="font-bold text-amber-400">
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
                      <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
                        {dest.tagline}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black font-heading text-white mt-1 group-hover:text-amber-400 transition-colors">
                        {dest.name}
                      </h2>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {dest.longDescription}
                    </p>

                    {/* Highlights */}
                    <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Included In Our Tour Highlights:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {dest.highlights.map((h, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs text-slate-300"
                          >
                            <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => handleExploreTours(dest.name)}
                        className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 transition-all flex items-center gap-2"
                      >
                        <span>View {dest.name} Packages</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <span className="text-xs text-slate-400">
                        Departure from Ahmedabad & Udaipur
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
