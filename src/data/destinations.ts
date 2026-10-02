export interface Destination {
  id: string;
  name: string;
  tagline: string;
  state: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  highlights: string[];
  bestTimeToVisit: string;
  associatedToursCount: number;
  popularSpots: string[];
}

export const destinationsData: Destination[] = [
  {
    id: "udaipur",
    name: "Udaipur",
    tagline: "The City of Lakes & Palaces",
    state: "Rajasthan",
    shortDescription: "Majestic palaces, serene lakes, Aravali hillscapes, and romantic rooftop evenings.",
    longDescription: "Known as the Venice of the East, Udaipur offers a magical blend of royal Rajput architecture, pristine lakefront promenades, vibrant art cafes, and hill resorts nestled in the ancient Aravali ranges.",
    image: "/images/hero-udaipur.jpg",
    highlights: [
      "City Palace & Jagdish Temple",
      "Lake Pichola & Gangaur Ghat",
      "Bahubali Hills & Rayta Hills Viewpoints",
      "Sajjangarh Monsoon Palace",
      "Fateh Sagar Lake Promenade"
    ],
    bestTimeToVisit: "September to March",
    associatedToursCount: 2,
    popularSpots: ["City Palace", "Gangaur Ghat", "Bahubali Hills", "Fateh Sagar", "Rayta Hills"]
  },
  {
    id: "jaisalmer",
    name: "Jaisalmer",
    tagline: "The Golden City & Thar Dunes",
    state: "Rajasthan",
    shortDescription: "Golden sandstone fortresses, sweeping desert dunes, camel caravans, and starlit camps.",
    longDescription: "Rising like a golden mirage from the heart of the Great Indian Desert, Jaisalmer enchants with the living Sonar Qila fort, intricately carved merchant havelis, and unforgettable desert safaris across Sam Sand Dunes.",
    image: "/images/hero-jaisalmer.jpg",
    highlights: [
      "Sonar Qila (Living Golden Fort)",
      "Sam Sand Dunes Jeep Safari & Camel Ride",
      "Traditional Rajasthani Folk Dance & Bonfire",
      "Patwon Ki Haveli Intricate Architecture",
      "Historic Gadisar Lake"
    ],
    bestTimeToVisit: "September to March",
    associatedToursCount: 2,
    popularSpots: ["Sam Sand Dunes", "Sonar Qila", "Patwon Ki Haveli", "Gadisar Lake", "Desert Camp"]
  },
  {
    id: "jodhpur",
    name: "Jodhpur",
    tagline: "The Majestic Blue City",
    state: "Rajasthan",
    shortDescription: "Towering Mehrangarh Fort, sea of azure blue houses, and rich Marwar culture.",
    longDescription: "Guarded by the colossal Mehrangarh Fort perched on a cliff, Jodhpur's blue cubical houses, bustling spice markets, and white marble Jaswant Thada capture Rajasthan's regal spirit at its grandest.",
    image: "/images/hero-jodhpur.jpg",
    highlights: [
      "Colossal Mehrangarh Fort & Museum",
      "Jaswant Thada Marble Memorial",
      "Iconic Blue City Stepwell & Old Quarter",
      "Authentic Marwari Cuisine & Spices",
      "Clock Tower & Sardar Market"
    ],
    bestTimeToVisit: "October to March",
    associatedToursCount: 2,
    popularSpots: ["Mehrangarh Fort", "Jaswant Thada", "Blue City Lanes", "Clock Tower", "Toorji Ka Jhalra"]
  },
  {
    id: "kumbhalgarh",
    name: "Kumbhalgarh",
    tagline: "The Great Wall of India",
    state: "Rajasthan",
    shortDescription: "The world's second-longest continuous wall guarding historic Rajput bastions.",
    longDescription: "Surrounded by the dense Aravali wildlife sanctuary, Kumbhalgarh Fort is an architectural marvel with its 36-kilometer serpentine perimeter wall and panoramic vistas stretching towards Mewar and Marwar.",
    image: "/images/hero-kumbhalgarh.jpg",
    highlights: [
      "36-kilometer Great Wall of India",
      "Badal Mahal (Palace of Clouds)",
      "Historic Mewar defensive strongholds",
      "Lush panoramic Aravali Valley views"
    ],
    bestTimeToVisit: "August to March",
    associatedToursCount: 1,
    popularSpots: ["Kumbhalgarh Fort", "Badal Mahal", "Aravali Sanctuary Point", "Haldighati Pass"]
  },
  {
    id: "haldighati",
    name: "Haldighati",
    tagline: "The Valley of Valor & Turmeric Sands",
    state: "Rajasthan",
    shortDescription: "Legendary mountain pass steeped in the heroic tale of Maharana Pratap and Chetak.",
    longDescription: "Famous for its turmeric-colored yellow soil and historic 1576 battle, Haldighati is a profound heritage landmark located in the hills near Udaipur that resonates with legendary courage.",
    image: "/images/hero-haldighati.jpg",
    highlights: [
      "Historic Battle of Haldighati Pass",
      "Chetak Smarak (Memorial to faithful horse)",
      "Rose water & Gulkand cottage industries",
      "Scenic mountain drive through Aravalis"
    ],
    bestTimeToVisit: "September to February",
    associatedToursCount: 1,
    popularSpots: ["Haldighati Pass", "Chetak Samadhi", "Maharana Pratap Museum"]
  },
  {
    id: "jawai",
    name: "Jawai",
    tagline: "The Land of Leopards & Granite Hills",
    state: "Rajasthan",
    shortDescription: "Dramatic granite hills, untamed leopard safaris, Jawai Bandh sunsets, and Rabari culture.",
    longDescription: "Nestled along the Aravali ranges in Pali district, Jawai is world-renowned for its surreal prehistoric granite boulders where wild leopards live in harmony with the pastoral Rabari tribe. Experience open 4x4 gypsy wildlife safaris, birdwatching at Jawai Bandh dam, and starlit wilderness glamping.",
    image: "/images/hero-jawai.jpg",
    highlights: [
      "Open 4x4 Gypsy Leopard Tracking Safari",
      "Spectacular Jawai Bandh Dam & Sunset Vistas",
      "Ancient Granite Cave & Hill Formations",
      "Migratory Bird Watching & Crocodiles",
      "Indigenous Rabari Pastoral Tribe Encounters"
    ],
    bestTimeToVisit: "October to April",
    associatedToursCount: 1,
    popularSpots: ["Jawai Bandh Reservoir", "Perwa Hills", "Sena Boulders", "Dev Giri Temple", "Rabari Settlements"]
  }
];
