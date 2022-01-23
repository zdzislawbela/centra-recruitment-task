export interface Airport {
  name: string;
  code: string;
  country: string;
  id: number;
  images: Image;
  averageRating: number;
}

export interface Image {
  thumb: string;
  small: string;
  full: string;
}
