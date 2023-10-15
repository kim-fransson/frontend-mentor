import { z } from "zod";
import { Button } from "../Button/Button";
import { TextField } from "../TextField/TextField";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { twMerge } from "tailwind-merge";

const schema = z.object({
  link: z.string().min(1, "Please add a link").url("Not a valid link"),
});
type FormData = z.infer<typeof schema>;

const shortenUrl = (originalUrl: string) => {
  const hashCode = originalUrl.split("").reduce((acc, char) => {
    return acc + char.charCodeAt(0);
  }, 0);

  const base62 =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let shortenUrl = "";
  let code = hashCode;

  while (code > 0) {
    shortenUrl = base62[code % 62] + shortenUrl;
    code = Math.floor(code / 62);
  }

  const domain = "https://short.url/";
  shortenUrl = domain + shortenUrl;

  return shortenUrl;
};

export interface ShortenLinkCardProps {
  onShortenLink: (originalLink: string, shortenLink: string) => void;
  className?: string;
}

export const ShortenLinkCard = ({
  onShortenLink,
  className,
}: ShortenLinkCardProps) => {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      link: "",
    },
  });
  return (
    <div
      className={twMerge(
        "p-5 lg:p-10 bg-jacarta-300 rounded-lg relative overflow-hidden",
        className
      )}
    >
      <form
        onSubmit={handleSubmit(({ link }) => {
          const shortenLink = shortenUrl(link);
          onShortenLink(link, shortenLink);
        })}
        className="flex flex-col lg:flex-row gap-8 relative z-10"
      >
        <Controller
          name="link"
          control={control}
          render={({
            field: { onChange, value },
            fieldState: { error, invalid },
          }) => (
            <TextField
              aria-label="shorten link"
              errorMessage={error?.message}
              isInvalid={invalid}
              placeholder="Shorten a link here..."
              onChange={onChange}
              value={value}
              className="lg:flex-1"
            />
          )}
        />
        <Button type="submit" size="small">
          Shorten It!
        </Button>
      </form>
      <picture className="absolute object-cover inset-0 z-0 overflow-hidden">
        <source
          media="(min-width:1024px)"
          srcSet="/images/shortly/bg-shorten-desktop.svg"
        />
        <img
          className="w-full"
          src="/images/shortly/bg-shorten-mobile.svg"
          alt="background"
        />
      </picture>
    </div>
  );
};
