import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";

const Homepage = () => {

 return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

     <div className="space-y-10 py-20">
     
      </div>

    </div>
  ); 
};

export default Homepage;
