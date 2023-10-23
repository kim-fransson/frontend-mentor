import Arrow from "./assets/icon-arrow.svg?react";
import AngleLeft from "./assets/icon-angle-left.svg?react";
import AngleRight from "./assets/icon-angle-right.svg?react";

export const RoomHomepage = () => {
  return (
    <div
      className="grid lg:grid-cols-[382fr_373fr_144fr_398fr] grid-cols-1 max-w-7xl lg:shadow-2xl
      font-league-spartan"
    >
      <div className="lg:col-span-2 lg:row-start-auto row-start-1 col-start-1">
        <picture>
          <source
            media="(min-width:1024px)"
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
        className="row-start-2 flex flex-col items-center justify-center px-6 py-10 gap-4 bg-white
        md md
        lg lg lg:col-start-3 lg:col-end-5 lg:row-start-1
        xl xl"
      >
        <h2
          className="text-gray-800 tracking-tighter text-4xl font-medium
          md
          lg
          xl"
        >
          Discover innovative ways to decorate
        </h2>
        <p
          className="text-gray-400 text-sm
          md
          lg
          xl"
        >
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <button
          className="text-gray-800 flex gap-4 items-center mr-auto
          md
          lg
          xl"
        >
          <span
            className="tracking-[0.8em] uppercase font-medium text-sm
            md
            lg
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
        md
        lg lg:col-start-3 lg:col-end-3 lg:row-start-1
        xl"
      >
        <button>
          <AngleLeft className="scale-75" />
        </button>
        <button>
          <AngleRight className="scale-75" />
        </button>
      </div>

      <div
        className="row-start-3
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
        md
        lg:col-span-2 lg:row-start-auto
        xl"
      >
        <h2
          className="uppercase font-bold tracking-[0.25em] text-gray-800 text-sm
          md
          lg
          xl"
        >
          about our furniture
        </h2>
        <p
          className="text-gray-400 text-sm
          md
          lg
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
