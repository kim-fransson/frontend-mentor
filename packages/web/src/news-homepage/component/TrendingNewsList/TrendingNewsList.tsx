import { twMerge } from "tailwind-merge";
import { Article } from "../../env";
import { TrendingNews } from "./TrendingNews/TrendingNews";

const trendingNewsList = [
  {
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
    trendingScore: 354,
    image: "/images/news-homepage/image-retro-pcs.jpg",
  },
  {
    title: "The growth of gaming",
    description: "How the pandemic has sparked fresh opportunities.",
    trendingScore: 125,
    image: "/images/news-homepage/image-gaming-growth.jpg",
  },
  {
    title: "Top 10 laptops of 2022",
    description: "Our best picks for various needs and budgets.",
    trendingScore: 211,
    image: "/images/news-homepage/image-top-laptops.jpg",
  },
];

interface TrendingNewsProps {
  className?: string;
}

const compare = (a: Article, b: Article) => {
  const aTrendingScore = a.trendingScore || 0;
  const bTrendingScore = b.trendingScore || 0;
  if (aTrendingScore > bTrendingScore) {
    return -1;
  } else if (aTrendingScore < bTrendingScore) {
    return 1;
  } else {
    return 0;
  }
};

export const TrendingNewsList = ({ className }: TrendingNewsProps) => {
  return (
    <ol className={twMerge("grid grid-cols-1 gap-8 lg:grid-cols-3", className)}>
      {trendingNewsList.sort(compare).map((trending, index) => (
        <TrendingNews
          key={trending.title}
          position={++index}
          trendingNews={trending}
        />
      ))}
    </ol>
  );
};
