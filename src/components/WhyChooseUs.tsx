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
    <section className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            The R Journey Distinction
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight mt-2">
            Why Travelers Choose <span className="text-amber-400">R Journey</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            We don't do typical crowded sightseeing tours. We create vibrant community experiences rooted in Rajasthani hospitality and lifelong camaraderie.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-500/5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-slate-950 transition-all shadow-md">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-heading text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
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
