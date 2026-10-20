import { DomesticDestination } from '../types';

export const DOMESTIC_DESTINATIONS: DomesticDestination[] = [
  {
    id: 'hunza-valley',
    name: 'Hunza Valley & Nagar',
    urduName: 'ہنزہ و نگر — قراقرم کا تاج',
    region: 'Gilgit-Baltistan',
    province: 'Gilgit-Baltistan',
    tagline: 'Crown Jewel of Karakoram & World’s Roof',
    description: 'Immerse in the breathtaking wonderland of Hunza, where dramatic 7,000-meter peaks like Rakaposhi and Ultar Sar meet ancient silk-road forts, turquoise glacial lakes, and the legendary hospitality of the Hunza people.',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80',
    visitingPoints: [
      'Karimabad & Ancient Royal Bazaar',
      '800-Year-Old Baltit Fort & Altit Fort',
      'Turquoise Attabad Lake (Boating & Jet Ski)',
      'Passu Cones (Cathedral Ridges) & Glacier',
      'Hussaini Suspension Bridge',
      'Khunjerab Pass (Pak-China Border at 15,397 ft)',
      'Eagles Nest Duikar Panoramic Sunset View',
      'Hopar Glacier & Nagar Valley'
    ],
    idealDuration: '5 to 8 Days',
    bestSeason: 'April – October (Cherry Blossom in Spring, Golden Autumn in Oct)',
    altitude: '2,438 m (8,000 ft)',
    recommendedTransport: 'Luxury 4x4 Prado, Grand Cabin Hiace, or Flight to Gilgit',
    highlights: [
      'Spectacular view of Rakaposhi (7,788m) and Golden Peak',
      'Walk through 8-century-old Tibetan-influenced royal forts',
      'Speedboat rides across cobalt-blue Attabad Lake',
      'Visit the world’s highest ATM and border at Khunjerab'
    ],
    featured: true
  },
  {
    id: 'skardu-baltistan',
    name: 'Skardu & Baltistan',
    urduName: 'سکردو — وادیٔ شنگریلا و دیوسائی',
    region: 'Gilgit-Baltistan',
    province: 'Gilgit-Baltistan',
    tagline: 'Gateway to K2, Cold Desert & Land of Giants',
    description: 'A surreal landscape where cold desert sand dunes meet snow-covered Karakoram giants and crystalline alpine lakes. Explore historic fortresses, the high-altitude wildlife plateau of Deosai, and legendary Shangrila.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    visitingPoints: [
      'Shangrila Resort (Lower Kachura Lake)',
      'Upper Kachura Glacial Lake & Trout Fish Point',
      'Katpana Cold Desert (Sand Dunes Stargazing)',
      'Deosai National Park (World’s 2nd Highest Plateau)',
      'Sheosar Lake & Himalayan Brown Bear Sanctuary',
      'Shigar Fort (Palace on the Rock)',
      'Khaplu Palace & Chaqchan Mosque',
      'Manthal Buddha Rock Carving'
    ],
    idealDuration: '6 to 9 Days',
    bestSeason: 'June – October (Deosai opens mid-June to September)',
    altitude: '2,228 m (Skardu) / 4,114 m (Deosai)',
    recommendedTransport: 'Direct PIA Flight to Skardu Airport or 4x4 Land Cruiser via KKH',
    highlights: [
      'Witness sand dunes covered in snow during early season',
      'Camp under the clearest Milky Way sky at Katpana Cold Desert',
      'Visit 400-year-old Tibetan-Mughal restored heritage palaces',
      'Traverse the boundless flower-carpeted plateau of Deosai'
    ],
    featured: true
  },
  {
    id: 'swat-valley',
    name: 'Swat Valley',
    urduName: 'سوات — پاکستان کا سوئٹزرلینڈ',
    region: 'Khyber Pakhtunkhwa',
    province: 'Khyber Pakhtunkhwa',
    tagline: 'Switzerland of the East & Gandhara Heartland',
    description: 'Famed for lush alpine meadows, crystal-clear trout streams, roaring waterfalls, snow-clad peaks, and historical Buddhist stupas. A year-round paradise offering skiing in winter and emerald cool getaways in summer.',
    image: 'https://images.unsplash.com/photo-1598894100588-46c59bcf72e1?auto=format&fit=crop&w=1200&q=80',
    visitingPoints: [
      'Malam Jabba Ski Resort & 800m Chairlift',
      'Kalam Valley & Roaring Swat River Basin',
      'Mahodand Lake & Saifullah Lake (4x4 Jeep Safari)',
      'Dense Ushu Pine Forest & Cedar Woods',
      'Matiltan Waterfall & Glacier Point',
      'White Palace Marghazar (Historic Royal Retreat)',
      'Fizagat Riverside Park',
      'Mingora Bazaar & Swat Museum Gandhara Stupas'
    ],
    idealDuration: '3 to 5 Days',
    bestSeason: 'Year-Round (May–Sep for lush green Kalam; Dec–Feb for snow sports)',
    altitude: '980 m (Mingora) to 2,804 m (Malam Jabba / Mahodand)',
    recommendedTransport: 'Swat Motorway (M-16) via Luxury Saloon Car or Family Hiace',
    highlights: [
      'Chairlift ride, zipline, and skiing at Malam Jabba',
      'Jeep safari through Ushu alpine forest to glacial lakes',
      'Fresh river trout fish grilled along the Swat riverside',
      'Marble architecture of the historic White Palace'
    ],
    featured: true
  },
  {
    id: 'naran-kaghan',
    name: 'Naran & Kaghan Valley',
    urduName: 'ناران و کاغان — وادیٔ پریاں و جھیل سیف الملوک',
    region: 'Khyber Pakhtunkhwa',
    province: 'Khyber Pakhtunkhwa',
    tagline: 'Legendary Fairy Lakes & Majestic Babusar Heights',
    description: 'Pakistan’s most popular family summer wonderland. Revel in the folklore of Lake Saif-ul-Malook, journey across the dramatic 13,700-ft Babusar Pass into Gilgit-Baltistan, and soak in the pine-scented beauty of Shogran.',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80',
    visitingPoints: [
      'Legendary Lake Saif-ul-Malook (Fairy Lake)',
      'Babusar Top (13,700 ft Pass between KP & GB)',
      'Lulusar Lake (Vibrant Turquoise Alpine Basin)',
      'Shogran Plateau & Siri Paye Meadows',
      'Kunhar River Rafting & Trout Farms',
      'Jalkhand & Pyala Lake',
      'Batakundi Riverside Camps',
      'Kaghan Historic Town & Waterfalls'
    ],
    idealDuration: '3 to 5 Days',
    bestSeason: 'May – October (Babusar Pass accessible late June to October)',
    altitude: '2,409 m (Naran) / 4,173 m (Babusar Top)',
    recommendedTransport: 'Hazara Motorway & N-15 Highway; 4x4 Willys Jeep for Saif-ul-Malook & Siri Paye',
    highlights: [
      'Horse riding and boating at high-altitude Lake Saif-ul-Malook',
      'Panoramic 360-degree mountain views from Babusar Pass',
      'Thrilling river rafting on icy waters of Kunhar River',
      'Jeep ascent through clouds to lush Siri Paye meadows'
    ],
    featured: true
  },
  {
    id: 'kashmir-neelum',
    name: 'Azad Kashmir (Neelum & Rawalakot)',
    urduName: 'آزاد کشمیر — جنت نظیر وادیٔ نیلم و بنجوسہ',
    region: 'Azad Kashmir',
    province: 'Azad Kashmir',
    tagline: 'Heaven on Earth & Emerald River Valleys',
    description: 'A paradise on earth defined by emerald-hued pine terraces, rushing turquoise torrents of the Neelum River, centuries-old wooden hamlets, and high-altitude glacial lakes surrounded by snow peaks.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    visitingPoints: [
      'Arang Kel ("Pearl of Neelum" via cable car & hike)',
      'Sharda Peeth (Historic 6th-Century University & Temple)',
      'Keran (Scenic India-Pakistan Riverfront Promenade)',
      'Ratti Gali Glacial Alpine Lake (12,130 ft)',
      'Kutton Jagran Hydro Waterfall & Resort',
      'Taobat (Border Village where Neelum Enters)',
      'Banjosa Lake (Pine forest lake near Rawalakot)',
      'Toli Peer (Highest ridge viewpoint in Poonch)'
    ],
    idealDuration: '4 to 6 Days',
    bestSeason: 'April – October (Ratti Gali accessible July to September)',
    altitude: '1,615 m (Sharda) / 3,700 m (Ratti Gali)',
    recommendedTransport: 'Luxury 4x4 Coaster / Grand Cabin / Mountain Jeep for Ratti Gali',
    highlights: [
      'Take the open-air cable car to fairytale wooden village of Arang Kel',
      'Walk alongside the turquoise Neelum River at Keran border point',
      'Camp beneath starlit skies at the turquoise jewel of Ratti Gali Lake',
      'Explore the ancient scholastic stone ruins of Sharda Peeth'
    ],
    featured: true
  },
  {
    id: 'murree-galiyat',
    name: 'Murree & Galiyat',
    urduName: 'مری و گلیات — سدابہار پہاڑی تفریح گاہ',
    region: 'Punjab & KP',
    province: 'Punjab',
    tagline: 'The Queen of Hills & Pine-Scented Ridge Walks',
    description: 'Pakistan’s most beloved colonial hill retreat, located just an hour from Islamabad. Enjoy cool mountain breezes, family chairlift rides, walking through dense pine forests, and misty foggy valleys.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    visitingPoints: [
      'Historic Murree Mall Road & Post Office',
      'Patriata New Murree Chairlift & Cable Car',
      'Nathia Gali & Governor House Woods',
      'Ayubia Pipeline Heritage Walking Track (4km)',
      'Mushkpuri Peak Trek (9,200 ft pine summit)',
      'Miranjani Highest Peak in Galiyat (9,776 ft)',
      'Bhurban Golf Course & PC Resort',
      'Dunga Gali Pine Forest & Bird Sanctuary'
    ],
    idealDuration: '2 to 3 Days (Ideal Weekend Getaway)',
    bestSeason: 'Year-Round (Summer escape June–Aug; Winter snowfall Dec–Feb)',
    altitude: '2,291 m (7,516 ft)',
    recommendedTransport: 'Islamabad-Murree Expressway (E-75) via Sedan or Luxury Coaster',
    highlights: [
      'Ride the two-stage Patriata cable car over deep pine valleys',
      'Walk the flat, scenic British-era Ayubia Pipeline Track',
      'Savor hot Kashmiri chai, pakoras, and roast corn in misty Nathia Gali',
      'Family-friendly shopping on vibrant Mall Road'
    ],
    featured: true
  },
  {
    id: 'chitral-kalash',
    name: 'Chitral & Kalash Valley',
    urduName: 'چترال و وادیٔ کیلاش — کوہِ ہندوکش کی پراسرار ثقافت',
    region: 'Khyber Pakhtunkhwa',
    province: 'Khyber Pakhtunkhwa',
    tagline: 'Mystic Kalash Culture Beneath Tirich Mir',
    description: 'Nestled in the shadow of Tirich Mir (7,708m), the highest peak of the Hindu Kush, Chitral preserves the ancient, vibrant indigenous polytheist culture of the Kalash people with distinctive attire, festivals, and music.',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80',
    visitingPoints: [
      'Bumburet, Rumbur & Birir (Three Kalash Valleys)',
      'Kalasha Dur Cultural Museum & Ancient Cedar Homes',
      'Chitral Shahi Mosque & Royal Fort on River Bank',
      'Tirich Mir Panoramic Viewpoints (7,708m peak)',
      'Shandur Pass (Highest Polo Ground in the World at 12,200 ft)',
      'Ayun Valley Lush Terraced Orchards',
      'Lowari Tunnel High Mountain Highway',
      'Chilam Joshi & Uchal Seasonal Kalash Festivals'
    ],
    idealDuration: '4 to 6 Days',
    bestSeason: 'May – October (Chilam Joshi festival in mid-May; Shandur Polo in July)',
    altitude: '1,500 m (Chitral) / 3,700 m (Shandur)',
    recommendedTransport: 'Motorway through Lowari Tunnel via 4x4 Mountain Vehicle or Flight from Islamabad',
    highlights: [
      'Experience the living indigenous traditions and colorful attire of the Kalash',
      'Witness thrilling freestyle mountain polo at Shandur Pass',
      'Gaze upon the sheer snow face of Tirich Mir, giant of the Hindu Kush',
      'Sample organic Chitrali walnuts, dried mulberries, and local honey'
    ],
    featured: false
  },
  {
    id: 'kumrat-valley',
    name: 'Kumrat Valley & Jahaz Banda',
    urduName: 'وادیٔ کمراٹ — دیودار کے گھنے جنگلات و کٹورا جھیل',
    region: 'Khyber Pakhtunkhwa',
    province: 'Khyber Pakhtunkhwa',
    tagline: 'Untamed Deodar Wilderness & Glacial Wonders',
    description: 'An untouched alpine wilderness in Upper Dir where sky-piercing deodar trees cast emerald shadows over the rushing Panjkora River. Trek to high alpine meadows of Jahaz Banda and the turquoise bowl of Katora Lake.',
    image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&q=80',
    visitingPoints: [
      'Dense Kumrat Deodar Forest Canopy',
      'Kumrat Waterfall & Panjkora River Bank',
      'Jahaz Banda High Meadows (10,500 ft)',
      'Katora Lake (Bowl-Shaped Glacial Jewel at 11,500 ft)',
      'Do Kala Chashma (Twin Springs)',
      'Thal Historic Wooden Mosque (Centuries Old Carvings)',
      'Crooked Forest (Curved Pine Trees)',
      'Badogai Pass connecting Kumrat with Kalam Swat'
    ],
    idealDuration: '4 to 5 Days',
    bestSeason: 'June – September (Camping season)',
    altitude: '2,400 m (Kumrat) / 3,500 m (Katora Lake)',
    recommendedTransport: 'Upper Dir Road to Thal, then 4x4 Mountain Jeep to Kumrat Forest',
    highlights: [
      'Camp beneath 100-foot ancient Deodar trees beside roaring cold river rapids',
      'Unforgettable horse trek to the dreamlike grassy expanse of Jahaz Banda',
      'Reach the turquoise waters of glacial Katora Lake surrounded by snowfields',
      'Bonfire and stargazing with zero light pollution'
    ],
    featured: false
  }
];
