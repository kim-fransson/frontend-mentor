import { useEffect, useState } from "react";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { ButtonGroup } from "./components/ButtonGroup/ButtonGroup";
import { SlideText } from "./components/SlideText/SlideText";

import { slides } from "./slides";
import { SlideShow } from "./components/SlideShow/SlideShow";
import { Navigation } from "./components/Navigation/Navigation";

export const RoomHomepage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slide, setSlide] = useState(slides[0]);

  useEffect(() => {
    setSlide(slides[slideIndex]);
  }, [slideIndex]);

  console.log(slide.image);

  return (
    <div
      className="grid grid-cols-1 max-w-7xl font-league-spartan
      md:grid-cols-2
      lg:grid-cols-[382fr_373fr_144fr_398fr] lg:shadow-2xl"
    >
      <div
        className="row-start-1 col-start-1 bg-gray-700 relative
        md:col-span-2 md:row-start-1 md:col-start-1"
      >
        <Navigation
          links={["home", "shop", "about", "contact"]}
          className="absolute z-50 left-1/2 -translate-x-1/2 top-12
          lg:top-10 lg:left-11 lg:-translate-x-0"
        />
        <SlideShow
          images={slides.map((slide) => slide.image)}
          activeSlide={slideIndex}
        />
      </div>
      <div
        className="row-start-2 
        md:col-span-2 md:row-start-2
        lg:row-start-1 lg:col-start-3"
      >
        <SlideText
          title={slide.title}
          description={slide.description}
          buttonColor={slide.color as "black" | "green" | "yellow"}
        />
      </div>
      <div
        className="row-start-1 col-start-1 self-end ml-auto relative
        md:col-start-2 md:row-start-1
        lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:ml-0"
      >
        <ButtonGroup
          onClickLeft={() =>
            setSlideIndex(
              (current) => (current - 1 + slides.length) % slides.length
            )
          }
          onClickRight={() =>
            setSlideIndex((current) => (current + 1) % slides.length)
          }
        />
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
