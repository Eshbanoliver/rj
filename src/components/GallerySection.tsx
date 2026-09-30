import React, { useState } from 'react';
import { galleryItems, GalleryItem } from '../data/gallery';
import { X, ZoomIn, ArrowRight } from 'lucide-react';
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

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categoriesList = ['All', 'Destinations', 'Stays & Resorts', 'Experiences', 'Community'];

  const displayedImages = isStandalonePage
    ? galleryItems.filter((item) => activeCategory === 'All' || item.category === activeCategory)
    : [];

  return (
    <section className={`py-16 sm:py-24 bg-white relative overflow-hidden ${isStandalonePage ? 'pt-24 sm:pt-28' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading matching reference */}
        <div className="text-center mb-8 sm:mb-14">
          <span className="font-script text-[#1ca8cb] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide inline-block transform -rotate-1">
            {isStandalonePage ? 'Rajasthan Moments' : 'Explore Our Photo Gallery'}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#113d48] font-heading mt-1 tracking-tight">
            {isStandalonePage ? 'Photo & Journey Gallery' : 'Recent Gallery'}
          </h2>
          {isStandalonePage && (
            <p className="mt-2 text-xs sm:text-base text-slate-600 max-w-xl mx-auto">
              Real captures from our 15 strangers batches, desert campfires, resort pool parties & sunset hilltops.
            </p>
          )}
        </div>

        {/* Filter Pills for Standalone Page */}
        {isStandalonePage && (
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-3 sm:pb-0 mb-8 sm:mb-12 -mx-4 px-4 sm:mx-0 sm:px-0">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#113d48] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {isStandalonePage ? (
          /* Standalone Page Full Gallery Grid */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {displayedImages.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveImage(item)}
                className="group relative h-48 xs:h-56 sm:h-64 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer border border-slate-100 card-shimmer transition-all duration-300 transform hover:-translate-y-1.5"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-[#1ca8cb]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-white text-center">
                  <div className="w-9 h-9 rounded-full bg-white/25 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm line-clamp-1">{item.title}</h4>
                  <p className="text-[10px] sm:text-xs text-white/80 line-clamp-1">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Home Page 2-Column on Mobile, 4-Column on Desktop Masonry Grid */
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 items-center">
            {/* Column 1: Two stacked images */}
            <div className="flex flex-col gap-3 sm:gap-6">
              <div
                onClick={() => setActiveImage({ id: '1', title: homeImages[0].title, location: homeImages[0].location, image: homeImages[0].image, category: 'Community', caption: '' })}
                className="group relative h-40 xs:h-48 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer border border-slate-100 card-shimmer transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={homeImages[0].image}
                  alt={homeImages[0].title}
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-[#1ca8cb]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2 sm:p-4 text-white text-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/25 flex items-center justify-center mb-1.5 sm:mb-2 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm line-clamp-1">{homeImages[0].title}</h4>
                  <p className="text-[10px] sm:text-xs text-white/80 line-clamp-1">{homeImages[0].location}</p>
                </div>
              </div>

              <div
                onClick={() => setActiveImage({ id: '2', title: homeImages[1].title, location: homeImages[1].location, image: homeImages[1].image, category: 'Community', caption: '' })}
                className="group relative h-40 xs:h-48 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer border border-slate-100 card-shimmer transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={homeImages[1].image}
                  alt={homeImages[1].title}
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-[#1ca8cb]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2 sm:p-4 text-white text-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/25 flex items-center justify-center mb-1.5 sm:mb-2 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
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
              className="group relative h-[330px] xs:h-[396px] sm:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer border border-slate-100 ring-2 ring-[#1ca8cb]/30 card-shimmer transition-all duration-300 transform hover:-translate-y-1.5"
            >
              <img
                src={homeImages[2].image}
                alt={homeImages[2].title}
                className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[#1ca8cb]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 sm:p-6 text-white text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/25 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
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
                className="group relative h-40 xs:h-48 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer border border-slate-100 card-shimmer transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={homeImages[3].image}
                  alt={homeImages[3].title}
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-[#1ca8cb]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2 sm:p-4 text-white text-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/25 flex items-center justify-center mb-1.5 sm:mb-2 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm line-clamp-1">{homeImages[3].title}</h4>
                  <p className="text-[10px] sm:text-xs text-white/80 line-clamp-1">{homeImages[3].location}</p>
                </div>
              </div>

              <div
                onClick={() => setActiveImage({ id: '5', title: homeImages[4].title, location: homeImages[4].location, image: homeImages[4].image, category: 'Community', caption: '' })}
                className="group relative h-40 xs:h-48 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer border border-slate-100 card-shimmer transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={homeImages[4].image}
                  alt={homeImages[4].title}
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-[#1ca8cb]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2 sm:p-4 text-white text-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/25 flex items-center justify-center mb-1.5 sm:mb-2 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
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
              className="group relative h-[330px] xs:h-[396px] sm:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer border border-slate-100 ring-2 ring-[#1ca8cb]/30 card-shimmer transition-all duration-300 transform hover:-translate-y-1.5"
            >
              <img
                src={homeImages[5].image}
                alt={homeImages[5].title}
                className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[#1ca8cb]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 sm:p-6 text-white text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/25 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h4 className="font-bold text-xs sm:text-lg">{homeImages[5].title}</h4>
                <p className="text-[10px] sm:text-sm text-white/80 mt-0.5 sm:mt-1">{homeImages[5].location}</p>
              </div>
            </div>
          </div>
        )}

        {/* View Full Gallery Link (Home page only) */}
        {!isStandalonePage && onNavigate && (
          <div className="text-center mt-10 sm:mt-12">
            <button
              onClick={() => onNavigate('gallery')}
              className="btn-shimmer min-h-[44px] inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-[#113d48] text-[#113d48] hover:bg-[#113d48] hover:text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer active:scale-95 group"
            >
              <span>View Full Photo Gallery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
        >
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveImage(null)}
              aria-label="Close Lightbox"
              className="absolute top-2 right-2 sm:-top-12 sm:right-0 bg-black/60 sm:bg-transparent rounded-full p-2.5 text-white hover:text-[#1ca8cb] transition-colors z-20 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <div className="mt-3 text-center text-white px-2">
              <h3 className="text-base sm:text-xl font-bold">{activeImage.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">{activeImage.location}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
