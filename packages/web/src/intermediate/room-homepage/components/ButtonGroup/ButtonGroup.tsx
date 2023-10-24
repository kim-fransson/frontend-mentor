import AngleLeft from "../../assets/icon-angle-left.svg?react";
import AngleRight from "../../assets/icon-angle-right.svg?react";

export interface ButtonGroupProps {
  onClickLeft: () => void;
  onClickRight: () => void;
}

export const ButtonGroup = ({
  onClickLeft,
  onClickRight,
}: ButtonGroupProps) => {
  const buttonClasses =
    "hover:bg-stone-700 bg-stone-900 flex-1 flex items-center justify-center py-3 px-4 transition-colors duration-200 ease-in-out";
  return (
    <div className="flex items-center text-white">
      <button
        className={buttonClasses}
        onClick={onClickLeft}
        aria-label="next slide to the left"
      >
        <AngleLeft className="scale-75 select-none" />
      </button>
      <button
        className={buttonClasses}
        onClick={onClickRight}
        aria-label="next slide to the right"
      >
        <AngleRight className="scale-75 select-none" />
      </button>
    </div>
  );
};
