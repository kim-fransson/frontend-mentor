export type ResponsiveImage = {
  mobile: string;
  desktop: string;
};

export type Article = {
  title: string;
  description: string;
  trendingScore?: number;
  image?: string | ResponsiveImage;
};
