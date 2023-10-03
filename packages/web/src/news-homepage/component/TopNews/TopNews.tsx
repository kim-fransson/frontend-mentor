import { twMerge } from "tailwind-merge";
import { ResponsiveImage } from "../../env";
import { Button } from "../Button/Button";

const topNews = {
  title: "The Bright Future of Web 3.0?",
  description:
    "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
  image: {
    mobile: "/images/image-web-3-mobile.jpg",
    desktop: "/images/image-web-3-desktop.jpg",
  },
};

interface TopNewsProps {
  className?: string;
}

export const TopNews = ({ className }: TopNewsProps) => {
  const { image, title, description } = topNews;
  const newsImage = image as ResponsiveImage;
  return (
    <div
      className={twMerge(
        "grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-row-dense gap-8",
        className
      )}
    >
      <picture className="lg:col-span-2">
        <source media="(min-width:1024px)" srcSet={newsImage.desktop} />
        <img className="w-full h-auto" src={newsImage.mobile} alt={title} />
      </picture>
      <h2
        className={twMerge(
          "text-gray-950 font-extrabold text-4xl tracking-wide",
          "lg:row-span-2 lg:text-6xl "
        )}
      >
        {title}
      </h2>
      <p className="text-sm text-gray-400">{description}</p>
      <Button className="justify-self-start lg:self-end">read more</Button>
    </div>
  );
};
