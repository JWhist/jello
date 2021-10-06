import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import { fetchBoardById } from "../../actions/BoardActions";
import { useDispatch, useSelector } from "react-redux";

const Board = () => {
  const [board, setBoard] = useState();
  const { id } = useParams();
  const allLists = useSelector((state) => state.lists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoardById(id));
  }, [dispatch, id]);

  return (
    <>
      <Header title={"hi"} />
      <Main lists={allLists.filter((l) => l.boardId === id)} />
    </>
  );
};

export default Board;
