import React from "react";
import Slider from "react-slick";
import Settings from "../../config/PosterCarousal.config";
import PremierImages from "../../config/Tempposters.config";

//components
import Poster from "../poster/poster.component";

export const Premier = () =>
{
    return(
        <div>
            <div className="flex flex-col items-start py-4">
                <h3 className="text-white font-bold text-xl">Premiers</h3>
                <p className="text-white text-sm">Brand new releases every Friday</p>
            </div>
            <Slider {...Settings}>
            {PremierImages.map((image)=> (
                <Poster {...image} isDark/>
            ))}
            </Slider>
        </div>
    );
}

export default Premier;