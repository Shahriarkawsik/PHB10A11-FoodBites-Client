import React, { useState } from "react";
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
      <h1>React Modal Example</h1>
      <button onClick={openModal}>Open Modal</button>

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
        <p>Are you sure to delete food ?</p>
        <button onClick={handleOk}>Ok</button>
        <button onClick={closeModal}>Cancel</button>
      </Modal>
    </div>
  );
};

export default DeleteModals;
