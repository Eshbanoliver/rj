import React from 'react';
import { PageType } from '../types';
import { companyData } from '../data/company';
import { Users, Compass, ShieldCheck, Hotel, Sparkles, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onOpenInquiry: (initialData?: { tourTitle?: string }) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <div className="pt-24 pb-20 bg-[#fafbfc] text-slate-900 min-h-screen">
      {/* Hero Banner */}
      <div className="relative py-12 sm:py-20 bg-[#113d48] border-b border-[#0e333d] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/strangers-sunset-community.jpg"
            alt="R Journey Community"
            className="w-full h-full object-cover filter brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#113d48] via-[#113d48]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold tracking-widest text-[#1ca8cb] uppercase mb-3 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/80 border border-[#1ca8cb]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Origin & Purpose</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight">
            About <span className="text-[#1ca8cb]">R Journey</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto px-2">
            "Where Strangers Meet, Stories Begin & Memories Last Forever."
          </p>
        </div>
      </div>

      {/* Main Story & Philosophy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#113d48] uppercase">
              <Compass className="w-3.5 h-3.5 text-[#1ca8cb]" />
              <span>Rajasthan's Premier Social Travel Agency</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
              Crafting Journeys That Transform Travelers
            </h2>

            <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
              Based in the City of Lakes, <strong>R Journey Tour & Travel</strong> was established with a singular mission: to strip away the isolation of conventional travel and replace it with genuine community.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Our flagship format, <strong>"A Trip with 15 Strangers"</strong>, brings together 15 adventurous solo travelers, college peers, and dreamers. Together, we traverse Rajasthan's golden deserts, majestic forts, and serene lakes. Through curated ice-breaker activities, lively pool parties, and campfire sessions under starry desert skies, what starts as a bus ride of strangers ends as a circle of friends for life.
            </p>

            {/* Core commitments */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#1ca8cb] shrink-0 mt-0.5" />
                <span>
                  <strong>Strict Group Limit:</strong> Exactly 15 strangers per batch to ensure deep, intimate camaraderie.
                </span>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#1ca8cb] shrink-0 mt-0.5" />
                <span>
                  <strong>Handpicked Accommodations:</strong> Palm Valley Resort with dual swimming pools and luxury Swiss desert camps.
                </span>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#1ca8cb] shrink-0 mt-0.5" />
                <span>
                  <strong>Transparent Fixed Costs:</strong> Starting at ₹6,999/- with advance registration of ₹3,500.
                </span>
              </div>
            </div>

            <div className="pt-4 flex items-center">
              <button
                onClick={() => onNavigate('trips')}
                className="w-full sm:w-auto min-h-[44px] justify-center px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#1ca8cb] to-[#113d48] hover:opacity-95 shadow-md shadow-[#1ca8cb]/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>View Upcoming Trips & Batches</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden card-shimmer border border-slate-200 shadow-md">
                <img
                  src="/images/udaipur-group-strangers.jpg"
                  alt="Community Group"
                  className="object-cover h-44 sm:h-64 w-full hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden card-shimmer border border-slate-200 shadow-md">
                <img
                  src="/images/palm-valley-pool.jpg"
                  alt="Pool Day"
                  className="object-cover h-36 sm:h-48 w-full hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-8">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden card-shimmer border border-slate-200 shadow-md">
                <img
                  src="/images/jodhpur-mehrangarh-sunset.jpg"
                  alt="Mehrangarh Fort"
                  className="object-cover h-36 sm:h-48 w-full hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden card-shimmer border border-slate-200 shadow-md">
                <img
                  src="/images/dj-pool-party.jpg"
                  alt="Resort DJ pool party"
                  className="object-cover h-44 sm:h-64 w-full hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs uppercase tracking-widest text-[#113d48] font-bold">
              Our Core Pillars
            </span>
            <h3 className="text-xl sm:text-3xl font-bold font-heading text-slate-900 mt-2">
              Built on Trust, Adventure & Community
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {companyData.pillars.map((pillar, i) => {
              const num = String(i + 1).padStart(2, '0');
              return (
                <div
                  key={i}
                  className="relative p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#1ca8cb] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_-12px_rgba(28,168,203,0.22)] group flex flex-col justify-between h-full overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-[#1ca8cb] before:via-[#189bbd] before:to-[#113d48] before:scale-x-0 group-hover:before:scale-x-100 before:transition-transform before:duration-500 before:origin-left"
                >
                  {/* Subtle ambient glow */}
                  <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-[#1ca8cb]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#1ca8cb]/10 to-[#113d48]/10 border border-[#1ca8cb]/30 text-[#113d48] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 group-hover:from-[#1ca8cb] group-hover:to-[#113d48] group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <span className="text-3xl font-black font-heading text-slate-200/80 group-hover:text-[#1ca8cb]/20 group-hover:scale-110 transition-all duration-300 select-none">
                        {num}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold font-heading text-slate-900 group-hover:text-[#113d48] transition-colors duration-300">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 sm:mt-2.5 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom indicator */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-[#113d48] transition-colors duration-300 relative z-10">
                    <span className="text-[10px] uppercase tracking-wider">Core Value</span>
                    <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-[#1ca8cb] group-hover:scale-125 transition-all duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Headquarter & Contact Strip */}
        <div className="mt-14 sm:mt-20 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1ca8cb]/10 via-white to-[#113d48]/10 border border-[#1ca8cb]/25 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-6 text-center sm:text-left relative overflow-hidden group">
          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#1ca8cb] to-[#113d48] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#1ca8cb]/25 group-hover:scale-105 transition-transform duration-300">
              <MapPin className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs text-[#113d48] font-bold uppercase tracking-wider block">
                Official Head Office
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 font-heading mt-0.5">
                {companyData.address.full}
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Operating hubs with weekly departures across Ahmedabad & Udaipur
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenInquiry()}
            className="w-full sm:w-auto min-h-[44px] px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#1ca8cb] to-[#113d48] hover:opacity-95 shadow-md shadow-[#1ca8cb]/25 hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer relative z-10 flex items-center justify-center gap-2"
          >
            <span>Connect With Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
