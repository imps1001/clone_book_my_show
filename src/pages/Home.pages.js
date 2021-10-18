import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import {PremierImages,RecommendImages, OnlineImages} from "../config/Tempposters.config";
const HomePage = () => {
    return(
        <div>
        <div className="flex flex-col gap-10">
        <div className="container mx-auto px-2">
            <PosterSlider  
            images={RecommendImages}
            title="Recommended Movies" 
            isDark= {false}/>
        </div>
        <div className="container mx-auto px-4"> 
        <h1 className="text-2xl font-bold text-gray-800">
        The Best Of Entertainment
        </h1>
        <EntertainmentCardSlider />
        </div>
      
        <div className="bg-gray-800 py-16">
      
        <div className="container mx-auto px-4">
        <div className="flex">
         <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
         alt="Rupay"
         className="w-full h-full"
          />
        </div>
         <PosterSlider images={PremierImages} title="Premiers" subtitle="Brand new releases every Friday" isDark/>
        </div>
        </div>
        <div className="container mx-auto px-2">
            <PosterSlider  
            images={OnlineImages}
            title="Online Streaming Events" 
            isDark= {false}/>
        </div>

        <div className="container mx-auto px-2">
            <PosterSlider  
            images={PremierImages}
            title="Outdoor Events" 
            isDark= {false}/>
        </div>
        </div>
        </div>
    )
}


export default HomePage;