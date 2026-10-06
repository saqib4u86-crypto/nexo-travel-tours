import React, { useState } from 'react';
import { Destination, Currency, PageView } from '../types';
import { DESTINATIONS, CURRENCY_SYMBOLS } from '../data/mockData';
import { 
  Compass, 
  Clock, 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  MapPin, 
  ShieldCheck, 
  Sparkles,
  Calendar,
  Layers,
  ChevronRight,
  Info
} from 'lucide-react';

interface DestinationGridProps {
  currency: Currency;
  onNavigate: (page: PageView) => void;
  onOpenConsultationModal: (prefillDestination?: string) => void;
  selectedDestinationId?: string;
}

export const DestinationGrid: React.FC<DestinationGridProps> = ({
  currency,
  onNavigate,
  onOpenConsultationModal,
  selectedDestinationId
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedDestinationModal, setSelectedDestinationModal] = useState<Destination | null>(
    selectedDestinationId ? DESTINATIONS.find(d => d.id === selectedDestinationId) || null : null
  );

  const filterOptions = ['All', 'E-Visa (Instant)', 'Middle East', 'Europe', 'Central Asia', 'Southeast Asia'];

  const filteredDestinations = DESTINATIONS.filter((dest) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'E-Visa (Instant)') return dest.visaType.includes('E-Visa');
    return dest.region === activeFilter;
  });

  const currencySymbol = CURRENCY_SYMBOLS[currency] || '$';

  return (
    <section id="destinations-section" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A8CC]/10 text-[#00A8CC] text-xs font-bold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5" />
              World Class Destinations
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2C3E50] tracking-tight">
              Top Global &amp; Regional Travel Hubs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              From instant e-visas to comprehensive holiday packages, explore our highest-rated destinations with verified visa support.
            </p>
          </div>

          {/* Slogan accent snippet */}
          <div className="hidden lg:block text-right">
            <span className="font-urdu text-lg font-bold text-[#E67E22] block">
              منزل سوچ کی دہلیز پر
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Seamless Visa Processing &amp; Private Tours
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              id={`dest-filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeFilter === filter
                  ? 'bg-[#00A8CC] text-white shadow-md'
                  : 'bg-white text-[#2C3E50] hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDestinations.map((dest) => {
            const packagePrice = dest.startingPackagePrice[currency].toLocaleString();
            const visaFee = dest.visaFeeEstimate[currency].toLocaleString();

            return (
              <div
                key={dest.id}
                id={`destination-card-${dest.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-slate-200/90 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
              >
                {/* Card Top / Image Area */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={dest.image}
                    alt={`${dest.country} - ${dest.name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Visa Type Pill Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#00A8CC] text-white shadow-sm flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      {dest.visaType}
                    </span>
                  </div>

                  {/* Region Tag */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-xs text-[#2C3E50]">
                      {dest.region}
                    </span>
                  </div>

                  {/* Destination Titles on Image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-1 text-xs text-amber-300 font-semibold mb-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#E67E22]" />
                      <span>{dest.country}</span>
                    </div>
                    <h3 className="text-lg font-bold leading-snug drop-shadow-xs">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                {/* Card Middle / Specs */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                    {dest.tagline}
                  </p>

                  <div className="space-y-2 py-2 border-y border-slate-100 text-xs">
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="flex items-center gap-1 text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-[#00A8CC]" />
                        Processing:
                      </span>
                      <span className="font-semibold text-[#2C3E50]">{dest.processingTime.split('(')[0]}</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-600">
                      <span className="flex items-center gap-1 text-slate-500">
                        <FileText className="w-3.5 h-3.5 text-[#E67E22]" />
                        Advisory Support:
                      </span>
                      <span className="font-bold text-emerald-600">Full Guidance</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-600">
                      <span className="flex items-center gap-1 text-slate-500">
                        <Calendar className="w-3.5 h-3.5 text-[#00A8CC]" />
                        Best Time:
                      </span>
                      <span className="font-medium text-slate-700">{dest.bestSeason}</span>
                    </div>
                  </div>

                  {/* Highlights Pill preview */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {dest.popularSpots.slice(0, 2).map((spot, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                        {spot}
                      </span>
                    ))}
                    {dest.popularSpots.length > 2 && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-500 font-semibold">
                        +{dest.popularSpots.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Bottom / Custom Tour & CTAs */}
                <div className="p-4 pt-0 bg-white">
                  <div className="pt-2 flex items-center justify-between mb-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#00A8CC] font-bold block">
                        Tour Packages
                      </span>
                      <span className="text-sm font-bold text-[#2C3E50]">
                        Custom Itineraries
                      </span>
                    </div>
                    <span className="text-[11px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      Available
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedDestinationModal(dest)}
                      className="py-2 px-2.5 rounded-lg text-xs font-bold text-[#2C3E50] bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1"
                    >
                      <Info className="w-3.5 h-3.5 text-[#00A8CC]" />
                      <span>Visa Specs</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenConsultationModal(dest.country)}
                      className="py-2 px-2.5 rounded-lg text-xs font-bold text-white bg-[#00A8CC] hover:bg-[#0088A8] transition-colors flex items-center justify-center gap-1 shadow-xs"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#2C3E50] to-[#1E2B37] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-700">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-[#E67E22]" />
              <span className="font-urdu text-[#E67E22] text-base font-bold">
                منزل سوچ کی دہلیز پر
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Looking for a destination not listed here?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              We provide visa consultancy and custom itinerary curation for over 50+ countries worldwide including Japan, Canada, Australia, Singapore, and China.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultationModal('Custom Global Destination')}
            className="shrink-0 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#E67E22] hover:bg-[#D35400] transition-colors shadow-lg flex items-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Consult Our Visa Desk</span>
          </button>
        </div>

      </div>

      {/* Destination Visa Details Modal */}
      {selectedDestinationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedDestinationModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#00A8CC]/15 flex items-center justify-center text-[#00A8CC]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#E67E22] uppercase tracking-wider">
                  Official Visa &amp; Travel Guide
                </span>
                <h3 className="text-2xl font-extrabold text-[#2C3E50]">
                  {selectedDestinationModal.country} ({selectedDestinationModal.name})
                </h3>
              </div>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-xl mb-5 border border-slate-200/80 text-xs">
              <div>
                <span className="text-slate-400 block font-medium">Visa Category</span>
                <span className="font-bold text-[#00A8CC]">{selectedDestinationModal.visaType}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Inquiries &amp; Advisory</span>
                <span className="font-bold text-[#00A8CC]">
                  Consultation Desk
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-slate-400 block font-medium">Turnaround</span>
                <span className="font-bold text-slate-800">{selectedDestinationModal.processingTime}</span>
              </div>
            </div>

            {/* Required Documents Checklist */}
            <div className="mb-5">
              <h4 className="text-sm font-bold text-[#2C3E50] mb-2.5 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#00A8CC]" />
                Mandatory Documentation Checklist:
              </h4>
              <ul className="space-y-2 text-xs text-slate-600 bg-white p-3 rounded-lg border border-slate-100">
                {selectedDestinationModal.documentsRequired.map((doc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Attractions */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-[#2C3E50] mb-2 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#E67E22]" />
                Iconic Sightseeing Highlights:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedDestinationModal.popularSpots.map((spot, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-[#00A8CC]/10 text-[#00A8CC] text-xs font-semibold">
                    {spot}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setSelectedDestinationModal(null);
                  onOpenConsultationModal(selectedDestinationModal.country);
                }}
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#00A8CC] hover:bg-[#0088A8] shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Apply for {selectedDestinationModal.country} Visa</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedDestinationModal(null);
                  onNavigate('packages');
                }}
                className="py-3 px-4 rounded-xl text-xs font-bold text-[#2C3E50] bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5"
              >
                <Compass className="w-4 h-4 text-[#00A8CC]" />
                <span>View Full Packages</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
