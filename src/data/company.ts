export interface CompanyInfo {
  name: string;
  tagline: string;
  secondaryTagline: string;
  philosophy: string;
  signatureConcept: string;
  phones: string[];
  displayPhone: string;
  whatsapp: string;
  email: string;
  address: {
    street: string;
    colony: string;
    sector: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  instagram: string;
  instagramUrl: string;
  businessHours: string;
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  pillars: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const companyData: CompanyInfo = {
  name: "R Journey Tour & Travel",
  tagline: "Where Strangers Become Stories",
  secondaryTagline: "Where Golden Sands Meet Timeless Stories",
  philosophy: "We believe that travel is not just about visiting places — it's about the people you meet along the way. Our handcrafted social group journeys bring together 15 adventurous strangers to explore majestic Rajasthan, turning shared moments into lifelong friendships.",
  signatureConcept: "15 Strangers • 2 Cities • 1 Unforgettable Journey",
  phones: ["+91 80942 68991", "+91 88904 37050"],
  displayPhone: "+91 80942 68991",
  whatsapp: "918094268991",
  email: "contact@rjourney.com",
  address: {
    street: "25",
    colony: "MP Colony",
    sector: "Sector 13",
    city: "Udaipur",
    state: "Rajasthan",
    pincode: "313001",
    country: "India",
    full: "25, MP Colony, Sector 13, Udaipur, Rajasthan 313001"
  },
  instagram: "@rjourneysofficial",
  instagramUrl: "https://www.instagram.com/rjourneysofficial",
  businessHours: "Monday – Sunday: 9:00 AM – 9:00 PM IST",
  stats: [
    {
      label: "Group Size",
      value: "15 Strangers",
      description: "Intimate curated batches designed for maximum bonding and real community connection."
    },
    {
      label: "Departure Hubs",
      value: "Ahmedabad & Udaipur",
      description: "Convenient weekly AC coach departures every Thursday & Friday."
    },
    {
      label: "Advance Booking",
      value: "₹3,500",
      description: "Lock your guaranteed seat with an easy advance deposit adjusted against final cost."
    },
    {
      label: "Traveler Community",
      value: "Loved Across India",
      description: "Solo travelers, college groups, corporate peers and young explorers across the nation."
    }
  ],
  pillars: [
    {
      title: "15 Strangers Concept",
      description: "Specially curated social group trips designed for solo travelers and seekers to connect through ice-breakers, music, and shared wonder.",
      icon: "Users"
    },
    {
      title: "Handpicked Premium Stays",
      description: "From luxury hill resorts like Palm Valley Resort Udaipur with dual swimming pools to desert glamping in royal Sam Sand Dunes.",
      icon: "Hotel"
    },
    {
      title: "Unmatched Experiences",
      description: "Jeep desert safaris, sunset camel caravans, lively pool parties, lakeside evenings, and rooftop dinners in the City of Lakes.",
      icon: "Compass"
    },
    {
      title: "Dedicated Trip Captains",
      description: "Professional, friendly tour leaders accompanying your entire journey to manage all logistics, safety, and entertainment.",
      icon: "ShieldCheck"
    }
  ]
};
