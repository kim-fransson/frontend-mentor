import { Button } from "../Button/Button";
import { TextField } from "../TextField/TextField";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

interface EmailFormProps {
  onSubscribe: (email: string) => void;
}

const schema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
});
type Schema = z.infer<typeof schema>;

export const EmailForm = (props: EmailFormProps) => {
  const { onSubscribe } = props;

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<Schema>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(schema),
  });

  console.log({ isValid, errors });

  const onSubmit: SubmitHandler<Schema> = ({ email }) => {
    onSubscribe(email);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
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
      <Button type="submit">Subscribe to monthly newsletter</Button>
    </form>
  );
};
