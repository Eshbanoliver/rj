import React, { useState, useRef } from 'react';
import { PageType } from '../types';

interface TourCategoriesProps {
  onNavigate: (page: PageType) => void;
}

interface CategoryItem {
  id: string;
  title: string;
  tourCount: string;
  image: string;
  alt: string;
}

const categories: CategoryItem[] = [
  {
    id: 'desert',
    title: 'Desert Safari',
    tourCount: '2 Tours',
    image: '/images/hero-jaisalmer.jpg',
    alt: 'Sam Sand Dunes Desert Safari in Jaisalmer'
  },
  {
    id: 'lakes',
    title: 'Lakes & Palaces',
    tourCount: '3 Tours',
    image: '/images/hero-udaipur.jpg',
    alt: 'Lake Pichola & City Palace in Udaipur'
  },
  {
    id: 'heritage',
    title: 'Heritage Forts',
    tourCount: '4 Tours',
    image: '/images/hero-jodhpur.jpg',
    alt: 'Mehrangarh Fort and Blue City in Jodhpur'
  },
  {
    id: 'pool-party',
    title: 'DJ Pool Parties',
    tourCount: '2 Tours',
    image: '/images/palm-valley-night-pool.jpg',
    alt: 'Palm Valley Resort Twin Swimming Pools'
  },
  {
    id: 'strangers',
    title: '15 Strangers Trips',
    tourCount: '3 Tours',
    image: '/images/udaipur-group-strangers.jpg',
    alt: 'Curated 15 Strangers Group Travel'
  }
];

export const TourCategories: React.FC<TourCategoriesProps> = ({ onNavigate }) => {
  const [activeDot, setActiveDot] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (index: number) => {
    setActiveDot(index);
    if (scrollContainerRef.current) {
      const cardWidth = 180;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = 180;
      const newIndex = Math.min(
        categories.length - 1,
        Math.max(0, Math.round(scrollLeft / cardWidth))
      );
      if (newIndex !== activeDot) {
        setActiveDot(newIndex);
      }
    }
  };

  return (
    <section className="pt-20 sm:pt-24 pb-16 sm:pb-24 bg-travel-doodles relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-14">
          <span className="font-script text-[#1ca8cb] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide inline-block transform -rotate-1">
            Choose Tour Categories
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#113d48] font-heading mt-1 tracking-tight">
            Tour Categories
          </h2>
        </div>

        {/* Responsive Horizontal Touch Swipe on Mobile, 5-col Grid on Desktop */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex sm:grid sm:grid-cols-3 lg:grid-cols-5 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 gap-3.5 sm:gap-6 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {categories.map((cat, idx) => (
            <div
              key={cat.id}
              onClick={() => {
                setActiveDot(idx);
                onNavigate('trips');
              }}
              className="w-[145px] xs:w-[165px] sm:w-auto shrink-0 snap-start group cursor-pointer flex flex-col items-center transition-all duration-300 transform hover:-translate-y-2.5 active:scale-95"
            >
              {/* Arched Photo Card */}
              <div className="w-full aspect-[4/5] rounded-t-[32px] sm:rounded-t-[40px] rounded-b-2xl overflow-hidden shadow-md group-hover:shadow-[0_20px_35px_-8px_rgba(28,168,203,0.35)] transition-all duration-500 relative border-2 border-white group-hover:border-[#1ca8cb] card-shimmer">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out filter brightness-[0.92] group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-25 transition-opacity duration-300" />
              </div>

              {/* Title & Tour Count */}
              <div className="mt-3 text-center">
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#113d48] group-hover:text-[#1ca8cb] transition-colors duration-300 font-heading leading-tight">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5 group-hover:text-slate-700 transition-colors">
                  {cat.tourCount}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-10">
          {categories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              aria-label={`Go to category slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeDot === idx
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
