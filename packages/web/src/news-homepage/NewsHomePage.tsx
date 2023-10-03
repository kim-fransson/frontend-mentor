import { Navigation } from "./component/Navigation/Navigation";
import { NewsContent } from "./component/NewsContent/NewsContent";

export const NewsHomepage = () => {
  return (
    <div className="pb-10 font-inter max-w-7xl">
      <Navigation className="mb-4 lg:mb-8" />
      <NewsContent />
    </div>
  );
};
