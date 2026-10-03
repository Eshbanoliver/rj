import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, Pause, Play, Heart, Sparkles, MapPin } from 'lucide-react';

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  tag: string;
  avatar: string;
  rating: number;
  text: string;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ananya Deshmukh',
    location: 'Mumbai, Maharashtra',
    tag: 'Solo Traveler • Udaipur Batch',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=240&auto=format&fit=crop',
    rating: 5,
    text: 'I was hesitant about traveling with strangers at first, but R Journey made everyone feel like old friends within two hours! The sunset at Bahubali Hills and midnight campfire music sessions were pure magic.',
    featured: true,
  },
  {
    id: '2',
    name: 'Rohan & Priyanshu',
    location: 'Ahmedabad, Gujarat',
    tag: 'Friends Duo • Jodhpur & Jaisalmer',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=240&auto=format&fit=crop',
    rating: 5,
    text: 'Went as two guys knowing nobody else, came back with 13 new lifelong friends! The jeep safari in Sam Sand Dunes and the DJ pool party at Palm Valley Resort were the absolute peak of our year.',
  },
  {
    id: '3',
    name: 'Tanvi Mehta',
    location: 'Pune, Maharashtra',
    tag: 'Corporate Explorer • Weekend Escape',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=240&auto=format&fit=crop',
    rating: 5,
    text: 'The cleanest, most transparent group tour experience in Rajasthan. Zero hidden costs, luxury hill resort stays with dual swimming pools, and total peace of mind for solo working professionals.',
  },
  {
    id: '4',
    name: 'Kabir Sharma',
    location: 'New Delhi',
    tag: 'Travel Creator • 15 Strangers Batch',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=240&auto=format&fit=crop',
    rating: 5,
    text: 'As a creator, I was looking for authentic visuals away from tourist traps. The captains took us to hidden rooftop viewpoints overlooking Lake Pichola and secret Mehrangarh Fort vantage points. Incredible curation!',
    featured: true,
  },
  {
    id: '5',
    name: 'Sneha Kulkarni',
    location: 'Bengaluru, Karnataka',
    tag: 'Solo Explorer • Safe Departures',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=240&auto=format&fit=crop',
    rating: 5,
    text: 'Safety was my top priority as a solo female traveler. From the moment I was picked up in Udaipur, the team made me feel secure and respected. The vibe was respectful, energetic, and heartwarming.',
  },
  {
    id: '6',
    name: 'Harshvardhan Patel',
    location: 'Vadodara, Gujarat',
    tag: 'College Group • Desert Safari Special',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=240&auto=format&fit=crop',
    rating: 5,
    text: 'We booked 4 spots for our college graduation celebration. Stargazing by the campfire in Thar desert after an adrenaline-filled camel safari was unforgettable. Best value for money in India!',
  },
  {
    id: '7',
    name: 'Riya & Aakash Shah',
    location: 'Surat, Gujarat',
    tag: 'Couple Travel • Udaipur Heritage',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=240&auto=format&fit=crop',
    rating: 5,
    text: 'We loved that the itinerary balanced group activities with personal leisure time. Palm Valley Resort was so scenic, food was delicious authentic Rajasthani cuisine, and the captains were always smiling.',
    featured: true,
  },
  {
    id: '8',
    name: 'Divyansh Saxena',
    location: 'Jaipur, Rajasthan',
    tag: 'Solo Wanderer • Weekend Getaway',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=240&auto=format&fit=crop',
    rating: 5,
    text: 'Joining R Journey was the best spontaneous weekend decision I have ever made. The ice-breakers were so well designed that everyone opened up naturally. We already have a reunion trip planned!',
  },
];

export const TestimonialsSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate list to achieve a seamless, glitch-free continuous infinite scroll loop
  const marqueeList = [...testimonials, ...testimonials];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 sm:mb-12">
        {/* Section Heading */}
        <div className="text-center">
          <span className="font-script text-[#1ca8cb] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide inline-block transform -rotate-1">
            Testimonial
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#113d48] font-heading mt-1 tracking-tight">
            What Client Say About us
          </h2>

          {/* Social Proof Badge & Controls */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1ca8cb]/10 border border-[#1ca8cb]/30 text-xs font-bold text-[#113d48]">
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>4.9 / 5 (250+ Traveler Reviews)</span>
            </div>

            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 transition-all cursor-pointer shadow-2xs hover:text-[#113d48]"
              title={isPaused ? "Resume infinite scroll" : "Pause infinite scroll"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3 h-3 text-[#1ca8cb] fill-current" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-slate-500" />
                  <span>Pause</span>
                </>
              )}
            </button>

            <span className="text-[11px] text-slate-400 hidden sm:inline-block">
              • Hover over any review to pause & read
            </span>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Track with Soft Gradient Fade Edges */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Left & Right gradient masks for seamless infinite edge fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 md:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 md:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div
            className={`animate-marquee-testimonials gap-4 sm:gap-6 px-4 items-stretch ${
              isPaused ? 'paused' : ''
            }`}
          >
            {marqueeList.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className={`w-[290px] sm:w-[350px] md:w-[380px] shrink-0 rounded-3xl p-5 sm:p-7 transition-all duration-400 flex flex-col justify-between group transform hover:-translate-y-1.5 cursor-pointer ${
                  item.featured
                    ? 'bg-[#eef8fa] border border-[#a2e3f0] shadow-sm hover:shadow-[0_20px_40px_-12px_rgba(28,168,203,0.3)]'
                    : 'bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#1ca8cb]/50'
                }`}
              >
                <div>
                  {/* Top: Avatar, Name, Location & Stars */}
                  <div className="flex items-start justify-between gap-3 mb-3.5">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative shrink-0">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#1ca8cb] text-white flex items-center justify-center ring-2 ring-white">
                          <CheckCircle2 className="w-3 h-3 fill-white text-[#1ca8cb]" />
                        </div>
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-[#113d48] group-hover:text-[#1ca8cb] transition-colors text-sm sm:text-base font-heading truncate">
                          {item.name}
                        </h4>
                        <div className="flex items-center gap-1 text-[11px] sm:text-xs text-slate-500 font-medium truncate">
                          <MapPin className="w-3 h-3 text-[#1ca8cb] shrink-0" />
                          <span className="truncate">{item.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-0.5 shrink-0 pt-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Batch / Experience Tag */}
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold text-[#113d48] bg-slate-100/90 border border-slate-200/60 group-hover:border-[#1ca8cb]/30 transition-colors">
                      <Sparkles className="w-2.5 h-2.5 text-[#1ca8cb]" />
                      <span>{item.tag}</span>
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm leading-relaxed font-normal text-slate-600 group-hover:text-slate-900 transition-colors">
                    "{item.text}"
                  </p>
                </div>

                {/* Bottom Bar: Verified Badge & Quote Icon */}
                <div className="mt-5 pt-3.5 border-t border-slate-100/90 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#1ca8cb] uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Traveler
                  </span>

                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${
                    item.featured
                      ? 'bg-[#1ca8cb] text-white shadow-xs'
                      : 'bg-slate-100 text-[#1ca8cb] group-hover:bg-[#1ca8cb] group-hover:text-white'
                  }`}>
                    <Quote className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
