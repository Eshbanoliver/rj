import React from 'react';
import { PageType } from '../types';
import { Users, Heart, Sparkles, Flame, ArrowRight } from 'lucide-react';

interface TravelStoryProps {
  onNavigate: (page: PageType) => void;
  onOpenInquiry: (initialData?: { tourTitle?: string }) => void;
}

export const TravelStory: React.FC<TravelStoryProps> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Story Collage (6 cols) */}
          <div className="lg:col-span-6 relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src="/images/udaipur-group-strangers.jpg"
                alt="15 Strangers Travel Community - R Journey"
                className="w-full h-[440px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Floating Quote Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md border border-slate-200 p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The 15 Strangers Creed</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 font-semibold italic">
                  "Where Strangers Meet, Stories Begin & Memories Last Forever."
                </p>
              </div>
            </div>

            {/* Floating Top Mini Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-tr from-amber-500 to-orange-500 text-white font-bold text-xs px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>15 Strangers • 1 Journey</span>
            </div>
          </div>

          {/* Right Column: Storytelling Content (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-amber-600 uppercase">
              <Heart className="w-3.5 h-3.5" />
              <span>Travel Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight leading-tight">
              Travel More. <br />
              <span className="text-amber-500">Experience More.</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We started <strong>R Journey Tour & Travel</strong> with one simple conviction: the greatest souvenir you can ever bring back from a journey isn't a photograph — it's the genuine friendships and memories forged on the road.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Whether you are a solo traveler taking your very first leap, a group of college friends looking for an unforgettable getaway, or an explorer eager to experience Rajasthan's forts and dunes without the hassle of planning, our trips are built for you.
            </p>

            {/* 3 Value Points directly from brochure */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">
                    Turning Strangers Into Best Friends
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Engaging ice-breaker games, group conversations, and music make connecting effortless from the very first hour.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">
                    Desert Thrills & Hillside Pool Parties
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Jeep dune bashing and sunset camel rides in Jaisalmer, plus rooftop DJ nights and pool parties at Palm Valley Resort Udaipur.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('trips')}
                className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 shadow-md shadow-orange-500/20 active:scale-95 transition-all flex items-center gap-2"
              >
                <span>Find Your Next Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenInquiry()}
                className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
              >
                <span>Customize A Private Trip</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
