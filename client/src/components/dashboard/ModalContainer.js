import React from "react";
import { useSelector } from "react-redux";
import ModalAside from "./ModalAside";
import ModalHeader from "./ModalHeader";
import ModalSection from "./ModalSection";

const ModalContainer = ({ showModal, modalCard }) => {
  const card = useSelector((state) => {
    return state.cards.filter((c) => c._id === modalCard)[0];
  });

  return (
    <div id="modal-container">
      <div className="screen"></div>
      <div id="modal">
        <i onClick={showModal} className="x-icon icon close-modal"></i>
        <ModalHeader card={card} />
        <ModalSection card={card} />
        <ModalAside />
      </div>
    </div>
  );
};

export default ModalContainer;
