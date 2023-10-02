import { twMerge } from "tailwind-merge";
import { Article } from "../../../env";

interface TrendingNewsProps {
  trendingNews: Article;
  position: number;
}

export const TrendingNews = ({
  trendingNews: { title, description, image },
  position,
}: TrendingNewsProps) => {
  return (
    <li className="list-none flex gap-6">
      <img className="rounded-sm" src={image} />
      <div className="flex flex-col justify-between">
        <span className="text-3xl leading-none font-extrabold text-gray-300">
          {position < 10 ? "0" + position : position}
        </span>
        <a
          className={twMerge(
            "text-gray-950 font-bold text-lg cursor-pointer",
            "hover:text-orange-500",
            "transition-all duration-200 ease-in-out"
          )}
        >
          {title}
        </a>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </li>
  );
};
