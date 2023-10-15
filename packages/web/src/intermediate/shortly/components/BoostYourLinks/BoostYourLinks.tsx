import { Button } from "../Button/Button";

export interface BoostYourLinksProps {
  onGetStarted: () => void;
}

export const BoostYourLinks = (props: BoostYourLinksProps) => {
  return (
    <section className="py-24 px-4 relative gap-4 bg-jacarta-300 flex flex-col justify-center items-center">
      <h2 className="relative z-10 text-3xl text-gray-200 font-bold">
        Boost your links today
      </h2>
      <Button
        className="relative z-10"
        onPress={props.onGetStarted}
        size="large"
      >
        Get Started
      </Button>
      <picture className="absolute object-cover inset-0 z-0 overflow-hidden">
        <source
          media="(min-width:1024px)"
          srcSet="/images/shortly/bg-boost-desktop.svg"
        />
        <img
          className="w-full"
          src="/images/shortly/bg-boost-mobile.svg"
          alt="background"
        />
      </picture>
    </section>
  );
};
