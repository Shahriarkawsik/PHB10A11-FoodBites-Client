import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import BGImg from "../../assets/11.png";
import { useContext, useEffect, useState } from "react";
import { FoodContext } from "../../AuthContext/AuthContext";
import axios from "axios";
import { useAxiosSecure } from "../../Axios/useAxiosSecure";

const UpdateFood = () => {
  const { user } = useContext(FoodContext);
  const [loading, setLoading] = useState(true);
  const [food, setFood] = useState(null);
  const { id } = useParams();
  const secure = useAxiosSecure();
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
    // const status = form.foodStatus.value;
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
    secure.put(`/food/${id}`, foodDetails).then((response) => {
      console.log(response.data);    
    });
  };
  const dateFormatter = (date) => {
    const convertedDate = new Date(date);
    return convertedDate.toISOString().split("T")[0];
  };

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <section
          style={{
            backgroundImage: `url(${BGImg})`,
            backgroundSize: "100% 100%",
          }}
        >
          <div className="w-11/12 lg:w-9/12 mx-auto font-Poppins">
            <Link to={"/"} className="my-12 flex items-center gap-5">
              <FaArrowLeftLong />
              <p className="font-Rancho text-3xl text-color6">Back to home</p>
            </Link>
            <h1 className=" text-45 leading-56 text-color1 text-center">
              Add New Food
            </h1>

            <div className="bg-[rgb(244, 243, 240)] rounded-xl shadow-2xl">
              <form
                onSubmit={handleUpdateFood}
                className="card-body grid grid-cols-1 lg:grid-cols-2"
              >
                {/* Food Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="font-semibold text-color3 text-xl ">
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
                    <span className="font-semibold text-color3 text-xl ">
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
                    <span className="font-semibold  text-color3 text-xl ">
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
                {/* Food Pickup Location */}
                <div className="form-control">
                  <label className="label">
                    <span className="font-semibold text-color3 text-xl ">
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
                {/* Expire Date and time */}
                <div className="form-control">
                  <label className="label">
                    <span className="font-semibold text-color3 text-xl ">
                      Expire Date / time
                    </span>
                  </label>
                  <input
                    // defaultValue={food.expr}
                    defaultValue={dateFormatter(food.expr)}
                    name="expireDate"
                    type="date"
                    placeholder="Enter food taste"
                    className="input input-bordered"
                    required
                  />
                </div>

                {/* Notes */}
                <div className="form-control col-span-1 sm:col-span-2">
                  <label className="label">
                    <span className="font-medium text-gray-700 text-lg">
                      Notes
                    </span>
                  </label>
                  <textarea
                    name="notes"
                    type="text"
                    defaultValue={food.additional_note}
                    cols="30"
                    rows="3"
                    style={{ resize: "none" }}
                    placeholder="Write Notes (Minimum 10 characters)"
                    className="rounded-xl border-2 p-3"
                    minLength={10}
                    maxLength={250}
                    required
                  />
                </div>

                <div className="form-control mt-6 col-span-2 ">
                  <input
                    type="submit"
                    value="Update Food"
                    className="btn bg-color4 text-white bg-color7 text-2xl font-Rancho"
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
