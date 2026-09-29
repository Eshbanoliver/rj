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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            const stepNum = String(index + 1).padStart(2, '0');
            return (
              <div
                key={index}
                className="relative bg-white border border-slate-200/90 hover:border-amber-400 rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_-15px_rgba(245,158,11,0.22)] group flex flex-col justify-between h-full overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-amber-400 before:via-orange-500 before:to-amber-500 before:scale-x-0 group-hover:before:scale-x-100 before:transition-transform before:duration-500 before:origin-left"
              >
                {/* Subtle ambient background glow on hover */}
                <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-amber-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top Row: Icon + Watermark Number */}
                <div className="flex items-center justify-between mb-5 sm:mb-6 relative z-10">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/80 flex items-center justify-center text-amber-600 group-hover:scale-110 group-hover:rotate-6 group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-black font-heading text-slate-200/80 group-hover:text-amber-500/20 group-hover:scale-110 transition-all duration-300 select-none">
                    {stepNum}
                  </span>
                </div>

                {/* Card Content */}
                <div className="relative z-10 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 group-hover:text-amber-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 sm:mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Interactive Line */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-amber-600 transition-colors duration-300 relative z-10">
                  <span className="tracking-wide uppercase text-[10px]">R Journey Standard</span>
                  <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-amber-500 group-hover:scale-125 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
