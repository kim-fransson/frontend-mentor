import { twMerge } from "tailwind-merge";
import SuccessIcon from "../../../assets/svg/icon-success.svg?react";
import { Button } from "../Button/Button";

interface SignupSuccessProps {
  title: string;
  onDismiss: () => void;
  email: string;
}

export const SignupSuccess = (props: SignupSuccessProps) => {
  const { title, onDismiss, email } = props;
  return (
    <div
      className={twMerge(
        "flex flex-col h-screen px-4 font-roboto-flex bg-white",
        "md:h-auto md:max-w-sm md:rounded-3xl md:shadow-2xl md:px-10 md:pt-8 md:pb-12 md:gap-5"
      )}
    >
      <SuccessIcon className="mt-28 md:mt-0 md:h-12 md:w-12" />
      <h2 className="font-bold text-4xl mt-10 md:mt-0 text-gray-900">
        {title}
      </h2>
      <p className="mt-5 md:mt-0 md:mb-2 text-gray-700 text-xs">
        A confirmation email has been sent to{" "}
        <span className="font-bold">{email}</span>. Please open it and click the
        button inside to confirm your subscription
      </p>
      <Button className="mt-auto mb-5 md:mb-0" onPress={onDismiss}>
        Dismiss message
      </Button>
    </div>
  );
};
