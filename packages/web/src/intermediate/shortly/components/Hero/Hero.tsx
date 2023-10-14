import { Button } from "../Button/Button";

export interface HeroProps {}

export const Hero = () => {
  return (
    <section className="px-8 overflow-hidden flex flex-col items-center justify-center relative">
      <div className="mb-5 -mx-8 w-[30rem] relative">
        <img
          className="left-24 relative"
          src="/images/shortly/illustration-working.svg"
          alt="working lady in front of computer"
        />
      </div>
      <h2 className="text-gray-800 mb-4 font-bold text-4xl tracking-tight text-center">
        More than just shorter links
      </h2>
      <p className="font-medium text-gray-400 mb-8 text-center">
        Build your brand's recognition and get detailed insights on how your
        links are performing.
      </p>
      <Button size="large">Get Started</Button>
    </section>
  );
};
