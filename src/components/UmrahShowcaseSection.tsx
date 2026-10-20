import React, { useState } from 'react';
import { PageView } from '../types';
import { 
  Moon, 
  Sparkles, 
  MessageCircle, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Users, 
  ShieldCheck, 
  Heart, 
  PhoneCall, 
  ArrowRight,
  Compass,
  Star,
  ChevronRight,
  Train,
  Check
} from 'lucide-react';

interface UmrahShowcaseSectionProps {
  onOpenConsultationModal: (destination?: string, service?: string) => void;
  onNavigate?: (page: PageView) => void;
  isStandalonePage?: boolean;
}

interface UmrahPackageItem {
  id: string;
  title: string;
  urduTitle: string;
  duration: string;
  hotelTier: string;
  makkahHotel: string;
  madinahHotel: string;
  transport: string;
  badge: string;
  inclusions: string[];
  bestFor: string;
  image: string;
}

export const UmrahShowcaseSection: React.FC<UmrahShowcaseSectionProps> = ({
  onOpenConsultationModal,
  onNavigate,
  isStandalonePage = false,
}) => {
  const [activeTab, setActiveTab] = useState<'packages' | 'ziyarat' | 'services'>('packages');
  const [selectedPackageId, setSelectedPackageId] = useState<string>('vip-10d');

  const umrahPackages: UmrahPackageItem[] = [
    {
      id: 'vip-10d',
      title: '10-Day VIP Executive Umrah & Ziyarat Package',
      urduTitle: '۱۰ روزہ وی آئی پی ایگزیکٹو عمرہ پیکیج',
      duration: '10 Days / 9 Nights',
      hotelTier: '5-Star Clock Tower & Proximity',
      makkahHotel: 'Fairmont Clock Tower / Swissôtel / Jabal Omar (Steps to Mataf)',
      madinahHotel: 'Dar Al Taqwa / Oberoi / Frontel Central Markazia (Haram View)',
      transport: 'VIP Haramain Bullet Train First Class + Private GMC Yukon',
      badge: 'Most Revered Experience',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
      bestFor: 'Couples, VIP Executives & Families wanting zero walking strain',
      inclusions: [
        '5 Nights Makkah at 5-Star Hotel directly overlooking the Holy Kaaba',
        '4 Nights Madinah at 5-Star Central Markazia hotel facing Masjid an-Nabawi',
        'High-Speed Haramain Bullet Train First Class VIP tickets',
        'Private chauffeur-driven GMC Yukon transfer throughout the journey',
        'Priority Nusuk Rawdah Sharif (Riaz-ul-Jannah) permit facilitation',
        'Exclusive private historical Ziyarat with dedicated Urdu/English scholar',
        'Complimentary 5-Litre packed Zamzam water container per pilgrim',
        '24/7 dedicated personal concierge in Makkah and Madinah'
      ]
    },
    {
      id: 'family-15d',
      title: '15-Day Deluxe Family Umrah & Complete Ziyarat',
      urduTitle: '۱۵ روزہ فیملی ڈیلکس عمرہ مع مکمل زیارات',
      duration: '15 Days / 14 Nights',
      hotelTier: '5-Star / 4-Star Walking Distance',
      makkahHotel: 'Anjum Hotel / Jabal Omar / Pullman Zamzam (3-5 min walk)',
      madinahHotel: 'Pullman Zamzam / Al Aqeeq / Frontel (Walking distance)',
      transport: 'Dedicated Family AC Luxury Staria / Hiace or Haramain Train',
      badge: 'Family Favorite',
      image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&q=80',
      bestFor: 'Families with children or elderly parents requiring spacious room sharing',
      inclusions: [
        '8 Nights Makkah at premium walking-distance hotel to Haram courtyard',
        '6 Nights Madinah in central Markazia within easy walking distance',
        'Comfortable room configurations: Quad, Triple, or Double sharing',
        'Instant Saudi Umrah / Tourist E-Visa with full health insurance',
        'Comprehensive Makkah Ziyarat: Cave Hira, Cave Thawr, Arafat, Mina, Muzdalifah',
        'Sacred Madinah Ziyarat: Masjid Quba, Mount Uhud, Masjid Qiblatain, Khandaq',
        'Assisted booking for Rawdah Mubarak slots on official Nusuk portal',
        '5L Zamzam water container per passenger on departure'
      ]
    },
    {
      id: 'economy-14d',
      title: '14-Day Affordable Spiritual Economy Group Package',
      urduTitle: '۱۴ روزہ باوقار و پرسکون اکانومی گروپ عمرہ',
      duration: '14 Days / 13 Nights',
      hotelTier: 'Quality Verified 4-Star / Shuttle Hotel',
      makkahHotel: 'Comfortable hotel (350-500m walk or 24/7 private continuous shuttle)',
      madinahHotel: 'Central Markazia North / South hotel (Within easy walking distance)',
      transport: 'Air-conditioned luxury coaster / express transport with group guide',
      badge: 'Best Value Pilgrimage',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
      bestFor: 'Spiritual seekers looking for budget savings without compromising peace & cleanliness',
      inclusions: [
        '7 Nights in Makkah with seamless access to Haram prayer halls',
        '6 Nights in Madinah within short stroll to Bab-as-Salam',
        'Complete Saudi Umrah Visa processing & medical insurance',
        'Experienced Urdu-speaking religious group guide throughout the stay',
        'Organized group Ziyarat tours in both Holy Cities',
        'Dedicated group assistance for Rawdah Mubarak Nusuk registration',
        '5L Zamzam voucher per pilgrim upon departure',
        '24/7 on-ground Pakistani support team in Makkah'
      ]
    },
    {
      id: 'express-7d',
      title: '7-Day Executive Express Umrah & Sacred Retreat',
      urduTitle: '۷ روزہ ایگزیکٹو ایکسپریس عمرہ اعتکاف',
      duration: '7 Days / 6 Nights',
      hotelTier: 'Ultra-Luxury 5-Star Immediate Proximity',
      makkahHotel: 'Raffles Makkah Palace / Fairmont Clock Tower',
      madinahHotel: 'The Oberoi Madinah / Dar Al Taqwa Hotel',
      transport: 'VIP Private Chauffeur + Bullet Train First Class',
      badge: 'Time-Optimized VIP',
      image: 'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?auto=format&fit=crop&w=1200&q=80',
      bestFor: 'Professionals, doctors, and business owners taking a focused spiritual getaway',
      inclusions: [
        '4 Nights Makkah at premier luxury hotel steps from the Mataf',
        '2 Nights Madinah directly adjacent to the Prophet’s Mosque courtyard',
        'Rapid 24-hour express Saudi e-visa issuance',
        'Private VIP GMC airport pick and drop from King Abdulaziz International',
        'Haramain Bullet Train Business Class reserved tickets',
        'Priority appointment facilitation for Riaz-ul-Jannah',
        'Direct flight booking assistance with Saudia, PIA, or Emirates',
        'Dedicated private concierge for seamless prayer and dining'
      ]
    }
  ];

  const ziyaratMakkah = [
    { name: 'Ghar-e-Hira (Jabal-e-Noor)', desc: 'The historic cave where the first revelation of the Holy Quran was bestowed upon Prophet Muhammad ﷺ.' },
    { name: 'Ghar-e-Thawr (Jabal Thawr)', desc: 'The sacred refuge where the Prophet ﷺ and Hazrat Abu Bakr Siddiq (RA) took shelter during the Hijrah to Madinah.' },
    { name: 'Plains of Arafat & Jabal-e-Rehmah', desc: 'The central station of Hajj and Mount of Mercy where the Prophet ﷺ delivered the historic Farewell Sermon.' },
    { name: 'Mina & Muzdalifah', desc: 'The valley of tents and the open plain of stone gathering in the spiritual footsteps of Prophet Ibrahim (AS).' },
    { name: 'Masjid Aisha (Tan\'eem)', desc: 'The revered Miqat where pilgrims can easily renew their Ihram to perform optional Umrah for loved ones.' },
  ];

  const ziyaratMadinah = [
    { name: 'Rawdah Sharif (Riaz-ul-Jannah)', desc: '“Between my house and my minbar is a garden from the gardens of Paradise.” Offering Salam to the Beloved Prophet ﷺ and his companions.' },
    { name: 'Masjid Quba', desc: 'The first mosque built in Islam. Performing two Rakat prayers here rewards the spiritual equivalent of an Umrah.' },
    { name: 'Mount Uhud & Shuhada Cemetery', desc: '“Uhud is a mountain that loves us and we love it.” Ziyarat to the resting place of Sayyidush Shuhada Hazrat Hamza (RA).' },
    { name: 'Masjid al-Qiblatain', desc: 'The Mosque of the Two Qiblas where the divine command was revealed to shift the Qibla towards the Holy Kaaba in Makkah.' },
    { name: 'Famous Madinah Date Orchards & Souq', desc: 'Authentic orchards for procuring blessed Ajwa, Safawi, and Sukari dates directly from local producers.' },
  ];

  const handleWhatsAppInquiry = (pkgName?: string) => {
    const topic = pkgName ? `inquire about the "${pkgName}"` : `inquire about your tailored Umrah packages`;
    const text = `As-salamu alaykum Nexo Travel! I would like to ${topic}. Please share the available travel dates, hotel distance options, room sharing plans, and package quotation. JazakAllah Khair!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?phone=923205718477&text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const selectedPackage = umrahPackages.find(p => p.id === selectedPackageId) || umrahPackages[0];

  return (
    <section id="umrah-showcase" className="py-16 sm:py-24 bg-gradient-to-b from-[#022C22] via-[#064E3B] to-[#041F18] text-white relative overflow-hidden">
      
      {/* Decorative Golden Ambient Islamic Lattice Pattern Background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1.2px,transparent_1.2px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-gradient from-amber-400/10 via-transparent to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Grand Religious Header & Calligraphic Pavilion */}
        <div className="text-center max-w-4xl mx-auto mb-14 space-y-4">
          
          {/* Sacred Bismillah Calligraphy */}
          <div className="font-arabic text-[#D4AF37] text-3xl sm:text-5xl font-bold tracking-wider drop-shadow-md select-none py-1">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>

          {/* Quranic Verse */}
          <div className="font-arabic text-amber-200/90 text-lg sm:text-2xl font-semibold tracking-wide">
            وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ
          </div>
          <div className="text-xs sm:text-sm text-emerald-200/80 font-medium">
            “And complete the Hajj and &lsquo;Umrah for Allah” &bull; Surah Al-Baqarah (2:196)
          </div>

          {/* Talbiyah Script Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/60 text-[#FCEAA1] text-xs sm:text-sm font-bold font-arabic shadow-md my-2">
            <Moon className="w-4 h-4 text-[#D4AF37]" />
            <span>لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Sacred Umrah Journeys &amp; Haramain Ziyarat
          </h2>

          {/* Heartfelt Urdu Couplet */}
          <div className="font-urdu text-[#FCEAA1] text-xl sm:text-3xl font-bold leading-relaxed pt-1 drop-shadow-sm">
            حاضری کی تمنا، درِ مصطفیٰ ﷺ کی چوکھٹ اور بیت اللہ کا پرنور طواف
          </div>

          <p className="text-emerald-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Embark on a spiritually enriching, serene pilgrimage with Nexo Travel &amp; Tours. Premium walking-distance hotels, instant Saudi e-visas, Haramain Bullet Train, Nusuk Rawdah bookings, and personalized care.
          </p>

          {/* Quick Contact & WhatsApp Pill Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => handleWhatsAppInquiry('Sacred Umrah Inquiries')}
              className="py-3 px-6 rounded-xl font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Contact for Umrah Details (WhatsApp)</span>
            </button>
            <button
              onClick={() => onOpenConsultationModal('Makkah & Madinah', 'Umrah & Spiritual Package')}
              className="py-3 px-6 rounded-xl font-bold text-xs sm:text-sm bg-[#D4AF37] hover:bg-[#C59B27] text-[#064E3B] shadow-lg transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book 1-on-1 Umrah Planning Session</span>
            </button>
          </div>
        </div>

        {/* Feature Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 text-xs">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-[#D4AF37]/30 flex items-center gap-3 shadow-md">
            <span className="text-2xl">🕋</span>
            <div>
              <div className="font-bold text-[#FCEAA1]">Walking Distance Hotels</div>
              <div className="text-emerald-200 text-[11px]">Steps to Mataf &amp; Bab-as-Salam</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-[#D4AF37]/30 flex items-center gap-3 shadow-md">
            <span className="text-2xl">📜</span>
            <div>
              <div className="font-bold text-[#FCEAA1]">Instant Umrah E-Visa</div>
              <div className="text-emerald-200 text-[11px]">Full health insurance included</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-[#D4AF37]/30 flex items-center gap-3 shadow-md">
            <span className="text-2xl">🚄</span>
            <div>
              <div className="font-bold text-[#FCEAA1]">Haramain Bullet Train</div>
              <div className="text-emerald-200 text-[11px]">2-Hour High-Speed connection</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-[#D4AF37]/30 flex items-center gap-3 shadow-md">
            <span className="text-2xl">🕌</span>
            <div>
              <div className="font-bold text-[#FCEAA1]">Rawdah Permit Booking</div>
              <div className="text-emerald-200 text-[11px]">Official Nusuk App assistance</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs: Featured Packages | Sacred Ziyarat Guide | Included Pilgrim Services */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('packages')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'packages'
                ? 'bg-[#D4AF37] text-[#064E3B] shadow-lg ring-1 ring-amber-300'
                : 'bg-white/10 text-emerald-100 hover:bg-white/20'
            }`}
          >
            <Moon className="w-4 h-4" />
            <span>Featured Umrah Packages (۴ منتخب پیکیجز)</span>
          </button>

          <button
            onClick={() => setActiveTab('ziyarat')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'ziyarat'
                ? 'bg-[#D4AF37] text-[#064E3B] shadow-lg ring-1 ring-amber-300'
                : 'bg-white/10 text-emerald-100 hover:bg-white/20'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Sacred Ziyarat Guide (مکہ و مدینہ منورہ)</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'services'
                ? 'bg-[#D4AF37] text-[#064E3B] shadow-lg ring-1 ring-amber-300'
                : 'bg-white/10 text-emerald-100 hover:bg-white/20'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>VIP Pilgrim Services &amp; Nusuk Help</span>
          </button>
        </div>

        {/* TAB 1: Featured Umrah Packages */}
        {activeTab === 'packages' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Package Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {umrahPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  id={`umrah-card-${pkg.id}`}
                  className="bg-white/10 backdrop-blur-md rounded-3xl border-2 border-[#D4AF37]/50 overflow-hidden shadow-xl hover:border-[#D4AF37] transition-all flex flex-col justify-between group"
                >
                  {/* Card Header & Image */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#D4AF37] text-[#064E3B] shadow-md flex items-center gap-1.5 font-sans">
                        <Sparkles className="w-3.5 h-3.5" />
                        {pkg.badge}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-[#FCEAA1] backdrop-blur-xs border border-[#D4AF37]/40">
                        {pkg.duration}
                      </span>
                    </div>

                    {/* Title on Image */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="font-urdu text-[#FCEAA1] text-base sm:text-lg font-bold drop-shadow-md mb-0.5">
                        {pkg.urduTitle}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight drop-shadow-md leading-snug">
                        {pkg.title}
                      </h3>
                      <div className="text-xs text-emerald-200 mt-1 flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                        <span>{pkg.hotelTier}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    {/* Hotels breakdown */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-[#D4AF37] font-bold flex items-center gap-1 mb-1">
                          <span>🕋</span>
                          <span>Makkah Stay:</span>
                        </div>
                        <p className="text-slate-200 leading-relaxed font-medium">{pkg.makkahHotel}</p>
                      </div>

                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-[#D4AF37] font-bold flex items-center gap-1 mb-1">
                          <span>🕌</span>
                          <span>Madinah Stay:</span>
                        </div>
                        <p className="text-slate-200 leading-relaxed font-medium">{pkg.madinahHotel}</p>
                      </div>
                    </div>

                    {/* Inclusions checklist */}
                    <div className="space-y-2 text-xs">
                      <div className="text-xs font-bold text-[#FCEAA1] uppercase tracking-wider">
                        Package Inclusions &amp; Holy Facilitation:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-200">
                        {pkg.inclusions.slice(0, 6).map((inc, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span className="leading-tight text-[11px]">{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Ideal Traveler Profile */}
                    <div className="text-[11px] text-emerald-200 bg-[#064E3B]/70 p-2.5 rounded-xl border border-emerald-500/30">
                      <strong>Recommended for:</strong> {pkg.bestFor}
                    </div>

                    {/* Contact for Details Block - NO PRICE DISPLAYED AS INSTRUCTED */}
                    <div className="pt-4 border-t border-[#D4AF37]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-black/20 -mx-6 -mb-6 p-6 rounded-b-3xl">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#D4AF37] block">
                          Spiritual Umrah Package Quotation
                        </span>
                        <div className="text-lg sm:text-xl font-extrabold text-white flex items-center gap-2">
                          <span>Contact for Details</span>
                          <span className="font-urdu text-sm text-[#FCEAA1]">(قیمت و تفصیلات کے لیے رابطہ کریں)</span>
                        </div>
                        <span className="text-[11px] text-emerald-200">
                          Tailored by chosen dates, room occupancy (Quad/Triple/Double) &amp; airline
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row items-stretch gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleWhatsAppInquiry(pkg.title)}
                          className="py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-md transition-all flex items-center justify-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4 fill-white" />
                          <span>WhatsApp Quote</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => onOpenConsultationModal('Makkah & Madinah', `Umrah: ${pkg.title}`)}
                          className="py-2.5 px-4 rounded-xl font-semibold text-xs text-white bg-white/20 hover:bg-white/30 transition-all flex items-center justify-center gap-1.5"
                        >
                          <span>Book Session</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Umrah Customizer Callout */}
            <div className="rounded-3xl bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/10 to-transparent border-2 border-[#D4AF37]/50 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-[#D4AF37] text-[#064E3B] text-xs font-bold font-sans">
                  Tailored Group &amp; Solo Itineraries
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                  Need a Customized Departure Date or Specific Hotel?
                </h4>
                <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
                  We design custom Umrah itineraries from all airports of Pakistan (Islamabad, Lahore, Karachi, Peshawar, Sialkot, Multan). Choose your preferred airline, direct flights, and hotel distance.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => handleWhatsAppInquiry('Custom Umrah Itinerary')}
                  className="py-3 px-6 rounded-xl font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Talk with Umrah Specialist</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Sacred Ziyarat Guide */}
        {activeTab === 'ziyarat' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-300">
            {/* Makkah Mukarramah Ziyarat */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/40 shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-2xl">
                  🕋
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    Historical Makkah Mukarramah Ziyarat
                  </h3>
                  <div className="font-urdu text-[#FCEAA1] text-sm font-bold">
                    مکہ مکرمہ کی متبرک اور تاریخی زیارات
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                Walk in the footsteps of the Beloved Prophet Muhammad ﷺ and the noble Sahabah. All our packages include guided, air-conditioned transport with scholarly Urdu/English commentary.
              </p>

              <div className="space-y-3">
                {ziyaratMakkah.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="font-bold text-sm text-[#FCEAA1] flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{item.name}</span>
                    </div>
                    <p className="text-xs text-slate-200 pl-6 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => handleWhatsAppInquiry('Makkah Ziyarat Tour')}
                className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Inquire About Makkah Ziyarat Options</span>
              </button>
            </div>

            {/* Madinah Munawwarah Ziyarat */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/40 shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-2xl">
                  🕌
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    Sacred Madinah al-Munawwarah Ziyarat
                  </h3>
                  <div className="font-urdu text-[#FCEAA1] text-sm font-bold">
                    مدینہ منورہ کی پرنور زیارات اور مقاماتِ مقدسہ
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                Experience the serenity of the City of the Prophet ﷺ with facilitated Nusuk permits for Rawdah Mubarak, prayer rewards at Masjid Quba, and visits to the resting places of the martyrs of Uhud.
              </p>

              <div className="space-y-3">
                {ziyaratMadinah.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="font-bold text-sm text-[#FCEAA1] flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{item.name}</span>
                    </div>
                    <p className="text-xs text-slate-200 pl-6 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => handleWhatsAppInquiry('Madinah Ziyarat Tour')}
                className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Inquire About Madinah Ziyarat Options</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: Pilgrim Services & Nusuk Help */}
        {activeTab === 'services' && (
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/40 shadow-xl space-y-8 animate-in fade-in duration-300">
            <div className="max-w-3xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Comprehensive Facilitation for Every Pilgrim
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 mt-2">
                Nexo Travel &amp; Tours takes care of every regulatory and logistical detail so your heart remains solely focused on Ibadah and spiritual connection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-lg">
                  📱
                </div>
                <h4 className="font-bold text-base text-[#FCEAA1]">Nusuk App Rawdah Permitting</h4>
                <p className="text-xs text-slate-200 leading-relaxed">
                  We assist every pilgrim in setting up and securing official time slots for praying in Riaz-ul-Jannah (Rawdah Mubarak) through the official Saudi Nusuk mobile portal.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-lg">
                  🚄
                </div>
                <h4 className="font-bold text-base text-[#FCEAA1]">Haramain High-Speed Train</h4>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Avoid long 6-hour bus journeys. Travel between Makkah and Madinah in just 2 hours at 300 km/h in air-conditioned comfort with reserved seating.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-lg">
                  💧
                </div>
                <h4 className="font-bold text-base text-[#FCEAA1]">Packed Zamzam Water Voucher</h4>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Every pilgrim receives an official 5-Litre packed Zamzam water canister on departure from King Abdulaziz or Prince Mohammad bin Abdulaziz Airport.
                </p>
              </div>
            </div>

            {/* Direct Consultation CTA */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-[#D4AF37]" />
                <div className="text-xs">
                  <div className="font-bold text-white">Direct Umrah Pilgrimage Desk Hotline:</div>
                  <div className="text-emerald-200">+92 51 6125268 &bull; +92 320 5718477</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleWhatsAppInquiry('Pilgrim Services')}
                  className="py-2.5 px-5 rounded-xl font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-md transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Pilgrimage Desk</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
