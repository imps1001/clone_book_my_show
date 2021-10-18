import Poster from "../poster/poster.component";
import Settings from "../../config/PosterCarousal.config";
import React from "react";
import Slider from "react-slick";

const PosterSlider = (props) =>
{
    return(
        <div>
            <div className="flex flex-col items-start py-4">
            <h3 className={
`text-2xl font-bold ${
  props.isDark ? "text-white" : "text-gray-800"
}`
    }>{props.title}</h3>
    <p className={
`text-sm ${
  props.isDark ? "text-white" : "text-gray-800"
}`
    }>{props.subtitle}</p>
    </div>
    <Slider {...Settings}>
    {props.images.map((image)=> (
      <Poster {...image} isDark={props.isDark} />
    ))}
            </Slider>
        </div>
    )
}

export default PosterSlider;