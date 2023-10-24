import Arrow from "../../assets/icon-arrow.svg?react";

export interface ShopNowButtonProps {
  onShopNow: () => void;
  color: "green" | "yellow" | "black";
}

export const ShopNowButton = ({
  onShopNow,
  color = "black",
}: ShopNowButtonProps) => {
  let textColor;
  switch (color) {
    case "green":
      textColor = "hover:text-[#a4c08c] focus:text-[#a4c08c]";
      break;
    case "yellow":
      textColor = "hover:text-[#cd9a3e] focus:text-[#cd9a3e]";
      break;
    case "black":
      textColor = "hover:text-[#818181] focus:text-[#818181]";
      break;
  }
  return (
    <button
      onClick={onShopNow}
      className={`outline-none text-gray-800 flex gap-4 items-center group ${textColor}`}
    >
      <span
        className="tracking-[0.7em] uppercase font-bold text-sm
        transition-colors duration-200 ease-out
        md:text-base
        lg:text-xs"
      >
        shop now
      </span>
      <Arrow className="group-hover:scale-x-150 group-focus:scale-x-150 origin-left transition-all duration-200 ease-in-out" />
    </button>
  );
};
