import { twMerge } from "tailwind-merge";
import { Article } from "../../../env";

interface NewsProps {
  news: Article;
}

export const News = (props: NewsProps) => {
  const { title, description } = props.news;
  return (
    <li className="list-none flex flex-col gap-1">
      <a
        className={twMerge(
          "cursor-pointer select-none font-extrabold tracking-tight text-lg text-white",
          "hover:text-orange-300",
          "transition-all duration-200 ease-in-out"
        )}
      >
        {title}
      </a>
      <p className="text-sm text-gray-400">{description}</p>
    </li>
  );
};
