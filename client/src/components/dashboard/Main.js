import React from "react";
import ListContainer from "./ListContainer";
import { useState } from "react";
import Modal from "./Modal";

const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCard, setModalCard] = useState(null);

  const showModal = (cardId) => {
    setModalOpen(!modalOpen);
    setModalCard(cardId);
  };

  return modalOpen ? (
    <Modal showModal={showModal} modalCard={modalCard} />
  ) : (
    <main>
      <ListContainer showModal={showModal} />
    </main>
  );
};

export default Main;
