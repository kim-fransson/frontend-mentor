import { NewsList } from "../NewsList/NewsList";
import { TopNews } from "../TopNews/TopNews";
import { TrendingNewsList } from "../TrendingNewsList/TrendingNewsList";

export const NewsContent = () => {
  return (
    <main className="grid grid-cols-1 gap-y-8 lg:gap-x-8 lg:grid-cols-3 lg:gap-y-16">
      <TopNews className="lg:col-span-2" />
      <NewsList title="New" />
      <TrendingNewsList className="lg:col-span-3" />
    </main>
  );
};
