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
    id: "g-rayta-arms",
    title: "Arms Wide Open at Rayta Hills",
    category: "Community",
    image: "/pictures/IMG_E4609.JPG.jpeg",
    location: "Rayta Hills, Udaipur",
    caption: "Feeling on top of the world with the 15 Strangers travel tribe amidst scenic Aravali valleys."
  },
  {
    id: "g-haldighati-cheers",
    title: "Cheering at Historic Haldighati Pass",
    category: "Experiences",
    image: "/pictures/IMG_5960.JPG.jpeg",
    location: "Haldighati Pass, Rajasthan",
    caption: "High energy vibes and triumphant cheers against the legendary yellow ochre canyon rocks."
  },
  {
    id: "g-rayta-smiles",
    title: "Summit Smiles & Scenic Peaks",
    category: "Community",
    image: "/pictures/IMG_E4612.JPG.jpeg",
    location: "Rayta Hills, Udaipur",
    caption: "Basking in the morning mountain breeze and panoramic vistas with newly made lifelong friends."
  },
  {
    id: "g-haldighati-squad",
    title: "Haldighati Pass Canyon Tribe",
    category: "Destinations",
    image: "/pictures/IMG_5959.JPG.jpeg",
    location: "Haldighati, Rajasthan",
    caption: "Walking through centuries of Mewar heritage surrounded by dramatic ochre rock passes."
  },
  {
    id: "g-bus-energy",
    title: "Traveller Bus Anthems & Smiles",
    category: "Community",
    image: "/pictures/IMG_4569.JPG.jpeg",
    location: "Rajasthan Highways",
    caption: "Unfiltered road trip joy, antakshari, and non-stop laughter inside our luxury AC Traveller."
  },
  {
    id: "g-roadtrip-peace",
    title: "Highway Peace & Wanderlust",
    category: "Experiences",
    image: "/pictures/IMG_4571.JPG.jpeg",
    location: "En Route Udaipur",
    caption: "Every milestone brings 15 strangers closer as the scenic highway unfolds."
  },
  {
    id: "g-luxury-commute",
    title: "Luxury Traveller Recliner Comfort",
    category: "Experiences",
    image: "/pictures/IMG_6012.JPG.jpeg",
    location: "Luxury AC Traveller",
    caption: "Spacious pushback seats ensuring every traveller stays relaxed and adventure-ready."
  },
  {
    id: "g-rayta-panorama",
    title: "Panoramic Rayta Hilltop Gathering",
    category: "Destinations",
    image: "/pictures/IMG_4607.JPG.jpeg",
    location: "Rayta Hills, Udaipur",
    caption: "Rolling green valleys and winding hill roads creating the ultimate backdrop for memories."
  },
  {
    id: "g-roadtrip-comfort",
    title: "Cruising Rajasthan in Comfort",
    category: "Experiences",
    image: "/pictures/IMG_6013.JPG.jpeg",
    location: "Luxury AC Traveller",
    caption: "Chilled AC, smooth suspension, and scenic highway views connecting royal destinations."
  },
  {
    id: "g-rayta-selfie",
    title: "Aravali Ridge Selfies",
    category: "Community",
    image: "/pictures/IMG_4612.JPG.jpeg",
    location: "Rayta Hills, Udaipur",
    caption: "Candid smiles framed by panoramic hill country skies."
  },
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
    image: "/images/dj-pool-party.jpg",
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
