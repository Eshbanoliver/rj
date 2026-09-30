import React, { useState } from 'react';
import { galleryItems, GalleryItem } from '../data/gallery';
import { MapPin, X, ZoomIn, ArrowRight } from 'lucide-react';
import { PageType } from '../types';

interface GallerySectionProps {
  onNavigate?: (page: PageType) => void;
  isStandalonePage?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onNavigate,
  isStandalonePage = false,
}) => {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  // Home page recent items
  const homeImages = [
    {
      id: 'g-lake',
      title: 'Lakeside Rooftop Moments',
      location: 'Udaipur, Rajasthan',
      image: '/images/palm-valley-dinner.jpg',
    },
    {
      id: 'g-bahubali',
      title: 'Bahubali Hills Serenity',
      location: 'Badi Lake, Udaipur',
      image: '/images/hero-udaipur.jpg',
    },
    {
      id: 'g-center-strangers',
      title: '15 Strangers Sunset Gathering',
      location: 'Aravali Hills, Udaipur',
      image: '/images/strangers-sunset-community.jpg',
    },
    {
      id: 'g-mehrangarh',
      title: 'Mehrangarh Fort Golden Hour',
      location: 'Jodhpur, Rajasthan',
      image: '/images/jodhpur-mehrangarh-sunset.jpg',
    },
    {
      id: 'g-desert',
      title: 'Sunset Camel Caravan',
      location: 'Sam Sand Dunes, Jaisalmer',
      image: '/images/jaisalmer-journey-arch.jpg',
    },
    {
      id: 'g-pool',
      title: 'Palm Valley Night Pool Party',
      location: 'Udaipur, Rajasthan',
      image: '/images/palm-valley-night-pool.jpg',
    },
  ];

  return (
    <section className={`py-16 sm:py-24 bg-white relative overflow-hidden ${isStandalonePage ? 'pt-28' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading matching reference */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="font-script text-[#1ca8cb] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide inline-block transform -rotate-1">
            Explore Our Photo Gallery
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#113d48] font-heading mt-1 tracking-tight">
            Recent Gallery
          </h2>
        </div>

        {/* 2-Column on Mobile, 4-Column on Desktop Masonry Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 items-center">
          {/* Column 1: Two stacked images */}
          <div className="flex flex-col gap-3 sm:gap-6">
            <div
              onClick={() => setActiveImage({ id: '1', title: homeImages[0].title, location: homeImages[0].location, image: homeImages[0].image, category: 'Community', caption: '' })}
              className="group relative h-40 xs:h-48 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md cursor-pointer border border-slate-100"
            >
              <img
                src={homeImages[0].image}
                alt={homeImages[0].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[#1ca8cb]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2 sm:p-4 text-white text-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/25 flex items-center justify-center mb-1.5 sm:mb-2">
                  <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <h4 className="font-bold text-xs sm:text-sm line-clamp-1">{homeImages[0].title}</h4>
                <p className="text-[10px] sm:text-xs text-white/80 line-clamp-1">{homeImages[0].location}</p>
              </div>
            </div>

            <div
              onClick={() => setActiveImage({ id: '2', title: homeImages[1].title, location: homeImages[1].location, image: homeImages[1].image, category: 'Community', caption: '' })}
              className="group relative h-40 xs:h-48 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md cursor-pointer border border-slate-100"
            >
              <img
                src={homeImages[1].image}
                alt={homeImages[1].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[#1ca8cb]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2 sm:p-4 text-white text-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/25 flex items-center justify-center mb-1.5 sm:mb-2">
                  <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <h4 className="font-bold text-xs sm:text-sm line-clamp-1">{homeImages[1].title}</h4>
                <p className="text-[10px] sm:text-xs text-white/80 line-clamp-1">{homeImages[1].location}</p>
              </div>
            </div>
          </div>

          {/* Column 2: TALL CENTER IMAGE */}
          <div
            onClick={() => setActiveImage({ id: '3', title: homeImages[2].title, location: homeImages[2].location, image: homeImages[2].image, category: 'Community', caption: '' })}
            className="group relative h-[330px] xs:h-[396px] sm:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl cursor-pointer border border-slate-100 ring-2 ring-[#1ca8cb]/20"
          >
            <img
              src={homeImages[2].image}
              alt={homeImages[2].title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-[#1ca8cb]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 sm:p-6 text-white text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/25 flex items-center justify-center mb-2 sm:mb-3">
                <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="font-bold text-xs sm:text-lg">{homeImages[2].title}</h4>
              <p className="text-[10px] sm:text-sm text-white/80 mt-0.5 sm:mt-1">{homeImages[2].location}</p>
            </div>
          </div>

          {/* Column 3: Two stacked images */}
          <div className="flex flex-col gap-3 sm:gap-6">
            <div
              onClick={() => setActiveImage({ id: '4', title: homeImages[3].title, location: homeImages[3].location, image: homeImages[3].image, category: 'Community', caption: '' })}
              className="group relative h-40 xs:h-48 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md cursor-pointer border border-slate-100"
            >
              <img
                src={homeImages[3].image}
                alt={homeImages[3].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[#1ca8cb]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2 sm:p-4 text-white text-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/25 flex items-center justify-center mb-1.5 sm:mb-2">
                  <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <h4 className="font-bold text-xs sm:text-sm line-clamp-1">{homeImages[3].title}</h4>
                <p className="text-[10px] sm:text-xs text-white/80 line-clamp-1">{homeImages[3].location}</p>
              </div>
            </div>

            <div
              onClick={() => setActiveImage({ id: '5', title: homeImages[4].title, location: homeImages[4].location, image: homeImages[4].image, category: 'Community', caption: '' })}
              className="group relative h-40 xs:h-48 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md cursor-pointer border border-slate-100"
            >
              <img
                src={homeImages[4].image}
                alt={homeImages[4].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[#1ca8cb]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2 sm:p-4 text-white text-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/25 flex items-center justify-center mb-1.5 sm:mb-2">
                  <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <h4 className="font-bold text-xs sm:text-sm line-clamp-1">{homeImages[4].title}</h4>
                <p className="text-[10px] sm:text-xs text-white/80 line-clamp-1">{homeImages[4].location}</p>
              </div>
            </div>
          </div>

          {/* Column 4: TALL RIGHT IMAGE */}
          <div
            onClick={() => setActiveImage({ id: '6', title: homeImages[5].title, location: homeImages[5].location, image: homeImages[5].image, category: 'Community', caption: '' })}
            className="group relative h-[330px] xs:h-[396px] sm:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl cursor-pointer border border-slate-100 ring-2 ring-[#1ca8cb]/20"
          >
            <img
              src={homeImages[5].image}
              alt={homeImages[5].title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-[#1ca8cb]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 sm:p-6 text-white text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/25 flex items-center justify-center mb-2 sm:mb-3">
                <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="font-bold text-xs sm:text-lg">{homeImages[5].title}</h4>
              <p className="text-[10px] sm:text-sm text-white/80 mt-0.5 sm:mt-1">{homeImages[5].location}</p>
            </div>
          </div>
        </div>

        {/* View Full Gallery Link */}
        {onNavigate && (
          <div className="text-center mt-10 sm:mt-12">
            <button
              onClick={() => onNavigate('gallery')}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full border-2 border-[#113d48] text-[#113d48] hover:bg-[#113d48] hover:text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-sm cursor-pointer active:scale-95"
            >
              <span>View Full Photo Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveImage(null)}
              aria-label="Close"
              className="absolute -top-12 right-0 text-white hover:text-[#1ca8cb] transition-colors p-2 cursor-pointer"
            >
              <X className="w-7 h-7" />
            </button>
            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="max-h-[75vh] w-auto rounded-2xl object-contain shadow-2xl"
            />
            <div className="mt-3 text-center text-white">
              <h3 className="text-base sm:text-xl font-bold">{activeImage.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">{activeImage.location}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
