import React, { useState } from "react";
import bannerImg from "../../assets/available_food_banner2.jpg";
import AvailableFoodCard from "../../Components/Food/availableFoodCard";

const AvailableFoods = () => {
  const [availableFoods, setAvailableFoods] = useState([]);
  // Load all available foods
  // Axios
  return (
    <div className="space-y-10 font-Poppins">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerImg})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          objectFit: "cover",
        }}
        className="flex flex-col items-center justify-center space-y-4 h-[500px]"
      >
        <h1 className="text-white font-bold lg:text-6xl">
          Taste Our Delicious Best Foods
        </h1>
        <p className="text-gray-200 text-center max-w-xl">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </p>
        <form className="flex">
          <label className="input input-bordered outline-none rounded-r-none flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="grow" placeholder="Search" />
          </label>
          <input
            type="submit"
            value="Search"
            className="input rounded-l-none px-7 bg-color4 text-color1 font-bold text-xl leading-8"
          />
        </form>
      </div>
      <div className="w-11/12 lg:w-4/5 mx-auto">
        <h1 className="text-center font-bold lg:text-45 text-color1">
          All Foods
        </h1>
        {/* Food Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
          {/* {availableFoods.map((availableFood) => (
            <AvailableFoodCard
              key={availableFood._id}
              availableFood={availableFood}
            />
          ))} */}
          <AvailableFoodCard />
        </div>
      </div>
    </div>
  );
};

export default AvailableFoods;
