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
      <div className="grid grid-cols-1 gap-y-1 w-full">
        <HeadlessDisclosure.Button
          className={twMerge(
            "flex text-gray-500 justify-between items-center w-full border-2 border-transparent p-1 rounded-md",
            "ui-open:font-bold ui-open:text-gray-800",
            "hover:text-orange-400 duration-300 transition-colors",
            "outline-none focus-visible:border-[#f47b56]"
          )}
        >
          <span className="text-left text-sm">{question}</span>
          <Chevron className="ui-open:rotate-180 transition-all duration-200" />
        </HeadlessDisclosure.Button>

        <Transition
          enter="transition duration-200 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <HeadlessDisclosure.Panel className="text-sm p-1 text-gray-500 pr-4">
            {answer}
          </HeadlessDisclosure.Panel>
        </Transition>
      </div>
    </HeadlessDisclosure>
  );
};
