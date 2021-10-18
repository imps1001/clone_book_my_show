import React from "react";
import { NextArrow,PrevArrow } from "../components/HeroCarousal/Arrows.component";
const settings = {
    arrows:true,
    infinite: true,
    autoplay: true,
    slidesToShow: 6,
    speed: 500,
    slidesToScroll: 3,
    InitialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ],
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow />
  };
  
  export default settings;