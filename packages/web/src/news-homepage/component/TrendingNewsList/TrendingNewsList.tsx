import { Article } from "../../env";
import { TrendingNews } from "./TrendingNews/TrendingNews";

interface TrendingNewsListProps {
  trendingNewsList: Article[];
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

export const TrendingNewsList = ({
  trendingNewsList,
}: TrendingNewsListProps) => {
  return (
    <ol className="flex flex-col gap-8 lg:flex-row">
      {trendingNewsList.sort(compare).map((trending, index) => (
        <TrendingNews position={++index} trendingNews={trending} />
      ))}
    </ol>
  );
};
