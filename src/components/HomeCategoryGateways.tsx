import React from 'react';
import { PageView } from '../types';
import { 
  Sparkles, 
  ArrowRight, 
  ChevronRight, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Calendar,
  Compass
} from 'lucide-react';

interface HomeCategoryGatewaysProps {
  onNavigate: (page: PageView) => void;
  onOpenConsultationModal: (destination?: string, service?: string) => void;
}

export const HomeCategoryGateways: React.FC<HomeCategoryGatewaysProps> = ({
  onNavigate,
  onOpenConsultationModal,
}) => {
  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Lead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A8CC]/10 text-[#00A8CC] text-xs font-bold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5" />
              Specialized Travel Portals
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2C3E50] tracking-tight">
              Select Your Travel Category
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              Each travel vertical is dedicatedly managed with tailored itineraries, verified visa guidelines, and expert consultant support.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-medium hidden md:block">
            <span>Explore full guides in dedicated tabs</span>
          </div>
        </div>

        {/* 4 Clean Gateway Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Gateway 1: Sacred Umrah Sanctuary */}
          <div 
            onClick={() => onNavigate('umrah')}
            className="group cursor-pointer bg-gradient-to-br from-[#064E3B] to-[#042820] text-white rounded-2xl p-5 border border-emerald-600/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform" />
            
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-amber-400/20 text-amber-300 text-lg border border-amber-400/30">
                  🕋
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-900">
                  Dedicated Tab
                </span>
              </div>

              <div className="font-urdu text-amber-300 text-base font-bold mb-1">
                لَبَّيْكَ اللَّهُمَّ عُمْرَةً
              </div>
              <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors">
                Umrah Packages
              </h3>
              <p className="text-emerald-100 text-xs mt-2 leading-relaxed">
                5-Star Clock Tower stays, high-speed Haramain Bullet Train, Rawdah Sharif permits, and guided Ziyarat.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-emerald-700/60 flex items-center justify-between text-xs font-bold text-amber-300">
              <span>View Umrah Tab</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Gateway 2: Domestic Tours (Discover Pakistan) */}
          <div 
            onClick={() => onNavigate('domestic-tours')}
            className="group cursor-pointer bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200 hover:border-emerald-600 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-emerald-100 text-emerald-800 text-lg border border-emerald-200">
                  🇵🇰
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  Dedicated Tab
                </span>
              </div>

              <div className="font-urdu text-[#064E3B] text-sm font-bold mb-1">
                سوات، ہنزہ، سکردو و ناران
              </div>
              <h3 className="text-lg font-bold tracking-tight text-[#2C3E50] group-hover:text-[#064E3B] transition-colors">
                Domestic Tours
              </h3>
              <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                Swat Valley, Hunza, Skardu, Naran Kaghan &amp; Kashmir with luxury 4x4 transport &amp; licensed mountain drivers.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-[#064E3B]">
              <span>View Domestic Tours Tab</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Gateway 3: Dubai Visit Visa */}
          <div 
            onClick={() => onNavigate('dubai-visa')}
            className="group cursor-pointer bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200 hover:border-[#00A8CC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-cyan-50 text-[#00A8CC] text-lg border border-cyan-200">
                  🇦🇪
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-100 text-[#00A8CC]">
                  24–72h Express
                </span>
              </div>

              <div className="text-[11px] font-bold text-[#00A8CC] uppercase tracking-wider mb-1">
                Fast-Track Processing
              </div>
              <h3 className="text-lg font-bold tracking-tight text-[#2C3E50] group-hover:text-[#00A8CC] transition-colors">
                Dubai Visit Visa
              </h3>
              <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                30 &amp; 60 days tourist visas. Hassle-free electronic application with verified processing and zero embassy visits.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-[#00A8CC]">
              <span>View Dubai Visa Tab</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Gateway 4: Turkey Visa & File Audit */}
          <div 
            onClick={() => onNavigate('turkey-visa')}
            className="group cursor-pointer bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200 hover:border-[#E67E22] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-amber-50 text-[#E67E22] text-lg border border-amber-200">
                  🇹🇷
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-[#E67E22]">
                  File Audit
                </span>
              </div>

              <div className="text-[11px] font-bold text-[#E67E22] uppercase tracking-wider mb-1">
                Embassy File Prep
              </div>
              <h3 className="text-lg font-bold tracking-tight text-[#2C3E50] group-hover:text-[#E67E22] transition-colors">
                Turkey Visa &amp; Audit
              </h3>
              <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                Sticker visa file audit, financial cover letter drafting, Anatolia appointment booking, and rejection reviews.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-[#E67E22]">
              <span>View Turkey Visa Tab</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
