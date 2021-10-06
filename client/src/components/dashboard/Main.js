import React from "react";
import ListContainer from "./ListContainer";

const Main = ({ lists }) => {
  return (
    <main>
      <ListContainer lists={lists} />
    </main>
  );
};

export default Main;
