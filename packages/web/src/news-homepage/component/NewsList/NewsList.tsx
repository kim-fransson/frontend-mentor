import { twMerge } from "tailwind-merge";
import { News } from "./News/News";

interface NewsListProps {
  title: string;
  className?: string;
}

const newsList = [
  {
    title: "Hydrogen VS Electric Cars",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

export const NewsList = ({ title, className }: NewsListProps) => {
  return (
    <div className={twMerge("bg-slate-950 p-6", className)}>
      <h2 className="text-orange-300 text-3xl font-extrabold mb-6">{title}</h2>
      <ul>
        {newsList.map((news, index) => (
          <>
            <News key={news.title} news={news} />
            {index !== newsList.length - 1 && (
              <hr className="border-gray-500 my-6" />
            )}
          </>
        ))}
      </ul>
    </div>
  );
};
