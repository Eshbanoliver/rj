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
      className={`py-20 bg-[#f8fafc] text-slate-900 relative ${
        isStandalonePage ? 'pt-28' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-600 font-bold">
            Tailored For Every Traveler
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight mt-2">
            We're Specialized In
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
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
                className="bg-white border border-slate-200/90 hover:border-amber-400/60 rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10 group"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Feature checklist */}
                  <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 italic line-clamp-1 max-w-[65%]">
                    {service.idealFor}
                  </span>
                  <button
                    onClick={() =>
                      onOpenInquiry({
                        tourTitle: service.title,
                        message: `Hi, I am interested in inquiring about ${service.title}.`,
                      })
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 group-hover:translate-x-1 transition-transform"
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
