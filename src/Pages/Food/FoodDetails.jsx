import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useAxiosSecure } from "../../Axios/useAxiosSecure";
import { convertedExpireDate } from "./../../convertedExpireDate/convertedExpireDate";
import RequestFoodModal from "../../Modals/RequestFoodModal";
import { FoodContext } from "../../AuthContext/AuthContext";
import { motion } from "framer-motion";

const FoodDetails = () => {
  const { user } = useContext(FoodContext);
  const { id } = useParams();
  const [food, setFood] = useState("");
  const secure = useAxiosSecure();
  useEffect(() => {
    secure.get(`/food/${id}`).then((response) => {
      setFood(response.data.data);
    });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRequestClick = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const {
    _id,
    name,
    img,
    qtn,
    loc,
    expr,
    additional_note,
    donator_img,
    donator_name,
    donator_email,
  } = food;
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = `Food Details | FoodBites`;
  }, [pathname]);
  return (
    <div className="bg-gray-100 min-h-screen p-6 font-sans">
      {/* Hero Section */}
      <section
        // data-aos="zoom-in"
        // data-aos-duration="1000"
        className="relative bg-cover bg-center h-80 rounded-lg"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="bg-black bg-opacity-50 absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold text-white hover:text-color4">
              {name}
            </h1>
          </div>
        </div>
      </section>

      {/* Food Details Section */}
      <section className="bg-white shadow-lg p-6 rounded-lg my-6">
        <h2 className="text-2xl font-bold mb-4 text-color1">
          Food Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-color2">
              Pickup Location:
            </h3>
            <p className="text-color3">{loc}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-color2">Expires On:</h3>
            <p className="text-color3">{convertedExpireDate(expr)}</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-color2">
              Additional Notes:
            </h3>
            <p className="text-color3">{additional_note || "N/A"}</p>
          </div>
        </div>
      </section>

      {/* Donator Information Section */}
      <section className="bg-white shadow-lg p-6 rounded-lg my-6 flex items-center">
        <img
          src={donator_img}
          alt="Donator"
          className="w-24 h-24 rounded-full mr-6 object-cover"
        />
        <div>
          <h2 className="text-2xl text-color2 font-bold mb-2">
            {donator_name}
          </h2>
          <p className="text-color3">Email: {donator_email}</p>
        </div>
      </section>

      {/* Request Button */}
      <div className="text-center my-6">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={handleRequestClick}
          className="bg-color4 text-white px-8 py-3 rounded-lg text-xl font-bold hover:bg-yellow-400"
        >
          Request
        </motion.button>
        {/* Request Modal */}
        <RequestFoodModal
          food={food}
          user={user}
          isOpen={isModalOpen}
          onClose={handleModalClose}
          // onSubmit={handleRequestSubmit}
        />
      </div>
    </div>
  );
};

export default FoodDetails;
