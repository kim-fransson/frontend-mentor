import { ShopNowButton } from "../ShopNowButton/ShopNowButton";

export interface SlideTextProps {
  title: string;
  description: string;
}

export const SlideText = ({ title, description }: SlideTextProps) => {
  return (
    <div
      className="h-full flex flex-col justify-center px-6 py-10 gap-4 bg-white
          lg:px-14 lg:py-0 lg:gap-4"
    >
      <h2
        className="text-gray-800 tracking-tighter text-4xl font-bold
          md:mr-auto
          lg:text-4xl
          xl"
      >
        {title}
      </h2>
      <p
        className="text-gray-500 text-sm
          md:text-base
          lg:text-xs
          xl"
      >
        {description}
      </p>
      <div className="mr-auto">
        <ShopNowButton onShopNow={() => {}} />
      </div>
    </div>
  );
};
