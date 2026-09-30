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

  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8 sm:gap-6 opacity-70 hover:opacity-100 transition-opacity">
          {partners.map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-slate-500 hover:text-[#1ca8cb] transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full border border-slate-300 hover:border-[#1ca8cb] flex items-center justify-center transition-colors">
                  <Icon className="w-5 h-5 text-[#1ca8cb]" />
                </div>
                <span className="font-extrabold text-xs tracking-wider text-slate-700 hover:text-[#1ca8cb] transition-colors uppercase font-heading">
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
