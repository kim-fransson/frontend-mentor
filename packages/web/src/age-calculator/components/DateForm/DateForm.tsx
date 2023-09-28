import { z } from "zod";
import { Button } from "../Button/Button";
import { TextField } from "../TextField/TextField";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const required_error = "This field is required";
const valid_day = "Must be a valid day";
const valid_month = "Must be a valid month";

const schema = z
  .object({
    day: z
      .string()
      .min(1, { message: required_error })
      .refine(
        (day) => Number.parseInt(day) >= 1 && Number.parseInt(day) <= 31,
        {
          message: valid_day,
        }
      ),
    month: z
      .string()
      .min(1, { message: required_error })
      .refine(
        (day) => Number.parseInt(day) >= 1 && Number.parseInt(day) <= 12,
        {
          message: valid_month,
        }
      ),
    year: z
      .string()
      .min(1, { message: required_error })
      .refine((day) => Number.parseInt(day) <= new Date().getFullYear(), {
        message: "Must be in the past",
      }),
    date: z.date().optional(),
  })
  .superRefine(({ day, month, year }, ctx) => {
    const date = new Date(`${year}-${month}-${day}`);
    if (date.getTime() !== date.getTime()) {
      console.log("issue");
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Must be a valid date",
        path: ["date"],
      });
    }
    return;
  });
type FormData = z.infer<typeof schema>;

export interface DateFormProps {
  onSubmit: (value: FormData) => void;
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
    formState: { errors },
  } = useForm<FormData>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      day: "",
      month: "",
      year: "",
    },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
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
              errorMessage={
                name === "day"
                  ? error?.message || errors.date?.message
                  : error?.message
              }
              isInvalid={errors.date?.message !== undefined || invalid}
              placeholder={placeholder}
              label={name}
              onChange={onChange}
              value={value}
            />
          )}
        />
      ))}
      <Button type="submit" aria-label="calculate age" />
    </form>
  );
};
