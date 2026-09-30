import React, { useState, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Ananya Deshmukh',
    location: 'Solo Traveler, Mumbai',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    text: 'I was hesitant about traveling with strangers at first, but R Journey made everyone feel like old friends within two hours! The Pool Party in Udaipur and the sunset in Bahubali Hills were pure magic.'
  },
  {
    name: 'Rohan & Priyanshu',
    location: 'Friends Duo, Ahmedabad',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    text: 'Went as 15 strangers, came back as a family! The Jeep Safari in Sam Sand Dunes and the DJ night at Palm Valley Resort were the highlight of our year. Superbly managed by Captain Aayush.'
  },
  {
    name: 'Tanvi Mehta',
    location: 'Corporate Explorer, Pune',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    text: 'The best group tour experience in Rajasthan. Transparent pricing, no hidden costs, luxury resort stays, and zero stress about bookings or routes. 100% recommended for solo travelers.'
  }
];

export const TestimonialsSection: React.FC = () => {
  const [activeDot, setActiveDot] = useState(1); // Center card active
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setActiveDot((prev) => (prev + 1) % testimonials.length);
      } else {
        setActiveDot((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      }
    }
    touchStartX.current = null;
  };

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading matching reference */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="font-script text-[#1ca8cb] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide inline-block transform -rotate-1">
            Testimonial
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#113d48] font-heading mt-1 tracking-tight">
            What Client Say About us
          </h2>
        </div>

        {/* 3 Review Cards matching reference with mobile swipe */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 items-center"
        >
          {testimonials.map((item, idx) => {
            const isCenter = idx === 1;
            const isMobileActive = idx === activeDot;

            return (
              <div
                key={idx}
                onClick={() => setActiveDot(idx)}
                className={`relative rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  // On mobile, highlight or emphasize the touched dot card
                  isMobileActive ? 'ring-2 ring-[#1ca8cb]/40' : ''
                } ${
                  isCenter
                    ? 'bg-[#dcf4f9] border border-[#a2e3f0] shadow-xl md:scale-105 z-10'
                    : 'bg-white border border-slate-200 shadow-md hover:shadow-xl'
                }`}
              >
                <div>
                  {/* Top: Avatar, Name, Stars */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
                      />
                      <div className="min-w-0">
                        <h4 className="font-bold text-[#113d48] text-sm sm:text-base font-heading truncate">
                          {item.name}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-500 font-medium truncate">
                          {item.location}
                        </p>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-0.5 shrink-0">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className={`text-xs sm:text-sm leading-relaxed mt-2 font-normal ${
                    isCenter ? 'text-slate-800' : 'text-slate-600'
                  }`}>
                    "{item.text}"
                  </p>
                </div>

                {/* Bottom Quote Icon Indicator */}
                <div className="mt-5 sm:mt-6 flex justify-center">
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                    isCenter ? 'bg-[#1ca8cb] text-white shadow-md' : 'bg-slate-100 text-[#1ca8cb]'
                  }`}>
                    <Quote className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-12">
          {testimonials.map((_, dot) => (
            <button
              key={dot}
              onClick={() => setActiveDot(dot)}
              aria-label={`Go to testimonial ${dot + 1}`}
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
