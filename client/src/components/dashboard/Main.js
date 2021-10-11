import React from "react";
import ListContainer from "./ListContainer";
import { useState } from "react";
import ModalContainer from "./ModalContainer";

const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCard, setModalCard] = useState(null);

  const showModal = (cardId) => {
    setModalOpen(!modalOpen);
    setModalCard(cardId);
  };

  return modalOpen ? (
    <ModalContainer showModal={showModal} modalCard={modalCard} />
  ) : (
    <main>
      <ListContainer showModal={showModal} />
    </main>
  );
};

export default Main;
