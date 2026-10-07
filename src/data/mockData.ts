import { Destination, TourPackage, ServiceDetail, FAQItem } from '../types';

export const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: '$',
  PKR: '₨',
  AED: 'AED ',
  EUR: '€'
};

export const DESTINATIONS: Destination[] = [
  {
    id: 'azerbaijan-baku',
    name: 'Baku & Gabala',
    country: 'Azerbaijan',
    region: 'Central Asia',
    tagline: 'Land of Fire with ultra-modern architecture and Caucasian alpine beauty',
    image: 'https://images.unsplash.com/photo-1598875184988-5e67b1a874b8?auto=format&fit=crop&w=1200&q=80',
    visaType: 'E-Visa (Instant)',
    processingTime: '3 - 5 Working Hours (Express) / 3 Days (Standard)',
    visaFeeEstimate: {
      USD: 45,
      PKR: 12500,
      AED: 165,
      EUR: 42
    },
    startingPackagePrice: {
      USD: 390,
      PKR: 108000,
      AED: 1430,
      EUR: 360
    },
    popularSpots: ['Flame Towers', 'Heydar Aliyev Center', 'Old City (Icherisheher)', 'Gabala Tufandag Mountain Resort', 'Gobustan Rock Art'],
    bestSeason: 'April – October',
    documentsRequired: [
      'Original Passport scan (min. 6 months validity)',
      'Passport size photograph with white background',
      'Confirmed flight and hotel itinerary (provided by Nexo)',
      'Basic contact and CNIC/National ID details'
    ],
    featured: true
  },
  {
    id: 'turkey-istanbul',
    name: 'Istanbul & Cappadocia',
    country: 'Turkey',
    region: 'Europe',
    tagline: 'Where continents collide: Byzantine majesty and surreal hot-air balloon valleys',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80',
    visaType: 'E-Visa (Instant)',
    processingTime: 'Instant E-Visa / 10-15 Days (Sticker Visa)',
    visaFeeEstimate: {
      USD: 60,
      PKR: 16800,
      AED: 220,
      EUR: 55
    },
    startingPackagePrice: {
      USD: 650,
      PKR: 182000,
      AED: 2380,
      EUR: 600
    },
    popularSpots: ['Hagia Sophia', 'Blue Mosque', 'Bosphorus Cruise', 'Cappadocia Fairy Chimneys', 'Pamukkale Thermal Pools'],
    bestSeason: 'March – May & September – November',
    documentsRequired: [
      'Passport scan valid for at least 6 months',
      'Valid Schengen / US / UK / Ireland Visa or PR (for instant E-Visa)',
      'Bank statement (last 6 months) for sticker visa',
      'Employment letter or business NTN registration'
    ],
    featured: true
  },
  {
    id: 'uae-dubai',
    name: 'Dubai & Abu Dhabi',
    country: 'United Arab Emirates',
    region: 'Middle East',
    tagline: 'The pinnacle of luxury, futuristic skylines, and thrilling desert safaris',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    visaType: 'E-Visa (Instant)',
    processingTime: '24 - 48 Hours',
    visaFeeEstimate: {
      USD: 95,
      PKR: 26500,
      AED: 350,
      EUR: 88
    },
    startingPackagePrice: {
      USD: 480,
      PKR: 135000,
      AED: 1760,
      EUR: 440
    },
    popularSpots: ['Burj Khalifa & Dubai Mall', 'Desert Safari with BBQ', 'Palm Jumeirah', 'Sheikh Zayed Grand Mosque (Abu Dhabi)', 'Museum of the Future'],
    bestSeason: 'October – April',
    documentsRequired: [
      'Color copy of Passport first & last page',
      'Passport size photo with white background',
      'Hotel reservation & return air ticket copy'
    ],
    featured: true
  },
  {
    id: 'malaysia-kl',
    name: 'Kuala Lumpur & Langkawi',
    country: 'Malaysia',
    region: 'Southeast Asia',
    tagline: 'Lush tropical rainforests, pristine beaches, and iconic twin towers',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80',
    visaType: 'E-Visa (Instant)',
    processingTime: '2 - 3 Working Days',
    visaFeeEstimate: {
      USD: 50,
      PKR: 14000,
      AED: 185,
      EUR: 46
    },
    startingPackagePrice: {
      USD: 420,
      PKR: 118000,
      AED: 1540,
      EUR: 390
    },
    popularSpots: ['Petronas Twin Towers', 'Batu Caves', 'Langkawi Cable Car & Sky Bridge', 'Genting Highlands', 'Penang Heritage Street'],
    bestSeason: 'All Year Round',
    documentsRequired: [
      'Passport front page color scan',
      'White background photo (35mm x 50mm)',
      'Return flight ticket & hotel booking voucher',
      'Account maintenance certificate & 3-month bank statement'
    ],
    featured: true
  },
  {
    id: 'saudi-arabia',
    name: 'Makkah, Madinah & Riyadh',
    country: 'Saudi Arabia',
    region: 'Middle East',
    tagline: 'Blessed Umrah journeys, historic Islamic heritage, and modern Red Sea wonders',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
    visaType: 'E-Visa (Instant)',
    processingTime: 'Instant E-Visa / 24 Hours Umrah Visa',
    visaFeeEstimate: {
      USD: 140,
      PKR: 39000,
      AED: 515,
      EUR: 130
    },
    startingPackagePrice: {
      USD: 790,
      PKR: 220000,
      AED: 2900,
      EUR: 730
    },
    popularSpots: ['Masjid al-Haram (Makkah)', 'Al-Masjid an-Nabawi (Madinah)', 'Historic Jeddah Al-Balad', 'Kingdom Centre Tower (Riyadh)', 'AlUla Hegra'],
    bestSeason: 'All Year Round (Umrah Seasons)',
    documentsRequired: [
      'Original Passport valid for min 6 months',
      'Recent photograph with white background',
      'Vaccination certificates',
      'Biometric slip (where applicable)'
    ],
    featured: true
  },
  {
    id: 'thailand-bangkok',
    name: 'Bangkok & Phuket',
    country: 'Thailand',
    region: 'Southeast Asia',
    tagline: 'Emerald island waters, golden temples, and world-class street cuisine',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80',
    visaType: 'E-Visa (Instant)',
    processingTime: '4 - 6 Working Days',
    visaFeeEstimate: {
      USD: 55,
      PKR: 15400,
      AED: 200,
      EUR: 50
    },
    startingPackagePrice: {
      USD: 490,
      PKR: 137000,
      AED: 1800,
      EUR: 450
    },
    popularSpots: ['Phi Phi Islands by Speedboat', 'Grand Palace Bangkok', 'Phuket Old Town & Big Buddha', 'Coral Island Watersports', 'Floating Market'],
    bestSeason: 'November – April',
    documentsRequired: [
      'Passport scanned copies',
      'Photographs with 80% face coverage',
      '6-Month bank statement with minimum balance',
      'Proof of accommodation and return flights'
    ],
    featured: false
  },
  {
    id: 'europe-schengen',
    name: 'Italy, France & Switzerland',
    country: 'Europe (Schengen Area)',
    region: 'Europe',
    tagline: 'The romantic Swiss Alps, Paris Eiffel Tower, and Venetian canals',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    visaType: 'Schengen Visa',
    processingTime: '15 - 20 Working Days',
    visaFeeEstimate: {
      USD: 110,
      PKR: 31000,
      AED: 405,
      EUR: 90
    },
    startingPackagePrice: {
      USD: 1450,
      PKR: 405000,
      AED: 5320,
      EUR: 1340
    },
    popularSpots: ['Eiffel Tower & Louvre', 'Swiss Alps Jungfraujoch & Lucerne', 'Venice Grand Canal', 'Rome Colosseum', 'Milan Duomo'],
    bestSeason: 'May – October',
    documentsRequired: [
      'Comprehensive document file prepared by Nexo Travel experts',
      '6-month verified bank statements with sufficient funds',
      'Cover letter & detailed day-to-day itinerary',
      'Travel Health Insurance (€30,000 coverage)',
      'Employment/Business verification papers & tax returns'
    ],
    featured: true
  },
  {
    id: 'uk-london',
    name: 'London & Edinburgh',
    country: 'United Kingdom',
    region: 'Europe',
    tagline: 'Royal heritage, world-class theatre, and picturesque Scottish highlands',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    visaType: 'Sticker Visa',
    processingTime: '3 - 6 Weeks (Standard) / 5 Days (Priority)',
    visaFeeEstimate: {
      USD: 150,
      PKR: 42000,
      AED: 550,
      EUR: 140
    },
    startingPackagePrice: {
      USD: 1280,
      PKR: 358000,
      AED: 4700,
      EUR: 1180
    },
    popularSpots: ['Tower Bridge & Big Ben', 'Buckingham Palace', 'Edinburgh Castle', 'Oxford & Cambridge Colleges', 'Bicester Village'],
    bestSeason: 'May – September',
    documentsRequired: [
      'Passport valid for entire UK duration',
      'Extensive financial evidence & source of funds',
      'Ties to home country (property, family, employment)',
      'Nexo Professional Application & Appointment Booking'
    ],
    featured: false
  }
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'baku-marvel-5d',
    title: '5-Day Baku & Gabala Alpine Marvel',
    destinationId: 'azerbaijan-baku',
    destinationName: 'Baku, Azerbaijan',
    durationDays: 5,
    durationNights: 4,
    category: 'Popular Holiday',
    image: 'https://images.unsplash.com/photo-1598875184988-5e67b1a874b8?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598875184988-5e67b1a874b8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541845157-a6d2d100c931?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'
    ],
    hotelRating: 4,
    pricePerPerson: {
      USD: 440,
      PKR: 122000,
      AED: 1615,
      EUR: 405
    },
    inclusions: [
      '4-Star Hotel accommodation with daily breakfast buffet',
      'Fast-track Azerbaijan E-Visa processing',
      'Airport pick-and-drop in private air-conditioned vehicle',
      'Full-day Baku City Tour (Heydar Aliyev Center, Boulevard, Old Town)',
      'Full-day Gabala tour with Tufandag cable car passes',
      'English/Urdu speaking professional tour guide'
    ],
    exclusions: [
      'International roundtrip airfare (available on request)',
      'Personal expenses & travel insurance',
      'Lunches & dinners not mentioned in itinerary'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Baku & Boulevard Leisure Walk',
        description: 'Meet and greet at Heydar Aliyev International Airport. Private transfer to 4-star city center hotel. Evening relaxation at Baku Seaside Boulevard and Nizami Street.'
      },
      {
        day: 2,
        title: 'Baku Historic & Modern Splendour',
        description: 'Explore Icherisheher (Old City), Maiden Tower, Palace of the Shirvanshahs, modern masterpiece Heydar Aliyev Center, and Highland Park for breathtaking panoramic views of Flame Towers.'
      },
      {
        day: 3,
        title: 'Excursion to Gabala Mountains & Nohur Lake',
        description: 'Scenic drive through Caucasian mountains to Gabala. Experience Tufandag Mountain Cable Car, visit 7 Beauties Waterfall, and relax by picturesque Nohur Lake.'
      },
      {
        day: 4,
        title: 'Gobustan Mud Volcanoes & Fire Temple',
        description: 'Discover prehistoric petroglyphs at Gobustan National Park, active mud volcanoes, Ateshgah Fire Temple, and Yanar Dag (Burning Mountain).'
      },
      {
        day: 5,
        title: 'Souvenir Shopping & Airport Departure',
        description: 'Free morning for shopping at Ganjlik Mall / Yashil Bazaar for local sweets and caviar. Private transfer to airport with cherished memories.'
      }
    ],
    badge: 'Bestseller'
  },
  {
    id: 'istanbul-cappadocia-7d',
    title: '7-Day Istanbul Heritage & Cappadocia Balloons',
    destinationId: 'turkey-istanbul',
    destinationName: 'Istanbul & Cappadocia, Turkey',
    durationDays: 7,
    durationNights: 6,
    category: 'Popular Holiday',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?auto=format&fit=crop&w=800&q=80'
    ],
    hotelRating: 5,
    pricePerPerson: {
      USD: 780,
      PKR: 218000,
      AED: 2860,
      EUR: 720
    },
    inclusions: [
      '4 nights in Istanbul 4/5-star hotel & 2 nights in authentic Cappadocia Cave Suite',
      'Domestic flights (Istanbul - Cappadocia - Istanbul)',
      'Bosphorus Dinner Cruise with Turkish folklore show',
      'All inter-city transfers and guided historical tours',
      'Daily breakfast and select lunches'
    ],
    exclusions: [
      'Hot air balloon ride ticket (can be pre-booked with discount)',
      'International flights',
      'Turkey sticker visa embassy fees (if E-visa not eligible)'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Welcome to Istanbul - The Crossroads of Civilizations',
        description: 'Arrival at Istanbul International Airport. Private luxury transfer to your hotel. Welcome briefing and evening at leisure in Taksim.'
      },
      {
        day: 2,
        title: 'Imperial Ottoman & Byzantine Wonders',
        description: 'Visit Hagia Sophia, Blue Mosque, Hippodrome, Topkapi Palace, and bargain for treasures at the Grand Bazaar.'
      },
      {
        day: 3,
        title: 'Bosphorus Cruise & Spice Bazaar',
        description: 'Sail between Europe and Asia on a private scenic cruise. Explore Egyptian Spice Market and Galata Tower.'
      },
      {
        day: 4,
        title: 'Flight to Cappadocia & Sunset Quad Safari',
        description: 'Morning flight to Cappadocia. Check into luxury Cave Hotel. Sunset ATV quad tour across Love Valley.'
      },
      {
        day: 5,
        title: 'Hot Air Balloon Sunrise & Goreme Valley Tour',
        description: 'Early morning hot air balloon experience over fairy chimneys. Visit Goreme Open Air Museum, Underground City of Kaymakli, and Pigeon Valley.'
      },
      {
        day: 6,
        title: 'Return to Istanbul & Leisure Evening',
        description: 'Flight back to Istanbul. Free afternoon for luxury shopping at Istinye Park and Turkish hammam experience.'
      },
      {
        day: 7,
        title: 'Departure Day',
        description: 'Farewell Istanbul. Private airport transfer for your flight back home.'
      }
    ],
    badge: 'Luxury Experience'
  },
  {
    id: 'dubai-luxury-5d',
    title: '5-Day Dubai Mega-City & Desert Safari Extravaganza',
    destinationId: 'uae-dubai',
    destinationName: 'Dubai, UAE',
    durationDays: 5,
    durationNights: 4,
    category: 'Family Tour',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80'
    ],
    hotelRating: 4,
    pricePerPerson: {
      USD: 520,
      PKR: 145000,
      AED: 1910,
      EUR: 480
    },
    inclusions: [
      '4 nights accommodation in 4-star Dubai hotel with daily breakfast',
      'Dubai 30-Day Tourist E-Visa with mandatory medical insurance',
      'Burj Khalifa 124th Floor observation deck entry tickets',
      'Desert Safari in 4x4 Land Cruiser with dune bashing, BBQ dinner & live shows',
      'Dubai Marina Dhow Cruise dinner with music & Tanoura dance',
      'Private airport transfers on arrival and departure'
    ],
    exclusions: [
      'Tourism Dirham fee (payable directly at hotel)',
      'Optional water sports and theme park tickets'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Dubai & Marina Dhow Cruise',
        description: 'Airport meet and greet. Transfer to hotel. In the evening, enjoy a 2-hour Marina Dhow Cruise with international buffet dinner.'
      },
      {
        day: 2,
        title: 'Dubai Half-Day City Tour & Burj Khalifa At The Top',
        description: 'Photo stop at Burj Al Arab, Jumeirah Beach, Dubai Frame. Ascend to Burj Khalifa 124th floor and watch the Dubai Fountain show.'
      },
      {
        day: 3,
        title: 'Thrilling 4x4 Desert Safari',
        description: 'Afternoon dune bashing in the golden desert, camel riding, sandboarding, henna tattoo, and 5-star BBQ dinner under starlit sky.'
      },
      {
        day: 4,
        title: 'Abu Dhabi City & Grand Mosque Day Trip (Optional)',
        description: 'Visit the architectural marvel Sheikh Zayed Grand Mosque, Emirates Palace photo stop, and Ferrari World.'
      },
      {
        day: 5,
        title: 'Shopping at Gold Souk & Departure',
        description: 'Last-minute shopping at Deira Gold Souk and Mall of the Emirates. Airport transfer.'
      }
    ],
    badge: 'Popular Family Choice'
  },
  {
    id: 'umrah-premium-10d',
    title: '10-Day Premium Spiritual Umrah & Ziyarat Package',
    destinationId: 'saudi-arabia',
    destinationName: 'Makkah & Madinah, Saudi Arabia',
    durationDays: 10,
    durationNights: 9,
    category: 'Umrah & Spiritual',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80'
    ],
    hotelRating: 5,
    pricePerPerson: {
      USD: 950,
      PKR: 265000,
      AED: 3490,
      EUR: 875
    },
    inclusions: [
      '5 Nights in Makkah (5-Star clock tower/proximity hotel)',
      '4 Nights in Madinah (5-Star Markazia hotel with Haram view)',
      'Instant Saudi Umrah / Tourist E-Visa with comprehensive insurance',
      'VIP High-Speed Haramain Bullet Train tickets between Makkah & Madinah',
      'Guided Historical Ziyarat in Makkah (Ghar-e-Hira, Jabal-e-Noor, Mina, Arafat) & Madinah (Quba, Qiblatain, Uhud)',
      '24/7 on-ground assistance and spiritual guide'
    ],
    exclusions: [
      'International flights (can be bundled with PIA, Saudia, Emirates, FlyJinnah)',
      'Individual laundry and phone expenses'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jeddah / Makkah & Performance of Umrah',
        description: 'VIP transfer from Jeddah airport directly to Makkah hotel. Check-in, brief rest, and accompanied performance of first Umrah under expert guidance.'
      },
      {
        day: 2,
        title: 'Prayers in Haram & Spiritual Reflection',
        description: 'Full day of devotion in Masjid al-Haram. Private consultation with religious scholar.'
      },
      {
        day: 3,
        title: 'Comprehensive Makkah Ziyarat',
        description: 'Guided tour to Cave Hira, Cave Thawr, Plains of Arafat, Muzdalifah, and Mina.'
      },
      {
        day: 4,
        title: 'Second Umrah Option from Masjid Aisha (Tan\'eem)',
        description: 'Opportunity to perform optional second Umrah for loved ones. Evening Tawaf.'
      },
      {
        day: 5,
        title: 'Bullet Train to Madinah Munawwarah',
        description: 'Scenic 2-hour ride on Haramain Bullet Train to the City of the Prophet ﷺ. Check-in to hotel close to Masjid an-Nabawi.'
      },
      {
        day: 6,
        title: 'Salam at Rawdah Sharif & Prayers',
        description: 'Facilitated appointment for Riaz-ul-Jannah (Rawdah Mubarak) through official Nusuk portal and prayers.'
      },
      {
        day: 7,
        title: 'Sacred Madinah Ziyarat',
        description: 'Visit Masjid Quba (first mosque in Islam), Mount Uhud and martyrs cemetery, and Masjid al-Qiblatain.'
      },
      {
        day: 8,
        title: 'Date Market Visit & Quran Printing Complex',
        description: 'Visit to authentic Madinah date orchards and historic wells of the Sahabah.'
      },
      {
        day: 9,
        title: 'Farewell Salam at Masjid an-Nabawi',
        description: 'Spiritual day of reflection and farewell salam.'
      },
      {
        day: 10,
        title: 'Transfer to Madinah/Jeddah Airport & Return',
        description: 'Assisted check-out and private transfer to airport with Zamzam water.'
      }
    ],
    badge: 'Spiritual Excellence'
  },
  {
    id: 'umrah-family-15d',
    title: '15-Day Deluxe Family Umrah & Complete Historical Ziyarat',
    destinationId: 'saudi-arabia',
    destinationName: 'Makkah & Madinah, Saudi Arabia',
    durationDays: 15,
    durationNights: 14,
    category: 'Umrah & Spiritual',
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80'
    ],
    hotelRating: 5,
    pricePerPerson: {
      USD: 0,
      PKR: 0,
      AED: 0,
      EUR: 0
    },
    inclusions: [
      '8 Nights Makkah at 5-Star Hotel within close walking distance to Haram (Anjum / Jabal Omar)',
      '6 Nights Madinah at 5-Star Markazia Central Area Hotel (Pullman Zamzam / Frontel)',
      'Saudi Tourist / Umrah E-Visa with full medical health insurance',
      'Dedicated family air-conditioned private vehicle / High-Speed Haramain Bullet Train',
      'Complete Sacred Ziyarat in Makkah (Ghar-e-Hira, Jabal-e-Noor, Mina, Arafat, Muzdalifah)',
      'Detailed Madinah Historical Ziyarat (Masjid Quba, Mount Uhud, Masjid Qiblatain, Khandaq)',
      'Official Nusuk App permit arrangement for Rawdah Mubarak (Riaz-ul-Jannah)',
      'Complimentary 5-Litre Zamzam water packed container per passenger on departure'
    ],
    exclusions: [
      'International flights (custom airline bundle available: PIA, Saudia, Emirates, FlyJinnah)',
      'Personal room service, telephone, and laundry expenses'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jeddah & VIP Transfer to Makkah Mukarramah',
        description: 'Meet and assist by Nexo representative at King Abdulaziz International Airport (Jeddah). Chauffeur-driven transfer to your Makkah hotel. Check-in, brief relaxation, and guided performance of your first Umrah.'
      },
      {
        day: 2,
        title: 'Spiritual Devotion in Masjid al-Haram',
        description: 'Spend your day immersed in prayers, recitation, and circumambulation (Tawaf) around the Holy Kaaba.'
      },
      {
        day: 3,
        title: 'Historic Makkah Ziyarat Tour',
        description: 'Private tour to Jabal-e-Noor (Cave Hira), Jabal Thawr, Mina, Plains of Arafat, and Muzdalifah with knowledgeable Urdu/English guide.'
      },
      {
        day: 4,
        title: 'Second Optional Umrah via Masjid Aisha (Tan\'eem)',
        description: 'Arranged transport to Masjid Aisha for Ihram renewal for family members wishing to perform Umrah for relatives.'
      },
      {
        day: 5,
        title: 'Quranic Exhibition & Holy Kaaba Architecture Tour',
        description: 'Optional visit to the Two Holy Mosques Architecture Exhibition and local Islamic cultural centers.'
      },
      {
        day: 6,
        title: 'Tahajjud Prayers & Family Spiritual Gathering',
        description: 'Night devotion at Mataf followed by family breakfast overlooking the Haram.'
      },
      {
        day: 7,
        title: 'Free Day for Personal Devotion & Souvenirs',
        description: 'Time for personal prayers, Islamic book shopping, and local dates markets in Makkah.'
      },
      {
        day: 8,
        title: 'Farewell Tawaf (Tawaf-al-Wida) & Departure Prep',
        description: 'Completion of farewell Tawaf around Kaaba in preparation for journey to the Prophet\'s City.'
      },
      {
        day: 9,
        title: 'Scenic Journey to Madinah al-Munawwarah',
        description: 'Travel via Haramain High-Speed Train or luxury private coach to Madinah. Check-in at Markazia hotel steps from Bab-as-Salam.'
      },
      {
        day: 10,
        title: 'Salam at Rawdah Sharif (Riaz-ul-Jannah)',
        description: 'Attending facilitated appointment at Rawdah Sharif through Nusuk portal to offer Salam to the Beloved Prophet Muhammad ﷺ and his noble companions.'
      },
      {
        day: 11,
        title: 'Full Day Madinah Historical Ziyarat',
        description: 'Spiritual visit to Masjid Quba (prayer rewards equivalent to an Umrah), Mount Uhud and martyrs\' graves, and Masjid al-Qiblatain.'
      },
      {
        day: 12,
        title: 'Seven Mosques (Saba Masajid) & Dates Market',
        description: 'Tour of the historic battle site of Khandaq (Trench) and excursion to the famous Madinah Date Souq for authentic Ajwa and Amber.'
      },
      {
        day: 13,
        title: 'King Fahd Holy Quran Printing Complex',
        description: 'Guided tour of the world\'s largest Quran printing press in Madinah (subject to opening timings).'
      },
      {
        day: 14,
        title: 'Day of Intense Ibadah & Peaceful Salam',
        description: 'Spiritual moments in the sacred serenity of Masjid an-Nabawi courtyard under the shaded canopies.'
      },
      {
        day: 15,
        title: 'Departure Transfer with Zamzam',
        description: 'Assisted check-out and private transfer to Prince Mohammad Bin Abdulaziz International Airport (Madinah) or Jeddah for your flight back home.'
      }
    ],
    badge: 'Family Favorite'
  },
  {
    id: 'umrah-economy-14d',
    title: '14-Day Budget-Friendly Economy Umrah Group Package',
    destinationId: 'saudi-arabia',
    destinationName: 'Makkah & Madinah, Saudi Arabia',
    durationDays: 14,
    durationNights: 13,
    category: 'Umrah & Spiritual',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80'
    ],
    hotelRating: 4,
    pricePerPerson: {
      USD: 0,
      PKR: 0,
      AED: 0,
      EUR: 0
    },
    inclusions: [
      '7 Nights Makkah Hotel (Comfortable 350-500m walk or 24/7 complimentary shuttle to Haram courtyard)',
      '6 Nights Madinah Hotel (Central Markazia North / South within easy walking proximity)',
      'Complete Saudi Umrah Visa & medical travel insurance included',
      'Air-conditioned coaster / luxury bus transport for all inter-city transfers',
      'Group Ziyarat tours in both Makkah and Madinah with experienced religious group leader',
      'Assistance with Nusuk App for Rawdah Mubarak slot registration',
      'Packed 5-Litre Zamzam water voucher per pilgrim'
    ],
    exclusions: [
      'International flights (flexible group airfare bookings available)',
      'Daily meals other than hotel breakfast (half-board / full-board available on request)'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Group Arrival & Joint First Umrah',
        description: 'Arrival at Jeddah airport, group boarding to Makkah, hotel check-in, and collective performance of Umrah under group leader.'
      },
      {
        day: 2,
        title: 'Prayers in Masjid al-Haram',
        description: 'Individual and group prayers in the sacred precincts of the Holy Kaaba.'
      },
      {
        day: 3,
        title: 'Guided Makkah Ziyarat Tour',
        description: 'Organized coach tour to Cave Hira, Cave Thawr, Arafat, and Mina with Urdu religious commentary.'
      },
      {
        day: 4,
        title: 'Tan\'eem Ziyarat & Second Umrah Option',
        description: 'Transport provided to Masjid Aisha for pilgrims performing additional Umrah for parents or elders.'
      },
      {
        day: 5,
        title: 'Spiritual Lecture & Group Dua',
        description: 'Evening gathering with religious counselor on the etiquettes of Hajj and Umrah.'
      },
      {
        day: 6,
        title: 'Day of Devotion & Tawaf',
        description: 'Full day for prayers, Quran recitation, and optional Tawaf.'
      },
      {
        day: 7,
        title: 'Tawaf-al-Wida in Makkah',
        description: 'Performing the farewell circumambulation around the Holy Kaaba before packing.'
      },
      {
        day: 8,
        title: 'Group Transfer to Madinah Munawwarah',
        description: 'Luxury AC coach transfer to Madinah. Arrival and first emotional Salam at the Prophet\'s Mosque.'
      },
      {
        day: 9,
        title: 'Riaz-ul-Jannah Nusuk Schedule',
        description: 'Group assistance entering Rawdah Sharif based on assigned Nusuk appointment times.'
      },
      {
        day: 10,
        title: 'Madinah Historical Ziyarat',
        description: 'Bus excursion to Masjid Quba, Mount Uhud, and Masjid Qiblatain with group explanation.'
      },
      {
        day: 11,
        title: 'Visit to Famous Madinah Date Market',
        description: 'Shopping excursion for Ajwa, Safawi, and Sukari dates directly from authentic traders.'
      },
      {
        day: 12,
        title: 'Spiritual Reflections at Masjid an-Nabawi',
        description: 'Day of peace and contemplation in the courtyard of the Prophet\'s Mosque.'
      },
      {
        day: 13,
        title: 'Farewell Salam at Bab-as-Salam',
        description: 'Offering final Salam to the Messenger of Allah ﷺ before departure.'
      },
      {
        day: 14,
        title: 'Return Airport Transfer',
        description: 'Assisted group bus transfer to Madinah or Jeddah airport for departure back to Pakistan.'
      }
    ],
    badge: 'Affordable Group Plan'
  },
  {
    id: 'umrah-executive-7d',
    title: '7-Day Executive Express Umrah & Sacred Retreat',
    destinationId: 'saudi-arabia',
    destinationName: 'Makkah & Madinah, Saudi Arabia',
    durationDays: 7,
    durationNights: 6,
    category: 'Umrah & Spiritual',
    image: 'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80'
    ],
    hotelRating: 5,
    pricePerPerson: {
      USD: 0,
      PKR: 0,
      AED: 0,
      EUR: 0
    },
    inclusions: [
      '4 Nights in Makkah (5-Star Luxury Clock Tower Fairmont / Raffles / Swissotel with Kaaba View)',
      '2 Nights in Madinah (5-Star Luxury Oberoi / Dar Al Taqwa steps from Rawdah gate)',
      'Express Umrah E-Visa issued within 12-24 hours',
      'Private luxury GMC Yukon or Mercedes transfer between airport, hotels, and Haramain Station',
      'First Class Business Bullet Train tickets between Makkah and Madinah',
      'Priority VIP Nusuk reservation support for Riaz-ul-Jannah',
      'Private historical Ziyarat tour with senior English/Urdu guide',
      '24/7 dedicated personal concierge travel manager'
    ],
    exclusions: [
      'Business / Economy international flights (direct seat reservation assistance available)'
    ],
    itinerary: [
      {
        day: 1,
        title: 'VIP Arrival & Direct Kaaba Suite Check-In',
        description: 'Chauffeured luxury SUV pickup from Jeddah Airport. Fast-track suite check-in overlooking the Holy Kaaba. First Umrah performed with personal guide.'
      },
      {
        day: 2,
        title: 'Intensive Spiritual Solitude in Haram',
        description: 'Private spiritual retreat in Mataf and Upper Balconies of Masjid al-Haram.'
      },
      {
        day: 3,
        title: 'Private Makkah Ziyarat in Luxury Chauffeur',
        description: 'Exclusive vehicle tour of Jabal-e-Noor, Cave Thawr, and historical sites at your own pace.'
      },
      {
        day: 4,
        title: 'Haramain Business Bullet Train to Madinah',
        description: 'Relax in First Class bullet train lounge. Swift arrival in Madinah and check-in to luxury hotel fronting the Green Dome.'
      },
      {
        day: 5,
        title: 'VIP Rawdah Mubarak Entry & Uhud Ziyarat',
        description: 'Priority Nusuk appointment for Rawdah Sharif. Private afternoon visit to Mount Uhud and Masjid Quba.'
      },
      {
        day: 6,
        title: 'Day of Contemplation & Farewell Salam',
        description: 'Private moments at Masjid an-Nabawi and final Salam before the Prophet\'s chamber.'
      },
      {
        day: 7,
        title: 'Executive Airport Chauffeur & Departure',
        description: 'Luggage assistance, airport VIP lounge escort, and flight departure with 5L Zamzam package.'
      }
    ],
    badge: 'Executive VIP Luxury'
  },
  {
    id: 'malaysia-tropical-6d',
    title: '6-Day Malaysia Twin Towers & Langkawi Beach Bliss',
    destinationId: 'malaysia-kl',
    destinationName: 'Kuala Lumpur & Langkawi, Malaysia',
    durationDays: 6,
    durationNights: 5,
    category: 'Honeymoon Special',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80'
    ],
    hotelRating: 4,
    pricePerPerson: {
      USD: 510,
      PKR: 142000,
      AED: 1870,
      EUR: 470
    },
    inclusions: [
      '3 Nights 4-Star Kuala Lumpur Hotel & 2 Nights Langkawi Beachfront Resort',
      'E-Visa assistance and confirmation',
      'Domestic flights (Kuala Lumpur – Langkawi – Kuala Lumpur)',
      'Genting Highlands Cable Car & Batu Caves day trip',
      'Langkawi Island Hopping tour by speedboat',
      'All private airport and inter-resort transfers'
    ],
    exclusions: [
      'International airfare',
      'Meals not specified in package'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive in Kuala Lumpur',
        description: 'Private transfer from KLIA to hotel. Evening walk around Bukit Bintang food street.'
      },
      {
        day: 2,
        title: 'Kuala Lumpur City & Batu Caves Tour',
        description: 'Explore Petronas Twin Towers, King\'s Palace, National Mosque, and iconic rainbow stairs of Batu Caves.'
      },
      {
        day: 3,
        title: 'Genting Highlands Day Tour',
        description: 'Ride the world-class Awana SkyWay cable car over tropical rainforests. Enjoy indoor/outdoor entertainment.'
      },
      {
        day: 4,
        title: 'Flight to Langkawi & Beach Sunset',
        description: 'Fly to duty-free paradise Langkawi. Relax at Pantai Cenang beach.'
      },
      {
        day: 5,
        title: 'Langkawi Island Hopping & Cable Car',
        description: 'Speedboat tour to pregnant maiden island, eagle feeding, and breathtaking Sky Bridge.'
      },
      {
        day: 6,
        title: 'Departure from Langkawi / KLIA',
        description: 'Return flight to Kuala Lumpur and connecting international flight.'
      }
    ],
    badge: 'Honeymoon Favorite'
  }
];

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: 'tourist-visas',
    title: 'Tourist & Visit Visa Consultancy',
    shortDesc: 'Comprehensive end-to-end visa assistance with meticulous file preparation and embassy compliance.',
    iconName: 'Passport',
    fullDesc: 'Navigating international visa requirements can be intricate and stressful. At Nexo Travel & Tours, our certified immigration and visa consultants handle file compilation, appointment scheduling, cover letter drafting, financial documentation audits, and embassy submissions. From instant E-visas for Azerbaijan, Turkey, and UAE to detailed Schengen, UK, USA, and Canadian applications, we ensure flawless paperwork.',
    benefits: [
      'Thorough pre-submission document verification by senior consultants',
      'High-probability interview coaching and mock Q&A sessions',
      'Verified authentic hotel vouchers and flight itineraries for embassies',
      'Real-time tracking of application status via SMS & WhatsApp'
    ],
    supportedCountries: ['Azerbaijan', 'Turkey', 'UAE', 'Saudi Arabia', 'Malaysia', 'Thailand', 'UK', 'USA', 'Schengen (29 Countries)', 'Canada', 'Australia', 'Singapore', 'Japan'],
    turnaroundTime: 'Instant E-Visas (1-24 Hours) / Sticker Visas (5-15 Days)'
  },
  {
    id: 'corporate-business-travel',
    title: 'Business & Corporate Travel',
    shortDesc: 'Tailored travel management, conference visas, delegate delegations, and corporate corporate rates.',
    iconName: 'Briefcase',
    fullDesc: 'We provide dedicated corporate travel desk solutions for companies, executives, and trade delegations. Whether you need single-entry conference visas, multi-entry business visas, expedited lounge passes, or flexible corporate flight ticketing with priority cancellation policies, Nexo Travel is your trusted strategic partner.',
    benefits: [
      'Specialized corporate billing and expense reports',
      'Invitation letter vetting and official commercial visa filings',
      'VIP airport meet-and-assist services worldwide',
      '24/7 dedicated corporate account manager'
    ],
    supportedCountries: ['Worldwide Corporate Destinations', 'Gulf (GCC)', 'European Union', 'North America', 'East Asia'],
    turnaroundTime: 'Fast-Track Corporate SLA'
  },
  {
    id: 'flight-ticketing',
    title: 'Global Flight Ticketing',
    shortDesc: 'Discounted airfares on all major international airlines with flexible rescheduling policies.',
    iconName: 'Plane',
    fullDesc: 'Access private corporate airfares, seasonal promo seats, and flexible itinerary planning across top global carriers including Emirates, Qatar Airways, Turkish Airlines, Saudia, PIA, FlyDubai, Air Arabia, British Airways, and Singapore Airlines.',
    benefits: [
      'Competitive transparent rates on economy, premium economy, and business class',
      'Instant date changes and reissue support without endless hold times',
      'Group travel discounts for 10+ passengers',
      'Free seat selection and special dietary meal arrangements'
    ],
    supportedCountries: ['All Global Airlines & Routes'],
    turnaroundTime: 'Instant E-Ticket Issuance'
  },
  {
    id: 'luxury-hotel-booking',
    title: 'Worldwide Hotel & Resort Bookings',
    shortDesc: 'Direct partnerships with over 500,000 verified 3 to 5-star hotels, luxury resorts, and villas.',
    iconName: 'Hotel',
    fullDesc: 'Enjoy negotiated rates, complimentary room upgrades, early check-in/late check-out privileges, and daily breakfast inclusions. From boutique cave hotels in Cappadocia and beachfront resorts in Langkawi to 5-star towers facing the Haram in Makkah.',
    benefits: [
      'Official confirmed vouchers acceptable by all international embassies',
      'Free cancellation options on select properties',
      'Handpicked properties verified for cleanliness, safety, and halal meals',
      'Exclusive VIP perks and honeymoon room decor'
    ],
    supportedCountries: ['Global Portfolio (180+ Countries)'],
    turnaroundTime: 'Instant Voucher Delivery'
  },
  {
    id: 'custom-holiday-packages',
    title: 'Customized Holiday Packages',
    shortDesc: 'Bespoke itineraries tailored to your dates, budget, family size, and vacation style.',
    iconName: 'Compass',
    fullDesc: 'No two travelers are alike. Our travel specialists design custom holiday itineraries from scratch—incorporating private chauffeur transfers, certified local guides, romantic dinners, theme park tickets, and authentic cultural encounters.',
    benefits: [
      '100% personalized day-by-day travel plan',
      'Flexible pace suited for families with children or elderly parents',
      'Transparent itemized pricing with zero hidden surcharges',
      'Local English and Urdu speaking guides available upon request'
    ],
    supportedCountries: ['Azerbaijan', 'Turkey', 'UAE', 'Malaysia', 'Thailand', 'Europe', 'Sri Lanka', 'Maldives', 'Indonesia'],
    turnaroundTime: 'Custom Quote within 3 Hours'
  },
  {
    id: 'umrah-ziyarat',
    title: 'Spiritual Umrah & Ziyarat Services',
    shortDesc: 'Government authorized, spiritually fulfilling Umrah packages with closest Haram accommodation.',
    iconName: 'Moon',
    fullDesc: 'We treat every pilgrim as a guest of Allah. Our Umrah packages combine spiritual tranquility with flawless logistical execution. We arrange instant Nusuk visa approvals, 5-star clock tower accommodation, private luxury GMC transfers, and historical ziyarat tours.',
    benefits: [
      'Instant Umrah visa issuance through Ministry of Hajj & Umrah',
      'Walking distance hotels from Masjid al-Haram and Masjid an-Nabawi',
      'Bullet Train (Haramain) pre-booked VIP seats',
      'Religious scholar orientation and guidance'
    ],
    supportedCountries: ['Kingdom of Saudi Arabia'],
    turnaroundTime: 'Visa within 24 Hours'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'Visa',
    question: 'How fast can Nexo Travel & Tours process an E-Visa for Azerbaijan or UAE?',
    answer: 'For Azerbaijan and UAE, we offer Express E-Visa processing delivered within 3 to 24 hours. Standard processing takes 2-3 business days. All we need is a clear passport scan and photograph.'
  },
  {
    category: 'Visa',
    question: 'How does Nexo Travel & Tours maximize visa success for Schengen and UK?',
    answer: 'We conduct multi-tier financial and documentation audits before submitting your file to VFS/embassies. We prepare customized cover letters, verified travel itineraries, genuine hotel reservations, and provide personalized interview coaching to ensure complete embassy compliance.'
  },
  {
    category: 'Tours',
    question: 'Can I customize the tour itinerary and choose my own hotels?',
    answer: 'Absolutely! Every tour package can be tailored 100% to your preferences—including hotel star category, private vs group transport, meal plans, and additional city visits.'
  },
  {
    category: 'Payment',
    question: 'What payment methods do you accept?',
    answer: 'We accept direct online bank transfers, debit/credit cards (Visa/Mastercard), corporate cheques, cash deposits at our head office, and international wire transfers.'
  },
  {
    category: 'General',
    question: 'What is the story behind the slogan "منزل سوچ کی دہلیز پر"?',
    answer: '"منزل سوچ کی دہلیز پر" translates to "Your destination is at the doorstep of your thoughts". At Nexo Travel & Tours, we believe that the moment you imagine traveling, our dedicated consultancy turns that dream into a seamless, boarding-ready reality.'
  }
];
