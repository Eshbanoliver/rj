import React from 'react';
import { companyData } from '../data/company';
import { MessageSquare, Phone, Sparkles, ArrowRight } from 'lucide-react';

interface CustomTripCTAProps {
  onOpenInquiry: (initialData?: { tourTitle?: string; message?: string }) => void;
}

export const CustomTripCTA: React.FC<CustomTripCTAProps> = ({ onOpenInquiry }) => {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-950 text-white">
      {/* Background Image with Dark Contrast Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/palm-valley-dinner.jpg"
          alt="Rajasthan travel ambiance - R Journey"
          className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-amber-400 uppercase mb-4 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Tailored Rajasthan Itineraries</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight leading-tight">
          Can't Find Your <span className="text-amber-400">Perfect Trip?</span>
        </h2>

        {/* Description */}
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Tell us where you want to go and we'll help create your journey. Custom group sizes, private college reunions, corporate getaways, or bespoke dates.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() =>
              onOpenInquiry({
                tourTitle: 'Custom Travel Itinerary',
                message: 'Hello R Journey, I would like to customize a private trip.',
              })
            }
            className="px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
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
            className="px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Direct Phone Support */}
        <div className="mt-8 flex items-center justify-center gap-3 text-xs sm:text-sm text-slate-400">
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Prefer speaking directly? Call our travel desk: </span>
          <a
            href={`tel:${companyData.phones[0]}`}
            className="text-amber-400 font-bold hover:underline"
          >
            {companyData.displayPhone}
          </a>
        </div>
      </div>
    </section>
  );
};
