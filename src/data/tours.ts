export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  timing?: string;
  description: string;
  highlights: string[];
  mealsIncluded?: string;
  sightseeingNote?: string;
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  badge?: string;
  departureCity: string;
  destinations: string[];
  duration: string;
  days: number;
  nights: number;
  startingPrice: number;
  tripleSharingPrice: number;
  doubleSharingPrice: number;
  registrationAmount: number;
  departureSchedule: string;
  batchSchedule: {
    month: string;
    dates: string[];
  }[];
  heroImage: string;
  galleryImages: string[];
  tagline: string;
  overview: string;
  experienceStory: string;
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  stayDetails: {
    hotelName: string;
    location: string;
    type: string;
    highlights: string[];
  }[];
  featured: boolean;
  tourType: "Strangers Trip" | "Group Trip" | "Customise Trip" | "Leisure Trip";
}

export const tourPackages: TourPackage[] = [
  {
    id: "tour-ahmedabad-jodhpur-jaisalmer",
    slug: "ahmedabad-to-jodhpur-jaisalmer-strangers-trip",
    title: "Ahmedabad to Jodhpur & Jaisalmer — A Trip with 15 Strangers",
    badge: "Bestseller • 15 Strangers",
    departureCity: "Ahmedabad",
    destinations: ["Jodhpur", "Jaisalmer", "Sam Sand Dunes"],
    duration: "3 Days | 2 Nights",
    days: 3,
    nights: 2,
    startingPrice: 7999,
    tripleSharingPrice: 7999,
    doubleSharingPrice: 8999,
    registrationAmount: 3500,
    departureSchedule: "Every Thursday Departure from Ahmedabad (11:00 PM)",
    batchSchedule: [
      {
        month: "September Batches",
        dates: ["3rd Sep", "10th Sep", "17th Sep", "24th Sep"]
      },
      {
        month: "October Batches",
        dates: ["1st Oct", "8th Oct", "15th Oct", "22nd Oct", "29th Oct"]
      }
    ],
    heroImage: "/images/jodhpur-mehrangarh-sunset.jpg",
    galleryImages: [
      "/images/jodhpur-mehrangarh-sunset.jpg",
      "/images/jaisalmer-journey-arch.jpg",
      "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop"
    ],
    tagline: "Where Golden Sands Meet Timeless Stories",
    overview: "Escape the routine and embark on an unforgettable journey from Ahmedabad to Jodhpur & Jaisalmer. Experience Rajasthan's royal charm, the vibrant Blue City, majestic forts, golden sand dunes, and the magic of desert nights. Travel with 15 strangers who share the same passion for adventure and return with friendships that last beyond the trip.",
    experienceStory: "More than just a trip, it's an experience where strangers become friends and memories become stories. Enjoy thrilling Jeep safaris across ripples of golden sand, sunset camel treks, fireside Rajasthani folk music, and midnight conversations beneath starlit Thar skies.",
    itinerary: [
      {
        day: 1,
        title: "Ahmedabad Departure & Blue City Jodhpur Exploration",
        location: "Ahmedabad to Jodhpur",
        timing: "Thursday Departure 11:00 PM from Ahmedabad",
        description: "Start overnight journey from Ahmedabad in comfortable AC transport. Arrive in Jodhpur, the Blue City which blends royal heritage, majestic forts, and vibrant streets. Enjoy morning breakfast, freshen up and set out to explore Mehrangarh Fort towering over the city, the serene marble cenotaph Jaswant Thada, and delve deep into the labyrinthine Blue City. Wrap up the day with a delicious dinner at the hotel before proceeding on the overnight journey toward Jaisalmer.",
        highlights: [
          "Mehrangarh Fort exploration",
          "Jaswant Thada visit",
          "Authentic Blue City heritage walk",
          "Group dinner at hotel"
        ],
        mealsIncluded: "Breakfast & Dinner at Hotel",
        sightseeingNote: "All entry fees are payable by guests at their own expense."
      },
      {
        day: 2,
        title: "Golden City Jaisalmer & Sam Sand Dunes Glamping",
        location: "Jaisalmer & Sam Desert Camp",
        timing: "Arrival at Sam Desert Camp by afternoon",
        description: "Wake up and enjoy breakfast at the hotel before arriving in Jaisalmer, the Golden City famed for its royal sandstone forts and vibrant desert culture. Check in at the luxury Swiss tents at Sam Desert Camp. Experience an adrenaline-pumping Jeep Safari conquering high dunes, followed by an authentic Sunset Camel Ride across the ripples of Thar. As night sets in, gather around the bonfire for traditional Rajasthani folk music, Kalbeliya dance performances, and a lavish royal buffet dinner.",
        highlights: [
          "Check-in at Sam Sand Dunes Desert Camp",
          "Thrilling Desert Jeep Safari",
          "Iconic Sunset Camel Ride",
          "Rajasthani Folk Music, Dance & Campfire",
          "Royal Rajasthani Buffet Dinner under the stars"
        ],
        mealsIncluded: "Breakfast at Hotel & Rajasthani Dinner at Camp",
        sightseeingNote: "All entry fees are payable by guests at their own expense."
      },
      {
        day: 3,
        title: "Jaisalmer Fort, Haveli & Return Journey to Ahmedabad",
        location: "Jaisalmer to Ahmedabad",
        timing: "Departure from Jaisalmer approx 8:00 - 9:00 PM",
        description: "After breakfast and desert camp checkout, head into the heart of the Golden City. Explore the living Jaisalmer Fort (Sonar Qila), marvel at the intricate stone carvings of Patwon Ki Haveli, spend peaceful moments at Gadisar Lake, and explore the bustling lanes of Jaisalmer Old City. Soak in the golden charm before beginning your memorable journey back to Ahmedabad with dinner served on board the bus.",
        highlights: [
          "Jaisalmer Golden Fort (Sonar Qila)",
          "Intricate architecture of Patwon Ki Haveli",
          "Scenic serene Gadisar Lake",
          "Explore Jaisalmer Old City markets",
          "Dinner on board during journey"
        ],
        mealsIncluded: "Breakfast at Camp & Dinner in Bus",
        sightseeingNote: "Departure from Jaisalmer approx 8:00 - 9:00 PM. All entry fees payable by guests."
      }
    ],
    inclusions: [
      "AC Bus (From Ex-Ahmedabad)",
      "01 Night Stay in Jodhpur (Luxury Hotel)",
      "01 Night Stay in Jaisalmer (Premium Desert Tent)",
      "Meals (3 Breakfast + 3 Dinner)",
      "Jeep Safari + Camel Safari in Sam Sand Dunes",
      "All Sightseeing in Jodhpur & Jaisalmer as per itinerary",
      "All Toll Tax, Parking Charges, Driver Allowance, etc."
    ],
    exclusions: [
      "Any Kind of Entry Tickets (Forts, Palaces, Haveli)",
      "Local Transportation / Ferry / Auto if Bus / Tempo or Private Vehicles is not allowed",
      "Packaged Drinking Water Bottle",
      "Any Paid Activities or Adventure Rides not mentioned",
      "Anything not specifically mentioned in inclusions"
    ],
    stayDetails: [
      {
        hotelName: "Luxury Hotel Jodhpur",
        location: "Jodhpur City",
        type: "3/4-Star Premium Hotel",
        highlights: ["Comfortable AC rooms", "En-suite bathrooms", "Multi-cuisine dining", "Central location"]
      },
      {
        hotelName: "Sam Desert Luxury Camp",
        location: "Sam Sand Dunes, Jaisalmer",
        type: "Royal Swiss Desert Tent",
        highlights: ["Attached bathroom with modern amenities", "Cultural stage & campfire area", "Dune views", "Traditional hospitality"]
      }
    ],
    featured: true,
    tourType: "Strangers Trip"
  },
  {
    id: "tour-udaipur-jodhpur-jaisalmer",
    slug: "udaipur-to-jodhpur-jaisalmer-strangers-trip",
    title: "Udaipur to Jodhpur & Jaisalmer — A Trip with 15 Strangers",
    badge: "15 Strangers • Rajasthan Odyssey",
    departureCity: "Udaipur",
    destinations: ["Jodhpur", "Jaisalmer", "Sam Sand Dunes"],
    duration: "3 Days | 2 Nights",
    days: 3,
    nights: 2,
    startingPrice: 6999,
    tripleSharingPrice: 6999,
    doubleSharingPrice: 7999,
    registrationAmount: 3500,
    departureSchedule: "Every Friday Departure from Udaipur (6:00 AM)",
    batchSchedule: [
      {
        month: "September Batches",
        dates: ["4th Sep", "11th Sep", "18th Sep", "25th Sep"]
      },
      {
        month: "October Batches",
        dates: ["2nd Oct", "9th Oct", "16th Oct", "23rd Oct", "30th Oct"]
      }
    ],
    heroImage: "/images/jaisalmer-journey-arch.jpg",
    galleryImages: [
      "/images/jaisalmer-journey-arch.jpg",
      "/images/jodhpur-mehrangarh-sunset.jpg",
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=1200&auto=format&fit=crop"
    ],
    tagline: "Where Strangers Meet, Stories Begin & Memories Last Forever",
    overview: "Depart from the City of Lakes on an enchanting road trip across the sun-drenched kingdoms of Marwar and the Golden Thar. Designed for solo travelers and seekers, this trip connects 15 strangers across Jodhpur's blue alleys and Jaisalmer's golden desert sands.",
    experienceStory: "Witness sunset painting Mehrangarh Fort gold, race over towering sand dunes on an open Jeep safari, listen to folk legends under the desert sky, and return with friendships that outlive the journey.",
    itinerary: [
      {
        day: 1,
        title: "Udaipur Departure to Royal Jodhpur",
        location: "Udaipur to Jodhpur",
        timing: "Friday Departure from Udaipur at 6:00 AM (Arrive Hotel ~11:00 AM - 12:00 PM)",
        description: "Board the comfortable AC coach in Udaipur at 6:00 AM. Arrive in Jodhpur between 11:00 AM and 12:00 PM. Check in to the hotel, freshen up and have breakfast. Explore the imposing Mehrangarh Fort, Jaswant Thada and take a guided walk through the historic Blue City. Savor a group dinner at the hotel before an overnight trip to Jaisalmer.",
        highlights: [
          "Scenic morning drive through Rajasthan",
          "Mehrangarh Fort & Museum",
          "Jaswant Thada cenotaph",
          "Iconic Blue City lanes photography",
          "Hotel dinner with the group"
        ],
        mealsIncluded: "Breakfast & Dinner at Hotel",
        sightseeingNote: "All entry fees are payable by guests at their own expense."
      },
      {
        day: 2,
        title: "Jodhpur to Jaisalmer & Sam Sand Dunes",
        location: "Jaisalmer & Sam Sand Dunes",
        timing: "Departure from Jodhpur 8:00 AM, arrive Camp ~12:00 PM - 1:00 PM",
        description: "Depart Jodhpur at 8:00 AM and head into the Golden Dunes of Jaisalmer. Arrive at Sam Desert Camp by midday. Relish traditional welcome tikka and snacks. Afternoon Jeep Safari on desert dunes, sunset camel ride, evening cultural program featuring Rajasthani folk music, Kalbeliya dance, campfire, and gala buffet dinner followed by desert tent glamping.",
        highlights: [
          "Traditional Rajasthani welcome",
          "Jeep Safari adventure on Sam Dunes",
          "Sunset Camel Caravan",
          "Folk dance, music & campfire",
          "Desert camp stay under the stars"
        ],
        mealsIncluded: "Breakfast at Hotel & Dinner at Camp",
        sightseeingNote: "All entry fees are payable by guests at their own expense."
      },
      {
        day: 3,
        title: "Golden Fort & Old City, Return to Udaipur",
        location: "Jaisalmer to Udaipur",
        timing: "Departure from Jaisalmer approx 8:00 - 9:00 PM with dinner in bus",
        description: "After breakfast and camp checkout, delve into the Golden City's treasures. Tour Jaisalmer Fort, visit the five-story Patwon Ki Haveli, sit by the tranquil waters of Gadisar Lake, and shop for handicrafts in the vibrant Old City bazaar. Board the bus for the return trip to Udaipur with dinner served on board.",
        highlights: [
          "Jaisalmer Fort (Sonar Qila)",
          "Patwon Ki Haveli stone architecture",
          "Gadisar Lake boat point",
          "Jaisalmer Old City shopping",
          "Return journey to Udaipur"
        ],
        mealsIncluded: "Breakfast at Camp & Dinner in Bus",
        sightseeingNote: "Departure approx 8:00 - 9:00 PM. All entry fees payable by guests."
      }
    ],
    inclusions: [
      "AC Bus (From Ex-Udaipur)",
      "01 Night Stay in Jodhpur (Luxury Hotel)",
      "01 Night Stay in Jaisalmer (Premium Tent)",
      "Meals (3 Breakfast + 3 Dinner)",
      "Jeep Safari + Camel Safari in Sam Sand Dunes",
      "All Sightseeing in Jodhpur & Jaisalmer",
      "All Toll Tax, Parking Charges, Driver Allowance, etc."
    ],
    exclusions: [
      "Any Kind of Entry Tickets",
      "Local Transportation / Ferry / Auto if Bus / Tempo is not allowed",
      "Packaged Drinking Water Bottle",
      "Any Paid Activities or Ride",
      "Anything Not Mentioned Above"
    ],
    stayDetails: [
      {
        hotelName: "Luxury Hotel Jodhpur",
        location: "Jodhpur",
        type: "3/4-Star City Hotel",
        highlights: ["AC rooms", "Attached modern bath", "Restaurant", "Group gathering spaces"]
      },
      {
        hotelName: "Sam Desert Luxury Camp",
        location: "Sam Sand Dunes",
        type: "Premium Desert Glamping",
        highlights: ["Royal Swiss tents", "Campfire arena", "Folk performance stage", "Sand dune access"]
      }
    ],
    featured: true,
    tourType: "Strangers Trip"
  },
  {
    id: "tour-ahmedabad-udaipur-kumbhalgarh",
    slug: "ahmedabad-to-udaipur-haldighati-kumbhalgarh",
    title: "Ahmedabad to Udaipur, Haldighati & Kumbhalgarh — Strangers' Trip",
    badge: "Pool Party • Resort Stay",
    departureCity: "Ahmedabad",
    destinations: ["Udaipur", "Haldighati", "Kumbhalgarh", "Rayta Hills", "Bahubali Hills"],
    duration: "3 Days | 2 Nights",
    days: 3,
    nights: 2,
    startingPrice: 6999,
    tripleSharingPrice: 6999,
    doubleSharingPrice: 8200,
    registrationAmount: 3500,
    departureSchedule: "Every Friday Departure from Ahmedabad (6:00 AM)",
    batchSchedule: [
      {
        month: "September Batches",
        dates: ["4th Sep", "11th Sep", "18th Sep", "25th Sep"]
      },
      {
        month: "October Batches",
        dates: ["2nd Oct", "9th Oct", "16th Oct", "23rd Oct", "30th Oct"]
      }
    ],
    heroImage: "/images/udaipur-group-strangers.jpg",
    galleryImages: [
      "/images/udaipur-group-strangers.jpg",
      "/images/palm-valley-night-pool.jpg",
      "/images/strangers-sunset-community.jpg",
      "/images/palm-valley-aerial.jpg",
      "/images/palm-valley-suite.jpg",
      "/images/udaipur-city-palace-lake.jpg"
    ],
    tagline: "Lake Views, Stories & Strangers — A Stay Amidst the Hills",
    overview: "Escape the city and journey from Ahmedabad to the magical landscapes of Udaipur. From serene lake views and royal heritage to lively cafes and bustling markets, every moment is designed to inspire. Connect with like-minded travelers through fun Pool Party, DJ nights, sunset evenings, and shared adventures at Palm Valley Resort.",
    experienceStory: "A soulful escape to Udaipur designed for solo travelers and strangers who become friends for a lifetime. Stay at Palm Valley Resort amidst the Aravali hills with double swimming pools, explore the Great Wall of India at Kumbhalgarh, and catch breathtaking sunsets at Bahubali Hills.",
    itinerary: [
      {
        day: 1,
        title: "Ahmedabad Departure & Udaipur Old City Heritage",
        location: "Ahmedabad to Udaipur",
        timing: "Depart Ahmedabad 6:00 AM, arrive resort ~12:00 PM",
        description: "Depart from Ahmedabad at 6:00 AM (pickup point shared in WhatsApp group). Stop for an included veg breakfast at a highway restaurant en route while enjoying Aravali mountain views. Reach the luxury Palm Valley Resort by 12:00 PM, check in, and enjoy lunch at the villa. Relax until 2:15 PM. At 3:00 PM, head out to explore Udaipur Old City: City Palace, Jagdish Temple, Gangaur Ghat, and wander through vibrant markets. Enjoy a memorable dinner at a popular rooftop restaurant (own expense) before returning to the resort.",
        highlights: [
          "Scenic Aravali mountain drive",
          "Check-in at Palm Valley Resort amidst the hills",
          "Lunch included at the villa",
          "City Palace & Jagdish Mandir visit",
          "Gangaur Ghat lakeside stroll & Old City lanes"
        ],
        mealsIncluded: "Morning Breakfast & Lunch (Veg)",
        sightseeingNote: "City Palace entry ticket not included. Dinner at rooftop restaurant at own expense."
      },
      {
        day: 2,
        title: "Kumbhalgarh Fort, Haldighati & Evening Pool Party with DJ",
        location: "Kumbhalgarh & Haldighati",
        timing: "Depart resort 8:30 AM, evening Pool Party at villa",
        description: "Wake up to serene mountain views and enjoy breakfast at the resort served at 8:00 AM. At 8:30 AM, depart for historic Haldighati and the majestic Kumbhalgarh Fort — boasting the second-longest continuous wall in the world. Explore the fortress and breathtaking mountain viewpoints. Lunch near Kumbhalgarh (own expense). Return to Palm Valley Resort in the late afternoon to unwind by the pool. As twilight falls, turn up the music for an electrifying Pool Party with DJ, dancing, games, followed by a lavish dinner at the villa.",
        highlights: [
          "Majestic Kumbhalgarh Fort exploration",
          "Historical Haldighati pass",
          "Evening Pool Party with DJ & music",
          "Double swimming pool relaxation",
          "Buffet dinner at Palm Valley Resort"
        ],
        mealsIncluded: "Morning Breakfast & Dinner at Villa (Veg)",
        sightseeingNote: "Lunch near Kumbhalgarh is on own expenses. Entry tickets payable by guests."
      },
      {
        day: 3,
        title: "Bahubali Hills, Rayta Hills, Sajjangarh & Return to Ahmedabad",
        location: "Udaipur to Ahmedabad",
        timing: "Depart resort 9:00 AM after breakfast",
        description: "Enjoy breakfast at 8:00 AM. Check out at 9:00 AM and head to the picturesque landscapes of Bahubali Hills overlooking Badi Lake, Rayta Hills scenic pass, Sajjangarh Monsoon Palace (local vehicle included), and Fateh Sagar Lake. Soak in the panoramic 360-degree views before beginning the comfortable return journey back to Ahmedabad. A 45-minute dinner stop is provided en route.",
        highlights: [
          "Bahubali Hills breathtaking panoramic viewpoint",
          "Scenic Rayta Hills countryside ride",
          "Sajjangarh Monsoon Palace (local vehicle included)",
          "Fateh Sagar Lake promenade",
          "Comfortable return drive to Ahmedabad"
        ],
        mealsIncluded: "Morning Breakfast & Lunch (Veg)",
        sightseeingNote: "Entry tickets not included. 45-minute dinner stop en route at own expense."
      }
    ],
    inclusions: [
      "AC Bus (From Ex-Ahmedabad)",
      "02 Night Stay in Udaipur (Luxury 3-Star Palm Valley Resort)",
      "Meals (3 Breakfast + 2 Lunch + 1 Dinner - Pure Veg)",
      "Pool Party with DJ Night & Music",
      "All Possible Sightseeing in Udaipur, Haldighati & Kumbhalgarh",
      "All Toll Tax, Parking Charges, Driver Allowance, etc."
    ],
    exclusions: [
      "Any Kind of Entry Tickets (City Palace, Kumbhalgarh, Sajjangarh)",
      "Local Transportation / Ferry / Auto if Bus is not permitted",
      "Packaged Drinking Water Bottle",
      "Any Paid Activities or Ride",
      "Anything Not Mentioned Above"
    ],
    stayDetails: [
      {
        hotelName: "Palm Valley Resort",
        location: "Udaipur Aravali Hills",
        type: "Luxury 3-Star Hill Resort",
        highlights: [
          "Double Swimming Pools",
          "Beautiful Garden & Open Spaces",
          "Gaming Zone & Indoor/Outdoor Games",
          "Gym Area & Free High-Speed Wi-Fi",
          "Spacious Air-Conditioned Deluxe Rooms",
          "Multi-cuisine pure vegetarian dining"
        ]
      }
    ],
    featured: true,
    tourType: "Strangers Trip"
  }
];
