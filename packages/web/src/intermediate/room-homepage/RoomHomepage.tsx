import Arrow from "./assets/icon-arrow.svg?react";
import AngleLeft from "./assets/icon-angle-left.svg?react";
import AngleRight from "./assets/icon-angle-right.svg?react";

export const RoomHomepage = () => {
  return (
    <div
      className="grid grid-cols-1 max-w-7xl font-league-spartan
      md:grid-cols-2
      lg:grid-cols-[382fr_373fr_144fr_398fr] lg:shadow-2xl"
    >
      <div
        className="row-start-1 col-start-1
        md:col-span-2 md:row-start-1 md:col-start-1"
      >
        <picture>
          <source
            media="(min-width:768px)"
            srcSet="/images/room-homepage/desktop-image-hero-1.jpg"
          />
          <img
            src="/images/room-homepage/mobile-image-hero-1.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </picture>
      </div>
      <div
        className="row-start-2 flex flex-col justify-center px-6 py-10 gap-4 bg-white
        md:col-span-2 md:row-start-2
        lg:row-start-1 lg:col-start-3 lg:px-14 lg:py-0 lg:gap-4"
      >
        <h2
          className="text-gray-800 tracking-tighter text-4xl font-bold
          md:mr-auto
          lg:text-4xl
          xl"
        >
          Discover innovative ways to decorate
        </h2>
        <p
          className="text-gray-500 text-sm
          md:text-base
          lg:text-xs
          xl"
        >
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <button className="text-gray-800 flex gap-4 items-center mr-auto">
          <span
            className="tracking-[0.7em] uppercase font-bold text-sm
            md:text-base
            lg:text-xs
            xl"
          >
            shop now
          </span>
          <Arrow />
        </button>
      </div>
      <div
        className="flex items-center justify-between bg-stone-900 text-white row-start-1 col-start-1 self-end ml-auto
        py-3 px-4 gap-14
        md:col-start-2 md:row-start-1
        lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:ml-0
        xl"
      >
        <button aria-label="next slide to the left">
          <AngleLeft className="scale-75 select-none" />
        </button>
        <button aria-label="next slide to the right">
          <AngleRight className="scale-75 select-none" />
        </button>
      </div>

      <div
        className="row-start-3
        md:col-span-1
        lg:row-start-auto"
      >
        <img
          className="h-full w-full object-cover"
          src="/images/room-homepage/image-about-dark.jpg"
          alt="dark room with two chairs and a table"
        />
      </div>
      <div
        className="row-start-4 flex flex-col items-start justify-center px-6 py-10 bg-white gap-4
        md:col-span-2
        lg:col-span-2 lg:row-start-auto lg:px-10 lg:py-0 lg:gap-2
        xl"
      >
        <h2
          className="uppercase font-bold tracking-[0.3em] text-gray-800 text-sm
          md:text-base
          lg:text-sm
          xl"
        >
          about our furniture
        </h2>
        <p
          className="text-gray-500 text-sm
          md:text-base
          lg:text-xs
          xl"
        >
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you, Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div
        className="row-start-5
        md:row-start-3 md:col-span-1
        lg:row-start-auto"
      >
        <img
          className="h-full w-full object-cover"
          src="/images/room-homepage/image-about-light.jpg"
          alt="light room with one chair"
        />
      </div>
    </div>
  );
};
