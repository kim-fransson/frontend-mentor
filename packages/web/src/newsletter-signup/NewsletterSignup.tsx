import { twMerge } from "tailwind-merge";
import ListIcon from "../assets/svg/icon-list.svg?react";
import { EmailForm } from "./components/EmailForm/EmailForm";

interface NewsletterSignupProps {
  onSubscribe: (email: string) => void;
}

export const NewsletterSignup = (props: NewsletterSignupProps) => {
  const { onSubscribe } = props;

  const features = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more",
  ];
  return (
    <div
      className={twMerge(
        "font-roboto-flex flex flex-col px-6 bg-white",
        "md:max-w-4xl md:flex-row md:p-4 md:items-center md:rounded-3xl md:shadow-lg"
      )}
    >
      <picture className="-mx-6 md:mx-0 md:order-2 md:h-auto md:max-w-full">
        <source
          media="(min-width:28rem)"
          srcSet="/images/illustration-sign-up-desktop.svg"
        />
        <img
          className="w-full"
          src="/images/illustration-sign-up-mobile.svg"
          alt="illustration sign-up"
        />
      </picture>

      <div className="md:p-12">
        <h2 className="mt-10 text-4xl text-gray-800 font-bold">
          Stay Updated!
        </h2>

        <p className="mt-4 text-base text-gray-600">
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <ul className="mt-4 flex flex-col gap-3">
          {features.map((feature) => (
            <li className="flex items-start gap-4" key={feature}>
              <ListIcon />
              <span className="text-gray-600 -mt-[0.125rem]">{feature}</span>
            </li>
          ))}
        </ul>

        <EmailForm className="mt-10 mb-10" onSubscribe={onSubscribe} />
      </div>
    </div>
  );
};
