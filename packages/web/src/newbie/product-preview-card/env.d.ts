export interface Product {
  category: string;
  title: string;
  description: string;
  currentPrice: number;
  oldPrice: number;
  image: Image;
}

export interface Image {
  mobile: string;
  desktop: string;
  alt: string;
}
