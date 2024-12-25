import React, { useEffect, useState } from "react";
import { useAxiosCommon } from "../../Axios/useAxiosCommon";
import Loading from "./../../Loading/Loading";
import FeaturedFoodCard from "./FeaturedFoodCard";
import { Link } from "react-router-dom";

const FeaturedFoods = () => {
  const common = useAxiosCommon();
  const [featuredFoods, setFeaturedFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    common
      .get(`/food`)
      .then((response) => {
        let sortedFood = response.data.data.sort((a, b) => b.qtn - a.qtn);
        sortedFood = sortedFood.slice(0, 6);
        // console.log(sortedFood);
        setFeaturedFoods(sortedFood);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <div className="w-11/12 lg:w-4/5 mx-auto space-y-10 my-10">
      {loading ? (
        <Loading />
      ) : (
        <div className="space-y-8">
          <h1 className="text-center text-color1 text-45 font-semibold">
            Feature Foods
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredFoods.map((featuredFood) => (
              <FeaturedFoodCard
                key={featuredFood._id}
                featuredFood={featuredFood}
              />
            ))}
          </div>
        </div>
      )}
      <div className="text-center">
        <Link to={"/food"}>
          <button className="bg-color4 text-white px-10 py-2 rounded-lg text-xl font-bold">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedFoods;
