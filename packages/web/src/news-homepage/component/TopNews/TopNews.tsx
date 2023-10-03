import { twMerge } from "tailwind-merge";
import { Article, ResponsiveImage } from "../../env";
import { Button } from "../Button/Button";

interface TopNewsProps {
  topNews: Article;
  onReadMore: () => void;
}

export const TopNews = ({ topNews, onReadMore }: TopNewsProps) => {
  const { image, title, description } = topNews;
  const newsImage = image as ResponsiveImage;
  return (
    <div className="font-inter grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-row-dense gap-5">
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
      <Button className="justify-self-start lg:self-end" onPress={onReadMore}>
        read more
      </Button>
    </div>
  );
};
