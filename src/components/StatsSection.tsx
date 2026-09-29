import React from 'react';
import { Users, Compass, ShieldCheck, HeartHandshake } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: "15 Strangers",
      title: "Signature Batch Size",
      description: "Intimate group travel designed so every solo traveler connects and makes lifelong friends.",
    },
    {
      icon: Compass,
      value: "Ahmedabad & Udaipur",
      title: "Weekly Departure Hubs",
      description: "Departures every Thursday (11 PM) & Friday (6 AM) in sanitized AC coaches.",
    },
    {
      icon: ShieldCheck,
      value: "₹3,500 / Person",
      title: "Advance Seat Reservation",
      description: "Secure your confirmed seat with clear upfront token, balance payable on Day 1 boarding.",
    },
    {
      icon: HeartHandshake,
      value: "100% Verified Stays",
      title: "Resorts & Desert Glamping",
      description: "Palm Valley Resort hill stay with twin swimming pools & royal Swiss desert tents in Sam.",
    },
  ];

  return (
    <section className="pt-10 sm:pt-14 pb-12 sm:pb-16 bg-white border-b border-slate-200/80 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle trust badge */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-[11px] sm:text-xs uppercase tracking-widest text-amber-600 font-bold">
            Loved by Travelers Across India
          </p>
          <h2 className="text-xl sm:text-3xl font-black font-heading mt-1 text-slate-900 tracking-tight">
            Travel With Confidence & Community
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative overflow-hidden bg-white border border-slate-200/90 hover:border-amber-400/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.2)] group flex flex-col justify-between h-full before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-amber-400 before:to-orange-500 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300"
              >
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-amber-500/30 transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black font-heading text-slate-900 group-hover:text-amber-600 transition-colors tracking-tight">
                    {item.value}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-amber-600 mt-1">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-2 sm:mt-3 leading-relaxed">
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
