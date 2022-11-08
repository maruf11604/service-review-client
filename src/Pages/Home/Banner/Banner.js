import React from "react";
import img1 from "../../../assects/banner/img1.jpg";
import img2 from "../../../assects/banner/img2.jpg";
import img3 from "../../../assects/banner/img3.jpg";
import img4 from "../../../assects/banner/img4.jpg";
import BannerItem from "./BannerItem";

const Banner = () => {
  const bannerDatas = [
    {
      img: img1,
      prev: 4,
      id: 1,
      next: 2,
    },
    {
      img: img2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      img: img3,
      prev: 2,
      id: 3,
      next: 4,
    },
    {
      img: img4,
      prev: 3,
      id: 4,
      next: 1,
    },
  ];
  return (
    <div>
      <div className="carousel w-9/12 mx-auto">
        {bannerDatas.map((slide) => (
          <BannerItem key={slide.id} slide={slide}></BannerItem>
        ))}
      </div>
    </div>
  );
};

export default Banner;
