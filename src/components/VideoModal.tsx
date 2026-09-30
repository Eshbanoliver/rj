import React, { useEffect } from 'react';
import { X, Play } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-[#1ca8cb] text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Embed */}
        <div className="relative pt-[56.25%] w-full bg-slate-900">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/gU9QZ9B7ZfU?autoplay=1&mute=0&controls=1&rel=0"
            title="R Journey Rajasthan Experience"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Video Caption Bar */}
        <div className="p-4 bg-slate-950 text-white flex items-center justify-between">
          <div>
            <h4 className="font-bold text-base text-white">Experience Rajasthan with 15 Strangers</h4>
            <p className="text-xs text-slate-400">Udaipur • Jodhpur • Jaisalmer • Palm Valley Resort • Sam Sand Dunes</p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1ca8cb]/20 text-[#1ca8cb] text-xs font-semibold">
            <Play className="w-3 h-3 fill-current" />
            Official Reel
          </span>
        </div>
      </div>
    </div>
  );
};
