import React from 'react';
import { PageView } from '../types';
import { NexoLogo } from './NexoLogo';
import { 
  X, 
  Compass, 
  MapPin, 
  Calendar, 
  Phone, 
  MessageCircle, 
  FileCheck, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  ExternalLink,
  Plane,
  Heart,
  Globe2,
  Building2,
  FileText,
  Lock
} from 'lucide-react';

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenConsultationModal: (destination?: string, service?: string) => void;
}

export const NavDrawer: React.FC<NavDrawerProps> = ({
  isOpen,
  onClose,
  currentPage,
  onNavigate,
  onOpenConsultationModal,
}) => {
  if (!isOpen) return null;

  const handleSelectPage = (page: PageView) => {
    onNavigate(page);
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dimmed & Blurred Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300 border-l border-slate-200">
          
          {/* Drawer Top Header */}
          <div className="p-4 sm:p-5 bg-[#2C3E50] text-white flex items-center justify-between border-b border-slate-700">
            <div className="flex items-center gap-2.5">
              <NexoLogo size="sm" variant="badge-only" />
              <div>
                <div className="font-extrabold text-sm tracking-tight text-white flex items-center gap-1.5">
                  <span>Nexo Navigation Directory</span>
                </div>
                <div className="font-urdu text-[#E67E22] text-xs font-semibold">
                  منزل سوچ کی دہلیز پر
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none"
              aria-label="Close directory drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Primary Tab Switcher Row */}
          <div className="px-4 py-2.5 bg-slate-100 border-b border-slate-200 flex items-center gap-1 overflow-x-auto no-scrollbar text-xs">
            <button
              onClick={() => handleSelectPage('home')}
              className={`px-3 py-1.5 rounded-md font-bold whitespace-nowrap transition-colors ${
                currentPage === 'home' ? 'bg-[#00A8CC] text-white shadow-xs' : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleSelectPage('umrah')}
              className={`px-3 py-1.5 rounded-md font-bold whitespace-nowrap transition-colors flex items-center gap-1 ${
                currentPage === 'umrah' ? 'bg-[#064E3B] text-white shadow-xs' : 'text-[#064E3B] bg-emerald-50 hover:bg-emerald-100'
              }`}
            >
              <span>🕋 Umrah</span>
            </button>
            <button
              onClick={() => handleSelectPage('domestic-tours')}
              className={`px-3 py-1.5 rounded-md font-bold whitespace-nowrap transition-colors flex items-center gap-1 ${
                currentPage === 'domestic-tours' ? 'bg-[#064E3B] text-white shadow-xs' : 'text-emerald-800 bg-emerald-50/70 hover:bg-emerald-100'
              }`}
            >
              <span>🇵🇰 Domestic</span>
            </button>
            <button
              onClick={() => handleSelectPage('packages')}
              className={`px-3 py-1.5 rounded-md font-bold whitespace-nowrap transition-colors ${
                currentPage === 'packages' ? 'bg-[#00A8CC] text-white shadow-xs' : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              Holidays
            </button>
            <button
              onClick={() => handleSelectPage('contact')}
              className={`px-3 py-1.5 rounded-md font-bold whitespace-nowrap transition-colors ${
                currentPage === 'contact' ? 'bg-[#00A8CC] text-white shadow-xs' : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Scrollable Categories Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5 divide-y divide-slate-100 text-sm">
            
            {/* Section 1: Sacred Umrah Sanctuary */}
            <div className="space-y-2.5 pt-1 first:pt-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded bg-amber-100 text-amber-800 text-sm">🕋</span>
                  <span className="font-extrabold text-[#2C3E50] text-xs uppercase tracking-wider">
                    Sacred Umrah Sanctuary
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Dedicated Tab
                </span>
              </div>

              <div className="bg-gradient-to-br from-emerald-900 to-[#064E3B] text-white rounded-xl p-3.5 shadow-xs border border-emerald-700/60">
                <div className="font-urdu text-amber-300 text-xs font-bold mb-1">
                  لَبَّيْكَ اللَّهُمَّ عُمْرَةً — حجازِ مقدس کی پرنور حاضری
                </div>
                <p className="text-emerald-100 text-[11px] leading-relaxed mb-3">
                  5-Star Clock Tower hotels, VIP Haramain Bullet Train, Rawdah Sharif permits, and guided Ziyarat in Makkah &amp; Madinah.
                </p>
                <button
                  onClick={() => handleSelectPage('umrah')}
                  className="w-full py-2 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Open Umrah Packages Tab</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Section 2: Domestic Tours (Discover Pakistan) */}
            <div className="space-y-2.5 pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded bg-emerald-100 text-emerald-800 text-sm">🇵🇰</span>
                  <span className="font-extrabold text-[#2C3E50] text-xs uppercase tracking-wider">
                    Domestic Tours (Pakistan)
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Dedicated Tab
                </span>
              </div>

              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-2">
                <div className="font-urdu text-[#064E3B] text-xs font-bold">
                  سوات، ہنزہ، سکردو، ناران و کاغان، اور کشمیر کی سیاحت
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Scenic northern valleys, family-safe luxury transport (Prado/Grand Cabin), generator-backed hotels, and verified local drivers.
                </p>

                <div className="grid grid-cols-2 gap-1.5 pt-1 text-[11px]">
                  <span className="text-slate-700 bg-white px-2 py-1 rounded border border-slate-200">🌿 Swat Valley</span>
                  <span className="text-slate-700 bg-white px-2 py-1 rounded border border-slate-200">🏔️ Hunza &amp; Nagar</span>
                  <span className="text-slate-700 bg-white px-2 py-1 rounded border border-slate-200">🦅 Skardu &amp; Deosai</span>
                  <span className="text-slate-700 bg-white px-2 py-1 rounded border border-slate-200">🌊 Naran &amp; Kaghan</span>
                  <span className="text-slate-700 bg-white px-2 py-1 rounded border border-slate-200">🌲 Azad Kashmir</span>
                  <span className="text-slate-700 bg-white px-2 py-1 rounded border border-slate-200">⛅ Murree &amp; Galiyat</span>
                </div>

                <button
                  onClick={() => handleSelectPage('domestic-tours')}
                  className="w-full mt-2 py-2 px-3 rounded-lg bg-[#064E3B] hover:bg-[#053d2e] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Open Domestic Tours Tab</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Section 3: Visa Advisory & Quick Checkers */}
            <div className="space-y-2.5 pt-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00A8CC]" />
                <span className="font-extrabold text-[#2C3E50] text-xs uppercase tracking-wider">
                  Visa Consultancy &amp; Services
                </span>
              </div>

              <div className="grid grid-cols-1 gap-2">
                <button
                  onClick={() => handleSelectPage('dubai-visa')}
                  className="p-3 rounded-xl bg-cyan-50/70 hover:bg-cyan-100/80 border border-cyan-200/80 text-left transition-colors flex items-center justify-between group"
                >
                  <div>
                    <div className="font-bold text-xs text-[#2C3E50] flex items-center gap-1.5">
                      <span>🇦🇪 Dubai Visit Visa</span>
                      <span className="text-[9px] font-black px-1.5 py-0.2 rounded bg-[#00A8CC] text-white">24-72h</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">30 &amp; 60 days tourist e-visa with zero embassy visits</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00A8CC] group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => handleSelectPage('turkey-visa')}
                  className="p-3 rounded-xl bg-amber-50/70 hover:bg-amber-100/80 border border-amber-200/80 text-left transition-colors flex items-center justify-between group"
                >
                  <div>
                    <div className="font-bold text-xs text-[#2C3E50] flex items-center gap-1.5">
                      <span>🇹🇷 Turkey Visa &amp; Anatolia Audit</span>
                      <span className="text-[9px] font-black px-1.5 py-0.2 rounded bg-[#E67E22] text-white">Expert Audit</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Complete file preparation, financial audit, and appointment</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#E67E22] group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => handleSelectPage('visa-guide')}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-left transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <FileCheck className="w-4 h-4 text-[#00A8CC]" />
                    <div>
                      <div className="font-bold text-xs text-[#2C3E50]">Visa Assessment Tool</div>
                      <p className="text-[11px] text-slate-500">Check eligibility, document requirements &amp; fees</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Section 4: International Holidays & Destinations */}
            <div className="space-y-2.5 pt-4">
              <div className="flex items-center gap-2">
                <Plane className="w-4 h-4 text-[#00A8CC]" />
                <span className="font-extrabold text-[#2C3E50] text-xs uppercase tracking-wider">
                  International Holidays &amp; Travel
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleSelectPage('packages')}
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-[#00A8CC] text-left transition-all group shadow-2xs"
                >
                  <div className="font-bold text-xs text-[#2C3E50] group-hover:text-[#00A8CC]">
                    Tour Packages
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">Baku, Turkey, Dubai, Malaysia &amp; Thailand</p>
                </button>

                <button
                  onClick={() => handleSelectPage('destinations')}
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-[#00A8CC] text-left transition-all group shadow-2xs"
                >
                  <div className="font-bold text-xs text-[#2C3E50] group-hover:text-[#00A8CC]">
                    Destinations
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">Explore countries, visa rules &amp; photo spots</p>
                </button>
              </div>
            </div>

            {/* Section 5: Company, About & Policies */}
            <div className="space-y-2 pt-4">
              <div className="font-bold text-[11px] text-slate-400 uppercase tracking-wider">
                Corporate &amp; Legal
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => handleSelectPage('about')}
                  className="text-left py-1.5 px-2 rounded hover:bg-slate-100 text-slate-700 font-medium"
                >
                  About Nexo Travel
                </button>
                <button
                  onClick={() => handleSelectPage('contact')}
                  className="text-left py-1.5 px-2 rounded hover:bg-slate-100 text-slate-700 font-medium"
                >
                  Contact &amp; Offices
                </button>
                <button
                  onClick={() => handleSelectPage('privacy-policy')}
                  className="text-left py-1.5 px-2 rounded hover:bg-slate-100 text-slate-700 font-medium flex items-center gap-1"
                >
                  <Lock className="w-3 h-3 text-slate-400" />
                  Privacy Policy
                </button>
                <button
                  onClick={() => handleSelectPage('terms-of-service')}
                  className="text-left py-1.5 px-2 rounded hover:bg-slate-100 text-slate-700 font-medium flex items-center gap-1"
                >
                  <FileText className="w-3 h-3 text-slate-400" />
                  Terms of Service
                </button>
              </div>
            </div>

          </div>

          {/* Drawer Bottom Action Desk */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-2.5">
            <button
              onClick={() => {
                onClose();
                onOpenConsultationModal();
              }}
              className="w-full py-2.5 rounded-xl font-bold text-xs text-white bg-[#00A8CC] hover:bg-[#0088A8] shadow-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Visa Consultation</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://api.whatsapp.com/send?phone=923205718477&text=Hello%20Nexo%20Travel!%20I%20would%20like%20to%20inquire%20about%20tours%20and%20visas."
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2.5 rounded-lg font-bold text-[11px] text-white bg-[#25D366] hover:bg-[#20BD5A] flex items-center justify-center gap-1.5 shadow-2xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp Desk</span>
              </a>

              <a
                href="tel:+92516125268"
                className="py-2 px-2.5 rounded-lg font-bold text-[11px] text-[#2C3E50] bg-white border border-slate-200 hover:bg-slate-100 flex items-center justify-center gap-1.5 shadow-2xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#00A8CC]" />
                <span>+92 51 6125268</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
