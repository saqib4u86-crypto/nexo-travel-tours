import React, { useState } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  CheckCheck,
  Plane
} from 'lucide-react';
import { NexoLogo } from './NexoLogo';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');
  const [sentMessage, setSentMessage] = useState(false);

  const quickPrompts = [
    '👋 Hi Nexo Travel, I need an Azerbaijan E-Visa urgently.',
    '✈️ I want information & pricing for the Turkey Tour Package.',
    '🕋 Please share available 5-star Umrah packages & visas.',
    '🏖️ Looking for Dubai holiday packages for my family.'
  ];

  const handleSendMessage = (msgText: string) => {
    if (!msgText.trim()) return;
    setSentMessage(true);
    // Construct WhatsApp API URL
    const encoded = encodeURIComponent(msgText);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=923205718477&text=${encoded}`;
    
    // Open in new tab or trigger link
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setSentMessage(false);
      setCustomMessage('');
      setIsOpen(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Interactive Chat Popup Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-[#2C3E50] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-xs">
                  <NexoLogo size="sm" variant="badge-only" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#2C3E50] rounded-full z-10" />
              </div>
              <div>
                <h4 className="text-sm font-bold flex items-center gap-1.5">
                  <span>Nexo Travel Support</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00A8CC]" />
                </h4>
                <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  <span>+92 320 5718477 • Online</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 space-y-3 max-h-80 overflow-y-auto">
            {/* Agent Greeting Bubble */}
            <div className="bg-white p-3 rounded-2xl rounded-tl-xs shadow-2xs border border-slate-200/80 text-xs text-[#2C3E50] space-y-1">
              <div className="font-urdu text-[#E67E22] text-xs font-bold">
                منزل سوچ کی دہلیز پر
              </div>
              <p>
                Hello! Welcome to <strong>Nexo Travel &amp; Tours</strong>. How can our visa consultants assist your journey today?
              </p>
              <span className="text-[10px] text-slate-400 block text-right">Just now</span>
            </div>

            {/* Quick Inquiry Chips */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Quick Inquiries (Click to send):
              </span>
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSendMessage(prompt)}
                  className="w-full text-left p-2 rounded-xl bg-white hover:bg-[#00A8CC]/10 text-slate-700 hover:text-[#00A8CC] border border-slate-200 hover:border-[#00A8CC]/40 text-xs font-medium transition-all"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {sentMessage && (
              <div className="p-2 bg-emerald-50 text-emerald-800 rounded-lg text-xs flex items-center gap-1.5 border border-emerald-200">
                <CheckCheck className="w-4 h-4 text-emerald-600" />
                <span>Redirecting to WhatsApp chat...</span>
              </div>
            )}
          </div>

          {/* Custom Input Form */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your visa question..."
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage(customMessage);
                }
              }}
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-[#00A8CC] focus:outline-none text-[#2C3E50]"
            />
            <button
              type="button"
              onClick={() => handleSendMessage(customMessage)}
              className="p-2.5 rounded-xl bg-[#00A8CC] hover:bg-[#0088A8] text-white transition-colors shadow-xs"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        aria-label="Open WhatsApp Chat with Nexo Travel"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        
        {/* Pulsing Aura */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500" />
        </span>

        {/* Hover Label */}
        <span className="absolute right-full mr-3 whitespace-nowrap px-3 py-1 rounded-lg bg-[#2C3E50] text-white text-xs font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
          Chat on WhatsApp
        </span>
      </button>
    </div>
  );
};
