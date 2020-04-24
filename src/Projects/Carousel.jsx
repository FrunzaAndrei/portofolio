import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = (props) => {

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
            <img src={item} className="imgCarousel"/>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
