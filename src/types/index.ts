export type PageType = 
  | 'home' 
  | 'about' 
  | 'destinations' 
  | 'gallery' 
  | 'trips' 
  | 'contact' 
  | 'terms';

export interface SearchQuery {
  destination: string;
  departureCity: string;
  travelDate: string;
  travelers: number;
  tourType: string;
}
