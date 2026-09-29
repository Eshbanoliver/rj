import React, { useState } from 'react';
import { galleryItems, GalleryItem } from '../data/gallery';
import { Sparkles, MapPin, X, ZoomIn, ArrowRight } from 'lucide-react';
import { PageType } from '../types';

interface GallerySectionProps {
  onNavigate?: (page: PageType) => void;
  isStandalonePage?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onNavigate,
  isStandalonePage = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Community', 'Destinations', 'Stays & Resorts', 'Experiences'];

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const displayItems = isStandalonePage ? filteredItems : filteredItems.slice(0, 8);

  return (
    <section
      className={`py-20 bg-white text-slate-900 relative ${
        isStandalonePage ? 'pt-28' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-amber-600 uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Captured Memories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight">
            Moments on the <span className="text-amber-500">Road</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Real moments from our Rajasthan journeys — sun-drenched hill resorts, camel caravans in the Thar dunes, and laughter with new friends.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 px-1 sm:flex-wrap sm:justify-center mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20 scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {displayItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative h-52 sm:h-64 lg:h-72 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer bg-slate-100 border border-slate-200/80 hover:border-amber-400 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.3)] hover:-translate-y-1.5 transition-all duration-500 before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-amber-400 before:via-orange-500 before:to-amber-500 before:scale-x-0 group-hover:before:scale-x-100 before:transition-transform before:duration-500 before:origin-left before:z-20"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-3.5 right-3.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-950/75 backdrop-blur-md flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md z-10">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10">
                <span className="inline-block text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-500/20 border border-amber-400/30 px-2 py-0.5 rounded-full mb-1 sm:mb-1.5 backdrop-blur-sm">
                  {item.category}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-white font-heading line-clamp-1 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-slate-300 flex items-center gap-1 mt-0.5 truncate">
                  <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button if on Home Page */}
        {!isStandalonePage && onNavigate && (
          <div className="mt-10 sm:mt-12 text-center">
            <button
              onClick={() => onNavigate('gallery')}
              className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all hover:scale-105 shadow-md shadow-slate-900/10 active:scale-98"
            >
              <span>Explore Full Photo Gallery</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 text-white transition-colors"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] overflow-hidden flex items-center justify-center bg-slate-950">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            <div className="p-6 bg-white border-t border-slate-100">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  {activeImage.title}
                </h3>
                <span className="text-xs text-amber-700 font-semibold px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200">
                  {activeImage.category}
                </span>
              </div>
              <p className="text-xs text-slate-500 flex items-center gap-1.5 mb-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>{activeImage.location}</span>
              </p>
              <p className="text-sm text-slate-600">
                {activeImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
