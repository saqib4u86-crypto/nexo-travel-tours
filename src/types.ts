export type PageView = 'home' | 'dubai-visa' | 'turkey-visa' | 'destinations' | 'packages' | 'services' | 'visa-guide' | 'about' | 'contact';

export type Currency = 'USD' | 'PKR' | 'AED' | 'EUR';

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: 'Middle East' | 'Central Asia' | 'Europe' | 'Southeast Asia' | 'Far East' | 'Americas';
  tagline: string;
  image: string;
  visaType: 'E-Visa (Instant)' | 'Sticker Visa' | 'Visa on Arrival' | 'Schengen Visa';
  processingTime: string;
  visaFeeEstimate: {
    USD: number;
    PKR: number;
    AED: number;
    EUR: number;
  };
  startingPackagePrice: {
    USD: number;
    PKR: number;
    AED: number;
    EUR: number;
  };
  popularSpots: string[];
  bestSeason: string;
  documentsRequired: string[];
  featured?: boolean;
}

export interface TourPackage {
  id: string;
  title: string;
  destinationId: string;
  destinationName: string;
  durationDays: number;
  durationNights: number;
  category: 'Popular Holiday' | 'Honeymoon Special' | 'Family Tour' | 'Luxury Adventure' | 'Umrah & Spiritual';
  image: string;
  gallery: string[];
  hotelRating: number;
  pricePerPerson: {
    USD: number;
    PKR: number;
    AED: number;
    EUR: number;
  };
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  badge?: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  fullDesc: string;
  benefits: string[];
  supportedCountries: string[];
  turnaroundTime: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  city: string;
  serviceCategory: 'Tourist Visa' | 'Custom Tour' | 'Umrah & Ziyarat' | 'Flight & Hotel' | 'Corporate Travel' | 'Other';
  rating: number; // 1 to 5
  title?: string;
  comment: string;
  date: string;
  verifiedTraveler?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Visa' | 'Tours' | 'Payment' | 'General';
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  destination: string;
  serviceType: 'Tourist Visa' | 'Business Visa' | 'Holiday Package' | 'Flight Booking' | 'Hotel Reservation' | 'Umrah Package';
  preferredDate?: string;
  travelersCount: number;
  notes: string;
}
