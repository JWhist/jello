import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchList } from "../../actions/ListActions";
import { fetchBoardById } from "../../actions/BoardActions";

const ModalHeader = ({ card }) => {
  const list = useSelector((s) => s.lists.find((l) => l._id === card.listId));

  return list ? (
    <header>
      <i className="card-icon icon .close-modal"></i>
      <textarea
        className="list-title"
        style={{ height: "45px" }}
        value={card.title}
        onChange={() => {}}
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
