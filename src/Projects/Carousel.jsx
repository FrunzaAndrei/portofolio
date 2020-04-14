import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import titleData from "../store/titleData";

const Slider = () => {
  const styleCarousel = {
    width: "auto",
    height: "300px",
  };
  return (
    <div class="carousel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false}>
        {titleData.map((item) => (
          <div>
            <img src={item.img} style={styleCarousel} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
