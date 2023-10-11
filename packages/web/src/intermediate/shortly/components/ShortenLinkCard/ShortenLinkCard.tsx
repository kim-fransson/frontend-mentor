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

export interface ShortenLinkCardProps {
  onShortenLink: (link: string) => void;
}

export const ShortenLinkCard = ({ onShortenLink }: ShortenLinkCardProps) => {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      link: "",
    },
  });
  return (
    <div
      className={twMerge(
        "p-5 bg-jacarta-300 rounded-lg relative overflow-hidden",
        "animate-fade-right animate-once animate-duration-700 animate-ease-out"
      )}
    >
      <form
        onSubmit={handleSubmit(({ link }) => onShortenLink(link))}
        className="flex flex-col gap-8 relative z-10"
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
