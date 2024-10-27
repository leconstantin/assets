import React from "react";
import { useState } from "react";
import Modal from "./modal";
const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);
  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }
  function onClose() {
    setShowModalPopup(false);
  }
  return (
    <div className="text-center py-10">
      <button
        onClick={handleToggleModalPopup}
        className="ring-1 px-4 py-2 bg-blue-400 rounded-lg text-white font-semibold hover:bg-blue-500 focus:bg-blue-500 focus:ring-2 focus:ring-sky-300"
      >
        Open Modal popup
      </button>
      {showModalPopup && (
        <Modal
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
          body={<div>Customized body</div>}
        />
      )}
    </div>
  );
};

export default ModalTest;
