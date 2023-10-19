import { PropsWithChildren, useRef } from "react";
import {
  AriaTooltipProps,
  mergeProps,
  useTooltip,
  useTooltipTrigger,
} from "react-aria";
import { useTooltipTriggerState } from "react-stately";

export interface TooltipProps extends AriaTooltipProps, PropsWithChildren {
  tooltip: string;
}

export const Tooltip = (props: TooltipProps) => {
  const state = useTooltipTriggerState(props);
  const ref = useRef(null);

  const { triggerProps, tooltipProps: ariaTooltipProps } = useTooltipTrigger(
    props,
    state,
    ref
  );
  const { tooltipProps } = useTooltip(ariaTooltipProps, state);

  return (
    <div className="relative inline-flex">
      <button ref={ref} {...triggerProps} className="outline-none">
        {props.children}
      </button>
      {state.isOpen && (
        <span
          className="absolute left-1/2 -translate-x-1/2 -translate-y-full -top-1"
          {...mergeProps(ariaTooltipProps, tooltipProps)}
        >
          <span
            className="block max-w-xs bg-gray-950 text-gray-100 rounded-md px-2 py-1
              animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-linear animate-normal"
          >
            {props.tooltip}
          </span>
        </span>
      )}
    </div>
  );
};
