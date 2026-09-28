import React from 'react';
import { PageType } from '../types';
import { servicesData, ServiceItem } from '../data/services';
import {
  Users,
  GraduationCap,
  PartyPopper,
  Briefcase,
  Palmtree,
  Sparkles,
  ArrowRight,
  Check
} from 'lucide-react';

interface ServicesSectionProps {
  onNavigate: (page: PageType) => void;
  onOpenInquiry: (initialData?: { tourTitle?: string; message?: string }) => void;
  isStandalonePage?: boolean;
}

const iconMap: Record<string, React.ElementType> = {
  Users,
  GraduationCap,
  PartyPopper,
  Briefcase,
  Palmtree,
  Sparkles,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onNavigate,
  onOpenInquiry,
  isStandalonePage = false,
}) => {
  return (
    <section
      className={`py-20 bg-slate-950 text-white relative ${
        isStandalonePage ? 'pt-28' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            Tailored For Every Traveler
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight mt-2">
            We're Specialized In
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            From our signature 15 Strangers community batches to tailored student group getaways and corporate retreats, explore our verified travel specializations.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service: ServiceItem) => {
            const Icon = iconMap[service.iconName] || Users;
            return (
              <div
                key={service.id}
                className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/5 group"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Feature checklist */}
                  <div className="mt-5 space-y-2 border-t border-slate-800/80 pt-4">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 italic line-clamp-1 max-w-[65%]">
                    {service.idealFor}
                  </span>
                  <button
                    onClick={() =>
                      onOpenInquiry({
                        tourTitle: service.title,
                        message: `Hi, I am interested in inquiring about ${service.title}.`,
                      })
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
