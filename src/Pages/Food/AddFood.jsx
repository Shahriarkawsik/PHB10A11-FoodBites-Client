import { Link } from "react-router-dom";
import BGImg from "../../assets/11.png";
import { FaArrowLeftLong } from "react-icons/fa6";
const AddFood = () => {
  const handleAddFood = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const price = form.price.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const coffeeDetails = {
      name,
      chef,
      price,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    fetch("http://localhost:5000/items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    event.target.reset();
  };
  return (
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

        <div className="bg-[rgb(244, 243, 240)] shadow-2xl">
          <form
            onSubmit={handleAddFood}
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
                name="name"
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
                name="chef"
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
                name="price"
                type="number"
                placeholder="Enter food quantity in gram (minimum 100gm)"
                className="input input-bordered"
                min={100}
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
                name="supplier"
                type="text"
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
                name="taste"
                type="text"
                placeholder="Enter food taste"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control col-span-1 sm:col-span-2">
              <label className="label">
                <span className="font-medium text-gray-700 text-lg">Notes</span>
              </label>
              <textarea
                name="summary"
                type="text"
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
                value="Add Food"
                className="btn bg-color4 text-white bg-color7 text-2xl font-Rancho"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddFood;
