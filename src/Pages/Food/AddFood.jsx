import { Link, useLocation, useNavigate } from "react-router-dom";
import BGImg from "../../assets/11.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { FoodContext } from "../../AuthContext/AuthContext";
import { useAxiosSecure } from "../../Axios/useAxiosSecure";
import { Alert } from "./../../Alert/Alert";

const AddFood = () => {
  const { user } = useContext(FoodContext);
  const secure = useAxiosSecure();
  const navigate = useNavigate();
  const handleAddFood = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.foodName.value;
    const img = form.foodURL.value;
    const qtn = form.quantity.value;
    const loc = form.location.value;
    const expr = form.expireDate.value;
    const additional_note = form.notes.value;

    const foodDetails = {
      name,
      img,
      qtn,
      loc,
      expr,
      additional_note,
      donator_img: user?.photoURL,
      donator_name: user?.displayName,
      donator_email: user?.email,
    };

    secure
      .post(`/food`, foodDetails)
      .then((response) => {
        Alert(true, response.data.message);
        form.reset();
        navigate("/manage");
      })
      .catch((error) => {
        Alert(false, error.message);
      });
  };

  const { pathname } = useLocation();
  useEffect(() => {
    document.title = "Add Food | FoodBites";
  }, [pathname]);
  return (
    <section
      style={{
        backgroundImage: `url(${BGImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen"
    >
      <div className="w-11/12 lg:w-9/12 mx-auto font-Poppins py-8 sm:py-12">
        {/* Back to home */}
        <Link to={"/"} className="flex items-center gap-3 mb-8">
          <FaArrowLeftLong className="text-lg sm:text-xl" />
          <p className="font-Rancho text-xl sm:text-2xl lg:text-3xl text-color6">
            Back to home
          </p>
        </Link>

        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-5xl leading-tight text-color1 font-semibold hover:text-color4 text-center mb-6">
          Add New Food
        </h1>

        {/* Form Container */}
        <div className="bg-[rgb(244,243,240)] rounded-lg shadow-lg p-4 sm:p-8">
          <form
            onSubmit={handleAddFood}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Food Name */}
            <div className="form-control">
              <label className="label">
                <span className="font-medium text-color3 text-lg sm:text-xl">
                  Food Name
                </span>
              </label>
              <input
                name="foodName"
                type="text"
                placeholder="Enter food name"
                className="input input-bordered"
                required
              />
            </div>
            {/* Food Image URL */}
            <div className="form-control">
              <label className="label">
                <span className="font-medium text-color3 text-lg sm:text-xl">
                  Food Image
                </span>
              </label>
              <input
                name="foodURL"
                type="url"
                placeholder="Enter food image url"
                className="input input-bordered"
                required
              />
            </div>

            {/* Food Quantity */}
            <div className="form-control">
              <label className="label">
                <span className="font-medium text-color3 text-lg sm:text-xl">
                  Food Quantity
                </span>
              </label>
              <input
                name="quantity"
                type="number"
                placeholder="Enter food quantity in gram (minimum 100gm)"
                className="input input-bordered"
                min={100}
                required
              />
            </div>

            {/* Pickup Location */}
            <div className="form-control">
              <label className="label">
                <span className="font-medium text-color3 text-lg sm:text-xl">
                  Pickup Location
                </span>
              </label>
              <input
                name="location"
                type="text"
                placeholder="Enter food supplier"
                className="input input-bordered"
                required
              />
            </div>

            {/* Expire Date */}
            <div className="form-control">
              <label className="label">
                <span className="font-medium text-color3 text-lg sm:text-xl">
                  Expire Date / Time
                </span>
              </label>
              <input
                name="expireDate"
                type="date"
                className="input input-bordered"
                required
              />
            </div>

            {/* Notes */}
            <div className="form-control col-span-1 sm:col-span-2">
              <label className="label">
                <span className="font-medium text-gray-700 text-lg sm:text-xl">
                  Notes
                </span>
              </label>
              <textarea
                name="notes"
                rows="3"
                style={{ resize: "none" }}
                placeholder="Write Notes (Minimum 10 characters)"
                className="rounded-lg border-2 p-3"
                minLength={10}
                maxLength={250}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6 col-span-1 sm:col-span-2">
              <input
                type="submit"
                value="Add Food"
                className="btn bg-color4 text-white text-lg sm:text-xl lg:text-2xl font-Rancho"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddFood;
