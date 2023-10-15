import { twMerge } from "tailwind-merge";
import { Button } from "../Button/Button";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { useState } from "react";
import Trash from "../../assets/icon-trash.svg?react";
export interface CopyLinkCardProps {
  originalUrl: string;
  shortenUrl: string;
  onRemove: (originalUrl: string) => void;
}

export const CopyLinkCard = ({
  originalUrl,
  shortenUrl,
  onRemove,
}: CopyLinkCardProps) => {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const [hasCopiedText, setHasCopiedText] = useState(copiedText !== null);

  const handleCopyToClipboard = () => {
    copyToClipboard(shortenUrl);
    setHasCopiedText(true);
    setTimeout(() => {
      setHasCopiedText(false);
    }, 5000);
  };

  return (
    <div
      className={twMerge(
        "bg-white rounded-md p-4 grid grid-cols-[minmax(0,_1fr)_auto] lg:grid-cols-[minmax(0, _1fr_repeat(3, auto))] lg:grid-flow-col lg:items-center shadow-sm gap-4",
        "animate-fade-right animate-once animate-duration-700 animate-ease-out"
      )}
    >
      <span className="text-lg font-medium text-gray-950 col-span-1 truncate">
        {originalUrl}
      </span>

      <button
        className="flex items-center justify-center col-span-1 lg:col-start-4 justify-self-end"
        onClick={() => onRemove(originalUrl)}
      >
        <Trash className="w-5 h-5 text-red-400" />
      </button>

      <hr className="-mx-4 border-gray-300 col-span-2 lg:hidden" />

      <span
        className={twMerge("text-lg font-medium text-teal-400 lg:col-start-2")}
      >
        {shortenUrl}
      </span>

      <Button
        size="small"
        className="col-span-2 lg:col-span-1 lg:col-start-3"
        isDisabled={hasCopiedText}
        onPress={handleCopyToClipboard}
      >
        {hasCopiedText ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
};
