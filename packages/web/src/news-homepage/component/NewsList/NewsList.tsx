import { Article } from "../../env";
import { News } from "./News/News";

interface NewsListProps {
  newsList: Article[];
  title: string;
}

export const NewsList = ({ newsList, title }: NewsListProps) => {
  return (
    <div className="bg-slate-950 p-6">
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
