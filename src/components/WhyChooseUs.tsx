import React from 'react';
import { Users, Hotel, Compass, ShieldCheck, Music, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Users,
      title: "15 Strangers Concept",
      description: "Our signature format limits each batch to 15 like-minded travelers. Ice-breakers, music, and shared meals ensure you start as strangers and leave as best friends.",
    },
    {
      icon: Hotel,
      title: "Handpicked Stays & Resorts",
      description: "No cramped lodges. Experience luxury hill resorts like Palm Valley Resort Udaipur with twin swimming pools and royal Swiss glamping tents in Sam Sand Dunes.",
    },
    {
      icon: Music,
      title: "Pool Parties & DJ Nights",
      description: "Unwind after sightseeing with exclusive poolside parties, DJ tracks, bonfire jamming, and traditional Rajasthani folk dance performances.",
    },
    {
      icon: Compass,
      title: "End-to-End AC Transport",
      description: "Convenient weekly departures from Ahmedabad and Udaipur in comfortable sanitized AC buses with all tolls, parking, and driver allowances included.",
    },
    {
      icon: ShieldCheck,
      title: "Safety & Dedicated Captains",
      description: "Experienced, friendly tour captains manage all schedules, safety protocols, and group games so you travel with complete peace of mind.",
    },
    {
      icon: Sparkles,
      title: "Transparent Fixed Pricing",
      description: "Starting at ₹6,999/- with clear double/triple sharing options and an easy ₹3,500 advance deposit adjusted directly in your final trip cost.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#f8fafc] text-slate-900 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-[11px] sm:text-xs uppercase tracking-widest text-amber-600 font-bold">
            The R Journey Distinction
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight mt-1.5 sm:mt-2">
            Why Travelers Choose <span className="text-amber-500">R Journey</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-base leading-relaxed">
            We don't do typical crowded sightseeing tours. We create vibrant community experiences rooted in Rajasthani hospitality and lifelong camaraderie.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200/90 hover:border-amber-400 rounded-3xl p-5 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 group flex flex-col justify-start h-full"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 mb-4 sm:mb-6 group-hover:scale-105 group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-white transition-all shadow-sm shrink-0">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 sm:mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
