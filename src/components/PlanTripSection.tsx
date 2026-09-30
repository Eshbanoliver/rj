import React from 'react';
import { PageType } from '../types';
import { Users, Hotel, ArrowRight } from 'lucide-react';

interface PlanTripSectionProps {
  onNavigate: (page: PageType) => void;
  onOpenInquiry: (initialData?: { tourTitle?: string; message?: string }) => void;
}

export const PlanTripSection: React.FC<PlanTripSectionProps> = ({
  onNavigate,
  onOpenInquiry,
}) => {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: 3 Capsule / Arch Photo Collage matching reference */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Left Tall Arched Capsule Photo */}
              <div className="relative">
                <div className="w-36 sm:w-52 h-[340px] sm:h-[440px] rounded-t-[70px] sm:rounded-t-[100px] rounded-b-[70px] sm:rounded-b-[100px] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200 group">
                  <img
                    src="/images/hero-udaipur.jpg"
                    alt="Traveler overlooking scenic Bahubali Hills Udaipur"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Right Stacked 2 Capsule Photos */}
              <div className="flex flex-col gap-4 sm:gap-6">
                {/* Top Circular / Arched Photo */}
                <div className="w-32 sm:w-44 h-32 sm:h-44 rounded-full overflow-hidden shadow-xl border-4 border-white ring-1 ring-slate-200 group">
                  <img
                    src="/images/hero-jaisalmer.jpg"
                    alt="Desert Camel Safari in Sam Sand Dunes"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Bottom Capsule Photo (Smiling Group) */}
                <div className="w-32 sm:w-44 h-40 sm:h-56 rounded-t-3xl rounded-b-[60px] sm:rounded-b-[80px] overflow-hidden shadow-xl border-4 border-white ring-1 ring-slate-200 group">
                  <img
                    src="/images/udaipur-group-strangers.jpg"
                    alt="Group of 15 strangers smiling together in Udaipur"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content matching reference */}
          <div className="lg:col-span-6">
            <span className="font-script text-[#1ca8cb] text-3xl sm:text-4xl font-bold tracking-wide inline-block transform -rotate-1 mb-1">
              Travel With Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#113d48] font-heading leading-tight tracking-tight">
              Plan Your Trip <br /> With Us
            </h2>
            <p className="mt-4 sm:mt-5 text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
              We believe that travel is not just about visiting places — it's about the people you meet along the way. Our handcrafted social group journeys bring together 15 adventurous strangers to explore majestic Rajasthan, turning shared moments into lifelong friendships.
            </p>

            {/* Feature 1 with Circular Cyan Icon */}
            <div className="mt-8 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1ca8cb] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#1ca8cb]/30 mt-0.5">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#113d48] font-heading">
                  Exclusive 15 Strangers Concept
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed max-w-lg">
                  Curated intimate group batches designed for solo travelers to connect, break the ice, and share adventure with no awkwardness.
                </p>
              </div>
            </div>

            {/* Feature 2 with Circular Cyan Icon */}
            <div className="mt-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1ca8cb] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#1ca8cb]/30 mt-0.5">
                <Hotel className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#113d48] font-heading">
                  Budget Friendly & Premium Stays
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed max-w-lg">
                  From luxury 3-star Palm Valley Resort in Udaipur with DJ pool parties to royal Swiss desert glamping in Sam Sand Dunes — all at transparent, all-inclusive pricing.
                </p>
              </div>
            </div>

            {/* CTA Button matching reference */}
            <div className="mt-9 flex items-center gap-4">
              <button
                onClick={() => onOpenInquiry({ tourTitle: 'Custom Rajasthan Group Trip' })}
                className="px-8 py-3.5 rounded-full bg-[#113d48] hover:bg-[#1ca8cb] text-white font-bold text-sm sm:text-base shadow-xl transition-all duration-300 flex items-center gap-2 cursor-pointer group active:scale-95"
              >
                <span>Book A Tour</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('trips')}
                className="px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#113d48] font-bold text-sm sm:text-base transition-colors cursor-pointer"
              >
                <span>Explore Packages</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
