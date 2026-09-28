export interface GalleryItem {
  id: string;
  title: string;
  category: "Destinations" | "Stays & Resorts" | "Experiences" | "Community";
  image: string;
  location: string;
  caption: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "15 Strangers at Gangaur Ghat",
    category: "Community",
    image: "/images/udaipur-group-strangers.jpg",
    location: "Udaipur, Rajasthan",
    caption: "Turning strangers into lifelong travel buddies along the serene shores of Lake Pichola."
  },
  {
    id: "g2",
    title: "Mehrangarh Fort & Azure Blue City",
    category: "Destinations",
    image: "/images/jodhpur-mehrangarh-sunset.jpg",
    location: "Jodhpur, Rajasthan",
    caption: "Golden hour washing over the majestic ramparts of Mehrangarh and Jodhpur's blue alleys."
  },
  {
    id: "g3",
    title: "Sunset Hilltop Moments",
    category: "Community",
    image: "/images/strangers-sunset-community.jpg",
    location: "Udaipur Aravali Hills",
    caption: "A soulful evening where strangers gathered to watch sunset over the lake and hills."
  },
  {
    id: "g4",
    title: "Palm Valley Resort Twilight Pools",
    category: "Stays & Resorts",
    image: "/images/palm-valley-night-pool.jpg",
    location: "Udaipur, Rajasthan",
    caption: "Luxury hill resort with illuminated twin swimming pools and evening pool party arena."
  },
  {
    id: "g5",
    title: "Sam Sand Dunes Camel Caravans",
    category: "Experiences",
    image: "/images/jaisalmer-journey-arch.jpg",
    location: "Sam Sand Dunes, Jaisalmer",
    caption: "Camel safari into the ripples of the Thar Desert under a golden evening sky."
  },
  {
    id: "g6",
    title: "Palm Valley Resort Panoramic Grounds",
    category: "Stays & Resorts",
    image: "/images/palm-valley-aerial.jpg",
    location: "Aravali Hills, Udaipur",
    caption: "Surrounded by lush hillscapes, spacious gardens, sports zones, and fresh mountain breezes."
  },
  {
    id: "g7",
    title: "City Palace on Lake Pichola",
    category: "Destinations",
    image: "/images/udaipur-city-palace-lake.jpg",
    location: "Udaipur, Rajasthan",
    caption: "Iconic royal palace gleaming across the tranquil waters as evening boats glide past."
  },
  {
    id: "g8",
    title: "Deluxe Resort Room & Living Spaces",
    category: "Stays & Resorts",
    image: "/images/palm-valley-suite.jpg",
    location: "Palm Valley Resort, Udaipur",
    caption: "Clean, air-conditioned comfortable accommodations designed for relaxing between adventures."
  },
  {
    id: "g9",
    title: "Candlelight Buffet Dining by the Pool",
    category: "Experiences",
    image: "/images/palm-valley-dinner.jpg",
    location: "Udaipur, Rajasthan",
    caption: "Freshly prepared vegetarian feasts enjoyed outdoors under twinkling fairy lights."
  },
  {
    id: "g10",
    title: "Great Wall of India at Kumbhalgarh",
    category: "Destinations",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=1200&auto=format&fit=crop",
    location: "Kumbhalgarh, Rajasthan",
    caption: "Endless stone ramparts hugging the Aravali mountain ridges in historic Mewar."
  },
  {
    id: "g11",
    title: "Thar Desert Campfire & Folk Rhythms",
    category: "Experiences",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop",
    location: "Sam Sand Dunes, Jaisalmer",
    caption: "Kalbeliya folk dancers and hypnotic dholak beats around the crackling desert fire."
  },
  {
    id: "g12",
    title: "Emerald Waters of Fateh Sagar Lake",
    category: "Destinations",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1200&auto=format&fit=crop",
    location: "Udaipur, Rajasthan",
    caption: "Tranquil afternoon boat rides and promenade walks with mountain reflections."
  }
];
