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
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-white font-bold shadow-md shadow-amber-500/20 scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer bg-slate-100 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md flex items-center justify-center text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-white font-heading line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-200 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{item.location}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button if on Home Page */}
        {!isStandalonePage && onNavigate && (
          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('gallery')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all hover:scale-105 shadow-md shadow-slate-900/10"
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
