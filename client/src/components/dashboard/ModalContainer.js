import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchCard } from "../../actions/CardActions";
import ModalAside from "./ModalAside";
import ModalHeader from "./ModalHeader";
import ModalSection from "./ModalSection";

const ModalContainer = () => {
  const [card, setCard] = useState(null);
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCard(id, (card) => setCard(card)));
  }, [dispatch]);

  const handleClick = () => {
    history.push(`/boards/${card.boardId}`);
  };

  return card ? (
    <div id="modal-container">
      <div className="screen"></div>
      <div id="modal">
        <i onClick={handleClick} className="x-icon icon close-modal"></i>
        <ModalHeader card={card} />
        <ModalSection card={card} />
        <ModalAside />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ModalContainer;
