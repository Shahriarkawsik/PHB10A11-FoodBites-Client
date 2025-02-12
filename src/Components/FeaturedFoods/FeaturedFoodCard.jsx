import React from "react";
import { GiKitchenScale } from "react-icons/gi";
import { ImLocation2 } from "react-icons/im";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { convertedExpireDate } from "../../convertedExpireDate/convertedExpireDate";

const FeaturedFoodCard = ({ featuredFood }) => {
  const { name, img, qtn, loc, expr } = featuredFood;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="border rounded-xl space-y-6 font-Poppins bg-[#f8fafa]"
    >
      <figure>
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          src={img}
          alt=""
          className="rounded-xl rounded-b-none w-full h-[280px]"
        />
      </figure>
      <div className="space-y-3 p-3">
        <h2 className="text-center text-color2 text-xl font-semibold">
          {name}
        </h2>
        <div className="divider">Details</div>

        {/* Food Quantity */}
        <div className="flex items-center gap-11">
          <h4 className="flex items-center gap-1 text-color2 font-semibold">
            <GiKitchenScale className="text-color4" />
            <span>Food Quantity :</span>
          </h4>
          <p className="text-color3">{qtn}gm</p>
        </div>
        {/* Pickup Location */}
        <div className="flex items-center gap-7">
          <h4 className="flex items-center gap-1 text-color2 font-semibold">
            <ImLocation2 className="text-color4" />
            <span>Pickup Location :</span>
          </h4>
          <p className="text-color3">{loc}</p>
        </div>
        {/* Expire Date */}
        <div className="flex items-center gap-7">
          <h4 className="flex items-center gap-1 text-color2 font-semibold">
            <BsFillCalendar2DateFill className="text-color4" />
            <span>Expire Date :</span>
          </h4>
          <p className="text-color3">{convertedExpireDate(expr)}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFoodCard;
