export interface PreviewImage {
  url: string;
  caption: string;
}

export interface Rating {
  ratingValue: number;
  ratingType: "star" | "self" | string;
}

export interface Property {
  title: string;
  address: string[];
  previewImage: PreviewImage;
  rating: Rating;
}

export interface DisplayPrice {
  amount: number;
  currency: string;
}

export interface Offer {
  displayPrice: DisplayPrice;
}

export interface Hotel {
  property: Property;
  offer: Offer;
}
