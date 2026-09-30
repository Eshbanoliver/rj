import React from 'react';
import { Compass, Mountain, Palmtree, Tent, Shield, Sparkles, Navigation } from 'lucide-react';

export const PartnerLogos: React.FC = () => {
  const partners = [
    { name: 'ADVENTURE CO.', icon: Mountain },
    { name: 'THAR SAFARI', icon: Tent },
    { name: 'PALM VALLEY', icon: Palmtree },
    { name: 'ROYAL RAJASTHAN', icon: Sparkles },
    { name: 'EXPEDITION HUB', icon: Compass },
    { name: 'SAFE TRAVELS', icon: Shield },
    { name: 'NOMAD TRAILS', icon: Navigation },
  ];

  // Double array for continuous seamless marquee loop
  const marqueeList = [...partners, ...partners];

  return (
    <section className="py-8 sm:py-10 bg-white border-y border-slate-100 overflow-hidden relative">
      {/* Left and right fade gradient mask */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden">
        <div className="animate-marquee gap-8 sm:gap-12 py-1 items-center">
          {marqueeList.map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-slate-500 hover:text-[#1ca8cb] transition-colors cursor-pointer shrink-0 group px-2"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 group-hover:border-[#1ca8cb] group-hover:bg-[#f0f9fb] group-hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-xs">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#1ca8cb] group-hover:rotate-6 transition-transform" />
                </div>
                <span className="font-extrabold text-[11px] sm:text-xs tracking-wider text-slate-600 group-hover:text-[#113d48] transition-colors uppercase font-heading whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
