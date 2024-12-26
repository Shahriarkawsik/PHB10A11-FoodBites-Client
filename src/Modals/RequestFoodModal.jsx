import React, { useState } from "react";
import Modal from "react-modal";
import { useAxiosSecure } from "../Axios/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import { Alert } from "../Alert/Alert";
Modal.setAppElement("#root");

const RequestFoodModal = ({ food, user, isOpen, onClose }) => {
  const [notes, setNotes] = useState("");
  const secure = useAxiosSecure();
  const navigate = useNavigate();

  const handleRequest = (event) => {
    event.preventDefault();
    const requestData = {
      additional_note: notes,
      donator_email: food.donator_email,
      req_date: new Date().toISOString(),
    };
    secure.put(`/food/${food._id}`, requestData).then((response) => {
      onClose();
      Alert(true, response.data.message);
      navigate("/foodRequest");
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="bg-white rounded-lg shadow-lg w-11/12 sm:w-8/12 lg:w-6/12 mx-auto p-6 max-h-[90vh] overflow-y-auto"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <h2 className="text-4xl font-bold mb-4 text-center text-color2">
        Request Food
      </h2>
      <form
        // onSubmit={handleFormSubmit}
        onSubmit={handleRequest}
        className="space-y-4 items-center gap-4"
      >
        {/* Non-editable Fields */}
        {[
          { label: "Food Name", value: food.name },
          { label: "Food Image", value: food.img },
          { label: "Donator Email", value: food.donator_email },
          { label: "Donator Name", value: food.donator_name },
          { label: "Your Email", value: user.email },
          { label: "Request Date", value: new Date().toLocaleString() },
          { label: "Pickup Location", value: food.loc },
          { label: "Expire Date", value: food.expr },
        ].map((field, index) => (
          <div key={index} className="form-control">
            <label className="label font-medium">{field.label}</label>
            <input
              type="text"
              value={field.value}
              readOnly
              className="input input-bordered"
            />
          </div>
        ))}

        {/* Editable Notes */}
        <div className="form-control">
          <label className="label font-medium">Additional Notes</label>
          <textarea
            style={{
              resize: "none",
            }}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="input input-bordered"
            placeholder="Write additional notes here..."
          />
        </div>
        {/* Submit Button */}
        <div className="form-control">
          <button
            type="submit"
            className="btn col-span-2 bg-color4 hover:bg-yellow-500 text-white"
          >
            Request
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default RequestFoodModal;
