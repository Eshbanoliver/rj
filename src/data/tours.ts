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
  quadSharingPrice?: number;
  tripleSharingPrice: number;
  doubleSharingPrice: number;
  registrationAmount: number;
  departureSchedule: string;
  brochureUrl?: string;
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
  // 1. 2D/1N: Udaipur Weekend Getaway — ₹4,500* (Ex-Ahmedabad)
  {
    id: "tour-ahmedabad-udaipur-2d1n",
    slug: "ahmedabad-to-udaipur-weekend-getaway-2d1n",
    title: "Udaipur Weekend Getaway — Lakes & Hilltop Sunsets",
    badge: "Weekend Special",
    departureCity: "Ahmedabad",
    destinations: ["Udaipur", "Bahubali Hills", "Lake Pichola"],
    duration: "2 Days | 1 Night",
    days: 2,
    nights: 1,
    startingPrice: 4499,
    quadSharingPrice: 4499,
    tripleSharingPrice: 4499,
    doubleSharingPrice: 5499,
    registrationAmount: 3500,
    departureSchedule: "Every Saturday Morning Departure from Nehru Place, Ahmedabad (07:00 AM)",
    brochureUrl: "/brochure/Ahemdabad%20to%20Udaipur%202d1n%20(2).pdf",
    batchSchedule: [
      {
        month: "October Batches",
        dates: ["3rd Oct", "10th Oct", "17th Oct", "24th Oct", "31st Oct"]
      },
      {
        month: "November Batches",
        dates: ["7th Nov", "14th Nov", "21st Nov", "28th Nov"]
      }
    ],
    heroImage: "/images/hero-udaipur.jpg",
    galleryImages: [
      "/images/hero-udaipur.jpg",
      "/images/udaipur-city-palace-lake.jpg",
      "/images/palm-valley-pool.jpg",
      "/images/palm-valley-resort-full.jpg"
    ],
    tagline: "Quick 2D/1N Refreshing Escape to the City of Lakes",
    overview: "The ultimate quick weekend escape from Ahmedabad without taking leave from work. Relax at scenic hill resort Palm Valley, cruise Lake Pichola, visit City Palace, wander Gangaur Ghat, and witness magical sunsets at Bahubali Hills overlooking Lake Badi.",
    experienceStory: "Crafted for working professionals, couples, and friends seeking a quick reset. Enjoy pool lounging, royal heritage walks, and rooftop dining under starry Mewar skies.",
    itinerary: [
      {
        day: 1,
        title: "Ahmedabad to Udaipur & Royal Old City Heritage",
        location: "Ahmedabad to Udaipur",
        timing: "6:00 AM Departure from Ahmedabad",
        description: "Depart Ahmedabad at 6:00 AM in AC comfort. Breakfast on highway included. Arrive at resort around noon, check in and freshen up with villa lunch. Head out to explore City Palace, Gangaur Ghat lakeside promenade, and take a sunset boat ride on Lake Pichola. Wrap up with rooftop dining in Old City.",
        highlights: [
          "Scenic Aravali mountain drive",
          "Check in at Palm Valley Resort",
          "City Palace & Gangaur Ghat",
          "Lake Pichola sunset & Old City cafes"
        ],
        mealsIncluded: "Breakfast & Lunch (Veg)",
        sightseeingNote: "City Palace entry tickets and boat ride on own expense."
      },
      {
        day: 2,
        title: "Bahubali Hills, Fateh Sagar & Return Journey",
        location: "Udaipur to Ahmedabad",
        timing: "Morning hike, afternoon departure",
        description: "Enjoy sunrise hike at Bahubali Hills with sweeping 360-degree views of Lake Badi and surrounding Aravali peaks. Visit Fateh Sagar Lake and Saheliyon Ki Bari before beginning the return journey back to Ahmedabad, arriving by Sunday late evening.",
        highlights: [
          "Bahubali Hills breathtaking panoramic viewpoint",
          "Fateh Sagar Lake promenade",
          "Saheliyon Ki Bari historic gardens",
          "Smooth evening return to Ahmedabad"
        ],
        mealsIncluded: "Breakfast & Lunch (Veg)",
        sightseeingNote: "Dinner stop en route at own expense."
      }
    ],
    inclusions: [
      "Comfortable AC Transport (Ex-Ahmedabad)",
      "01 Night Deluxe Stay at Palm Valley Resort",
      "Meals (2 Breakfast + 2 Lunch - Pure Veg)",
      "Complete Udaipur Sightseeing as per Itinerary",
      "All Toll, Parking & Driver Allowance"
    ],
    exclusions: [
      "City Palace & Monument Entry Tickets",
      "Lake Pichola Boat Ride",
      "Personal Expenses & Tips"
    ],
    stayDetails: [
      {
        hotelName: "Palm Valley Resort",
        location: "Udaipur Aravali Hills",
        type: "Luxury 3-Star Resort",
        highlights: [
          "Twin Swimming Pools",
          "Lush Garden Lawns",
          "Spacious Deluxe AC Rooms"
        ]
      }
    ],
    featured: true,
    tourType: "Strangers Trip"
  },

  // 2. 2D/1N: Jawai & Kumbhalgarh — ₹4,999* (Ex-Ahmedabad)
  {
    id: "tour-ahmedabad-jawai-kumbhalgarh-2d1n",
    slug: "ahmedabad-to-jawai-kumbhalgarh-leopard-safari-2d1n",
    title: "Jawai & Kumbhalgarh — Leopard Safari & Great Wall",
    badge: "Wildlife & Heritage",
    departureCity: "Ahmedabad",
    destinations: ["Jawai", "Kumbhalgarh", "Pali"],
    duration: "2 Days | 1 Night",
    days: 2,
    nights: 1,
    startingPrice: 4999,
    quadSharingPrice: 4999,
    tripleSharingPrice: 4999,
    doubleSharingPrice: 6100,
    registrationAmount: 3500,
    departureSchedule: "Every Wednesday & Saturday Morning Departure from Ahmedabad (08:00 AM)",
    brochureUrl: "/brochure/Ahemdabad%20to%20Jawai%202%20days%201%20night.pdf",
    batchSchedule: [
      {
        month: "October Batches",
        dates: ["3rd Oct", "10th Oct", "17th Oct", "24th Oct", "31st Oct"]
      },
      {
        month: "November Batches",
        dates: ["7th Nov", "14th Nov", "21st Nov", "28th Nov"]
      }
    ],
    heroImage: "/images/hero-jawai.jpg",
    galleryImages: [
      "/images/hero-jawai.jpg",
      "/images/hero-kumbhalgarh.jpg",
      "/images/strangers-sunset-community.jpg"
    ],
    tagline: "Wild Leopard Tracking Boulders & Cloud Citadel Wall",
    overview: "A thrilling combination of Rajasthan's raw wildlife and colossal fortress architecture. Track wild leopards roaming freely across prehistoric granite boulders in Jawai, witness sunset at Jawai Bandh dam, meet the indigenous Rabari pastoral tribe, and conquer the 36-km Great Wall at Kumbhalgarh Fort.",
    experienceStory: "Feel the rush of an open 4x4 gypsy safari traversing rocky terrains as wild leopards lounge atop sun-warmed rocks, followed by standing upon the majestic ramparts of Kumbhalgarh guarding the Mewar pass.",
    itinerary: [
      {
        day: 1,
        title: "Ahmedabad to Jawai 4x4 Leopard Safari & Dam Sunset",
        location: "Ahmedabad to Jawai Bandh",
        timing: "5:30 AM Departure from Ahmedabad",
        description: "Depart Ahmedabad at 5:30 AM in comfortable AC transport. Reach Jawai by early afternoon and check in. Board open 4x4 Gypsies for an adrenaline-pumping Leopard Tracking Safari through granite caves and boulder ridges. Witness stunning sunset reflections over Jawai Dam with crocodile and migratory bird spotting, followed by an evening campfire dinner.",
        highlights: [
          "Open 4x4 Gypsy Leopard Tracking Safari",
          "Granite boulder terrain & Rabari pastoral culture",
          "Jawai Dam sunset & crocodile spotting",
          "Evening campfire buffet dinner under the stars"
        ],
        mealsIncluded: "Breakfast & Campfire Dinner",
        sightseeingNote: "Jawai Gypsy Safari coordination included. Wildlife permits on guest expense."
      },
      {
        day: 2,
        title: "Kumbhalgarh Fort Great Wall & Return to Ahmedabad",
        location: "Kumbhalgarh to Ahmedabad",
        timing: "Morning checkout, scenic mountain drive",
        description: "After breakfast, take a scenic drive through the Aravali sanctuary hills to Kumbhalgarh Fort. Explore the world's second-longest continuous wall (36 km), Badal Mahal (Palace of Clouds), and historic Hindu/Jain shrines within the citadel. Begin return drive to Ahmedabad arriving by late evening.",
        highlights: [
          "36-km Great Wall of India at Kumbhalgarh Fort",
          "Badal Mahal high vantage citadel point",
          "Aravali Wildlife Sanctuary valley drive",
          "Return journey to Ahmedabad"
        ],
        mealsIncluded: "Breakfast & Lunch",
        sightseeingNote: "Fort entry tickets payable by guests."
      }
    ],
    inclusions: [
      "Sanitized AC Bus / Tempo (Ex-Ahmedabad)",
      "01 Night Stay in Jawai / Kumbhalgarh Wilderness Resort",
      "Meals (2 Breakfast + 1 Lunch + 1 Dinner)",
      "Jawai 4x4 Gypsy Safari Coordination",
      "Complete Kumbhalgarh Fort Sightseeing",
      "All Tolls, Parking & Driver Allowance"
    ],
    exclusions: [
      "Kumbhalgarh Fort Entry Tickets",
      "Any Individual Forest / Safari Entry Fees",
      "Personal Expenses & Mineral Water"
    ],
    stayDetails: [
      {
        hotelName: "Jawai Wilderness Camp / Resort",
        location: "Jawai Pali",
        type: "Wildlife Eco-Resort",
        highlights: [
          "Dramatic Granite Boulder Views",
          "Campfire Arena & Lawn",
          "Stargazing Deck & AC Rooms"
        ]
      }
    ],
    featured: true,
    tourType: "Group Trip"
  },

  // 3. 3D/2N: Udaipur, Haldighati & Kumbhalgarh — ₹6,999* (Ex-Ahmedabad)
  {
    id: "tour-ahmedabad-udaipur-haldighati-kumbhalgarh-3d2n",
    slug: "ahmedabad-to-udaipur-haldighati-kumbhalgarh",
    title: "Udaipur, Haldighati & Kumbhalgarh — Strangers' Trip",
    badge: "Bestseller • Pool Party",
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
    brochureUrl: "/brochure/Brochure%20Ex%20Ahmedabad%20to%20Udaipur.pdf",
    batchSchedule: [
      {
        month: "October Batches",
        dates: ["2nd Oct", "9th Oct", "16th Oct", "23rd Oct", "30th Oct"]
      },
      {
        month: "November Batches",
        dates: ["6th Nov", "13th Nov", "20th Nov", "27th Nov"]
      }
    ],
    heroImage: "/images/udaipur-group-strangers.jpg",
    galleryImages: [
      "/images/udaipur-group-strangers.jpg",
      "/images/dj-pool-party.jpg",
      "/images/strangers-sunset-community.jpg",
      "/images/palm-valley-aerial.jpg",
      "/images/palm-valley-suite.jpg",
      "/images/udaipur-city-palace-lake.jpg"
    ],
    tagline: "Lake Views, Stories & Strangers — A Stay Amidst the Hills",
    overview: "Escape the city and journey from Ahmedabad across the scenic Aravalis to Udaipur. Explore Udaipur's royal lakes and palaces, majestic Kumbhalgarh Fort wall, Haldighati canyon, Bahubali hills, and high-energy DJ Pool Parties at Palm Valley Resort.",
    experienceStory: "A soulful escape to Udaipur designed for solo travelers and strangers who become friends for a lifetime. Stay at Palm Valley Resort amidst the Aravali hills with double swimming pools, explore the Great Wall of India at Kumbhalgarh, and catch breathtaking sunsets at Bahubali Hills.",
    itinerary: [
      {
        day: 1,
        title: "Ahmedabad Departure & Udaipur Old City Heritage",
        location: "Ahmedabad to Udaipur",
        timing: "Depart Ahmedabad 6:00 AM, arrive resort ~12:00 PM",
        description: "Depart from Ahmedabad at 6:00 AM. Stop for an included veg breakfast en route. Reach Palm Valley Resort by 12:00 PM, check in, and enjoy lunch at the villa. At 3:00 PM, head out to explore Udaipur Old City: City Palace, Jagdish Temple, Gangaur Ghat, and wander through vibrant markets. Enjoy dinner at a rooftop restaurant before returning to the resort.",
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
        description: "Wake up to serene mountain views and enjoy breakfast at 8:00 AM. Depart for historic Haldighati and the majestic Kumbhalgarh Fort — boasting the second-longest continuous wall in the world. Explore the fortress and breathtaking mountain viewpoints. Return to Palm Valley Resort in the late afternoon to unwind. As twilight falls, turn up the music for an electrifying Pool Party with DJ, dancing, games, followed by a lavish dinner at the villa.",
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
        description: "Enjoy breakfast at 8:00 AM. Check out at 9:00 AM and head to the picturesque landscapes of Bahubali Hills overlooking Badi Lake, Rayta Hills scenic pass, and Fateh Sagar Lake. Soak in panoramic 360-degree views before beginning the comfortable return journey back to Ahmedabad.",
        highlights: [
          "Bahubali Hills breathtaking panoramic viewpoint",
          "Scenic Rayta Hills countryside ride",
          "Fateh Sagar Lake promenade",
          "Comfortable return drive to Ahmedabad"
        ],
        mealsIncluded: "Morning Breakfast & Lunch (Veg)",
        sightseeingNote: "Entry tickets not included. Dinner stop en route at own expense."
      }
    ],
    inclusions: [
      "AC Bus (Ex-Ahmedabad)",
      "02 Night Stay in Udaipur (Luxury 3-Star Palm Valley Resort)",
      "Meals (3 Breakfast + 2 Lunch + 1 Dinner - Pure Veg)",
      "Pool Party with DJ Night & Music",
      "All Sightseeing in Udaipur, Haldighati & Kumbhalgarh as per itinerary",
      "All Toll Tax, Parking Charges, Driver Allowance, etc."
    ],
    exclusions: [
      "Monument & Fort Entry Tickets",
      "Local Transportation / Ferry / Auto if Bus is not permitted",
      "Packaged Drinking Water Bottle",
      "Any Paid Activities or Rides",
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
          "Spacious Air-Conditioned Deluxe Rooms",
          "Multi-cuisine pure vegetarian dining"
        ]
      }
    ],
    featured: true,
    tourType: "Strangers Trip"
  },

  // 4. 3D/2N: Udaipur & Nathdwara Heritage — ₹6,999* (Ex-Ahmedabad)
  {
    id: "tour-ahmedabad-udaipur-nathdwara-3d2n",
    slug: "ahmedabad-to-udaipur-nathdwara-heritage-3d2n",
    title: "Udaipur & Nathdwara — Shreenathji & Lake Heritage",
    badge: "Spiritual & Leisure",
    departureCity: "Ahmedabad",
    destinations: ["Udaipur", "Nathdwara", "Statue of Belief"],
    duration: "3 Days | 2 Nights",
    days: 3,
    nights: 2,
    startingPrice: 6999,
    quadSharingPrice: 6999,
    tripleSharingPrice: 6999,
    doubleSharingPrice: 8199,
    registrationAmount: 3150,
    departureSchedule: "Every Friday Departure (07:00 AM / 05:00 PM) from Nehru Place, Ahmedabad",
    brochureUrl: "/brochure/Ahemdabad%20to%20Nathdwara.pdf",
    batchSchedule: [
      {
        month: "October Batches",
        dates: ["2nd Oct", "9th Oct", "16th Oct", "23rd Oct", "30th Oct"]
      },
      {
        month: "November Batches",
        dates: ["6th Nov", "13th Nov", "20th Nov", "27th Nov"]
      }
    ],
    heroImage: "/images/hero-udaipur.jpg",
    galleryImages: [
      "/images/hero-udaipur.jpg",
      "/images/udaipur-city-palace-lake.jpg",
      "/images/palm-valley-dinner.jpg",
      "/images/palm-valley-resort-full.jpg"
    ],
    tagline: "Sacred Shreenathji Darshan, Viswas Swaroopam & Lake City",
    overview: "A divine blend of spiritual devotion and Udaipur's royal heritage. Seek blessings at the sacred Shreenathji Temple in Nathdwara, gaze up at the monumental 369-ft Statue of Belief (Viswas Swaroopam — the world's tallest Shiva statue), and relax at Palm Valley Resort with lakefront promenades in Udaipur.",
    experienceStory: "A soulful, family-friendly tour combining rich Vaishnav devotional culture, authentic Rajasthani vegetarian thalis, divine darshan, and serene resort comforts in the Aravali hills.",
    itinerary: [
      {
        day: 1,
        title: "Ahmedabad Departure & Udaipur City Heritage",
        location: "Ahmedabad to Udaipur",
        timing: "6:00 AM Departure from Ahmedabad",
        description: "Depart Ahmedabad at 6:00 AM. Breakfast on highway included. Arrive at Palm Valley Resort Udaipur by noon, check in, and enjoy lunch at the villa. Post lunch, visit City Palace, Gangaur Ghat, and enjoy evening lake views at Lake Pichola.",
        highlights: [
          "Scenic Aravali mountain drive",
          "Check-in at Palm Valley Resort",
          "City Palace & Gangaur Ghat",
          "Sunset views over Lake Pichola"
        ],
        mealsIncluded: "Breakfast & Lunch (Pure Veg)",
        sightseeingNote: "City Palace tickets payable by guests."
      },
      {
        day: 2,
        title: "Nathdwara Shreenathji Darshan & Statue of Belief",
        location: "Nathdwara",
        timing: "Full day pilgrimage and cultural excursion",
        description: "Early morning drive to the sacred town of Nathdwara. Seek blessings at the revered Shreenathji Temple, savor traditional Prasad, and visit Viswas Swaroopam (Statue of Belief). Return to Udaipur for group dinner at the resort.",
        highlights: [
          "Shreenathji Mandir Darshan",
          "Statue of Belief (Viswas Swaroopam - 369 ft)",
          "Authentic Rajasthani Sweets & Cuisine",
          "Relaxing poolside evening at resort"
        ],
        mealsIncluded: "Breakfast & Dinner (Pure Veg)",
        sightseeingNote: "Special puja or VIP temple passes on guest expense."
      },
      {
        day: 3,
        title: "Bahubali Hills, Saheliyon Ki Bari & Return Journey",
        location: "Udaipur to Ahmedabad",
        timing: "Morning sightseeing, afternoon departure",
        description: "Morning visit to panoramic Bahubali Hills overlooking Lake Badi and lush Saheliyon Ki Bari historic fountains. Enjoy lunch and begin smooth return journey back to Ahmedabad by late evening.",
        highlights: [
          "Bahubali Hills 360-degree viewpoint",
          "Saheliyon Ki Bari gardens",
          "Udaipur craft & souvenir shopping",
          "Comfortable return drive to Ahmedabad"
        ],
        mealsIncluded: "Breakfast & Lunch (Pure Veg)",
        sightseeingNote: "Dinner stop en route at own expense."
      }
    ],
    inclusions: [
      "Comfortable AC Bus / Tempo (Ex-Ahmedabad)",
      "02 Nights Resort Stay in Udaipur (Palm Valley Resort)",
      "Meals (3 Breakfast + 2 Lunch + 1 Dinner - Pure Veg)",
      "Complete Nathdwara & Udaipur Sightseeing",
      "All Tolls, Parking & Driver Allowance"
    ],
    exclusions: [
      "Temple VIP Passes (if opted)",
      "Monument Entry Tickets",
      "Personal Expenses"
    ],
    stayDetails: [
      {
        hotelName: "Palm Valley Resort",
        location: "Udaipur Aravali Hills",
        type: "Luxury 3-Star Resort",
        highlights: [
          "Twin Swimming Pools",
          "Pure Vegetarian Kitchen",
          "Lush Garden Lawns"
        ]
      }
    ],
    featured: true,
    tourType: "Group Trip"
  },

  // 5. 3D/2N: Jodhpur & Jaisalmer Desert Safari — ₹7,999* (Ex-Ahmedabad)
  {
    id: "tour-ahmedabad-jodhpur-jaisalmer-3d2n",
    slug: "ahmedabad-to-jodhpur-jaisalmer-strangers-trip",
    title: "Jodhpur & Jaisalmer — Thar Desert Safari & Forts",
    badge: "Bestseller • Desert Camp",
    departureCity: "Ahmedabad",
    destinations: ["Jodhpur", "Jaisalmer", "Sam Sand Dunes"],
    duration: "3 Days | 2 Nights",
    days: 3,
    nights: 2,
    startingPrice: 7999,
    tripleSharingPrice: 7999,
    doubleSharingPrice: 8999,
    registrationAmount: 3500,
    departureSchedule: "Every Thursday Night (11:00 PM) Departure from Ahmedabad",
    brochureUrl: "/brochure/1%20BROUCHRE.pdf",
    batchSchedule: [
      {
        month: "October Batches",
        dates: ["1st Oct", "8th Oct", "15th Oct", "22nd Oct", "29th Oct"]
      },
      {
        month: "November Batches",
        dates: ["5th Nov", "12th Nov", "19th Nov", "26th Nov"]
      }
    ],
    heroImage: "/images/hero-jaisalmer.jpg",
    galleryImages: [
      "/images/jodhpur-mehrangarh-sunset.jpg",
      "/images/jaisalmer-journey-arch.jpg",
      "/images/hero-jaisalmer.jpg",
      "/images/hero-jodhpur.jpg"
    ],
    tagline: "Where Golden Sands Meet Timeless Stories",
    overview: "Escape the routine and embark on an unforgettable journey from Ahmedabad to Jodhpur & Jaisalmer. Experience Rajasthan's royal charm, the vibrant Blue City, Mehrangarh Fort, golden sand dunes, and the magic of desert nights. Travel with 15 strangers who share the same passion for adventure and return with friendships that last beyond the trip.",
    experienceStory: "More than just a trip, it's an experience where strangers become friends and memories become stories. Enjoy thrilling Jeep safaris across ripples of golden sand, sunset camel treks, fireside Rajasthani folk music, and midnight conversations beneath starlit Thar skies.",
    itinerary: [
      {
        day: 1,
        title: "Ahmedabad Departure & Blue City Jodhpur Exploration",
        location: "Ahmedabad to Jodhpur",
        timing: "Thursday Departure 11:00 PM from Ahmedabad",
        description: "Start overnight journey from Ahmedabad in comfortable AC transport. Arrive in Jodhpur, the Blue City. Freshen up at hotel, enjoy breakfast, and explore Mehrangarh Fort, Jaswant Thada marble cenotaph, and the authentic blue quarter lanes. Savor group dinner before overnight journey to Jaisalmer.",
        highlights: [
          "Mehrangarh Fort exploration",
          "Jaswant Thada marble cenotaph",
          "Authentic Blue City heritage walk",
          "Group dinner at hotel"
        ],
        mealsIncluded: "Breakfast & Dinner at Hotel",
        sightseeingNote: "All entry fees payable by guests."
      },
      {
        day: 2,
        title: "Golden City Jaisalmer & Sam Sand Dunes Glamping",
        location: "Jaisalmer & Sam Desert Camp",
        timing: "Arrival at Sam Desert Camp by afternoon",
        description: "Arrive in Jaisalmer and check in at luxury Swiss tents at Sam Sand Dunes. Experience an adrenaline-pumping 4x4 Jeep Safari on the high dunes, followed by an authentic Sunset Camel Ride. Gather around the campfire for traditional Rajasthani folk music, Kalbeliya dance, and royal buffet dinner.",
        highlights: [
          "Check-in at Sam Sand Dunes Desert Camp",
          "Thrilling Desert Jeep Safari",
          "Iconic Sunset Camel Ride",
          "Rajasthani Folk Music, Dance & Campfire",
          "Royal Rajasthani Buffet Dinner under the stars"
        ],
        mealsIncluded: "Breakfast at Hotel & Rajasthani Dinner at Camp",
        sightseeingNote: "Entry tickets payable by guests."
      },
      {
        day: 3,
        title: "Jaisalmer Fort, Haveli & Return Journey to Ahmedabad",
        location: "Jaisalmer to Ahmedabad",
        timing: "Departure from Jaisalmer approx 8:00 - 9:00 PM",
        description: "Explore the living Jaisalmer Fort (Sonar Qila), intricately carved Patwon Ki Haveli, peaceful Gadisar Lake, and old bazaar lanes. Begin journey back to Ahmedabad with dinner served on board.",
        highlights: [
          "Jaisalmer Golden Fort (Sonar Qila)",
          "Intricate architecture of Patwon Ki Haveli",
          "Scenic serene Gadisar Lake",
          "Explore Jaisalmer Old City markets",
          "Dinner on board during journey"
        ],
        mealsIncluded: "Breakfast at Camp & Dinner in Bus",
        sightseeingNote: "Departure approx 8:30 PM."
      }
    ],
    inclusions: [
      "AC Bus (Ex-Ahmedabad)",
      "01 Night Stay in Jodhpur (Luxury Hotel)",
      "01 Night Stay in Jaisalmer (Premium Desert Tent)",
      "Meals (3 Breakfast + 3 Dinner)",
      "Jeep Safari + Camel Safari in Sam Sand Dunes",
      "All Sightseeing in Jodhpur & Jaisalmer as per itinerary",
      "All Toll Tax, Parking Charges, Driver Allowance, etc."
    ],
    exclusions: [
      "Fort and Haveli Entry Tickets",
      "Local Transportation / Auto if Bus not allowed",
      "Packaged Drinking Water Bottle",
      "Personal Expenses"
    ],
    stayDetails: [
      {
        hotelName: "Royal Heritage Hotel & Sam Desert Camp",
        location: "Jodhpur & Jaisalmer",
        type: "Heritage Hotel & Luxury Swiss Tents",
        highlights: [
          "Swiss Tents with Attached Bath",
          "Bonfire & Folk Dance Arena",
          "Traditional Rajasthani Hospitality"
        ]
      }
    ],
    featured: true,
    tourType: "Strangers Trip"
  },

  // 6. 3D/2N: Ex-Delhi to Udaipur & Kumbhalgarh — ₹7,999* (Ex-Delhi)
  {
    id: "tour-delhi-udaipur-kumbhalgarh-3d2n",
    slug: "delhi-to-udaipur-kumbhalgarh-royal-getaway-3d2n",
    title: "Delhi to Udaipur & Kumbhalgarh — Royal Mewar Expedition",
    badge: "Ex-Delhi Special",
    departureCity: "Delhi",
    destinations: ["Udaipur", "Kumbhalgarh", "Delhi"],
    duration: "3 Days | 2 Nights",
    days: 3,
    nights: 2,
    startingPrice: 7999,
    quadSharingPrice: 7999,
    tripleSharingPrice: 8499,
    doubleSharingPrice: 9499,
    registrationAmount: 3150,
    departureSchedule: "Every Thursday Night (10:00 PM) from Gurugram IFFCO Chowk Metro Station, Delhi",
    brochureUrl: "/brochure/Delhi%20to%20Udaipur.pdf",
    batchSchedule: [
      {
        month: "October Batches",
        dates: ["1st Oct", "8th Oct", "15th Oct", "22nd Oct", "29th Oct"]
      },
      {
        month: "November Batches",
        dates: ["5th Nov", "12th Nov", "19th Nov", "26th Nov"]
      }
    ],
    heroImage: "/images/hero-kumbhalgarh.jpg",
    galleryImages: [
      "/images/hero-kumbhalgarh.jpg",
      "/images/hero-udaipur.jpg",
      "/images/udaipur-group-strangers.jpg",
      "/images/dj-pool-party.jpg"
    ],
    tagline: "Direct Ex-Delhi Royal Tour to City of Lakes & Great Wall",
    overview: "Specially designed for travelers and youth from Delhi NCR! Escape the capital's rush aboard sanitized premium AC transport to the royal Aravalis. Stay at a luxury hill resort, explore the 36-km Kumbhalgarh Great Wall, City Palace Udaipur, and party with DJ poolside nights.",
    experienceStory: "A curated group getaway directly from Delhi. Enjoy smooth overnight highway travel, scenic mountain passes, royal citadel walks, and bond with like-minded travelers over DJ pool parties.",
    itinerary: [
      {
        day: 1,
        title: "Delhi Overnight Journey to Udaipur & Lake Heritage",
        location: "Delhi to Udaipur",
        timing: "Thursday Evening Departure from Delhi NCR",
        description: "Depart Thursday evening from Delhi NCR. Arrive in Udaipur by late morning. Check in at Palm Valley Resort, freshen up and have lunch. Evening tour of City Palace, Lake Pichola, and rooftop dinner overlooking the lights of the Old City.",
        highlights: [
          "Overnight AC Travel from Delhi",
          "Resort Check-in amidst Aravalis",
          "City Palace Tour",
          "Lake Pichola Evening"
        ],
        mealsIncluded: "Breakfast & Lunch",
        sightseeingNote: "City Palace tickets payable by guests."
      },
      {
        day: 2,
        title: "Kumbhalgarh Fort Citadel & Evening DJ Pool Party",
        location: "Kumbhalgarh & Udaipur",
        timing: "Morning citadel excursion, evening Pool Party",
        description: "Scenic morning drive to the impregnable Kumbhalgarh Fort. Explore the world's second-longest continuous wall and Badal Mahal with panoramic vistas. Head back to resort for high-energy DJ Pool Party and lavish buffet dinner.",
        highlights: [
          "Kumbhalgarh Great Wall Exploration",
          "Badal Mahal Citadel",
          "DJ Pool Party at Resort",
          "Lavish Buffet Dinner"
        ],
        mealsIncluded: "Breakfast & Dinner",
        sightseeingNote: "Fort entry tickets payable by guests."
      },
      {
        day: 3,
        title: "Bahubali Hills, Fateh Sagar & Return Journey to Delhi",
        location: "Udaipur to Delhi",
        timing: "Morning hike, afternoon departure to Delhi",
        description: "Morning hike to scenic Bahubali Hills overlooking Lake Badi. Stop at Fateh Sagar Lake and Udaipur craft markets before beginning return journey to Delhi NCR arriving Monday early morning.",
        highlights: [
          "Bahubali Hills Viewpoint",
          "Fateh Sagar Lakeside",
          "Return Journey to Delhi NCR"
        ],
        mealsIncluded: "Breakfast & Lunch",
        sightseeingNote: "Meals during transit on highway at own expense."
      }
    ],
    inclusions: [
      "Sanitized AC Coach / Sleeper (Ex-Delhi NCR)",
      "02 Nights Luxury Resort Stay in Udaipur",
      "Meals (3 Breakfast + 2 Lunch + 1 Dinner - Pure Veg)",
      "DJ Pool Party with Music System",
      "Complete Udaipur & Kumbhalgarh Sightseeing",
      "Tolls, Inter-state Permits & Driver Allowance"
    ],
    exclusions: [
      "Fort Entry Tickets",
      "Personal Expenses & Rides",
      "Meals on transit highways outside inclusion"
    ],
    stayDetails: [
      {
        hotelName: "Palm Valley Resort",
        location: "Udaipur Aravali Hills",
        type: "Luxury 3-Star Resort",
        highlights: [
          "Double Swimming Pools",
          "DJ Arena",
          "Lush Open Lawns"
        ]
      }
    ],
    featured: true,
    tourType: "Strangers Trip"
  },

  // 7. 3D/2N: Udaipur to Jodhpur & Jaisalmer (15 Strangers) — ₹6,999* (Ex-Udaipur)
  {
    id: "tour-udaipur-jodhpur-jaisalmer-3d2n",
    slug: "udaipur-to-jodhpur-jaisalmer-strangers-trip",
    title: "Udaipur to Jodhpur & Jaisalmer — A Trip with 15 Strangers",
    badge: "Signature Strangers Trip",
    departureCity: "Udaipur",
    destinations: ["Jodhpur", "Jaisalmer", "Sam Sand Dunes"],
    duration: "3 Days | 2 Nights",
    days: 3,
    nights: 2,
    startingPrice: 6999,
    tripleSharingPrice: 6999,
    doubleSharingPrice: 7999,
    registrationAmount: 3500,
    departureSchedule: "Every Friday Morning Departure from Udaipur (06:00 AM)",
    brochureUrl: "/brochure/Udaipur%20to%20jaisailmer%20trip%20brochure.pdf",
    batchSchedule: [
      {
        month: "October Batches",
        dates: ["2nd Oct", "9th Oct", "16th Oct", "23rd Oct", "30th Oct"]
      },
      {
        month: "November Batches",
        dates: ["6th Nov", "13th Nov", "20th Nov", "27th Nov"]
      }
    ],
    heroImage: "/images/hero-jaisalmer.jpg",
    galleryImages: [
      "/images/jodhpur-mehrangarh-sunset.jpg",
      "/images/jaisalmer-journey-arch.jpg",
      "/images/hero-jaisalmer.jpg",
      "/images/hero-jodhpur.jpg"
    ],
    tagline: "Where Golden Sands Meet Timeless Stories",
    overview: "Join our flagship format: A Trip with 15 Strangers departing directly from the City of Lakes. Traverse the blue alleyways of Jodhpur and plunge into the majestic Thar desert at Sam Sand Dunes. Enjoy jeep dune bashing, camel safaris, starlit campfire sessions, and authentic folk performances.",
    experienceStory: "Depart with 15 like-minded strangers from Udaipur and return with a circle of friends for life. Enjoy Rajasthani hospitality, vibrant desert folk nights, Mehrangarh Fort views, and golden havelis.",
    itinerary: [
      {
        day: 1,
        title: "Udaipur Departure to Jodhpur & Blue City Heritage",
        location: "Udaipur to Jodhpur",
        timing: "Friday 06:00 AM Departure from Udaipur",
        description: "Depart from Udaipur at 6:00 AM. Arrive in Jodhpur around 11:00 AM–12:00 PM. Check in at hotel, enjoy breakfast, and explore Mehrangarh Fort, Jaswant Thada, and the iconic Blue City. Dinner at hotel followed by overnight journey/prep for Jaisalmer.",
        highlights: [
          "Departure from Udaipur at 6:00 AM",
          "Mehrangarh Fort exploration",
          "Jaswant Thada cenotaph",
          "Blue City heritage walk",
          "Dinner at hotel"
        ],
        mealsIncluded: "Breakfast & Dinner",
        sightseeingNote: "All monument entry fees payable by guests."
      },
      {
        day: 2,
        title: "Jodhpur to Sam Sand Dunes & Desert Glamping",
        location: "Jodhpur to Jaisalmer Dunes",
        timing: "08:00 AM Departure to Jaisalmer Sam Sand Dunes",
        description: "Depart Jodhpur at 8:00 AM. Arrive at Sam Desert Camp by afternoon (12:00–1:00 PM). Experience traditional Rajasthani welcome, open 4x4 Jeep Safari over dunes, sunset Camel Ride, Kalbelia folk dance, live music around the campfire, and royal Rajasthani dinner under starry skies.",
        highlights: [
          "Sam Sand Dunes Luxury Swiss Camp",
          "Thrilling 4x4 Jeep Safari",
          "Sunset Camel Caravan",
          "Folk Dance, Music & Campfire",
          "Royal Rajasthani Buffet Dinner"
        ],
        mealsIncluded: "Breakfast & Dinner",
        sightseeingNote: "Jeep & Camel safari included in package."
      },
      {
        day: 3,
        title: "Golden Fort, Patwon Ki Haveli & Return Journey",
        location: "Jaisalmer to Udaipur",
        timing: "Morning sightseeing, 08:00 PM departure for return",
        description: "Post breakfast and camp checkout, visit the living Jaisalmer Fort (Sonar Qila), Patwon Ki Haveli, Gadisar Lake, and explore local desert handicraft bazaars. Depart around 8:00–9:00 PM for Udaipur with dinner en route in bus.",
        highlights: [
          "Jaisalmer Golden Living Fort",
          "Patwon Ki Haveli carving details",
          "Gadisar Lake tranquil promenade",
          "Return departure to Udaipur (8:00 PM)"
        ],
        mealsIncluded: "Breakfast & Dinner en route",
        sightseeingNote: "Arrive Udaipur next morning with lifelong memories."
      }
    ],
    inclusions: [
      "AC Coach / Bus from Udaipur",
      "01 Night Stay in Jodhpur (Luxury Hotel)",
      "01 Night Stay in Jaisalmer (Premium Desert Camp)",
      "Meals (3 Breakfast + 3 Dinner)",
      "Jeep Safari + Camel Safari in Thar Dunes",
      "Complete Jodhpur & Jaisalmer Sightseeing",
      "Tolls, Parking & Driver Allowance"
    ],
    exclusions: [
      "Monument & Fort Entry Tickets",
      "Local Auto/Jeep where big coach restricted",
      "Packaged Drinking Water & Personal Rides",
      "Anything not mentioned in inclusions"
    ],
    stayDetails: [
      {
        hotelName: "Royal Heritage Jodhpur & Sam Desert Camp",
        location: "Jodhpur & Thar Dunes",
        type: "Heritage Hotel & Luxury Swiss Desert Tents",
        highlights: [
          "Swiss Luxury Tents with attached washrooms",
          "Open desert campfire arena",
          "Traditional folk welcome"
        ]
      }
    ],
    featured: true,
    tourType: "Strangers Trip"
  }

];
