import Arrow from "../../assets/icon-arrow.svg?react";

export interface ShopNowButtonProps {
  onShopNow: () => void;
}

export const ShopNowButton = ({ onShopNow }: ShopNowButtonProps) => {
  return (
    <button
      onClick={onShopNow}
      className="text-gray-800 flex gap-4 items-center group hover:text-green-600"
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
