import React from "react";
import { Carousel } from "antd";
import bannerOne from "../../assets/images/banner-1.jpg";
import bannerTwo from "../../assets/images/banner-2.jpg";
import bannerThree from "../../assets/images/banner-3.jpg";

const contentStyle = {
  height: "auto",
  width: "100%",
};

const Slider = () => (
  <Carousel autoplay>
    <div>
      <img src={bannerOne} alt="" style={contentStyle} />
    </div>
    <div>
      <img src={bannerTwo} alt="" style={contentStyle} />
    </div>
    <div>
      <img src={bannerThree} alt="" style={contentStyle} />
    </div>
  </Carousel>
);
export default Slider;
