import React, { useState } from 'react';
import { TourPackage, Currency } from '../types';
import { CURRENCY_SYMBOLS } from '../data/mockData';
import { 
  X, 
  Star, 
  Calendar, 
  Clock, 
  Check, 
  X as CrossIcon, 
  MapPin, 
  Users, 
  ShieldCheck, 
  Send,
  Sparkles,
  PhoneCall,
  Moon,
  MessageCircle
} from 'lucide-react';

interface PackageDetailModalProps {
  tourPackage: TourPackage | null;
  onClose: () => void;
  currency: Currency;
  onBookNow: (pkg: TourPackage) => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  tourPackage,
  onClose,
  currency,
  onBookNow
}) => {
  if (!tourPackage) return null;

  const [activeDay, setActiveDay] = useState<number>(1);
  const isUmrah = tourPackage.category === 'Umrah & Spiritual';

  const handleWhatsAppInquiry = () => {
    const text = `As-salamu alaykum! I am interested in the "${tourPackage.title}". Please provide full package details, dates, and accommodation options.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?phone=923205718477&text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 flex flex-col">
        
        {/* Sticky Header with Close */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-[#E67E22] uppercase tracking-wider">
              {tourPackage.category}
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#2C3E50] line-clamp-1">
              {tourPackage.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Religious Script Banner for Umrah Packages */}
          {isUmrah && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#064E3B] via-[#094837] to-[#042820] text-[#FCEAA1] border border-[#D4AF37]/50 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center shrink-0">
                  <Moon className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="font-arabic text-base sm:text-lg font-bold text-[#FCEAA1] tracking-wide">
                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ &bull; لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ
                  </div>
                  <div className="text-[11px] text-emerald-200">
                    Sacred Pilgrimage to Makkah al-Mukarramah &amp; Madinah al-Munawwarah
                  </div>
                </div>
              </div>
              <div className="font-urdu text-[#FCEAA1] text-sm font-bold shrink-0">
                منزل سوچ کی دہلیز پر
              </div>
            </div>
          )}

          {/* Main Visual & Key Stats Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner">
              <img
                src={tourPackage.image}
                alt={tourPackage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-1 text-xs text-amber-300 font-semibold mb-1">
                  {isUmrah ? '🕋' : <MapPin className="w-4 h-4 text-[#E67E22]" />}
                  <span>{tourPackage.destinationName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(tourPackage.hotelRating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-200">
                    {tourPackage.hotelRating}-Star Verified Accommodation
                  </span>
                </div>
              </div>
            </div>

            {/* Price & Summary Box - NO PRICE MENTIONED, CONTACT FOR DETAILS */}
            <div className={`p-5 rounded-xl border flex flex-col justify-between ${
              isUmrah 
                ? 'bg-emerald-50/60 border-[#D4AF37]/50' 
                : 'bg-slate-50 border-slate-200/80'
            }`}>
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold mb-1">
                  <Clock className={`w-4 h-4 ${isUmrah ? 'text-[#064E3B]' : 'text-[#00A8CC]'}`} />
                  <span>{tourPackage.durationDays} Days / {tourPackage.durationNights} Nights</span>
                </div>

                <div className="mt-2">
                  <span className={`text-xs uppercase tracking-wider font-extrabold block ${
                    isUmrah ? 'text-[#064E3B]' : 'text-[#00A8CC]'
                  }`}>
                    {isUmrah ? 'Spiritual Umrah Package' : 'Custom Tour Plan'}
                  </span>
                  <div className={`text-xl sm:text-2xl font-extrabold ${
                    isUmrah ? 'text-[#064E3B]' : 'text-[#2C3E50]'
                  }`}>
                    Contact for Details
                  </div>
                  <span className="text-xs text-slate-500 block mt-1">
                    {isUmrah 
                      ? 'Tailored to your selected dates, room sharing (Quad / Triple / Double), and airline preferences.'
                      : 'Tailored to your travel dates, flights & hotel category.'
                    }
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{isUmrah ? 'Saudi Visa & Medical Insurance' : 'Includes Visa Assistance'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className={`w-4 h-4 shrink-0 ${isUmrah ? 'text-[#064E3B]' : 'text-[#00A8CC]'}`} />
                    <span>{isUmrah ? 'Family, Individual & Group Sharing' : 'Private & Group Options'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#E67E22] shrink-0" />
                    <span>{isUmrah ? 'Historical Ziyarat & Nusuk Assistance' : 'Bespoke Customization Available'}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                {isUmrah ? (
                  <>
                    <button
                      type="button"
                      onClick={handleWhatsAppInquiry}
                      className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Contact for Details (WhatsApp)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onBookNow(tourPackage);
                      }}
                      className="w-full py-2.5 rounded-xl bg-[#064E3B] hover:bg-[#043327] text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Book 1-on-1 Consultation</span>
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onBookNow(tourPackage);
                    }}
                    className="w-full py-3 rounded-xl bg-[#00A8CC] hover:bg-[#0088A8] text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Contact for Details</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Day-by-Day Itinerary Tabs */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-base font-bold text-[#2C3E50] flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#00A8CC]" />
                <span>Detailed Day-by-Day Itinerary</span>
              </h4>
              <span className="text-xs text-slate-400 font-medium">Click day to preview</span>
            </div>

            {/* Day selector pill track */}
            <div className="flex gap-2 overflow-x-auto pb-2 mb-3">
              {tourPackage.itinerary.map((item) => (
                <button
                  key={item.day}
                  type="button"
                  onClick={() => setActiveDay(item.day)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                    activeDay === item.day
                      ? 'bg-[#00A8CC] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Day {item.day}
                </button>
              ))}
            </div>

            {/* Active Day Detail Card */}
            {tourPackage.itinerary.find((it) => it.day === activeDay) && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 animate-in fade-in duration-200">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded-md bg-[#00A8CC]/20 text-[#00A8CC] text-xs font-black">
                    DAY {activeDay}
                  </span>
                  <h5 className="font-bold text-sm text-[#2C3E50]">
                    {tourPackage.itinerary.find((it) => it.day === activeDay)?.title}
                  </h5>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                  {tourPackage.itinerary.find((it) => it.day === activeDay)?.description}
                </p>
              </div>
            )}
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Inclusions */}
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80">
              <h5 className="text-xs font-extrabold text-emerald-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                What's Included in this Tour:
              </h5>
              <ul className="space-y-1.5 text-xs text-emerald-950">
                {tourPackage.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200/80">
              <h5 className="text-xs font-extrabold text-rose-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <CrossIcon className="w-4 h-4 text-rose-500" />
                Package Exclusions:
              </h5>
              <ul className="space-y-1.5 text-xs text-rose-950">
                {tourPackage.exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-urdu text-[#E67E22] text-sm font-bold">
              منزل سوچ کی دہلیز پر
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">• Nexo Quality Assurance</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none py-2.5 px-4 rounded-xl text-xs font-bold text-slate-600 bg-white hover:bg-slate-100 border border-slate-200 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                if (isUmrah) {
                  handleWhatsAppInquiry();
                } else {
                  onClose();
                  onBookNow(tourPackage);
                }
              }}
              className={`flex-1 sm:flex-none py-2.5 px-6 rounded-xl text-xs font-bold text-white shadow-sm transition-colors flex items-center justify-center gap-2 ${
                isUmrah 
                  ? 'bg-[#064E3B] hover:bg-[#043327]' 
                  : 'bg-[#00A8CC] hover:bg-[#0088A8]'
              }`}
            >
              {isUmrah ? <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" /> : <Send className="w-3.5 h-3.5" />}
              <span>{isUmrah ? 'Contact for Details' : 'Inquire & Reserve'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
