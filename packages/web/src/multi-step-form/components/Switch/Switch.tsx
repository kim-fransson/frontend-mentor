import { useRef } from "react";
import {
  AriaSwitchProps,
  VisuallyHidden,
  useFocusRing,
  useSwitch,
} from "react-aria";
import { useToggleState } from "react-stately";
import { twMerge } from "tailwind-merge";

interface SwitchProps extends AriaSwitchProps {}

export const Switch = (props: SwitchProps) => {
  const state = useToggleState(props);
  const ref = useRef(null);
  const { inputProps } = useSwitch(props, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <label>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <div
        className={twMerge(
          "border-2 border-transparent cursor-pointer w-9 h-5 p-1 rounded-xl relative bg-blue-950",
          isFocusVisible && "border-2 border-violet-500"
        )}
      >
        <div
          className={twMerge(
            "left-[0.1rem] transition-all duration-200 ease-in-out w-3 h-3 absolute -translate-y-1/2 top-1/2 bg-white rounded-full",
            state.isSelected && "translate-x-[1.1rem]"
          )}
        />
      </div>
      {props.children}
    </label>
  );
};
