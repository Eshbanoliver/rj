import React, { useState, useEffect } from 'react';
import { PageType, SearchQuery } from './types';
import { TourPackage } from './data/tours';
import { Destination } from './data/destinations';

// Layout & Common Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { TourDetailsModal } from './components/TourDetailsModal';
import { InquiryModal } from './components/InquiryModal';
import { TermsModal } from './components/TermsModal';

// Home Sections matching Reference UI/UX
import { Hero } from './components/Hero';
import { TourCategories } from './components/TourCategories';
import { PopularDestinations } from './components/PopularDestinations';
import { PlanTripSection } from './components/PlanTripSection';
import { FeaturedTourPackages } from './components/FeaturedTourPackages';
import { GallerySection } from './components/GallerySection';
import { StatsSection } from './components/StatsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PartnerLogos } from './components/PartnerLogos';
import { BlogSection } from './components/BlogSection';

// Dedicated Page Views
import { AboutPage } from './pages/AboutPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { ToursPage } from './pages/ToursPage';
import { ContactPage } from './pages/ContactPage';
import { DeclarationPage } from './pages/DeclarationPage';

const getInitialPage = (): PageType => {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  if (path === 'about') return 'about';
  if (path === 'destinations') return 'destinations';
  if (path === 'trips' || path === 'tours') return 'trips';
  if (path === 'gallery') return 'gallery';
  if (path === 'contact') return 'contact';
  if (path === 'terms') return 'terms';
  if (path === 'declaration') return 'declaration';
  return 'home';
};

export function App() {
  const [currentPage, setCurrentPage] = useState<PageType>(getInitialPage);
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState<boolean>(false);
  const [inquiryData, setInquiryData] = useState<{ tourTitle?: string; message?: string } | undefined>();
  const [isTermsOpen, setIsTermsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<SearchQuery>({
    destination: 'all',
    departureCity: 'all',
    travelDate: '',
    travelers: 1,
    tourType: 'all',
  });

  // Scroll to top and sync history URL upon page navigation
  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    const targetPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ page }, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync state when user uses browser Back / Forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialPage());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (selectedTour || isInquiryOpen || isTermsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedTour, isInquiryOpen, isTermsOpen]);

  const handleOpenInquiry = (initial?: { tourTitle?: string; message?: string }) => {
    setInquiryData(initial);
    setIsInquiryOpen(true);
  };

  const handleSelectTour = (tour: TourPackage) => {
    setSelectedTour(tour);
  };

  const handleSelectDestination = (dest: Destination) => {
    setSelectedDestination(dest);
    handleNavigate('destinations');
  };

  const handleSearchSubmit = (query: SearchQuery) => {
    setSearchQuery(query);
    handleNavigate('trips');
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#fafbfc] text-slate-800 flex flex-col font-sans selection:bg-[#1ca8cb] selection:text-white relative">
      {/* Sticky Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Main Page Rendering */}
      <main className="flex-1 w-full overflow-x-hidden">
        {currentPage === 'home' && (
          <>
            {/* 1. Hero with floating search */}
            <Hero
              onNavigate={handleNavigate}
              onSearch={handleSearchSubmit}
              onOpenInquiry={handleOpenInquiry}
            />

            {/* 2. Tour Categories with arched cards */}
            <TourCategories
              onNavigate={handleNavigate}
            />

            {/* 3. Popular Destination we offer for all (Tour Cards) */}
            <FeaturedTourPackages
              onNavigate={handleNavigate}
              onSelectTour={handleSelectTour}
              onOpenInquiry={handleOpenInquiry}
            />

            {/* 4. Popular Destination Cover Flow Carousel */}
            <PopularDestinations
              onNavigate={handleNavigate}
              onSelectDestination={handleSelectDestination}
            />

            {/* 5. Plan Your Trip With Us (3-capsule collage + 2 features) */}
            <PlanTripSection
              onNavigate={handleNavigate}
              onOpenInquiry={handleOpenInquiry}
            />

            {/* 6. Recent Gallery (4-column layout with center tall photo) */}
            <GallerySection
              onNavigate={handleNavigate}
            />

            {/* 7. Circular Statistics (2+, 97%, 100+, 19k) */}
            <StatsSection />

            {/* 8. What Client Say About us (Testimonials with center card highlighted) */}
            <TestimonialsSection />

            {/* 10. Partner / Brand Logos Strip */}
            <PartnerLogos />

            {/* 11. News & Articles From R Journey (3 blog cards) */}
            <BlogSection
              onNavigate={handleNavigate}
              onOpenInquiry={handleOpenInquiry}
            />
          </>
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentPage === 'destinations' && (
          <DestinationsPage
            onNavigate={handleNavigate}
            onSearch={handleSearchSubmit}
            selectedDestinationInitial={selectedDestination}
          />
        )}

        {currentPage === 'trips' && (
          <ToursPage
            onNavigate={handleNavigate}
            onSelectTour={handleSelectTour}
            onOpenInquiry={handleOpenInquiry}
            initialQuery={searchQuery}
          />
        )}

        {currentPage === 'gallery' && (
          <GallerySection
            onNavigate={handleNavigate}
            isStandalonePage={true}
          />
        )}

        {currentPage === 'contact' && <ContactPage />}

        {(currentPage === 'terms' || currentPage === 'declaration') && (
          <DeclarationPage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}
      </main>

      {/* Modals and Overlays */}
      <TourDetailsModal
        tour={selectedTour}
        onClose={() => setSelectedTour(null)}
        onOpenTerms={() => setIsTermsOpen(true)}
      />

      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialData={inquiryData}
      />

      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />

      {/* Floating CTA & Scroll actions */}
      <FloatingActions />

      {/* Multi-column Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenTerms={() => setIsTermsOpen(true)}
      />
    </div>
  );
}

export default App;
