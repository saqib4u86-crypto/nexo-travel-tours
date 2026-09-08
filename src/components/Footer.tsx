import React, { useState } from 'react';
import { NexoLogo } from './NexoLogo';
import { PageView } from '../types';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Send, 
  Check, 
  ArrowRight,
  Globe2,
  Lock
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenConsultationModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultationModal
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 2000);
    }
  };

  const handleLinkClick = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2C3E50] text-white border-t border-slate-700">
      {/* Top Banner with Urdu Tagline */}
      <div className="bg-[#1E2B37] py-6 px-4 sm:px-8 border-b border-slate-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="p-2 rounded-xl bg-[#E67E22]/20 text-[#E67E22]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-urdu text-[#E67E22] text-xl sm:text-2xl font-extrabold tracking-wide">
                منزل سوچ کی دہلیز پر
              </div>
              <p className="text-xs text-slate-300">
                Your journey begins the moment you think it. Nexo Travel &amp; Tours makes it happen.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenConsultationModal}
            className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#00A8CC] hover:bg-[#0088A8] shadow-md transition-colors flex items-center gap-2"
          >
            <span>Book 1-on-1 Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Col 1 & 2: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <NexoLogo size="lg" variant="light" showUrduTagline />
          <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
            Nexo Travel &amp; Tours is a premier visa consultancy and bespoke travel management firm. Specializing in instant e-visas, corporate delegations, luxury family holidays, and spiritually uplifting Umrah packages.
          </p>

          <div className="pt-2 flex flex-col gap-2 text-xs text-slate-300">
            <div className="flex items-center gap-2 flex-wrap">
              <Phone className="w-4 h-4 text-[#00A8CC] shrink-0" />
              <span className="text-slate-400">Helpline:</span>
              <a href="tel:+92516125268" className="hover:text-[#00A8CC] transition-colors">+92 51 6125268</a>
              <span className="text-slate-500">/</span>
              <a href="tel:+923205718477" className="hover:text-[#00A8CC] transition-colors">+92 320 5718477</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#E67E22]" />
              <a href="mailto:nexotraveltours@gmail.com" className="hover:text-[#E67E22] transition-colors">Email: nexotraveltours@gmail.com</a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
              <span>259 Airport Housing Society Rawalpindi Islamabad, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Col 3: Quick Navigation */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-[#38D2F2] uppercase tracking-wider">
            Quick Navigation
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>
              <button onClick={() => handleLinkClick('home')} className="hover:text-[#00A8CC] transition-colors">
                Home Overview
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('destinations')} className="hover:text-[#00A8CC] transition-colors">
                Top Destinations
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('packages')} className="hover:text-[#00A8CC] transition-colors">
                Holiday Tour Packages
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('services')} className="hover:text-[#00A8CC] transition-colors">
                Visa Services
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('visa-guide')} className="hover:text-[#00A8CC] transition-colors">
                Visa Calculator &amp; Guide
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('about')} className="hover:text-[#00A8CC] transition-colors">
                About Nexo Travel
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('contact')} className="hover:text-[#00A8CC] transition-colors">
                Contact &amp; Head Office
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Top Visas */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-[#E67E22] uppercase tracking-wider">
            Popular Visas
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>
              <button onClick={() => handleLinkClick('destinations')} className="hover:text-[#00A8CC] transition-colors">
                Azerbaijan Express E-Visa
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('destinations')} className="hover:text-[#00A8CC] transition-colors">
                Turkey Tourist &amp; E-Visa
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('destinations')} className="hover:text-[#00A8CC] transition-colors">
                Dubai UAE 30/60 Days Visa
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('destinations')} className="hover:text-[#00A8CC] transition-colors">
                Saudi Arabia Umrah Visa
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('destinations')} className="hover:text-[#00A8CC] transition-colors">
                Malaysia E-Visa Processing
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('destinations')} className="hover:text-[#00A8CC] transition-colors">
                Schengen Europe File Prep
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('destinations')} className="hover:text-[#00A8CC] transition-colors">
                UK Standard Visitor Visa
              </button>
            </li>
          </ul>
        </div>

        {/* Col 5: Newsletter & Accreditations */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">
            Travel Deals &amp; Updates
          </h4>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            Subscribe for seasonal discount flight alerts, embassy rule updates, and flash holiday promo codes.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-2">
            <div className="relative">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full bg-[#1E2B37] border border-slate-600 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#00A8CC]"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-3 bg-[#00A8CC] hover:bg-[#0088A8] text-white rounded-md text-xs font-bold flex items-center justify-center transition-colors"
                aria-label="Subscribe"
              >
                <Send className="w-3 h-3" />
              </button>
            </div>
            {subscribed && (
              <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                <Check className="w-3 h-3" /> Subscribed successfully!
              </span>
            )}
          </form>

          <div className="pt-2 border-t border-slate-700/60 flex items-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Dedicated Full-Service Travel Firm</span>
          </div>
        </div>

      </div>

      {/* Copyright & Disclaimer Bar */}
      <div className="bg-[#1A2530] py-4 px-4 sm:px-8 border-t border-slate-800 text-[11px] text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} NEXO TRAVEL &amp; TOURS. All rights reserved. 
            <span className="font-urdu text-[#E67E22] ml-2 text-xs">منزل سوچ کی دہلیز پر</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-200 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-200 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-200 cursor-pointer">Visa Guarantee Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
