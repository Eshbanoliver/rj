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
                className="bg-slate-50 border border-slate-200/80 hover:border-amber-400 hover:bg-white rounded-2xl p-3.5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/5 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 mb-3 sm:mb-4 group-hover:scale-105 group-hover:bg-amber-500 group-hover:text-white transition-all">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-lg sm:text-2xl lg:text-3xl font-black font-heading text-slate-900 tracking-tight">
                    {item.value}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-amber-600 mt-1">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-2 leading-relaxed">
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
