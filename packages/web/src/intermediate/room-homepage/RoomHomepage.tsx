import { AboutUs } from "./components/AboutUs/AboutUs";
import { ButtonGroup } from "./components/ButtonGroup/ButtonGroup";
import { ShopNowButton } from "./components/ShopNowButton/ShopNowButton";

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
        <div className="mr-auto">
          <ShopNowButton onShopNow={() => {}} />
        </div>
      </div>
      <div
        className="row-start-1 col-start-1 self-end ml-auto
        md:col-start-2 md:row-start-1
        lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:ml-0"
      >
        <ButtonGroup onClickLeft={() => {}} onClickRight={() => {}} />
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
        className="row-start-4
        md:col-span-2
        lg:col-span-2 lg:row-start-auto"
      >
        <AboutUs />
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
