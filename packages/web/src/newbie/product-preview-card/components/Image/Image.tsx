import { Image as IImage } from "../../env";

export interface LazyImageProps {
  image: IImage;
}

const Image = ({ image }: LazyImageProps) => {
  return (
    <picture className="col-start-1 row-start-1">
      <source media="(min-width:1024px)" srcSet={image.desktop} />
      <img
        className="w-full h-full object-cover"
        src={image.mobile}
        alt={image.alt}
      />
    </picture>
  );
};

export const ImageSkeleton = () => {
  return (
    <div className="col-start-1 row-start-1 bg-gray-200 relative">
      <div className="animate-fade animate-infinite animate-alternate bg-gray-300 absolute inset-0"></div>
    </div>
  );
};

export default Image;
