import React, { useState } from 'react';
import { TourPackage, Currency, PageView } from '../types';
import { TOUR_PACKAGES, CURRENCY_SYMBOLS } from '../data/mockData';
import { PackageDetailModal } from './PackageDetailModal';
import { 
  Compass, 
  Clock, 
  Star, 
  Check, 
  Eye, 
  Send, 
  MapPin, 
  Sparkles,
  Plane,
  ArrowRight
} from 'lucide-react';

interface TourPackagesSectionProps {
  currency: Currency;
  onNavigate: (page: PageView) => void;
  onOpenConsultationModal: (destination?: string, service?: string) => void;
}

export const TourPackagesSection: React.FC<TourPackagesSectionProps> = ({
  currency,
  onNavigate,
  onOpenConsultationModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPackageForDetail, setSelectedPackageForDetail] = useState<TourPackage | null>(null);

  const categories = ['All', 'Popular Holiday', 'Umrah & Spiritual', 'Family Tour', 'Honeymoon Special'];

  const filteredPackages = TOUR_PACKAGES.filter((pkg) => {
    if (selectedCategory === 'All') return true;
    return pkg.category === selectedCategory;
  });

  const currencySymbol = CURRENCY_SYMBOLS[currency] || '$';

  const handleBookNow = (pkg: TourPackage) => {
    onOpenConsultationModal(pkg.destinationName, 'Holiday Package');
  };

  return (
    <section id="packages-section" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E67E22]/10 text-[#E67E22] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Handcrafted Travel Experiences
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2C3E50] tracking-tight">
              Featured Holiday &amp; Spiritual Tour Packages
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              All-inclusive itineraries featuring 4 &amp; 5-star hotels, verified visa approvals, private transfers, and English/Urdu speaking guides.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenConsultationModal('Custom Itinerary', 'Holiday Package')}
              className="px-4 py-2 rounded-xl text-xs font-bold text-[#00A8CC] bg-[#00A8CC]/10 hover:bg-[#00A8CC]/20 transition-colors flex items-center gap-1.5"
            >
              <span>Build Custom Package</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`package-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#00A8CC] text-white shadow-md'
                  : 'bg-slate-100 text-[#2C3E50] hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => {
            const price = pkg.pricePerPerson[currency].toLocaleString();

            return (
              <div
                key={pkg.id}
                id={`package-card-${pkg.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image & Header Tags */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top Badge */}
                  {pkg.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#E67E22] text-white shadow-md">
                        {pkg.badge}
                      </span>
                    </div>
                  )}

                  {/* Category Pill */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-xs text-[#2C3E50]">
                      {pkg.category}
                    </span>
                  </div>

                  {/* Destination & Duration Bottom Info */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center justify-between text-xs font-semibold mb-1">
                      <span className="flex items-center gap-1 text-amber-300">
                        <MapPin className="w-3.5 h-3.5 text-[#E67E22]" />
                        {pkg.destinationName}
                      </span>
                      <span className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded text-[11px]">
                        <Clock className="w-3 h-3 text-[#00A8CC]" />
                        {pkg.durationDays}D / {pkg.durationNights}N
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold line-clamp-1">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  {/* Rating & Hotel Tier */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(pkg.hotelRating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                      <span className="text-slate-600 font-semibold ml-1">
                        {pkg.hotelRating}-Star Hotel
                      </span>
                    </div>
                    <span className="text-slate-400 font-medium">Verified Itinerary</span>
                  </div>

                  {/* Key Inclusions Preview */}
                  <div className="space-y-1.5 text-xs text-slate-600">
                    {pkg.inclusions.slice(0, 3).map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 line-clamp-1">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="truncate">{inc}</span>
                      </div>
                    ))}
                    {pkg.inclusions.length > 3 && (
                      <span className="text-[11px] text-[#00A8CC] font-bold block pt-0.5">
                        +{pkg.inclusions.length - 3} more luxury inclusions
                      </span>
                    )}
                  </div>

                  {/* Package Consultation Block */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#00A8CC] font-bold block">
                        Customized Package
                      </span>
                      <div className="text-sm sm:text-base font-bold text-[#2C3E50]">
                        Tailored Itinerary
                      </div>
                    </div>
                    <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                      Quote on Request
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setSelectedPackageForDetail(pkg)}
                      className="py-2.5 px-3 rounded-xl text-xs font-bold text-[#2C3E50] bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#00A8CC]" />
                      <span>View Itinerary</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleBookNow(pkg)}
                      className="py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-[#00A8CC] hover:bg-[#0088A8] shadow-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Book Now</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Package Detail Modal */}
      <PackageDetailModal
        tourPackage={selectedPackageForDetail}
        onClose={() => setSelectedPackageForDetail(null)}
        currency={currency}
        onBookNow={handleBookNow}
      />
    </section>
  );
};
