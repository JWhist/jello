import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCard } from "../../actions/CardActions";

const DescriptionFormOpen = ({ card, handleToggleForm}) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState(card.description);

  const handleClick = () => {
    const updates = {
      card: {
        description,
      },
    };
    dispatch(
      updateCard(card._id, updates, () => {
        handleToggleForm();
      })
    );
  };

  return (
    <form className="description">
      <p>Description</p>
      <textarea
        className="textarea-toggle"
        rows="1"
        autoFocus
        onChange={(e) => setDescription(e.target.value)}
        defaultValue={card.description}
      >
      </textarea>
      <div>
        <div className="button" value="Save" onClick={handleClick}>
          Save
        </div>
        <i className="x-icon icon" onClick={handleToggleForm}></i>
      </div>
    </form>
  );
};

export default DescriptionFormOpen;
