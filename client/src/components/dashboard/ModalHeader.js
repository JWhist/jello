import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCard } from "../../actions/CardActions";

const ModalHeader = ({ card }) => {
  const list = useSelector((s) => s.lists.find((l) => l._id === card.listId));
  const dispatch = useDispatch();
  const [title, setTitle] = useState(card.title)

  return list ? (
    <header>
      <i className="card-icon icon .close-modal"></i>
      <textarea
        className="list-title"
        style={{ height: "45px" }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onBlur={() => dispatch(updateCard(card._id, { card: { title }}))}
      ></textarea>
      <p>
        in list <a className="link">{list.title}</a>
        <i className="sub-icon sm-icon"></i>
      </p>
    </header>
  ) : (
    <></>
  );
};

export default ModalHeader;
