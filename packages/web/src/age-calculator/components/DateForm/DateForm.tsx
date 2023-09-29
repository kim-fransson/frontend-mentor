import { z } from "zod";
import { Button } from "../Button/Button";
import { TextField } from "../TextField/TextField";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    day: z
      .string()
      .min(1, "Day is required")
      .refine(
        (day) => Number.parseInt(day) >= 1 && Number.parseInt(day) <= 31,
        "Must be a valid day"
      ),
    month: z
      .string()
      .min(1, "Month is required")
      .refine(
        (day) => Number.parseInt(day) >= 1 && Number.parseInt(day) <= 12,
        "Must be a valid month"
      ),
    year: z
      .string()
      .min(1, "Year is required")
      .refine((day) => Number.parseInt(day) <= new Date().getFullYear(), {
        message: "Must be in the past",
      }),
    date: z.date().optional(),
  })
  .superRefine(({ day, month, year }, ctx) => {
    const date = new Date(`${year}-${month}-${day}`);
    if (date.getTime() !== date.getTime()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Must be a valid date",
        path: ["date"],
      });
    }
  });
type FormData = z.infer<typeof schema>;

export interface DateFormProps {
  onSubmit: (value: Date) => void;
}

const inputs = [
  { name: "day", placeholder: "DD" },
  { name: "month", placeholder: "MM" },
  { name: "year", placeholder: "YYYY" },
] as { name: "day" | "month" | "year"; placeholder: string }[];

export const DateForm = (props: DateFormProps) => {
  const { onSubmit } = props;
  const {
    control,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onSubmit",
    resolver: zodResolver(schema),
    defaultValues: {
      day: "",
      month: "",
      year: "",
    },
  });

  return (
    <form
      className="max-w-xl"
      onSubmit={handleSubmit(({ year, month, day }) =>
        onSubmit(new Date(`${year}-${month}-${day}`))
      )}
    >
      <div className="flex flex-col gap-2 justify-center md:justify-start md:pr-24 mb-14 md:mb-8">
        <div className="flex gap-2 max-w-sm">
          {inputs.map(({ name, placeholder }) => (
            <Controller
              key={name}
              name={name}
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error, invalid },
              }) => (
                <TextField
                  errorMessage={error?.message}
                  isInvalid={invalid || errors.date?.message !== undefined}
                  placeholder={placeholder}
                  label={name}
                  onChange={(e) => {
                    clearErrors("date");
                    onChange(e);
                  }}
                  value={value}
                />
              )}
            />
          ))}
        </div>
        {!errors.day && !errors.month && !errors.year && (
          <span className="block text-red-400 italic text-xs">
            {errors.date?.message}
          </span>
        )}
      </div>
      <div className="flex relative max-w-md">
        <Button
          className="absolute top-1/2 left-1/2 md:left-full -translate-x-1/2 -translate-y-1/2"
          type="submit"
          aria-label="calculate age"
        />
        <hr className="w-full border border-gray-200" />
      </div>
    </form>
  );
};
