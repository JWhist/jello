import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import { fetchBoardById } from "../../actions/BoardActions";
import { useDispatch, useSelector } from "react-redux";

const Board = () => {
  const location = useLocation().pathname.match(new RegExp(/\/(.*)\//))[1];
  const [board, setBoard] = useState(null);
  const { id } = useParams();
  const cards = useSelector((state) => state.cards);

  const dispatch = useDispatch();
  let boardId;
  let card;

  if (location === "boards") {
    boardId = id;
  } else {
    card = cards.find((c) => c._id === id);
    if (card) {
      boardId = card.boardId;
    }
  }

  useEffect(() => {
    if (boardId) {
      dispatch(
        fetchBoardById(boardId, (board) => {
          setBoard(board);
        })
      );
    }
  }, [dispatch, boardId]);

  return (
    <>
      {board ? <Header title={board.title} /> : null}
      <Main />
    </>
  );
};

export default Board;
