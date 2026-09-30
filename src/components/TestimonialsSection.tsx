import React, { useState } from 'react';
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

  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading matching reference */}
        <div className="text-center mb-14 sm:mb-16">
          <span className="font-script text-[#1ca8cb] text-3xl sm:text-4xl font-bold tracking-wide inline-block transform -rotate-1">
            Testimonial
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#113d48] font-heading mt-1 tracking-tight">
            What Client Say About us
          </h2>
        </div>

        {/* 3 Review Cards matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {testimonials.map((item, idx) => {
            const isCenter = idx === 1;
            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between ${
                  isCenter
                    ? 'bg-[#dcf4f9] border border-[#a2e3f0] shadow-xl md:scale-105 z-10'
                    : 'bg-white border border-slate-200 shadow-md hover:shadow-xl'
                }`}
              >
                <div>
                  {/* Top: Avatar, Name, Stars */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                      />
                      <div>
                        <h4 className="font-bold text-[#113d48] text-base font-heading">
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium">
                          {item.location}
                        </p>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className={`text-sm leading-relaxed mt-2 font-normal ${
                    isCenter ? 'text-slate-800' : 'text-slate-600'
                  }`}>
                    "{item.text}"
                  </p>
                </div>

                {/* Bottom Quote Icon Indicator */}
                <div className="mt-6 flex justify-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isCenter ? 'bg-[#1ca8cb] text-white shadow-md' : 'bg-slate-100 text-[#1ca8cb]'
                  }`}>
                    <Quote className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {[0, 1, 2].map((dot) => (
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
