import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import BGImg from "../../assets/11.png";
import { useContext, useEffect, useState } from "react";
import { FoodContext } from "../../AuthContext/AuthContext";
import axios from "axios";
import { useAxiosSecure } from "../../Axios/useAxiosSecure";
import { Alert } from "./../../Alert/Alert";

const UpdateFood = () => {
  const { user } = useContext(FoodContext);
  const [loading, setLoading] = useState(true);
  const [food, setFood] = useState(null);
  const { id } = useParams();
  const secure = useAxiosSecure();
  const navigate = useNavigate();
  // fetch my desire food which you want to update(get from ManageFood page.)
  useEffect(() => {
    secure.get(`/food/${id}`).then((response) => {
      setFood(response.data.data);
      setLoading(false);
    });
  }, []);
  // secure.
  const handleUpdateFood = (event) => {
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

    // console.log(foodDetails);
    secure
      .put(`/food/${id}`, foodDetails)
      .then((response) => {
        Alert(true, response.data.message);
        form.reset();
        navigate("/food");
      })
      .catch((error) => {
        Alert(false, error.message);
      });
  };
  const dateFormatter = (date) => {
    const convertedDate = new Date(date);
    return convertedDate.toISOString().split("T")[0];
  };

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <section
          style={{
            backgroundImage: `url(${BGImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="min-h-screen py-6"
        >
          <div className="w-full sm:w-11/12 lg:w-9/12 mx-auto font-Poppins space-y-6">
            {/* Back to Home Link */}
            <Link to="/" className="flex items-center gap-3 mb-4 sm:mb-8">
              <FaArrowLeftLong className="text-lg sm:text-xl" />
              <p className="font-Rancho text-xl sm:text-2xl lg:text-3xl text-color6">
                Back to home
              </p>
            </Link>

            {/* Page Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-tight text-color1 hover:text-color4 text-center">
              Update Food
            </h1>

            {/* Form Container */}
            <div className="bg-[rgb(244,243,240)] rounded-lg shadow-lg p-4 sm:p-8">
              <form
                onSubmit={handleUpdateFood}
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
                    defaultValue={food.name}
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
                    defaultValue={food.img}
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
                    defaultValue={food.qtn}
                    placeholder="Enter food quantity in gram (minimum 100gm)"
                    className="input input-bordered"
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
                    defaultValue={food.loc}
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
                    defaultValue={dateFormatter(food.expr)}
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
                    type="text"
                    defaultValue={food.additional_note}
                    rows="3"
                    placeholder="Write Notes (Minimum 10 characters)"
                    className="rounded-lg border-2 p-3"
                    minLength={10}
                    maxLength={250}
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="form-control mt-4 col-span-1 sm:col-span-2">
                  <input
                    type="submit"
                    value="Update Food"
                    className="btn bg-color4 hover:bg-yellow-500 text-white text-lg sm:text-xl lg:text-2xl font-Rancho"
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default UpdateFood;
