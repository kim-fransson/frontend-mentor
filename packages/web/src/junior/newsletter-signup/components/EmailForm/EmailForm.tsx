import { Button } from "../Button/Button";
import { TextField } from "../TextField/TextField";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { twMerge } from "tailwind-merge";

interface EmailFormProps {
  onSubscribe: (email: string) => void;
  className?: string;
}

const schema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
});
type Schema = z.infer<typeof schema>;

export const EmailForm = (props: EmailFormProps) => {
  const { onSubscribe, className } = props;

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<Schema>({
    defaultValues: {
      email: "",
    },
    mode: "all",
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Schema> = ({ email }) => {
    onSubscribe(email);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={twMerge("flex flex-col gap-5", className)}
    >
      <Controller
        name="email"
        control={control}
        render={({
          field: { onChange, value, onBlur },
          formState: { errors },
        }) => (
          <TextField
            label="Email address"
            placeholder="email@company.com"
            errorMessage={errors.email?.message}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      <Button isDisabled={!isValid} type="submit">
        Subscribe to monthly newsletter
      </Button>
    </form>
  );
};
