import React, { useState } from 'react';
import { PageView, Currency } from '../types';
import { DESTINATIONS, CURRENCY_SYMBOLS } from '../data/mockData';
import { 
  Compass, 
  Calendar, 
  Search, 
  ShieldCheck, 
  Award, 
  Users, 
  Plane, 
  Sparkles, 
  ArrowRight,
  Clock,
  CheckCircle2,
  Zap
} from 'lucide-react';
import { NexoLogo } from './NexoLogo';

interface HeroSectionProps {
  onNavigate: (page: PageView) => void;
  onOpenConsultationModal: (prefillDestination?: string) => void;
  currency: Currency;
  onSelectDestination: (destId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenConsultationModal,
  currency,
  onSelectDestination,
}) => {
  const [selectedServiceType, setSelectedServiceType] = useState<'visa' | 'tour' | 'flight'>('tour');
  const [selectedDestination, setSelectedDestination] = useState<string>('azerbaijan-baku');
  const [selectedMonth, setSelectedMonth] = useState<string>('Next 30 Days');
  const [travelers, setTravelers] = useState<number>(2);

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServiceType === 'visa') {
      onNavigate('visa-guide');
    } else if (selectedServiceType === 'tour') {
      onNavigate('packages');
    } else {
      onNavigate('services');
    }
  };

  return (
    <section className="relative w-full bg-[#1E2B37] text-white overflow-hidden">
      {/* Background Image with High-Impact Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=85"
          alt="World travel destinations by Nexo Travel"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform motion-safe:animate-pulse duration-[10000ms]"
        />
        {/* Deep Gradient Overlays for optimal contrast & corporate elegance */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2530] via-[#2C3E50]/90 to-[#00A8CC]/20" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#1E2B37]/60 to-[#1A2530]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-10 pb-16 lg:pt-16 lg:pb-24 flex flex-col items-center text-center">
        
        {/* Emblem Logo Badge */}
        <div className="mb-4 animate-in fade-in zoom-in-90 duration-500">
          <div className="p-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
            <NexoLogo size="lg" variant="badge-only" />
          </div>
        </div>

        {/* Official Urdu Slogan Banner Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E67E22]/20 border border-[#E67E22]/60 shadow-lg backdrop-blur-md mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
          <Sparkles className="w-4 h-4 text-[#E67E22]" />
          <span className="font-urdu text-[#E67E22] text-lg sm:text-xl font-bold tracking-wider">
            منزل سوچ کی دہلیز پر
          </span>
          <span className="text-xs text-amber-200/90 font-medium pl-1 border-l border-amber-400/40 hidden sm:inline">
            Manzil Soch ki Dehleez par
          </span>
        </div>

        {/* Brand Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight">
          Turn Your Dream Journey Into Reality with{' '}
          <span className="text-[#00A8CC] bg-clip-text text-transparent bg-gradient-to-r from-[#00A8CC] via-[#38D2F2] to-[#00A8CC]">
            Nexo Travel &amp; Tours
          </span>
        </h1>

        {/* Value Proposition Description */}
        <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-200 max-w-3xl leading-relaxed font-normal">
          Premier visa consultancy, guaranteed flight bookings, and tailor-made international tour packages. Fast approvals, 100% transparent processing, and expert guidance for Azerbaijan, Turkey, UAE, Malaysia, Saudi Arabia, and beyond.
        </p>

        {/* Primary Call-to-Action (CTA) Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          <button
            id="hero-explore-packages-btn"
            onClick={() => onNavigate('packages')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#00A8CC] hover:bg-[#0088A8] shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
          >
            <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            <span>Explore Tour Packages</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="hero-book-consultation-btn"
            onClick={() => onOpenConsultationModal()}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#E67E22] hover:bg-[#D35400] shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Free Visa Consultation</span>
          </button>

          <button
            id="hero-visa-checker-btn"
            onClick={() => onNavigate('visa-guide')}
            className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-bold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-5 h-5 text-[#00A8CC]" />
            <span>Check Visa Requirements</span>
          </button>
        </div>

        {/* Interactive Quick Search / Filter Card */}
        <div className="mt-12 w-full max-w-5xl bg-white/95 backdrop-blur-md text-[#2C3E50] rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/40">
          {/* Service Selector Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-4 overflow-x-auto">
            <button
              type="button"
              onClick={() => setSelectedServiceType('tour')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                selectedServiceType === 'tour'
                  ? 'bg-[#00A8CC] text-white shadow-xs'
                  : 'bg-slate-100 text-[#2C3E50] hover:bg-slate-200'
              }`}
            >
              <Compass className="w-4 h-4" />
              Holiday Tour Packages
            </button>
            <button
              type="button"
              onClick={() => setSelectedServiceType('visa')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                selectedServiceType === 'visa'
                  ? 'bg-[#00A8CC] text-white shadow-xs'
                  : 'bg-slate-100 text-[#2C3E50] hover:bg-slate-200'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              Visa Consultancy &amp; E-Visa
            </button>
            <button
              type="button"
              onClick={() => setSelectedServiceType('flight')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                selectedServiceType === 'flight'
                  ? 'bg-[#00A8CC] text-white shadow-xs'
                  : 'bg-slate-100 text-[#2C3E50] hover:bg-slate-200'
              }`}
            >
              <Plane className="w-4 h-4" />
              Flights &amp; Hotels
            </button>
          </div>

          {/* Search Fields Grid */}
          <form onSubmit={handleQuickSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-left">
            {/* Destination Selection */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Destination
              </label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-sm font-semibold text-[#2C3E50] focus:ring-2 focus:ring-[#00A8CC] focus:outline-none cursor-pointer"
              >
                {DESTINATIONS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.country} ({d.name})
                  </option>
                ))}
              </select>
            </div>

            {/* Travel Month */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Travel Month / Season
              </label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-sm font-semibold text-[#2C3E50] focus:ring-2 focus:ring-[#00A8CC] focus:outline-none cursor-pointer"
              >
                <option value="Next 30 Days">Immediate (Next 30 Days)</option>
                <option value="Spring 2026">Spring (March - May 2026)</option>
                <option value="Summer 2026">Summer Vacation (June - August 2026)</option>
                <option value="Autumn 2026">Autumn (September - November 2026)</option>
                <option value="Umrah Season">Umrah Season (All Year)</option>
              </select>
            </div>

            {/* Travelers Count */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Travelers
              </label>
              <select
                value={travelers}
                onChange={(e) => setTravelers(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-sm font-semibold text-[#2C3E50] focus:ring-2 focus:ring-[#00A8CC] focus:outline-none cursor-pointer"
              >
                <option value={1}>1 Solo Traveler</option>
                <option value={2}>2 Adults (Couple / Pair)</option>
                <option value={3}>3 Adults</option>
                <option value={4}>4 Persons (Family / Group)</option>
                <option value={6}>5+ Group / Corporate</option>
              </select>
            </div>

            {/* Action Search Button */}
            <div className="flex items-end">
              <button
                type="submit"
                id="hero-quick-search-submit"
                className="w-full py-2.5 px-4 rounded-lg bg-[#00A8CC] hover:bg-[#0088A8] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Search {selectedServiceType === 'visa' ? 'Visas' : 'Packages'}</span>
              </button>
            </div>
          </form>

          {/* Quick Destination Pill Highlights */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 font-semibold">Popular Right Now:</span>
            {DESTINATIONS.slice(0, 5).map((dest) => (
              <button
                key={dest.id}
                type="button"
                onClick={() => {
                  onSelectDestination(dest.id);
                  onNavigate('destinations');
                }}
                className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-[#00A8CC]/15 hover:text-[#00A8CC] text-slate-600 font-medium transition-colors"
              >
                {dest.country} ({dest.visaType.split(' ')[0]})
              </button>
            ))}
          </div>
        </div>

        {/* Corporate Value Pillars & Launch Commitments Bar */}
        <div className="mt-12 w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/15 hover:bg-white/10 hover:border-[#00A8CC]/40 transition-all duration-300 group">
            <div className="w-9 h-9 rounded-xl bg-[#00A8CC]/20 text-[#00A8CC] flex items-center justify-center mx-auto mb-2.5 group-hover:scale-110 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <div className="text-sm sm:text-base font-bold text-white tracking-wide">Thought to Destination</div>
            <div className="text-xs text-slate-300 font-medium mt-0.5">Bespoke Curated Itineraries</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/15 hover:bg-white/10 hover:border-[#E67E22]/40 transition-all duration-300 group">
            <div className="w-9 h-9 rounded-xl bg-[#E67E22]/20 text-[#E67E22] flex items-center justify-center mx-auto mb-2.5 group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-sm sm:text-base font-bold text-white tracking-wide">Personalized Care</div>
            <div className="text-xs text-slate-300 font-medium mt-0.5">Dedicated 1-on-1 Visa Counselors</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/15 hover:bg-white/10 hover:border-[#00A8CC]/40 transition-all duration-300 group">
            <div className="w-9 h-9 rounded-xl bg-[#00A8CC]/20 text-[#00A8CC] flex items-center justify-center mx-auto mb-2.5 group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-sm sm:text-base font-bold text-white tracking-wide">Digital Speed</div>
            <div className="text-xs text-slate-300 font-medium mt-0.5">Express E-Visa &amp; Instant Vouchers</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/15 hover:bg-white/10 hover:border-[#E67E22]/40 transition-all duration-300 group">
            <div className="w-9 h-9 rounded-xl bg-[#E67E22]/20 text-[#E67E22] flex items-center justify-center mx-auto mb-2.5 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-sm sm:text-base font-bold text-white tracking-wide">Pure Transparency</div>
            <div className="text-xs text-slate-300 font-medium mt-0.5">Zero Hidden Charges or Markups</div>
          </div>
        </div>

      </div>
    </section>
  );
};
