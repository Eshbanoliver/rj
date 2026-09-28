export interface ServiceItem {
  id: string;
  title: string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  idealFor: string;
  iconName: string;
  image: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "strangers-trips",
    title: "Strangers Trips",
    badge: "Our Signature Experience",
    shortDescription: "Curated social group trips with 15 strangers who become lifelong friends.",
    fullDescription: "Our flagship concept! We bring together 15 like-minded solo travelers and seekers from across India on carefully planned journeys with ice-breaker games, shared pool parties, desert campfires, and vibrant conversations.",
    features: [
      "Strictly limited to 15 travelers per batch",
      "Dedicated, charismatic tour captains",
      "Curated ice-breakers and community games",
      "Safe, verified environment for solo travelers & female travelers",
      "Shared double or triple occupancy in premium stays"
    ],
    idealFor: "Solo travelers, young professionals, adventure seekers wanting to meet new people.",
    iconName: "Users",
    image: "/images/strangers-sunset-community.jpg"
  },
  {
    id: "college-trips",
    title: "College Trips",
    badge: "High Energy & Fun",
    shortDescription: "Unforgettable student group adventures with budget-friendly luxury and safety.",
    fullDescription: "Make college days truly memorable with custom Rajasthan tours designed for batchmates, college clubs, and student groups. From thrilling jeep safaris to poolside DJ nights with complete transport and meal planning.",
    features: [
      "Student-friendly transparent pricing",
      "AC bus transfers directly from campus / city",
      "DJ pool parties and evening music setups",
      "Full itinerary management with zero stress",
      "Pre-verified hotel and meal arrangements"
    ],
    idealFor: "College batches, graduation trips, university clubs, student travel groups.",
    iconName: "GraduationCap",
    image: "/images/udaipur-group-strangers.jpg"
  },
  {
    id: "group-trips",
    title: "Group Trips",
    badge: "Friends & Families",
    shortDescription: "Seamless group holiday journeys packed with laughter, heritage, and comfort.",
    fullDescription: "Whether it is a reunion of old friends or a large family gathering, our group tour packages ensure seamless travel across Rajasthan with private coaches, verified resorts, and personalized sightseeing.",
    features: [
      "Private AC coach arrangements",
      "Coordinated group meals and accommodations",
      "Customizable sightseeing pace",
      "Dedicated group coordinator",
      "Transparent group billing with no surprises"
    ],
    idealFor: "Reunions, friends circles, multi-family vacations, club associations.",
    iconName: "PartyPopper",
    image: "/images/palm-valley-dinner.jpg"
  },
  {
    id: "corporate-trips",
    title: "Corporate Trips",
    badge: "Team Offsites & Retreats",
    shortDescription: "Energizing corporate offsites, team retreats, and reward getaways.",
    fullDescription: "Combine work and rejuvenation in Rajasthan's finest destinations. We organize inspiring team retreats with team-building activities, banquet facilities, pool parties, and desert camp experiences.",
    features: [
      "Professional offsite retreat coordination",
      "Resorts with conference and lawn spaces",
      "Curated team-building outdoor activities",
      "Invoice and GST compliance",
      "End-to-end luxury logistics and transfers"
    ],
    idealFor: "Startups, tech teams, corporate departments, leadership retreats.",
    iconName: "Briefcase",
    image: "/images/palm-valley-aerial.jpg"
  },
  {
    id: "leisure-trips",
    title: "Leisure Trips",
    badge: "Relax & Rejuvenate",
    shortDescription: "Slow travel focused on wellness, hill resort serenity, and tranquil lake sunsets.",
    fullDescription: "Disconnect from the hustle and immerse yourself in tranquility. Stay at scenic hill resorts like Palm Valley Resort amidst the Aravalis, lounge by double swimming pools, and take peaceful boat rides.",
    features: [
      "Relaxed, unhurried itineraries",
      "Resort amenities: twin pools, gardens, spa vibe",
      "Gourmet pure vegetarian dining",
      "Lakeside sunset points and cafe visits",
      "Comfortable sanitized AC travel"
    ],
    idealFor: "Couples, relaxation seekers, weekend escape enthusiasts.",
    iconName: "Palmtree",
    image: "/images/palm-valley-night-pool.jpg"
  },
  {
    id: "customise-trips",
    title: "Customise Trips",
    badge: "Your Way, Your Pace",
    shortDescription: "Tailored travel packages crafted to your specific dates, routes, and preferences.",
    fullDescription: "Have a unique route in mind? Want a private departure date or specialized resort upgrade? Tell our travel designers your vision, and we will curate a personalized travel itinerary with transparent pricing.",
    features: [
      "Bespoke itinerary design",
      "Choice of boarding points & schedules",
      "Selected accommodation categories",
      "Private vehicle of your choice",
      "Instant WhatsApp & phone consultation"
    ],
    idealFor: "Private couples, custom group sizes, special occasions & birthdays.",
    iconName: "Sparkles",
    image: "/images/jodhpur-mehrangarh-sunset.jpg"
  }
];
