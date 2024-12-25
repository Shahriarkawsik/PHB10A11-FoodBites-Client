import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import Modal from "react-modal";

// Bind Modal to your app element (for accessibility)
Modal.setAppElement("#root");

const DeleteModals = ({ manageFood, handleDelete }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => setModalIsOpen(false);
  const handleOk = () => {
    handleDelete(manageFood._id);
    closeModal();
  };
  return (
    <div>
      <button className="text-white" onClick={openModal}>
        <MdDelete />
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal} // Close modal when clicking outside or pressing ESC
        contentLabel="Example Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            border: "1px solid #ccc",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <div className="space-y-4">
          <p>Are you sure to delete food ?</p>
          <div className="space-x-3">
            <button
              className="bg-color4 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg text-xl font-bold"
              onClick={handleOk}
            >
              Ok
            </button>
            <button
              className="bg-color4 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg text-xl font-bold"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModals;
