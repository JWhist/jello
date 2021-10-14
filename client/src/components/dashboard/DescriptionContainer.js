import React, { useState } from "react";
import DescriptionFormClosed from "./DescriptionFormClosed";
import DescriptionFormOpen from "./DescriptionFormOpen";
const DescriptionContainer = ({ card }) => {
  const [desc, setDesc] = useState(card.description);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return isFormOpen ? (
    <DescriptionFormOpen
      card={card}
      desc={desc}
      updateDesc={setDesc}
      handleToggleForm={toggleForm}
    />
  ) : (
    <DescriptionFormClosed
      card={card}
      desc={desc}
      handleToggleForm={toggleForm}
    />
  );
};

export default DescriptionContainer;
