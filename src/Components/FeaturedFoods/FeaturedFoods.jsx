import React, { useEffect, useState } from "react";
import { useAxiosCommon } from "../../Axios/useAxiosCommon";

const FeaturedFoods = () => {
  const common = useAxiosCommon();
  const [featureFoods, setFeatureFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    common
      .get(`/food`)
      .then((response) => {
        let sortedFood = response.data.data.sort((a, b) => b.qtn - a.qtn);
        sortedFood = sortedFood.slice(0, 6);
        console.log(sortedFood);
        setFeatureFoods(sortedFood);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <div>
          <h1>Feature Foods</h1>
          <div>{featureFoods.map((featureFood) => {})}</div>
        </div>
      )}
    </div>
  );
};

export default FeaturedFoods;
