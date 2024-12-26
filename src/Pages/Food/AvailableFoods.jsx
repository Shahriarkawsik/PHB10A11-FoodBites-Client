import React, { useEffect, useState } from "react";
import bannerImg from "../../assets/available_food_banner2.jpg";
import AvailableFoodCard from "../../Components/Food/availableFoodCard";
import { useAxiosCommon } from "../../Axios/useAxiosCommon";
import { useLocation } from "react-router-dom";
import { CiGrid2V, CiGrid31 } from "react-icons/ci";

const AvailableFoods = () => {
  const [availableFoods, setAvailableFoods] = useState([]);
  const [key, setKey] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const common = useAxiosCommon();
  const [flag, setFlag] = useState(false);
  const [isChangeLayout, setIsChangeLayout] = useState(false);
  useEffect(() => {
    common
      .get(`/food`)
      .then((response) => {
        setAvailableFoods(response.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    let url = `/search`;
    if (key) {
      url = `/search?key=${key}`;
    }
    if (sortOrder) {
      url = `/search?sortOrder=${sortOrder}`;
    }
    if (key && sortOrder) {
      url = `/search?key=${key}&sortOrder=${sortOrder}`;
    }
    common.get(url).then((response) => {
      setAvailableFoods(response.data.data);
    });
  }, [key, sortOrder]);

  const handleSearch = (event) => {
    event.preventDefault();
  };
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = "Available | FoodBites";
  }, [pathname]);
  return (
    <div className="space-y-10 font-Poppins mb-16 overflow-hidden">
      {/* Banner */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerImg})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          objectFit: "cover",
        }}
        className="flex flex-col items-center justify-center space-y-4 h-[500px]"
      >
        <h1 className="text-white hover:text-color4 font-bold lg:text-6xl">
          Taste Our Delicious Best Foods
        </h1>
        <p className="text-white hover:text-color4 text-center max-w-xl">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </p>
        <form
          onSubmit={handleSearch}
          className="flex w-11/12 mx-auto justify-center"
        >
          <label className="input input-bordered outline-none rounded-xl rounded-r-none flex items-center gap-2">
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
            <input
              onChange={(e) => setKey(e.target.value)}
              type="text"
              className="grow"
              placeholder="Search"
            />
          </label>
          <select
            name="sortOrder"
            className="bg-color4 text-white rounded-r-xl"
            onChange={(e) => {
              setSortOrder(e.target.value);
            }}
          >
            <option
              defaultValue={true}
              value="asc"
              className="bg-white text-color4 "
            >
              ASC
            </option>
            <option value="desc" className="bg-white text-color4 ">
              DSC
            </option>
          </select>
        </form>
      </div>
      {/* Sort button */}
      <div className="w-11/12 lg:w-4/5 mx-auto flex items-center justify-end gap-2 sm:gap-5">
        <button
          onClick={() => setIsChangeLayout(!isChangeLayout)}
          className="bg-color4 hover:bg-yellow-500 text-white px-3 sm:px-10 py-2 rounded-lg sm:text-xl font-bold"
        >
          {isChangeLayout ? (
            <CiGrid31 className="text-2xl text-black" />
          ) : (
            <CiGrid2V className="text-2xl text-black" />
          )}
        </button>
      </div>
      {/* Available Food Cards */}
      <div className="w-11/12 lg:w-4/5 mx-auto space-y-10">
        <h1 className="text-center font-bold lg:text-45 text-color1 hover:text-color4">
          All Foods
        </h1>
        {/* Food Cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-1 ${
            isChangeLayout ? "lg:grid-cols-2" : "lg:grid-cols-3"
          } gap-4`}
        >
          {availableFoods.map((availableFood) => (
            <AvailableFoodCard
              key={availableFood._id}
              availableFood={availableFood}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableFoods;
