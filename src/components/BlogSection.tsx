import React from 'react';
import { ArrowRight, Calendar, MessageSquare } from 'lucide-react';
import { PageType } from '../types';

interface BlogSectionProps {
  onNavigate?: (page: PageType) => void;
  onOpenInquiry?: (initialData?: { tourTitle?: string; message?: string }) => void;
}

const articles = [
  {
    id: 'b1',
    title: 'How 15 Strangers Turn Into Lifelong Friends On A Rajasthan Road Trip',
    date: '14 Oct, 2026',
    comments: '4 Comments',
    image: '/images/udaipur-group-strangers.jpg',
    excerpt: 'Solo travel doesn’t mean traveling alone. Here is how curated ice-breakers, bonfire jams, and shared sunsets create unbreakable bonds.'
  },
  {
    id: 'b2',
    title: 'Top 7 Hidden Sunset Spots In Udaipur You Won’t Find In Ordinary Guidebooks',
    date: '20 Oct, 2026',
    comments: '2 Comments',
    image: '/images/strangers-sunset-community.jpg',
    excerpt: 'Beyond Lake Pichola: discover the secret ridge trails of Bahubali Hills and the golden silence of Rayta pass at golden hour.'
  },
  {
    id: 'b3',
    title: 'What To Pack For Jaisalmer Desert Camping & Sunset Camel Safari',
    date: '28 Oct, 2026',
    comments: '6 Comments',
    image: '/images/jaisalmer-journey-arch.jpg',
    excerpt: 'The ultimate desert checklist: from breathable cottons for daytime dune bashing to cozy layers for stargazing around the campfire.'
  },
];

export const BlogSection: React.FC<BlogSectionProps> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#edf8fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Row: Title on Left, View All Button on Right matching reference */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-16 gap-5">
          <div className="text-center sm:text-left">
            <span className="font-script text-[#1ca8cb] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide inline-block transform -rotate-1">
              News & Article
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#113d48] font-heading mt-1 tracking-tight">
              News & Articles From R Journey
            </h2>
          </div>

          <button
            onClick={() => {
              if (onNavigate) {
                onNavigate('trips');
              } else if (onOpenInquiry) {
                onOpenInquiry({ message: 'I would like to receive the latest travel guides and articles from R Journey.' });
              }
            }}
            className="btn-shimmer w-full sm:w-auto px-6 py-2.5 rounded-full border border-[#113d48] text-[#113d48] hover:bg-[#113d48] hover:text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-sm cursor-pointer text-center active:scale-95 group"
          >
            <span>View All Blog</span>
          </button>
        </div>

        {/* 3 Blog Cards Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          {articles.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-slate-100 card-interactive card-shimmer group transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Date & Comment meta */}
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-medium mb-2">
                    <span className="flex items-center gap-1 group-hover:text-slate-600 transition-colors">
                      <Calendar className="w-3.5 h-3.5 text-[#1ca8cb]" />
                      {item.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 group-hover:text-slate-600 transition-colors">
                      <MessageSquare className="w-3.5 h-3.5 text-[#1ca8cb]" />
                      {item.comments}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-base sm:text-lg text-[#113d48] group-hover:text-[#1ca8cb] transition-colors duration-300 leading-snug font-heading">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="mt-4 pt-3.5 border-t border-slate-100">
                  <button
                    onClick={() => {
                      if (onOpenInquiry) {
                        onOpenInquiry({ tourTitle: item.title, message: `I was reading your article "${item.title}" and would like to know more about this itinerary!` });
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1ca8cb] hover:text-[#113d48] transition-colors group/link cursor-pointer"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
