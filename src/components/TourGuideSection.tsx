import React, { useState } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { InstagramIcon } from './icons';
import { companyData } from '../data/company';

interface Guide {
  name: string;
  role: string;
  image: string;
}

const guides: Guide[] = [
  {
    name: 'Aayush Sharma',
    role: 'Lead Trip Captain',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Sneha Patel',
    role: 'Udaipur Culture Host',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Rahul Dave',
    role: 'Desert Safari Specialist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Pooja Joshi',
    role: 'Community Experience Lead',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
  },
];

export const TourGuideSection: React.FC = () => {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="py-20 sm:py-24 bg-travel-doodles relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading matching reference */}
        <div className="text-center mb-14 sm:mb-16">
          <span className="font-script text-[#1ca8cb] text-3xl sm:text-4xl font-bold tracking-wide inline-block transform -rotate-1">
            Expert Tour
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#113d48] font-heading mt-1 tracking-tight">
            Tour Guide
          </h2>
        </div>

        {/* 4 Guide Cards in a row matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide, idx) => (
            <div
              key={idx}
              className="bg-[#f0f9fb] border border-[#d8f0f6] rounded-3xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Circular Avatar Photo */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:ring-4 group-hover:ring-[#1ca8cb]/40 transition-all duration-300">
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Guide Info */}
              <div className="mt-5">
                <h3 className="text-lg sm:text-xl font-bold text-[#113d48] group-hover:text-[#1ca8cb] transition-colors font-heading">
                  {guide.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  {guide.role}
                </p>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[#d8f0f6]/60 w-full justify-center">
                <a
                  href={companyData.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${guide.name} Instagram`}
                  className="w-8 h-8 rounded-full bg-white text-slate-600 hover:text-[#1ca8cb] hover:shadow-md flex items-center justify-center transition-all"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/${companyData.whatsapp}?text=Hi%20${encodeURIComponent(guide.name)}!%20I%20have%20an%20enquiry%20about%20R%20Journey%20tours.`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${guide.name} WhatsApp`}
                  className="w-8 h-8 rounded-full bg-white text-slate-600 hover:text-[#1ca8cb] hover:shadow-md flex items-center justify-center transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${companyData.phones[0]}`}
                  aria-label={`${guide.name} Phone`}
                  className="w-8 h-8 rounded-full bg-white text-slate-600 hover:text-[#1ca8cb] hover:shadow-md flex items-center justify-center transition-all"
                >
                  <Phone className="w-4 h-4" />
                </a>
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
              aria-label={`Go to guide slide ${dot + 1}`}
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
