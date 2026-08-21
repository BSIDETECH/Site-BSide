export interface Product {
  name: string;
  price: string;
  description: string;
  imageUrl?: string;
}

export interface Review {
  author: string;
  text: string;
}

export interface OperatingHour {
  day: string;
  time: string;
}

export interface RestaurantData {
  name: string;
  subtitle: string;
  heroTitle: string;
  heroDescription: string;
  colors: {
    background: string;
    text: string;
    accent: string;
    accentText: string;
    priceText: string;
  };
  links: {
    whatsapp: string;
    maps: string;
    instagram?: string;
  };
  products: Product[];
  reviews: Review[];
  address: {
    street: string;
    city: string;
  };
  hours: OperatingHour[];
  contact: {
    phone: string;
    email?: string;
  };
}
