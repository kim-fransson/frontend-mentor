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
        "bg-white rounded-md p-4 flex flex-col shadow-sm gap-4",
        "animate-fade-right animate-once animate-duration-700 animate-ease-out"
      )}
    >
      <div className="flex gap-2 items-center">
        <span className={twMerge("text-lg font-medium text-gray-950")}>
          {originalUrl}
        </span>
        <button
          className="flex ml-auto items-center justify-center"
          onClick={() => onRemove(originalUrl)}
        >
          <Trash className="w-5 h-5 text-red-400" />
        </button>
      </div>

      <hr className={twMerge("-mx-4 border-gray-300")} />

      <span className={twMerge("text-lg font-medium text-teal-400")}>
        {shortenUrl}
      </span>

      <Button
        size="small"
        isDisabled={hasCopiedText}
        onPress={handleCopyToClipboard}
      >
        {hasCopiedText ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
};
