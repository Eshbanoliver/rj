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
    <section className="py-16 sm:py-24 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: 3 Capsule / Arch Photo Collage matching reference */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            {/* Ambient decorative glowing blobs behind collage */}
            <div className="absolute -top-10 -left-10 w-56 h-56 bg-[#1ca8cb]/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
            <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-sky-200/25 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

            <div className="flex items-center gap-3 sm:gap-6 relative z-10">
              {/* Left Tall Arched Capsule Photo */}
              <div className="relative animate-float-slow">
                <div className="w-[135px] xs:w-[155px] sm:w-52 h-[300px] xs:h-[350px] sm:h-[440px] rounded-t-[70px] sm:rounded-t-[100px] rounded-b-[70px] sm:rounded-b-[100px] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200 group card-shimmer">
                  <img
                    src="/images/hero-udaipur.jpg"
                    alt="Traveler overlooking scenic Bahubali Hills Udaipur"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                </div>
              </div>

              {/* Right Stacked 2 Capsule Photos */}
              <div className="flex flex-col gap-3 sm:gap-6">
                {/* Top Circular / Arched Photo */}
                <div className="w-[115px] xs:w-[135px] sm:w-44 h-[115px] xs:h-[135px] sm:h-44 rounded-full overflow-hidden shadow-xl border-4 border-white ring-1 ring-slate-200 group animate-float card-shimmer">
                  <img
                    src="/images/hero-jaisalmer.jpg"
                    alt="Desert Camel Safari in Sam Sand Dunes"
                    className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Bottom Capsule Photo (Smiling Group) */}
                <div className="w-[115px] xs:w-[135px] sm:w-44 h-[145px] xs:h-[175px] sm:h-56 rounded-t-3xl rounded-b-[60px] sm:rounded-b-[80px] overflow-hidden shadow-xl border-4 border-white ring-1 ring-slate-200 group animate-float-reverse card-shimmer">
                  <img
                    src="/images/udaipur-group-strangers.jpg"
                    alt="Group of 15 strangers smiling together in Udaipur"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content matching reference */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <span className="font-script text-[#1ca8cb] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide inline-block transform -rotate-1 mb-1">
              Travel With Us
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#113d48] font-heading leading-tight tracking-tight">
              Plan Your Trip <br className="hidden sm:inline" /> With Us
            </h2>
            <p className="mt-3 sm:mt-5 text-slate-600 text-xs sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              We believe that travel is not just about visiting places — it's about the people you meet along the way. Our handcrafted social group journeys bring together 15 adventurous strangers to explore majestic Rajasthan, turning shared moments into lifelong friendships.
            </p>

            {/* Feature 1 with Circular Cyan Icon */}
            <div className="mt-6 sm:mt-8 flex items-start text-left gap-3.5 sm:gap-4 max-w-lg mx-auto lg:mx-0 group p-2.5 rounded-2xl transition-all duration-300 hover:bg-[#f0f9fb]/80">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1ca8cb] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#1ca8cb]/30 mt-0.5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-sm sm:text-lg font-bold text-[#113d48] font-heading group-hover:text-[#1ca8cb] transition-colors">
                  Exclusive 15 Strangers Concept
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5 sm:mt-1 leading-relaxed">
                  Curated intimate group batches designed for solo travelers to connect, break the ice, and share adventure with no awkwardness.
                </p>
              </div>
            </div>

            {/* Feature 2 with Circular Cyan Icon */}
            <div className="mt-4 sm:mt-6 flex items-start text-left gap-3.5 sm:gap-4 max-w-lg mx-auto lg:mx-0 group p-2.5 rounded-2xl transition-all duration-300 hover:bg-[#f0f9fb]/80">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1ca8cb] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#1ca8cb]/30 mt-0.5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Hotel className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-sm sm:text-lg font-bold text-[#113d48] font-heading group-hover:text-[#1ca8cb] transition-colors">
                  Budget Friendly & Premium Stays
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5 sm:mt-1 leading-relaxed">
                  From luxury 3-star Palm Valley Resort in Udaipur with DJ pool parties to royal Swiss desert glamping in Sam Sand Dunes — all at transparent, all-inclusive pricing.
                </p>
              </div>
            </div>

            {/* CTA Button matching reference */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={() => onOpenInquiry({ tourTitle: 'Custom Rajasthan Group Trip' })}
                className="btn-shimmer w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#113d48] hover:bg-[#1ca8cb] text-white font-bold text-xs sm:text-base shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group active:scale-95"
              >
                <span>Book A Tour</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('trips')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#113d48] font-bold text-xs sm:text-base transition-colors cursor-pointer"
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
