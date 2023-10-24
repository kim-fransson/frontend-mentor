import Arrow from "../../assets/icon-arrow.svg?react";

export interface ShopNowButtonProps {
  onShopNow: () => void;
  color: "green" | "yellow" | "black";
}

export const ShopNowButton = ({
  onShopNow,
  color = "black",
}: ShopNowButtonProps) => {
  let hoverTextColor;
  switch (color) {
    case "green":
      hoverTextColor = "hover:text-[#a4c08c]";
      break;
    case "yellow":
      hoverTextColor = "hover:text-[#cd9a3e]";
      break;
    case "black":
      hoverTextColor = "hover:text-[#818181]";
      break;
  }
  return (
    <button
      onClick={onShopNow}
      className={`text-gray-800 flex gap-4 items-center group ${hoverTextColor}`}
    >
      <span
        className="tracking-[0.7em] uppercase font-bold text-sm
        transition-colors duration-200 ease-out
        md:text-base
        lg:text-xs"
      >
        shop now
      </span>
      <Arrow className="group-hover:scale-x-150 origin-left transition-all duration-200 ease-in-out" />
    </button>
  );
};
