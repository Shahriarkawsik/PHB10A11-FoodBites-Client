import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  // const food = useLoaderData();
  const foodDetails = {
    foodName: "Delicious Pizza",
    foodImage: "image_url_here",
    quantity: "5 servings",
    pickupLocation: "123 Food Street, City",
    expireDate: "2024-12-25 5:00 PM",
    additionalNotes: "Please bring your own container.",
  };
  const {
    foodName,
    foodImage,
    quantity,
    pickupLocation,
    expireDate,
    additionalNotes,
  } = foodDetails;
  const donatorInfo = {
    donatorImage: "donator_image_url_here",
    donatorName: "John Doe",
    donatorEmail: "john.doe@example.com",
  };
  const { donatorImage, donatorName, donatorEmail } = donatorInfo;

  return (
    <div className="bg-gray-100 min-h-screen p-6 font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-80 text-white rounded-lg"
        style={{ backgroundImage: `url(${foodImage})` }}
      >
        <div className="bg-black bg-opacity-50 absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold">{foodName}</h1>
            <p className="text-lg mt-2">Available Quantity: {quantity}</p>
          </div>
        </div>
      </section>

      {/* Food Details Section */}
      <section className="bg-white shadow-lg p-6 rounded-lg my-6">
        <h2 className="text-2xl font-bold mb-4">Food Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold">Pickup Location:</h3>
            <p className="text-gray-700">{pickupLocation}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Expires On:</h3>
            <p className="text-gray-700">{expireDate}</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold">Additional Notes:</h3>
            <p className="text-gray-700">{additionalNotes || "N/A"}</p>
          </div>
        </div>
      </section>

      {/* Donator Information Section */}
      <section className="bg-white shadow-lg p-6 rounded-lg my-6 flex items-center">
        <img
          src={donatorImage}
          alt="Donator"
          className="w-24 h-24 rounded-full mr-6 object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">{donatorName}</h2>
          <p className="text-gray-700">Email: {donatorEmail}</p>
        </div>
      </section>

      {/* Request Button */}
      <div className="text-center my-6">
        <button className="bg-color4 text-white px-8 py-3 rounded-lg text-xl font-bold hover:bg-yellow-400">
          Request
        </button>
      </div>
    </div>
  );
};

export default FoodDetails;
