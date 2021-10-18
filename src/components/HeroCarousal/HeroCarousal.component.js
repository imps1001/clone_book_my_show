import React from "react";
import HeroSlider from "react-slick";
// Import css files
import { NextArrow, PrevArrow} from "./Arrows.component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {

    const settingsLg ={
        arrows:true,
        autoplay: true,
        centerMode:true,
        slidesToShow:1,
        slidesToScroll:1,
        centerPadding: "300px",
        infinite: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    }
    const settings = {
        centerMode: true,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
const images = [
    "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    "https://media.istockphoto.com/photos/pop-corn-and-on-red-armchair-cinema-picture-id1271522601?b=1&k=20&m=1271522601&s=170667a&w=0&h=azZRRchShbrwRgq58omc1HOYABnfDDOzXJatuaZrueQ=",
    "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
]
      return (
          <div>
            <div className="lg:hidden">
            <HeroSlider {...settings}>
                {
                images.map((image) =>(
                    <div className ="w-full h-64 md:h-80 py-3">
                        <img src={image} alt="image" className="w-full h-full rounded-md"  />
                    </div>
                ))
                }
            </HeroSlider>
            </div>
            <div className="hidden lg:block">
            <HeroSlider {...settingsLg}>
                {
                images.map((image) =>(
                    <div className ="w-full h-80 px-2 py-3">
                        <img src={image} alt="image" className="w-full h-full rounded-md"  />
                    </div>
                ))
                }
            </HeroSlider>
            </div>
          </div>
      );
};

export default HeroCarousal;