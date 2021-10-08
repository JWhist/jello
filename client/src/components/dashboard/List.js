import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editList } from "../../actions/ListActions";
import CardContainer from "./CardContainer";
import { createCard } from "../../actions/CardActions";

const List = ({
  list,
  currentListDropdown,
  setCurrentListDropdown,
  showModal,
}) => {
  const [editVisible, setEditVisible] = useState(false);
  const [title, setTitle] = useState(list.title);
  const [cardTitle, setCardTitle] = useState("");
  const dispatch = useDispatch();

  const toggleEditVisible = () => {
    setEditVisible(!editVisible);
  };

  const listWrapperClass =
    list._id === currentListDropdown
      ? "list-wrapper add-dropdown-active"
      : "list-wrapper";

  const dropdownClass =
    list._id === currentListDropdown
      ? "add-dropdown add-bottom active-card"
      : "add-dropdown add-bottom";

  const handleSubmit = (e) => {
    if (e.code === "Enter" || e.code === undefined) {
      dispatch(editList(list._id, { title }, toggleEditVisible));
    }
  };

  const handleSubmitNewCard = () => {
    const newCard = {
      listId: list._id,
      card: {
        title: cardTitle,
      },
    };

    dispatch(
      createCard(newCard, () => {
        setCardTitle("");
        setCurrentListDropdown();
      })
    );
  };

  return (
    <div className={listWrapperClass}>
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div>
            {editVisible ? (
              <input
                type="text"
                className="list-title"
                onChange={(e) => setTitle(e.target.value)}
                onBlur={handleSubmit}
                onKeyPress={handleSubmit}
                value={title}
              />
            ) : (
              <p onClick={toggleEditVisible} className="list-title">
                {title}
              </p>
            )}
          </div>
          <div className="add-dropdown add-top">
            <div className="card"></div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <CardContainer list={list} showModal={showModal} />
          <div className={dropdownClass}>
            <div className="card">
              <div className="card-info"></div>
              <textarea
                value={cardTitle}
                onChange={(e) => setCardTitle(e.target.value)}
                name="add-card"
              ></textarea>
              <div className="members"></div>
            </div>
            <a onClick={handleSubmitNewCard} className="button">
              Add
            </a>
            <i
              onClick={() => setCurrentListDropdown()}
              className="x-icon icon"
            ></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <div
            onClick={() => setCurrentListDropdown(list._id)}
            className="add-card-toggle"
            data-position="bottom"
          >
            Add a card...
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
