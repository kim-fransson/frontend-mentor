import { twMerge } from "tailwind-merge";
import { Disclosure } from "./components/Disclosure/Disclosure";
import { useMediaQuery } from "@uidotdev/usehooks";

export interface FaqAccordionCardProps {}

const faqMap = new Map([
  [
    "How many team members can I invite?",
    "The number of team members you can invite depends on your subscription plan. Typically, there are different tiers of subscription plans with varying limits on the number of team members you can invite. You can check your specific plan details to find out how many team members you're allowed to invite.",
  ],

  [
    "What is the maximum file upload size?",
    "No more than 2GB. All files in your account must fit your allotted storage space.",
  ],

  [
    "Can I cancel my subscription?",
    "Yes, you can cancel your subscription at any time. The process for canceling your subscription may vary depending on the platform or service you're using. Typically, you can do this by logging into your account, going to your account settings, and finding the option to cancel your subscription. Be sure to review any cancellation policies or terms associated with your subscription before proceeding.",
  ],

  [
    "Do you provide additional support?",
    "We offer various levels of support, depending on your subscription or service plan. Typically, there are options for additional support, such as premium or dedicated support plans, which may include features like priority customer service, extended support hours, and access to a dedicated support team. You can check your plan details or contact our support team for information on additional support options available to you.",
  ],

  [
    "How do I reset my password?",
    "To reset your password, follow these steps: Visit the login page on our platform. Click on the 'Forgot Password' or 'Reset Password' link. You'll be prompted to enter your email address associated with your account. After submitting your email, you'll receive a password reset link in your inbox. Click on the link, and you'll be directed to a page where you can create a new password for your account. Once you've set your new password, you should be able to log in with your updated credentials.",
  ],
]);

export const FaqAccordionCard = () => {
  const isLargeDevice = useMediaQuery("only screen and (min-width : 1024px)");
  return (
    <div className="relative">
      {isLargeDevice && (
        <img
          className={twMerge(
            "absolute -left-[6rem] top-[13.5rem] z-30",
            "animate-bounce animate-infinite animate-duration-[3500ms] animate-ease-in"
          )}
          src="/images/faq-accordion-card/illustration-box-desktop.svg"
          alt="floating box"
        />
      )}
      <div
        className={twMerge(
          "pb-10 pt-36 px-6 font-kumbh-sans rounded-3xl bg-white shadow-2xl",
          "max-w-4xl lg:grid lg:grid-cols-2 lg:items-start lg:p-20 lg:overflow-hidden lg:relative"
        )}
      >
        {!isLargeDevice && (
          <>
            <img
              className="w-64 absolute -top-28 left-1/2 -translate-x-1/2"
              src="/images/faq-accordion-card/illustration-woman-online-mobile.svg"
              alt="illustration woman online"
            />
            <img
              className="h-auto w-64 absolute top-2 left-1/2 -translate-x-1/2"
              src="/images/faq-accordion-card/bg-pattern-mobile.svg"
              alt="shadow from illustration"
            />
          </>
        )}

        {isLargeDevice && (
          <>
            <img
              className="z-20 absolute top-64 -translate-y-1/2 -left-20"
              src="/images/faq-accordion-card/illustration-woman-online-desktop.svg"
              alt="illustration woman online"
            />
            <img
              className="z-10 absolute top-44 -translate-y-1/2 -left-[36rem]"
              src="/images/faq-accordion-card/bg-pattern-desktop.svg"
              alt="shadow from illustration"
            />
          </>
        )}

        <div className="lg:col-start-2">
          <h2
            className={twMerge(
              "mb-8 text-center text-4xl font-bold text-gray-800 uppercase",
              "lg:text-left"
            )}
          >
            faq
          </h2>
          <ul className="flex flex-col">
            {Array.from(faqMap.keys()).map((question, index) => (
              <>
                <Disclosure
                  question={question}
                  answer={faqMap.get(question) as string}
                />
                {index !== faqMap.keys.length - 1 && (
                  <hr className="border-gray-200 my-4" />
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
