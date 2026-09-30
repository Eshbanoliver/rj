import React, { useState } from 'react';
import { PageType } from '../types';
import { tourPackages, TourPackage } from '../data/tours';
import { Clock, MapPin, Star, ArrowRight } from 'lucide-react';

interface FeaturedTourPackagesProps {
  onNavigate: (page: PageType) => void;
  onSelectTour: (tour: TourPackage) => void;
  onOpenInquiry: (initialData?: { tourTitle?: string }) => void;
}

export const FeaturedTourPackages: React.FC<FeaturedTourPackagesProps> = ({
  onNavigate,
  onSelectTour,
  onOpenInquiry,
}) => {
  const [activeDot, setActiveDot] = useState(0);

  // Expanded list with customized signature tour option for 4 cards
  const displayPackages = [
    ...tourPackages,
    {
      id: 'tour-custom-rajasthan-circuit',
      slug: 'signature-rajasthan-grand-circuit',
      title: 'Grand Rajasthan Circuit — Udaipur, Jodhpur & Jaisalmer',
      badge: 'Signature Expedition',
      departureCity: 'Ahmedabad / Udaipur',
      destinations: ['Udaipur', 'Jodhpur', 'Jaisalmer', 'Sam Sand Dunes'],
      duration: '5 Days | 4 Nights',
      days: 5,
      nights: 4,
      startingPrice: 13999,
      tripleSharingPrice: 13999,
      doubleSharingPrice: 15499,
      registrationAmount: 3500,
      departureSchedule: 'Every Alternate Thursday (Fixed Batches)',
      batchSchedule: [
        { month: 'October Batches', dates: ['8th Oct', '22nd Oct'] },
        { month: 'November Batches', dates: ['5th Nov', '19th Nov'] }
      ],
      heroImage: '/images/hero-jodhpur.jpg',
      galleryImages: ['/images/hero-jodhpur.jpg', '/images/hero-jaisalmer.jpg'],
      tagline: 'Complete Rajasthan Royal Heritage & Desert Odyssey',
      overview: 'Experience the pinnacle of Rajasthan in one unforgettable journey. From Udaipur’s royal palaces and DJ pool parties to Jodhpur’s blue streets and Jaisalmer’s starry Thar desert glamping.',
      experienceStory: 'The ultimate royal group trip combining heritage, adventure, and nightlife.',
      itinerary: [],
      inclusions: ['AC Coach', 'Luxury Hotels & Swiss Desert Camp', 'All Breakfast & Dinner', 'Jeep & Camel Safari'],
      exclusions: ['Monument Entry Tickets', 'Personal Expenses'],
      stayDetails: [],
      featured: true,
      tourType: 'Strangers Trip' as const,
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-travel-doodles relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="font-script text-[#1ca8cb] text-3xl sm:text-4xl font-bold tracking-wide inline-block transform -rotate-1">
            Get Special Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#113d48] font-heading mt-1 tracking-tight">
            Popular Destination we offer for all
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            A team of passionate travel experts committed to crafting unforgettable journeys for every traveler.
          </p>
        </div>

        {/* 4 Tour Cards Grid matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayPackages.map((tour, idx) => (
            <div
              key={tour.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-slate-100 hover:border-[#1ca8cb]/40 group transform hover:-translate-y-2"
            >
              {/* Image with rounded top */}
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={tour.heroImage}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                {/* Duration Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-[#113d48] shadow-md flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#1ca8cb]" />
                  <span>{tour.duration}</span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-2 py-1 rounded-full text-[11px] font-bold text-white shadow-md flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span>5.0</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Location Pin */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#1ca8cb]" />
                    <span>Ex-{tour.departureCity}</span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => onSelectTour(tour)}
                    className="font-bold text-base sm:text-lg text-[#113d48] group-hover:text-[#1ca8cb] transition-colors line-clamp-2 leading-snug cursor-pointer font-heading"
                  >
                    {tour.title}
                  </h3>
                </div>

                {/* Card Footer: Price & CTA */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium block">Starting from</span>
                    <span className="text-lg font-black text-[#1ca8cb]">
                      ₹{tour.startingPrice.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectTour(tour)}
                    className="px-4 py-2 rounded-full bg-[#113d48] group-hover:bg-[#1ca8cb] text-white text-xs font-bold transition-all duration-300 flex items-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {[0, 1, 2, 3].map((dot) => (
            <button
              key={dot}
              onClick={() => setActiveDot(dot)}
              aria-label={`Go to slide ${dot + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeDot === dot
                  ? 'w-7 h-2.5 bg-[#1ca8cb]'
                  : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
