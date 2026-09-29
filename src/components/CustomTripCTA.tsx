import React from 'react';
import { companyData } from '../data/company';
import { MessageSquare, Phone, Sparkles, ArrowRight } from 'lucide-react';

interface CustomTripCTAProps {
  onOpenInquiry: (initialData?: { tourTitle?: string; message?: string }) => void;
}

export const CustomTripCTA: React.FC<CustomTripCTAProps> = ({ onOpenInquiry }) => {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-[#113d48] text-white">
      {/* Background Image with Dark Contrast Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/palm-valley-dinner.jpg"
          alt="Rajasthan travel ambiance - R Journey"
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#113d48]/95 via-[#113d48]/85 to-[#0a272e]/95" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-widest text-[#1ca8cb] uppercase mb-3 sm:mb-4 px-3.5 py-1.5 rounded-full bg-[#113d48]/80 border border-[#1ca8cb]/30 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Tailored Rajasthan Itineraries</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight leading-tight">
          Can't Find Your <span className="text-[#1ca8cb]">Perfect Trip?</span>
        </h2>

        {/* Description */}
        <p className="mt-3 sm:mt-4 text-xs sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Tell us where you want to go and we'll help create your journey. Custom group sizes, private college reunions, corporate getaways, or bespoke dates.
        </p>

        {/* CTAs */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none">
          <button
            onClick={() =>
              onOpenInquiry({
                tourTitle: 'Custom Travel Itinerary',
                message: 'Hello R Journey, I would like to customize a private trip.',
              })
            }
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-black text-xs sm:text-sm text-[#113d48] bg-[#1ca8cb] hover:bg-[#34bada] shadow-xl shadow-[#1ca8cb]/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 min-h-[44px] cursor-pointer"
          >
            <span>Plan My Trip</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(
              'Hello R Journey! I want to discuss a customized travel plan for Rajasthan.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 min-h-[44px]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Direct Phone Support */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300">
          <Phone className="w-4 h-4 text-[#1ca8cb] shrink-0" />
          <span>Prefer speaking directly? Call our travel desk: </span>
          <a
            href={`tel:${companyData.phones[0]}`}
            className="text-[#1ca8cb] font-bold hover:underline"
          >
            {companyData.displayPhone}
          </a>
        </div>
      </div>
    </section>
  );
};
