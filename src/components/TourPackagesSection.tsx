import React, { useState } from 'react';
import { TourPackage, Currency, PageView } from '../types';
import { TOUR_PACKAGES } from '../data/mockData';
import { PackageDetailModal } from './PackageDetailModal';
import { 
  Clock, 
  Star, 
  Check, 
  Eye, 
  Send, 
  MapPin, 
  Sparkles,
  ArrowRight,
  MessageCircle,
  Moon,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Users
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

  const categories: { id: string; label: string; isSpiritual?: boolean }[] = [
    { id: 'All', label: 'All Packages' },
    { id: 'Umrah & Spiritual', label: '🕋 Umrah & Spiritual (عمرہ مبارک)', isSpiritual: true },
    { id: 'Popular Holiday', label: 'Popular Holidays' },
    { id: 'Family Tour', label: 'Family Tours' },
    { id: 'Honeymoon Special', label: 'Honeymoon Specials' },
  ];

  const filteredPackages = TOUR_PACKAGES.filter((pkg) => {
    if (selectedCategory === 'All') return true;
    return pkg.category === selectedCategory;
  });

  const handleWhatsAppInquiry = (packageName: string) => {
    const text = `As-salamu alaykum! I would like to inquire about the "${packageName}". Please share the available travel dates, hotel proximity options, and package details.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?phone=923205718477&text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const handleBookNow = (pkg: TourPackage) => {
    if (pkg.category === 'Umrah & Spiritual') {
      onOpenConsultationModal(pkg.destinationName, `Umrah Package: ${pkg.title}`);
    } else {
      onOpenConsultationModal(pkg.destinationName, `Holiday Package: ${pkg.title}`);
    }
  };

  return (
    <section id="packages-section" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E67E22]/10 text-[#E67E22] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Handcrafted Travel Experiences
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2C3E50] tracking-tight">
              Featured Holiday &amp; Spiritual Umrah Packages
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              All-inclusive itineraries featuring 4 &amp; 5-star hotels, verified visa approvals, private transfers, and experienced English &amp; Urdu-speaking guides.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenConsultationModal('Custom Itinerary', 'Holiday Package')}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-[#00A8CC] bg-[#00A8CC]/10 hover:bg-[#00A8CC]/20 transition-colors flex items-center gap-1.5"
            >
              <span>Build Custom Package</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Sacred Umrah Religious Banner & Script Pavilion */}
        <div className="mb-10 rounded-3xl overflow-hidden bg-gradient-to-br from-[#064E3B] via-[#094837] to-[#042820] text-white border-2 border-[#D4AF37]/50 shadow-xl relative">
          {/* Subtle Islamic pattern background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />

          <div className="relative p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content with Religious Script */}
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              {/* Sacred Bismillah Calligraphy */}
              <div className="font-arabic text-[#D4AF37] text-2xl sm:text-3xl font-bold tracking-wider select-none">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </div>

              {/* Talbiyah Tag & Badge */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D4AF37]/25 border border-[#D4AF37]/60 text-[#FCEAA1] text-xs font-bold font-arabic shadow-xs">
                  <Moon className="w-3.5 h-3.5 text-[#D4AF37]" />
                  لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/25 border border-emerald-400/40 text-emerald-200 text-xs font-bold uppercase tracking-wider">
                  Authorized Umrah &amp; Sacred Ziyarat Desk
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Spiritual Umrah Journeys &amp; Makkah-Madinah Ziyarat
              </h3>

              {/* Urdu Nastaliq Religious Script */}
              <div className="font-urdu text-[#FCEAA1] text-xl sm:text-2xl font-bold leading-relaxed pt-1">
                سفرِ حرمین شریفین — عازمینِ عمرہ کے لیے پرسکون رہائش، آسان ویزا اور باوقار خدمات
              </div>

              <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed max-w-xl">
                Experience spiritual peace with tailored VIP and family Umrah packages. Close walking-distance accommodation to Masjid al-Haram and Masjid an-Nabawi, high-speed Haramain Bullet Train, Nusuk Rawdah appointments, and guided historical Ziyarat.
              </p>

              {/* Religious Highlights Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 flex items-center gap-2">
                  <span className="text-base">🕋</span>
                  <span className="font-semibold text-slate-100">Walking Distance Hotels</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 flex items-center gap-2">
                  <span className="text-base">📜</span>
                  <span className="font-semibold text-slate-100">Instant Umrah E-Visa</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 flex items-center gap-2">
                  <span className="text-base">🚄</span>
                  <span className="font-semibold text-slate-100">Haramain Bullet Train</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 flex items-center gap-2">
                  <span className="text-base">🕌</span>
                  <span className="font-semibold text-slate-100">Rawdah Permit Booking</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 flex items-center gap-2">
                  <span className="text-base">🤲</span>
                  <span className="font-semibold text-slate-100">Historical Guided Ziyarat</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 flex items-center gap-2">
                  <span className="text-base">💧</span>
                  <span className="font-semibold text-slate-100">5L Zamzam Included</span>
                </div>
              </div>
            </div>

            {/* Right Action Box: Hot Direct WhatsApp & Counselor */}
            <div className="w-full lg:w-80 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-[#D4AF37]/40 text-center flex flex-col justify-between shrink-0 shadow-lg">
              <div>
                <div className="w-14 h-14 mx-auto rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mb-3 shadow-inner">
                  <Moon className="w-7 h-7" />
                </div>
                <h4 className="font-extrabold text-lg text-white">Dedicated Umrah Desk</h4>
                <div className="font-urdu text-[#D4AF37] text-sm my-1 font-bold">
                  منزل سوچ کی دہلیز پر
                </div>
                <p className="text-xs text-emerald-100 mt-2">
                  Get personalized quotations for your chosen dates, family room sharing (Double / Triple / Quad), and airline preferences.
                </p>
              </div>

              <div className="space-y-2.5 mt-6">
                <button
                  type="button"
                  onClick={() => handleWhatsAppInquiry('Umrah & Spiritual Consultation Desk')}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Contact for Details (WhatsApp)</span>
                </button>
                <button
                  type="button"
                  onClick={() => onOpenConsultationModal('Makkah & Madinah', 'Umrah & Spiritual Package')}
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-white/15 hover:bg-white/25 border border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Book 1-on-1 Umrah Session</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                id={`package-cat-${cat.id.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  isSelected
                    ? cat.isSpiritual
                      ? 'bg-gradient-to-r from-[#064E3B] to-[#0A5C47] text-[#FCEAA1] border border-[#D4AF37] shadow-md'
                      : 'bg-[#00A8CC] text-white shadow-md'
                    : cat.isSpiritual
                    ? 'bg-emerald-50 text-emerald-900 border border-emerald-300 hover:bg-emerald-100'
                    : 'bg-slate-100 text-[#2C3E50] hover:bg-slate-200'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => {
            const isUmrah = pkg.category === 'Umrah & Spiritual';

            return (
              <div
                key={pkg.id}
                id={`package-card-${pkg.id}`}
                className={`group bg-white rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                  isUmrah
                    ? 'border-2 border-amber-400/50 shadow-md hover:shadow-2xl hover:border-[#D4AF37] ring-1 ring-amber-400/20'
                    : 'border border-slate-200 shadow-sm hover:shadow-xl'
                }`}
              >
                {/* Image & Header Tags */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 ${
                    isUmrah 
                      ? 'bg-gradient-to-t from-black/85 via-black/30 to-black/20' 
                      : 'bg-gradient-to-t from-black/80 via-black/20 to-transparent'
                  }`} />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                    {isUmrah ? (
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#D4AF37] text-emerald-950 shadow-md flex items-center gap-1 font-arabic">
                        <Moon className="w-3 h-3 fill-emerald-950" />
                        لَبَّيْكَ اللَّهُمَّ
                      </span>
                    ) : null}
                    {pkg.badge && (
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold shadow-xs ${
                        isUmrah
                          ? 'bg-[#064E3B] text-[#FCEAA1] border border-[#D4AF37]/60'
                          : 'bg-[#E67E22] text-white'
                      }`}>
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold backdrop-blur-xs ${
                      isUmrah
                        ? 'bg-[#064E3B]/90 text-[#FCEAA1] border border-[#D4AF37]/40'
                        : 'bg-white/90 text-[#2C3E50]'
                    }`}>
                      {pkg.category}
                    </span>
                  </div>

                  {/* Destination & Duration Bottom Info */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center justify-between text-xs font-semibold mb-1">
                      <span className={`flex items-center gap-1 ${isUmrah ? 'text-[#FCEAA1]' : 'text-amber-300'}`}>
                        {isUmrah ? '🕋' : <MapPin className="w-3.5 h-3.5 text-[#E67E22]" />}
                        {pkg.destinationName}
                      </span>
                      <span className="flex items-center gap-1 bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded text-[11px]">
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
                        {pkg.hotelRating}-Star Accommodation
                      </span>
                    </div>
                    <span className={`font-medium ${isUmrah ? 'text-emerald-700 font-bold' : 'text-slate-400'}`}>
                      {isUmrah ? 'Sacred Verified Plan' : 'Verified Itinerary'}
                    </span>
                  </div>

                  {/* Key Inclusions Preview */}
                  <div className="space-y-1.5 text-xs text-slate-600">
                    {pkg.inclusions.slice(0, 3).map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 line-clamp-1">
                        <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isUmrah ? 'text-[#064E3B]' : 'text-emerald-500'}`} />
                        <span className="truncate">{inc}</span>
                      </div>
                    ))}
                    {pkg.inclusions.length > 3 && (
                      <span className={`text-[11px] font-bold block pt-0.5 ${isUmrah ? 'text-emerald-800' : 'text-[#00A8CC]'}`}>
                        +{pkg.inclusions.length - 3} more {isUmrah ? 'spiritual inclusions & services' : 'luxury inclusions'}
                      </span>
                    )}
                  </div>

                  {/* Consultation / Contact for Details Block (NO PRICE MENTIONED) */}
                  <div className={`pt-3 border-t flex items-center justify-between ${
                    isUmrah ? 'border-amber-200/80 bg-amber-50/50 -mx-5 -mb-4 px-5 pb-3 rounded-b-xl' : 'border-slate-100'
                  }`}>
                    <div>
                      <span className={`text-[10px] uppercase tracking-wider font-extrabold block ${
                        isUmrah ? 'text-[#064E3B]' : 'text-[#00A8CC]'
                      }`}>
                        {isUmrah ? 'Spiritual Package' : 'Customized Package'}
                      </span>
                      <div className={`text-sm sm:text-base font-extrabold ${
                        isUmrah ? 'text-[#064E3B]' : 'text-[#2C3E50]'
                      }`}>
                        Contact for Details
                      </div>
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                      isUmrah
                        ? 'text-[#064E3B] bg-emerald-100/90 border-emerald-300'
                        : 'text-emerald-700 bg-emerald-50 border-emerald-200/60'
                    }`}>
                      {isUmrah ? 'Custom Dates & Sharing' : 'Quote on Request'}
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
                      <span>{isUmrah ? 'View Ziyarat' : 'View Itinerary'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleBookNow(pkg)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold text-white shadow-xs transition-colors flex items-center justify-center gap-1.5 ${
                        isUmrah
                          ? 'bg-[#064E3B] hover:bg-[#043327]'
                          : 'bg-[#00A8CC] hover:bg-[#0088A8]'
                      }`}
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Contact for Details</span>
                    </button>
                  </div>

                  {/* Quick WhatsApp direct button for Umrah packages */}
                  {isUmrah && (
                    <button
                      type="button"
                      onClick={() => handleWhatsAppInquiry(pkg.title)}
                      className="w-full py-2 px-3 rounded-xl text-[11px] font-bold text-[#064E3B] bg-emerald-100/70 hover:bg-emerald-100 border border-emerald-300 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>WhatsApp Direct Inquiry</span>
                    </button>
                  )}
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
