import React, { useState } from 'react';
import { NexoLogo } from './NexoLogo';
import { PageView, Currency } from '../types';
import { 
  Phone, 
  Mail, 
  Clock, 
  Menu, 
  X, 
  Compass, 
  Calendar, 
  FileCheck, 
  ChevronRight,
  Globe2,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onOpenConsultationModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  currency,
  onCurrencyChange,
  onOpenConsultationModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageView; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'packages', label: 'Tour Packages', badge: 'Hot' },
    { id: 'services', label: 'Services' },
    { id: 'visa-guide', label: 'Visa Guide & Checker' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      {/* Top Bar with Urdu Slogan & Quick Contact */}
      <div className="bg-[#2C3E50] text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-slate-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          
          {/* Left: Official Urdu Slogan in Warm Sunset Orange */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E67E22]/20 border border-[#E67E22]/40 text-[#E67E22] text-[11px] font-semibold">
              <Sparkles className="w-3 h-3 text-[#E67E22]" />
              Official Motto
            </span>
            <div className="flex items-center gap-2">
              <span className="font-urdu text-[#E67E22] text-sm font-bold tracking-wide">
                منزل سوچ کی دہلیز پر
              </span>
              <span className="text-slate-400 hidden sm:inline text-[11px]">
                (Manzil Soch ki Dehleez par)
              </span>
            </div>
          </div>

          {/* Right: Contact Numbers & Currency Switcher */}
          <div className="flex items-center gap-4 text-slate-300">
            <a
              href="tel:+923001234567"
              className="hidden lg:flex items-center gap-1.5 hover:text-[#00A8CC] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#00A8CC]" />
              <span>+92 300 1234567</span>
            </a>

            <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-[#00A8CC]" />
              <span>Mon - Sat: 9:30 AM - 7:30 PM</span>
            </div>

            {/* Currency Selector */}
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-600/60">
              <Globe2 className="w-3.5 h-3.5 text-[#00A8CC]" />
              <label htmlFor="currency-select" className="sr-only">Currency</label>
              <select
                id="currency-select"
                value={currency}
                onChange={(e) => onCurrencyChange(e.target.value as Currency)}
                className="bg-transparent text-white text-xs font-semibold focus:outline-none cursor-pointer"
              >
                <option value="USD" className="bg-[#2C3E50] text-white">USD ($)</option>
                <option value="PKR" className="bg-[#2C3E50] text-white">PKR (₨)</option>
                <option value="AED" className="bg-[#2C3E50] text-white">AED (AED)</option>
                <option value="EUR" className="bg-[#2C3E50] text-white">EUR (€)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => handleNavClick('home')}
          className="focus:outline-none text-left"
          aria-label="Nexo Travel Home"
        >
          <NexoLogo size="md" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#00A8CC] bg-[#00A8CC]/10 shadow-xs'
                    : 'text-[#2C3E50] hover:text-[#00A8CC] hover:bg-slate-100/80'
                }`}
              >
                {item.label}
                {item.badge && (
                  <span className="px-1.5 py-0.2 text-[10px] font-bold rounded-full bg-[#E67E22] text-white animate-pulse">
                    {item.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#00A8CC] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-quick-check-btn"
            onClick={() => handleNavClick('visa-guide')}
            className="px-3.5 py-2 rounded-lg text-xs font-bold text-[#2C3E50] bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-colors flex items-center gap-1.5"
          >
            <FileCheck className="w-4 h-4 text-[#00A8CC]" />
            <span>Visa Assessment</span>
          </button>

          <button
            id="nav-consultation-cta-btn"
            onClick={onOpenConsultationModal}
            className="px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-[#00A8CC] hover:bg-[#0088A8] shadow-sm hover:shadow transition-all duration-200 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#2C3E50] hover:bg-slate-100 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200/70 mb-3">
            <div className="font-urdu text-[#E67E22] text-sm font-bold text-center">
              منزل سوچ کی دہلیز پر
            </div>
            <p className="text-[11px] text-[#2C3E50] text-center mt-1">
              Your destination is at the doorstep of your thoughts.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                  currentPage === item.id
                    ? 'bg-[#00A8CC]/10 text-[#00A8CC]'
                    : 'text-[#2C3E50] hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {item.badge ? (
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-[#E67E22] text-white">
                    {item.badge}
                  </span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultationModal();
              }}
              className="w-full py-3 rounded-lg text-sm font-bold text-white bg-[#00A8CC] text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              Book Free Visa Consultation
            </button>
            <a
              href="tel:+923001234567"
              className="w-full py-2.5 rounded-lg text-xs font-bold text-[#2C3E50] bg-slate-100 text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#00A8CC]" />
              Call Helpline: +92 300 1234567
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
