export interface SlideShowProps {
  images: {
    mobile: string;
    desktop: string;
    alt: string;
  }[];
  activeSlide: number;
}

export const SlideShow = ({ images, activeSlide = 0 }: SlideShowProps) => {
  return (
    <div className="relative w-full">
      {images.map((image, index) => {
        return (
          <div
            className={
              index !== activeSlide
                ? "hidden"
                : "animate-fade animate-once animate-duration-300 animate-linear animate-fill-forwards"
            }
          >
            <picture className="w-full">
              <source media="(min-width:768px)" srcSet={image.desktop} />
              <img src={image.mobile} alt={image.alt} className="w-full" />
            </picture>
          </div>
        );
      })}
    </div>
  );
};
