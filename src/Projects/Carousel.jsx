import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = (props) => {
  const styleCarousel = {
    width: "auto",
    height: 260,
  };
  return (
    <div className="carousel-wrapper">
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showThumbs={false}
        showStatus={false}
      >
        {props.image.map((item, id) => (
          <div key={id}>
            <img src={item} style={styleCarousel} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
