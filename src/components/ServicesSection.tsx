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
      className={`py-14 sm:py-20 bg-[#f8fafc] text-slate-900 relative ${
        isStandalonePage ? 'pt-24 sm:pt-28' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#1ca8cb] font-bold">
            Tailored For Every Traveler
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight mt-1.5 sm:mt-2">
            We're Specialized In
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-base leading-relaxed">
            From our signature 15 Strangers community batches to tailored student group getaways and corporate retreats, explore our verified travel specializations.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {servicesData.map((service: ServiceItem) => {
            const Icon = iconMap[service.iconName] || Users;
            return (
              <div
                key={service.id}
                className="relative bg-white border border-slate-200/90 hover:border-[#1ca8cb] rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_-12px_rgba(28,168,203,0.25)] group h-full overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-[#1ca8cb] before:via-[#3eb8d4] before:to-[#113d48] before:scale-x-0 group-hover:before:scale-x-100 before:transition-transform before:duration-500 before:origin-left"
              >
                {/* Ambient glow */}
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#1ca8cb]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#1ca8cb]/10 to-[#113d48]/10 border border-[#1ca8cb]/30 text-[#1ca8cb] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 group-hover:from-[#1ca8cb] group-hover:to-[#113d48] group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#113d48] bg-[#1ca8cb]/15 border border-[#1ca8cb]/30 px-3 py-1 rounded-full shadow-xs group-hover:bg-[#1ca8cb]/25 transition-colors">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 group-hover:text-[#113d48] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 sm:mt-2.5 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Feature checklist */}
                  <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-slate-600 px-2 py-1 -mx-2 rounded-lg hover:bg-[#1ca8cb]/10 transition-colors"
                      >
                        <div className="w-4 h-4 rounded-full bg-[#1ca8cb]/15 text-[#113d48] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
                  <span className="text-[11px] text-slate-500 italic line-clamp-1 max-w-[62%]">
                    {service.idealFor}
                  </span>
                  <button
                    onClick={() =>
                      onOpenInquiry({
                        tourTitle: service.title,
                        message: `Hi, I am interested in inquiring about ${service.title}.`,
                      })
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#113d48] hover:text-white bg-[#1ca8cb]/10 hover:bg-[#1ca8cb] border border-[#1ca8cb]/30 px-3 py-1.5 rounded-xl group/btn transition-all duration-300 shadow-xs cursor-pointer"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
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
