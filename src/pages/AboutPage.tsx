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
      <div className="relative py-20 bg-slate-900 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/strangers-sunset-community.jpg"
            alt="R Journey Community"
            className="w-full h-full object-cover filter brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-amber-400 uppercase mb-3 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Origin & Purpose</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight">
            About <span className="text-amber-400">R Journey</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            "Where Strangers Meet, Stories Begin & Memories Last Forever."
          </p>
        </div>
      </div>

      {/* Main Story & Philosophy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-amber-600 uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>Rajasthan's Premier Social Travel Agency</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
              Crafting Journeys That Transform Travelers
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Based in the City of Lakes, <strong>R Journey Tour & Travel</strong> was established with a singular mission: to strip away the isolation of conventional travel and replace it with genuine community.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Our flagship format, <strong>"A Trip with 15 Strangers"</strong>, brings together 15 adventurous solo travelers, college peers, and dreamers. Together, we traverse Rajasthan's golden deserts, majestic forts, and serene lakes. Through curated ice-breaker activities, lively pool parties, and campfire sessions under starry desert skies, what starts as a bus ride of strangers ends as a circle of friends for life.
            </p>

            {/* Core commitments */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Strict Group Limit:</strong> Exactly 15 strangers per batch to ensure deep, intimate camaraderie.
                </span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Handpicked Accommodations:</strong> Palm Valley Resort with dual swimming pools and luxury Swiss desert camps.
                </span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Transparent Fixed Costs:</strong> Starting at ₹6,999/- with advance registration of ₹3,500.
                </span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onNavigate('trips')}
                className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-md shadow-amber-500/20 transition-all flex items-center gap-2"
              >
                <span>View Upcoming Trips & Batches</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="/images/udaipur-group-strangers.jpg"
                alt="Community Group"
                className="rounded-3xl object-cover h-64 w-full border border-slate-200 shadow-md"
              />
              <img
                src="/images/palm-valley-pool.jpg"
                alt="Pool Day"
                className="rounded-3xl object-cover h-48 w-full border border-slate-200 shadow-md"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="/images/jodhpur-mehrangarh-sunset.jpg"
                alt="Mehrangarh Fort"
                className="rounded-3xl object-cover h-48 w-full border border-slate-200 shadow-md"
              />
              <img
                src="/images/palm-valley-night-pool.jpg"
                alt="Resort at night"
                className="rounded-3xl object-cover h-64 w-full border border-slate-200 shadow-md"
              />
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-amber-600 font-bold">
              Our Core Pillars
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mt-2">
              Built on Trust, Adventure & Community
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.pillars.map((pillar, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-amber-400/60 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold font-heading text-slate-900 group-hover:text-amber-600 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Headquarter & Contact Strip */}
        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-amber-50 via-white to-orange-50 border border-amber-200/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-500/20">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-amber-700 font-bold uppercase tracking-wider block">
                Official Head Office
              </span>
              <h4 className="text-base font-bold text-slate-900 font-heading">
                {companyData.address.full}
              </h4>
              <p className="text-xs text-slate-600">
                Operating hubs with weekly departures across Ahmedabad & Udaipur
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenInquiry()}
            className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-amber-500 hover:bg-amber-600 shadow-md shadow-amber-500/20 transition-colors shrink-0"
          >
            Connect With Our Team
          </button>
        </div>
      </div>
    </div>
  );
};
