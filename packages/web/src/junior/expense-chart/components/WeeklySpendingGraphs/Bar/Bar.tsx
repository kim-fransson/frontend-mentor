import { Tooltip } from "../../Tooltip/Tooltip";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { delay } from "../../../../../utils/delay";

const bar = cva(["transition-all ease-in-out duration-500 w-full rounded-md"], {
  variants: {
    color: {
      orange: ["bg-orange-400 hover:bg-orange-300"],
      blue: ["bg-blue-400 hover:bg-blue-300"],
    },
  },
  defaultVariants: {
    color: "orange",
  },
});

export interface BarProps extends VariantProps<typeof bar> {
  value: number;
  scale?: number;
  label: string;
}

export const Bar = ({ value, label, scale = 1, color }: BarProps) => {
  return (
    <div className="inline-flex flex-col gap-1">
      <Tooltip delay={200} closeDelay={200} tooltip={`$${value}`}>
        <div
          className={bar({ color })}
          style={{ height: `${value * scale}px` }}
        />
      </Tooltip>
      <span className="text-sm text-gray-400 text-center">{label}</span>
    </div>
  );
};
