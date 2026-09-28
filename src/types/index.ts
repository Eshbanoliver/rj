export type PageType = 
  | 'home' 
  | 'about' 
  | 'destinations' 
  | 'tours' 
  | 'services' 
  | 'gallery' 
  | 'contact' 
  | 'terms';

export interface SearchQuery {
  destination: string;
  departureCity: string;
  travelDate: string;
  travelers: number;
  tourType: string;
}
