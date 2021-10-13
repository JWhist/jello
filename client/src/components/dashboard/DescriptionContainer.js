import React, { useState } from "react";
import DescriptionFormClosed from "./DescriptionFormClosed";
import DescriptionFormOpen from "./DescriptionFormOpen";
const DescriptionContainer = ({ card }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  }

  return isFormOpen ?
    <DescriptionFormOpen card={card} handleToggleForm={toggleForm} /> :
    <DescriptionFormClosed card={card} handleToggleForm={toggleForm} />
}

export default DescriptionContainer;