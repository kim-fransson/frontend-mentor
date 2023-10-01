import { z } from "zod";
import { TextField } from "../../TextField/TextField";
import { StepCard } from "../StepCard/StepCard";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";
import { classNames } from "classnames";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .refine((value) => isEmail(value), { message: "Invalid Email" }),
  phoneNumber: z
    .string()
    .min(1, "Phone is required")
    .refine((value) => isMobilePhone(value), {
      message: "Invalid phone number",
    }),
});
type FormData = z.infer<typeof schema>;

interface PersonalInformationStepProps {
  onNext: (value: FormData) => void;
}

const inputs = [
  { name: "name", label: "Name", placeholder: "e.g. Stephen King" },
  { name: "email", label: "Email", placeholder: "e.g. stephenking@lorem.com" },
  {
    name: "phoneNumber",
    label: "Phone number",
    placeholder: "e.g. +1 234 567 890",
  },
] as {
  name: "name" | "email" | "phoneNumber";
  label: string;
  placeholder: string;
}[];

export const PersonalInformationStep = (
  props: PersonalInformationStepProps
) => {
  const { onNext } = props;

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormData>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
  });

  const handleOnNext = (value: FormData) => {
    onNext(value);
  };

  return (
    <StepCard
      title="Personal info"
      description="Please provide your name, email address, and phone number."
      onNext={handleSubmit(handleOnNext)}
      onNextDisabled={!isValid}
    >
      <form className="flex flex-col gap-4">
        {inputs.map(({ name, placeholder, label }) => (
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
                isInvalid={invalid}
                placeholder={placeholder}
                label={label}
                onChange={onChange}
                value={value}
              />
            )}
          />
        ))}
      </form>
    </StepCard>
  );
};
