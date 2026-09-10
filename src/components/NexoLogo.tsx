import React from 'react';

interface NexoLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'full' | 'badge-only' | 'horizontal' | 'light';
  showUrduTagline?: boolean;
}

export const NexoLogo: React.FC<NexoLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  showUrduTagline = false
}) => {
  // Dimension mappings for the round badge
  const badgeSizeClasses = {
    xs: 'w-8 h-8',
    sm: 'w-10 h-10',
    md: 'w-13 h-13 sm:w-14 sm:h-14',
    lg: 'w-18 h-18 sm:w-20 sm:h-20',
    xl: 'w-24 h-24 sm:w-28 sm:h-28',
    '2xl': 'w-36 h-36 sm:w-44 sm:h-44'
  }[size];

  const textSize = {
    xs: 'text-sm',
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
    '2xl': 'text-4xl sm:text-5xl'
  }[size];

  const isLight = variant === 'light';

  // The Master Vector Badge reproducing the attached newlogbg.png
  const renderBadgeSVG = () => (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-md select-none transition-transform duration-300 hover:scale-[1.03]"
    >
      <defs>
        {/* Luxury Gold Gradients */}
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFC15D" />
          <stop offset="30%" stopColor="#C59B27" />
          <stop offset="60%" stopColor="#F3E5AB" />
          <stop offset="85%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#996515" />
        </linearGradient>

        <linearGradient id="goldLinearH" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B8860B" />
          <stop offset="50%" stopColor="#E6CA65" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>

        <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ECCB65" />
          <stop offset="25%" stopColor="#B38018" />
          <stop offset="50%" stopColor="#FBF0B9" />
          <stop offset="75%" stopColor="#C69214" />
          <stop offset="100%" stopColor="#8A5A00" />
        </linearGradient>

        {/* Deep Navy Gradient for Star and Text */}
        <linearGradient id="navyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B2240" />
          <stop offset="50%" stopColor="#07162C" />
          <stop offset="100%" stopColor="#030D1B" />
        </linearGradient>

        <linearGradient id="navyHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#123258" />
          <stop offset="100%" stopColor="#081A32" />
        </linearGradient>

        {/* Master Gold Gradient for the NEXO Brand Name */}
        <linearGradient id="nexoTextGold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#DFBF5B" />
          <stop offset="25%" stopColor="#C9981E" />
          <stop offset="48%" stopColor="#FFF2B8" />
          <stop offset="55%" stopColor="#E2BD4E" />
          <stop offset="85%" stopColor="#B38018" />
          <stop offset="100%" stopColor="#8A5A00" />
        </linearGradient>

        <linearGradient id="nexoTextStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8F6209" />
          <stop offset="50%" stopColor="#E6CA65" />
          <stop offset="100%" stopColor="#754E00" />
        </linearGradient>

        {/* Drop shadow filter for 3D realism */}
        <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="120%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* 1. Base Circular Disc */}
      <circle cx="250" cy="250" r="238" fill="#FFFFFF" />

      {/* 2. Double Gold Concentric Border Ring */}
      {/* Outer thick gold rim */}
      <circle
        cx="250"
        cy="250"
        r="234"
        stroke="url(#goldRim)"
        strokeWidth="6.5"
        fill="none"
      />
      {/* Inner thin gold ring */}
      <circle
        cx="250"
        cy="250"
        r="225"
        stroke="url(#goldRim)"
        strokeWidth="2"
        fill="none"
      />

      {/* ============================================================ */}
      {/* 3. TOP GRAPHIC: NAUTICAL COMPASS STAR & SWOOPING AIRPLANE */}
      {/* ============================================================ */}
      <g transform="translate(0, 0)">
        
        {/* Letter 'N' above North Needle */}
        <text
          x="250"
          y="83"
          textAnchor="middle"
          fill="#0B2240"
          fontFamily="'Cinzel', 'Times New Roman', serif"
          fontSize="23"
          fontWeight="800"
          letterSpacing="0.05em"
        >
          N
        </text>

        {/* Outer Navy Compass Dial Ring with Ticks */}
        <circle
          cx="250"
          cy="176"
          r="66"
          stroke="#0B2240"
          strokeWidth="6"
          strokeDasharray="22 13"
          fill="none"
        />
        <circle
          cx="250"
          cy="176"
          r="60"
          stroke="#0B2240"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Compass Cardinal Dial Markers (12 surrounding ticks) */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
          <line
            key={i}
            x1="250"
            y1="108"
            x2="250"
            y2="114"
            stroke="#0B2240"
            strokeWidth={deg % 90 === 0 ? "3" : "1.5"}
            transform={`rotate(${deg} 250 176)`}
          />
        ))}

        {/* 8-Pointed Compass Star Needles */}
        {/* Ordinal (Diagonal) Needles: NW, NE, SE, SW */}
        {/* NE Needle */}
        <polygon points="250,176 250,138 290,138" fill="url(#navyGradient)" transform="rotate(45 250 176)" />
        <polygon points="250,176 290,138 250,176" fill="#1B3A60" transform="rotate(45 250 176)" />
        {/* SE Needle */}
        <polygon points="250,176 250,138 290,138" fill="url(#navyGradient)" transform="rotate(135 250 176)" />
        <polygon points="250,176 290,138 250,176" fill="#1B3A60" transform="rotate(135 250 176)" />
        {/* SW Needle */}
        <polygon points="250,176 250,138 290,138" fill="url(#navyGradient)" transform="rotate(225 250 176)" />
        <polygon points="250,176 290,138 250,176" fill="#1B3A60" transform="rotate(225 250 176)" />
        {/* NW Needle */}
        <polygon points="250,176 250,138 290,138" fill="url(#navyGradient)" transform="rotate(315 250 176)" />
        <polygon points="250,176 290,138 250,176" fill="#1B3A60" transform="rotate(315 250 176)" />

        {/* Major Cardinal Needles: NORTH, SOUTH, EAST, WEST */}
        {/* North Pointing Needle */}
        <polygon points="250,88 250,176 238,176" fill="url(#goldGradient)" />
        <polygon points="250,88 262,176 250,176" fill="url(#navyGradient)" />

        {/* South Pointing Needle */}
        <polygon points="250,264 250,176 262,176" fill="url(#goldGradient)" />
        <polygon points="250,264 238,176 250,176" fill="url(#navyGradient)" />

        {/* East Pointing Needle */}
        <polygon points="338,176 250,176 250,164" fill="url(#navyGradient)" />
        <polygon points="338,176 250,188 250,176" fill="url(#navyHighlight)" />

        {/* West Pointing Needle */}
        <polygon points="162,176 250,176 250,188" fill="url(#navyGradient)" />
        <polygon points="162,176 250,164 250,176" fill="url(#navyHighlight)" />

        {/* Compass Center Hub Ring */}
        <circle cx="250" cy="176" r="14" fill="#FFFFFF" stroke="url(#navyGradient)" strokeWidth="3" />
        <circle cx="250" cy="176" r="7" fill="url(#goldGradient)" />

        {/* Golden Flight Swoosh Ribbon sweeping from bottom-left through star up to airplane */}
        <path
          d="M 140 240 C 160 210, 195 168, 250 162 C 285 158, 315 152, 342 135"
          stroke="url(#navyGradient)"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 141 240 C 162 208, 198 165, 252 159 C 288 155, 318 149, 345 132"
          stroke="url(#goldGradient)"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Golden Airplane Flying Towards Top-Right */}
        <g transform="translate(352, 130) rotate(38) scale(1.15)">
          {/* Fuselage & Nose */}
          <path
            d="M0,-16 C1.8,-12 2,-4 2,12 L-2,12 C-2,-4 -1.8,-12 0,-16 Z"
            fill="url(#goldGradient)"
          />
          {/* Main Wings */}
          <path
            d="M0,-2 L18,5 L18,8 L0,3 L-18,8 L-18,5 Z"
            fill="url(#goldGradient)"
          />
          {/* Tail Wings */}
          <path
            d="M0,8 L7,12 L7,14 L0,11 L-7,14 L-7,12 Z"
            fill="url(#goldGradient)"
          />
        </g>
      </g>

      {/* ============================================================ */}
      {/* 4. MIDDLE WORDMARK: "NEXO" & "TRAVEL & TOURS" */}
      {/* ============================================================ */}
      {/* "NEXO" in majestic luxury gold typography with engraved inline effect */}
      {/* Base Gold Structure with Subtle Stroke */}
      <text
        x="250"
        y="336"
        textAnchor="middle"
        fill="url(#nexoTextGold)"
        stroke="url(#nexoTextStroke)"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fontFamily="'Cinzel', 'Playfair Display', 'Times New Roman', Georgia, serif"
        fontSize="76"
        fontWeight="800"
        letterSpacing="0.08em"
      >
        NEXO
      </text>

      {/* Inline Carved Accent Stroke */}
      <text
        x="250"
        y="336"
        textAnchor="middle"
        fill="none"
        stroke="#FFF8D6"
        strokeWidth="0.8"
        strokeLinejoin="round"
        fontFamily="'Cinzel', 'Playfair Display', 'Times New Roman', Georgia, serif"
        fontSize="76"
        fontWeight="800"
        letterSpacing="0.08em"
      >
        NEXO
      </text>

      {/* Top Surface Gold Reflection */}
      <text
        x="250"
        y="336"
        textAnchor="middle"
        fill="url(#nexoTextGold)"
        fillOpacity="0.96"
        fontFamily="'Cinzel', 'Playfair Display', 'Times New Roman', Georgia, serif"
        fontSize="76"
        fontWeight="800"
        letterSpacing="0.08em"
      >
        NEXO
      </text>

      {/* Left Gold Horizontal Rule */}
      <line
        x1="98"
        y1="357"
        x2="135"
        y2="357"
        stroke="url(#goldLinearH)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* "TRAVEL & TOURS" Sub-heading in Deep Navy */}
      <text
        x="250"
        y="363"
        textAnchor="middle"
        fill="#0B2240"
        fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
        fontSize="20.5"
        fontWeight="700"
        letterSpacing="0.28em"
      >
        TRAVEL &amp; TOURS
      </text>

      {/* Right Gold Horizontal Rule */}
      <line
        x1="365"
        y1="357"
        x2="402"
        y2="357"
        stroke="url(#goldLinearH)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* ============================================================ */}
      {/* 5. BOTTOM ORNAMENTAL FLOURISH (Tapered Lines + Diamond + Center Bead) */}
      {/* ============================================================ */}
      <g transform="translate(250, 414)">
        {/* Left tapered line */}
        <line x1="-58" y1="0" x2="-14" y2="0" stroke="#0B2240" strokeWidth="1.5" strokeLinecap="round" />
        <polygon points="-12,0 -9,-2.5 -6,0 -9,2.5" fill="url(#goldGradient)" />

        {/* Center Golden Circle Bead */}
        <circle cx="0" cy="0" r="4.2" fill="url(#goldGradient)" stroke="#FFFFFF" strokeWidth="0.8" />

        {/* Right tapered line */}
        <polygon points="6,0 9,-2.5 12,0 9,2.5" fill="url(#goldGradient)" />
        <line x1="14" y1="0" x2="58" y2="0" stroke="#0B2240" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );

  // Badge-only mode (pure circular emblem)
  if (variant === 'badge-only') {
    return (
      <div id="nexo-logo-badge" className={`inline-flex items-center justify-center shrink-0 ${badgeSizeClasses} ${className}`}>
        {renderBadgeSVG()}
      </div>
    );
  }

  // Horizontal lockup mode (Emblem Badge + Clean Typography)
  if (variant === 'horizontal') {
    return (
      <div id="nexo-brand-logo" className={`flex items-center gap-3.5 select-none ${className}`}>
        <div className={`shrink-0 ${badgeSizeClasses}`}>
          {renderBadgeSVG()}
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={`font-black tracking-tight ${textSize} ${
                isLight ? 'text-white' : 'text-[#0B2240]'
              }`}
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              NEXO
            </span>
            <span
              className={`font-semibold tracking-wider text-xs sm:text-sm uppercase ${
                isLight ? 'text-[#38D2F2]' : 'text-[#00A8CC]'
              }`}
            >
              TRAVEL &amp; TOURS
            </span>
          </div>
          <span
            className="text-[11px] sm:text-xs font-semibold italic text-[#C59B27] mt-0.5 tracking-wide"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Manzil Soch Ki Dehleez Par
          </span>
          {showUrduTagline && (
            <span className="font-urdu text-[#E67E22] text-xs font-bold leading-tight mt-0.5">
              منزل سوچ کی دہلیز پر
            </span>
          )}
        </div>
      </div>
    );
  }

  // Full default mode (The complete emblem badge + optional side text or stand-alone)
  return (
    <div id="nexo-brand-logo" className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* The Master Circular Seal Badge */}
      <div className={`relative flex items-center justify-center shrink-0 ${badgeSizeClasses}`}>
        {renderBadgeSVG()}
      </div>

      {/* Side Typography for responsive navbars */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-extrabold tracking-wide ${textSize} ${
              isLight ? 'text-white' : 'text-[#0B2240]'
            }`}
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            NEXO
          </span>
          <span
            className={`font-bold tracking-wider text-xs sm:text-sm uppercase ${
              isLight ? 'text-[#38D2F2]' : 'text-[#00A8CC]'
            }`}
          >
            TRAVEL &amp; TOURS
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="text-xs sm:text-sm font-semibold italic text-[#C59B27] leading-none"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Manzil Soch Ki Dehleez Par
          </span>
        </div>
        {showUrduTagline && (
          <div className="font-urdu text-[#E67E22] text-xs font-bold leading-tight mt-0.5">
            منزل سوچ کی دہلیز پر
          </div>
        )}
      </div>
    </div>
  );
};
