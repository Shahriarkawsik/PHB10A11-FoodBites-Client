import React from "react";
import demoCardFood from "../../assets/demoCardFood.jpg";
import { Link } from "react-router-dom";
const AvailableFoodCard = () => {
  return (
    <div className="flex items-center justify-between border rounded-md gap-5 font-Poppins shadow-lg">
      <figure className="w-full h-full">
        <img className="w-full h-full rounded-l-md" src={demoCardFood} alt="" />
      </figure>
      <div className="space-y-4 p-2">
        <h1 className="font-bold text-2xl leading-9 text-color2">
          Chicken Handi
        </h1>
        <p className="text-xl leading-7 text-color3 text-justify">
          There are many variations of passages of available, but the majority
          have suffered
        </p>
        <div>
          <Link to={"/"}>
            <button className="input px-7 bg-color4 text-color1 font-bold  leading-8">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AvailableFoodCard;
