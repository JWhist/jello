import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import { fetchBoardById } from "../../actions/BoardActions";
import { useDispatch } from "react-redux";


const Board = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBoardById(id));
  }, [dispatch, id]);

  return (
    <>
      <Header title={'title'}/>
      <Main />
    </>
  );
}

export default Board