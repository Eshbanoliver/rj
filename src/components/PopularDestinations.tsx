import React, { useState, useRef } from 'react';
import { PageType } from '../types';
import { destinationsData, Destination } from '../data/destinations';
import { MapPin, ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';

interface PopularDestinationsProps {
  onNavigate: (page: PageType) => void;
  onSelectDestination?: (dest: Destination) => void;
}

export const PopularDestinations: React.FC<PopularDestinationsProps> = ({
  onNavigate,
  onSelectDestination,
}) => {
  const [activeIndex, setActiveIndex] = useState(2); // Center on Jodhpur/Udaipur initially
  const total = destinationsData.length;
  const touchStartX = useRef<number | null>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  const handleCardClick = (index: number, dest: Destination) => {
    if (index === activeIndex) {
      if (onSelectDestination) onSelectDestination(dest);
      onNavigate('destinations');
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="font-script text-[#1ca8cb] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide inline-block transform -rotate-1">
            Destination
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#113d48] font-heading mt-1 tracking-tight">
            Popular Destination
          </h2>
        </div>

        {/* Cover Flow Carousel Container with Touch Gestures */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full flex items-center justify-center min-h-[440px] sm:min-h-[520px] px-2 sm:px-12"
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous destination"
            className="absolute left-1 sm:left-4 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-[#1ca8cb] text-[#113d48] hover:text-white shadow-xl flex items-center justify-center transition-all duration-300 border border-slate-200 cursor-pointer active:scale-95 group"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next destination"
            className="absolute right-1 sm:right-4 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-[#1ca8cb] text-[#113d48] hover:text-white shadow-xl flex items-center justify-center transition-all duration-300 border border-slate-200 cursor-pointer active:scale-95 group"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* 5-Card Cover Flow Display */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 w-full max-w-6xl mx-auto overflow-hidden sm:overflow-visible py-4">
            {destinationsData.map((dest, idx) => {
              // Calculate distance from activeIndex with circular wrap
              let diff = idx - activeIndex;
              if (diff < -Math.floor(total / 2)) diff += total;
              if (diff > Math.floor(total / 2)) diff -= total;

              const isCenter = diff === 0;
              const isAdjacent = Math.abs(diff) === 1;
              const isHidden = Math.abs(diff) > 2;

              if (isHidden) return null;

              return (
                <div
                  key={dest.id}
                  onClick={() => handleCardClick(idx, dest)}
                  style={{ order: diff + 2 }}
                  className={`transition-all duration-500 ease-out cursor-pointer relative rounded-3xl overflow-hidden ${
                    isCenter
                      ? 'w-[82vw] xs:w-[290px] sm:w-[320px] lg:w-[340px] h-[430px] sm:h-[480px] z-20 shadow-2xl scale-100 sm:scale-105 ring-4 ring-[#1ca8cb]/40'
                      : isAdjacent
                      ? 'hidden sm:block sm:w-[220px] lg:w-[250px] h-[380px] sm:h-[420px] z-10 opacity-80 scale-95 shadow-lg hover:opacity-100'
                      : 'hidden lg:block lg:w-[190px] h-[330px] lg:h-[370px] z-0 opacity-50 scale-90 shadow-md hover:opacity-80'
                  }`}
                >
                  {/* Destination Image */}
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isCenter ? 'hover:scale-110' : ''
                    }`}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      isCenter
                        ? 'bg-gradient-to-t from-black/90 via-black/35 to-black/10'
                        : 'bg-gradient-to-t from-black/80 via-black/40 to-transparent'
                    }`}
                  />

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 text-white text-xs font-bold border border-white/20">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>5.0</span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white flex flex-col justify-end">
                    <div className="flex items-center gap-1.5 text-cyan-300 text-xs font-semibold mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#1ca8cb]" />
                      <span>{dest.state}</span>
                    </div>

                    <h3 className={`font-bold font-heading text-white ${
                      isCenter ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
                    }`}>
                      {dest.name}
                    </h3>

                    {isCenter && (
                      <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 mt-1.5 mb-4 leading-relaxed font-normal">
                        {dest.tagline}
                      </p>
                    )}

                    {isCenter && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onSelectDestination) onSelectDestination(dest);
                          onNavigate('destinations');
                        }}
                        className="w-full py-3 px-4 rounded-full bg-[#1ca8cb] hover:bg-white text-white hover:text-[#113d48] text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#1ca8cb]/30 cursor-pointer active:scale-98"
                      >
                        <span>Explore Destination</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          {destinationsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to destination ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeIndex === idx
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
