import React from 'react';
import { PageType } from '../types';
import { destinationsData, Destination } from '../data/destinations';
import { MapPin, ArrowUpRight, Sparkles } from 'lucide-react';

interface PopularDestinationsProps {
  onNavigate: (page: PageType) => void;
  onSelectDestination?: (dest: Destination) => void;
}

export const PopularDestinations: React.FC<PopularDestinationsProps> = ({
  onNavigate,
  onSelectDestination,
}) => {
  return (
    <section className="py-20 bg-[#f8fafc] text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      {/* Decorative ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-amber-600 uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Rajasthan Circuit</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight">
              Explore Popular <span className="text-amber-500">Destinations</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              From the azure alleys of the Blue City to golden rolling dunes of Jaisalmer and the romantic hillscapes of Udaipur. Handcrafted circuits straight from our signature brochures.
            </p>
          </div>

          <button
            onClick={() => onNavigate('destinations')}
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-700 group"
          >
            <span>View All Destinations</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Featured Destination Cards Grid (Asymmetric Editorial Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Udaipur (Large Hero Card, span 7) */}
          {destinationsData[0] && (
            <div
              onClick={() => {
                if (onSelectDestination) onSelectDestination(destinationsData[0]);
                onNavigate('destinations');
              }}
              className="md:col-span-7 group relative h-[380px] sm:h-[440px] rounded-3xl overflow-hidden cursor-pointer shadow-xl border border-slate-800"
            >
              <img
                src={destinationsData[0].image}
                alt={destinationsData[0].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              {/* Badge */}
              <div className="absolute top-5 left-5 bg-slate-900/80 backdrop-blur-md border border-amber-500/30 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>City of Lakes & Hills</span>
              </div>

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-1">
                  {destinationsData[0].associatedToursCount} Active Tour Circuits
                </p>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                  {destinationsData[0].name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-2 max-w-lg">
                  {destinationsData[0].shortDescription}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-amber-400 group-hover:text-amber-300">
                  <span>Explore Udaipur Trips</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          )}

          {/* Card 2: Jaisalmer (Large Hero Card, span 5) */}
          {destinationsData[1] && (
            <div
              onClick={() => {
                if (onSelectDestination) onSelectDestination(destinationsData[1]);
                onNavigate('destinations');
              }}
              className="md:col-span-5 group relative h-[380px] sm:h-[440px] rounded-3xl overflow-hidden cursor-pointer shadow-xl border border-slate-800"
            >
              <img
                src={destinationsData[1].image}
                alt={destinationsData[1].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute top-5 left-5 bg-slate-900/80 backdrop-blur-md border border-amber-500/30 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Golden Dunes & Fort</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-1">
                  Sam Sand Dunes Glamping
                </p>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                  {destinationsData[1].name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-2">
                  {destinationsData[1].shortDescription}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-amber-400 group-hover:text-amber-300">
                  <span>Explore Desert Safaris</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          )}

          {/* Card 3: Jodhpur (span 4) */}
          {destinationsData[2] && (
            <div
              onClick={() => {
                if (onSelectDestination) onSelectDestination(destinationsData[2]);
                onNavigate('destinations');
              }}
              className="md:col-span-4 group relative h-[300px] sm:h-[340px] rounded-3xl overflow-hidden cursor-pointer shadow-xl border border-slate-800"
            >
              <img
                src={destinationsData[2].image}
                alt={destinationsData[2].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  The Blue City
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-0.5">
                  {destinationsData[2].name}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {destinationsData[2].shortDescription}
                </p>
              </div>
            </div>
          )}

          {/* Card 4: Kumbhalgarh (span 4) */}
          {destinationsData[3] && (
            <div
              onClick={() => {
                if (onSelectDestination) onSelectDestination(destinationsData[3]);
                onNavigate('destinations');
              }}
              className="md:col-span-4 group relative h-[300px] sm:h-[340px] rounded-3xl overflow-hidden cursor-pointer shadow-xl border border-slate-800"
            >
              <img
                src={destinationsData[3].image}
                alt={destinationsData[3].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  Great Wall of India
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-0.5">
                  {destinationsData[3].name}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {destinationsData[3].shortDescription}
                </p>
              </div>
            </div>
          )}

          {/* Card 5: Haldighati (span 4) */}
          {destinationsData[4] && (
            <div
              onClick={() => {
                if (onSelectDestination) onSelectDestination(destinationsData[4]);
                onNavigate('destinations');
              }}
              className="md:col-span-4 group relative h-[300px] sm:h-[340px] rounded-3xl overflow-hidden cursor-pointer shadow-xl border border-slate-800"
            >
              <img
                src={destinationsData[4].image}
                alt={destinationsData[4].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  Historic Aravali Pass
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-0.5">
                  {destinationsData[4].name}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {destinationsData[4].shortDescription}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
