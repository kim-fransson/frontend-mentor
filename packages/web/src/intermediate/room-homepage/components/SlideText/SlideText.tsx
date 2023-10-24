import { ShopNowButton } from "../ShopNowButton/ShopNowButton";

export interface SlideTextProps {
  title: string;
  description: string;
  buttonColor: "green" | "yellow" | "black";
}

export const SlideText = ({
  title,
  description,
  buttonColor,
}: SlideTextProps) => {
  return (
    <div
      key={title}
      className="h-full flex flex-col justify-center px-6 py-10 gap-4 bg-white
      lg:px-14 lg:py-0 lg:gap-4"
    >
      <h2
        className="text-gray-800 tracking-tighter text-4xl font-bold
          animate-fade animate-once animate-duration-700 animate-ease-in-out animate-fill-forwards
          md:mr-auto
          lg:text-4xl"
      >
        {title}
      </h2>
      <p
        className="text-gray-500 text-sm
          animate-fade animate-once animate-duration-700 animate-ease-in-out animate-fill-forwards
          md:text-base
          lg:text-xs
          xl"
      >
        {description}
      </p>
      <div className="mr-auto">
        <ShopNowButton color={buttonColor} onShopNow={() => {}} />
      </div>
    </div>
  );
};
