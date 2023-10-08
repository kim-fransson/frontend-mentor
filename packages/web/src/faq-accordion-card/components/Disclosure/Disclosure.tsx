import {
  Disclosure as HeadlessDisclosure,
  Transition,
} from "@headlessui/react";
import Chevron from "../../assets/icon-arrow-down.svg?react";
import { twMerge } from "tailwind-merge";

export interface DisclosureProps {
  question: string;
  answer: string;
}

export const Disclosure = ({ question, answer }: DisclosureProps) => {
  return (
    <HeadlessDisclosure>
      <div className="grid grid-cols-[_1fr_auto] gap-x-4 gap-y-1 w-full">
        <HeadlessDisclosure.Button
          className={twMerge(
            "flex justify-between items-center w-full",
            "ui-open:font-bold ui-open:text-gray-800",
            "hover:text-orange-400 duration-300 transition-colors"
          )}
        >
          <span>{question}</span>
        </HeadlessDisclosure.Button>

        <HeadlessDisclosure.Button className="self-center justify-self-end">
          <Chevron className="ui-open:rotate-180 transition-all duration-200" />
        </HeadlessDisclosure.Button>

        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <HeadlessDisclosure.Panel
            className={twMerge("text-sm text-gray-500")}
          >
            {answer}
          </HeadlessDisclosure.Panel>
        </Transition>
      </div>
    </HeadlessDisclosure>
  );
};
