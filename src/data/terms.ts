export interface TermsCondition {
  id: number;
  title: string;
  description: string;
}

export const termsAndConditionsData: TermsCondition[] = [
  {
    id: 1,
    title: "Full Payment Clearance",
    description: "All participants must clear the full trip cost and any pending dues before departure. Failure to do so will result in cancellation without any refund."
  },
  {
    id: 2,
    title: "Booking Confirmation",
    description: "A booking will be considered confirmed only after submission of the consent/application form along with the required registration amount (₹3,500 advance)."
  },
  {
    id: 3,
    title: "Valid Identification",
    description: "A valid government-issued photo ID (Aadhaar Card, Driving Licence, or Voter ID) is mandatory for Indian participants. International participants must carry a valid passport."
  },
  {
    id: 4,
    title: "Minors & NOC",
    description: "Participants below 18 years of age must submit a signed No Objection Certificate (NOC) from a parent or legal guardian."
  },
  {
    id: 5,
    title: "Itinerary Modifications",
    description: "The itinerary includes high-altitude and weather-sensitive destinations and may be modified, delayed, or rearranged in the interest of safety."
  },
  {
    id: 6,
    title: "Accommodation Allocation",
    description: "Accommodation will be provided based on room size, availability, and sharing basis (Double or Triple sharing as per booked package)."
  },
  {
    id: 7,
    title: "Transportation & AC Policy",
    description: "AC packages include AC travel. Local transfers will adhere to vehicle accessibility norms where heavy coaches are prohibited."
  },
  {
    id: 8,
    title: "Hotel Check-in & Policies",
    description: "Early check-in, late check-out, room heaters, and other hotel amenities are subject to hotel policies and availability."
  },
  {
    id: 9,
    title: "Ticket Transferability",
    description: "Bus tickets are non-transferable. Participants must carry valid ID matching the ticket details at all times during travel."
  },
  {
    id: 10,
    title: "Travel Insurance",
    description: "Travel insurance is not included in the package. Participants are strongly advised to arrange personal travel insurance."
  },
  {
    id: 11,
    title: "Medical Disclosure",
    description: "Participants must disclose any pre-existing medical conditions, allergies, or special requirements prior to departure."
  },
  {
    id: 12,
    title: "Participation Discretion",
    description: "The company reserves the right to refuse or discontinue participation of any individual due to medical, safety, or behavioral concerns."
  },
  {
    id: 13,
    title: "Trip Leader Guidance",
    description: "Participants are expected to follow the instructions of the trip leader, organizers, and local staff at all times."
  },
  {
    id: 14,
    title: "Zero Tolerance for Misconduct",
    description: "Any form of misbehavior, misconduct, indiscipline, or use of illegal substances will lead to immediate removal from the trip without refund."
  },
  {
    id: 15,
    title: "Unused Services Policy",
    description: "No refund will be provided for any unused services, missed activities, meals, or sightseeing due to personal reasons or late arrival."
  },
  {
    id: 16,
    title: "Personal / Medical Expenses",
    description: "Any additional expenses arising due to personal reasons, medical emergencies, or itinerary deviation will be borne by the participant."
  },
  {
    id: 17,
    title: "Unforeseen Delays & Circumstances",
    description: "The company shall not be responsible for delays, route changes, or cancellations caused by traffic, weather, strikes, or unforeseen circumstances."
  },
  {
    id: 18,
    title: "Voluntary Risk & Assumption",
    description: "Any accident, injury, illness, or mishap during the trip is beyond the company's responsibility, and participants travel at their own risk."
  },
  {
    id: 19,
    title: "Luggage & Valuables Responsibility",
    description: "The safety and security of luggage and personal belongings are solely the responsibility of the participant."
  }
];

export const declarationText = [
  "By booking and participating in a trip organized by R Journey, I confirm that I have read, understood, and agreed to all Terms & Conditions and this Declaration.",
  "I acknowledge that travel with R Journey may involve risks beyond those of a conventional holiday. I understand that adventure travel includes inherent risks, including but not limited to accidents, injuries, illness, loss of property, delays, or unforeseen events, which may occur due to terrain, weather, altitude, transportation, or other factors.",
  "I understand that I may be travelling to remote or developing areas where standards of accommodation, transportation, hygiene, cleanliness, medical facilities, communication networks, and infrastructure may differ from those in my home country or city. I willingly accept these conditions and associated risks.",
  "I confirm that I am physically fit to participate in this trip and do not suffer from any medical condition that could put myself or others at risk. I take full responsibility for my health and safety during the trip and agree that R Journey shall not be held liable for any medical emergency, injury, disability, or death.",
  "I understand that optional or additional activities not included in the itinerary may be available during the trip. I acknowledge that R Journey does not operate, supervise, or guarantee the safety of such activities or third-party operators. If I choose to participate, I do so entirely at my own risk.",
  "I acknowledge that R Journey is not liable for the acts, omissions, performance, or services of independent third-party service providers, including hotels, transport providers, guides, taxi operators, or local vendors.",
  "I agree to follow all instructions given by the trip leader, tour captain, or representatives of R Journey. Any misbehavior, violation of laws, drug or alcohol misuse, harassment, or actions endangering others may result in immediate removal without refund."
];

export interface CancellationRule {
  timeline: string;
  refundPercentage: string;
  note: string;
}

export const cancellationPolicyData: CancellationRule[] = [
  {
    timeline: "More than 30 Days before departure",
    refundPercentage: "100% Refund",
    note: "Excluding standard processing / banking charges."
  },
  {
    timeline: "15 to 30 Days before departure",
    refundPercentage: "50% Refund",
    note: "50% of the total tour cost refunded."
  },
  {
    timeline: "7 to 14 Days before departure",
    refundPercentage: "25% Refund",
    note: "25% of the total tour cost refunded."
  },
  {
    timeline: "Less than 7 Days before departure",
    refundPercentage: "No Refund (0%)",
    note: "100% cancellation charges apply."
  },
  {
    timeline: "No-Show on Departure Day",
    refundPercentage: "No Refund (0%)",
    note: "Seat considered forfeited without compensation."
  }
];

export interface BrochureDocument {
  id: string;
  title: string;
  origin: string;
  destinations: string;
  duration: string;
  fileName: string;
  fileUrl: string;
  sizeMb: string;
  priceStarting: string;
}

export const brochuresListData: BrochureDocument[] = [
  {
    id: "brochure-1",
    title: "Ahmedabad to Jodhpur & Jaisalmer (15 Strangers)",
    origin: "Ahmedabad",
    destinations: "Jodhpur & Jaisalmer Dunes",
    duration: "3 Days | 2 Nights",
    fileName: "1 BROUCHRE.pdf",
    fileUrl: "/brochure/1%20BROUCHRE.pdf",
    sizeMb: "15 MB",
    priceStarting: "₹7,999/-"
  },
  {
    id: "brochure-2",
    title: "Udaipur to Jodhpur & Jaisalmer (15 Strangers)",
    origin: "Udaipur",
    destinations: "Jodhpur & Jaisalmer Dunes",
    duration: "3 Days | 2 Nights",
    fileName: "Udaipur to jaisailmer trip brochure.pdf",
    fileUrl: "/brochure/Udaipur%20to%20jaisailmer%20trip%20brochure.pdf",
    sizeMb: "16 MB",
    priceStarting: "₹6,999/-"
  },
  {
    id: "brochure-3",
    title: "Ahmedabad to Jawai & Kumbhalgarh (Leopard Safari)",
    origin: "Ahmedabad",
    destinations: "Jawai Leopard Hills & Kumbhalgarh",
    duration: "2 Days | 1 Night",
    fileName: "Ahemdabad to Jawai 2 days 1 night.pdf",
    fileUrl: "/brochure/Ahemdabad%20to%20Jawai%202%20days%201%20night.pdf",
    sizeMb: "28 MB",
    priceStarting: "₹4,999/-"
  },
  {
    id: "brochure-4",
    title: "Ahmedabad to Nathdwara & Udaipur (Spiritual Circuit)",
    origin: "Ahmedabad",
    destinations: "Nathdwara, Shrinathji & Udaipur",
    duration: "3 Days | 2 Nights",
    fileName: "Ahemdabad to Nathdwara.pdf",
    fileUrl: "/brochure/Ahemdabad%20to%20Nathdwara.pdf",
    sizeMb: "20 MB",
    priceStarting: "₹6,999/-"
  },
  {
    id: "brochure-5",
    title: "Ahmedabad to Udaipur Weekend (Palm Valley Resort)",
    origin: "Ahmedabad",
    destinations: "Udaipur Old City & Bahubali Hills",
    duration: "2 Days | 1 Night",
    fileName: "Ahemdabad to Udaipur 2d1n (2).pdf",
    fileUrl: "/brochure/Ahemdabad%20to%20Udaipur%202d1n%20(2).pdf",
    sizeMb: "26 MB",
    priceStarting: "₹4,499/-"
  },
  {
    id: "brochure-6",
    title: "Delhi to Udaipur & Kumbhalgarh (Royal Expedition)",
    origin: "Delhi",
    destinations: "Udaipur, Aravalis & Kumbhalgarh",
    duration: "3 Days | 2 Nights",
    fileName: "Delhi to Udaipur.pdf",
    fileUrl: "/brochure/Delhi%20to%20Udaipur.pdf",
    sizeMb: "24 MB",
    priceStarting: "₹7,999/-"
  },
  {
    id: "brochure-7",
    title: "Ahmedabad to Udaipur Resort Edition",
    origin: "Ahmedabad",
    destinations: "Udaipur & Palm Valley Resort",
    duration: "3 Days | 2 Nights",
    fileName: "Brochure Ex Ahmedabad to Udaipur.pdf",
    fileUrl: "/brochure/Brochure%20Ex%20Ahmedabad%20to%20Udaipur.pdf",
    sizeMb: "29 MB",
    priceStarting: "₹5,499/-"
  }
];
