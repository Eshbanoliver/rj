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
