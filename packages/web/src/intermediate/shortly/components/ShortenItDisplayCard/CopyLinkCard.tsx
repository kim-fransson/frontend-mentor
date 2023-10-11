import { twMerge } from "tailwind-merge";
import { Button } from "../Button/Button";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { useState } from "react";

export interface CopyLinkCardProps {
  originalUrl: string;
  shortenUrl: string;
}

export const CopyLinkCard = ({
  originalUrl,
  shortenUrl,
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
      <span className={twMerge("text-lg font-medium text-gray-950")}>
        {originalUrl}
      </span>

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
