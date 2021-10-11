import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import ModalAside from "./ModalAside";
import ModalHeader from "./ModalHeader";
import ModalSection from "./ModalSection";

const ModalContainer = () => {
  const { id } = useParams();
  const history = useHistory();
  const card = useSelector(state => {
    return state.cards.find(card => card._id === id)
  });

  const handleClick = () => {
    history.push(`/boards/${card.boardId}`);
  }

  return (
    <div id="modal-container">
      <div className="screen"></div>
      <div id="modal">
        <i onClick={handleClick} className="x-icon icon close-modal"></i>
        <ModalHeader card={card} />
        <ModalSection card={card} />
        <ModalAside />
      </div>
    </div>
  );
};

export default ModalContainer;
