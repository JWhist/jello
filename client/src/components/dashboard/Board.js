import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import { fetchBoardById } from "../../actions/BoardActions";
import { useDispatch, useSelector } from "react-redux";

const Board = () => {
  const [board, setBoard] = useState({});
  const { id } = useParams();

  const curBoard = useSelector((store) => {
    return store.boards.filter((b) => b._id === id);
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoardById(id));
    setBoard({ ...curBoard[0] });
  }, [dispatch, id]);

  return (
    <>
      <Header title={board.title} />
      <Main />
    </>
  );
};

export default Board;
