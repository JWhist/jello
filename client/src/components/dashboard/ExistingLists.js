import List from "./List";
import { useSelector } from "react-redux";
import { useState } from "react";

const ExistingLists = ({ showModal }) => {
  const lists = useSelector((store) => store.lists);
  const [currentListDropdown, setCurrentListDropdown] = useState(null);

  return (
    <div id="existing-lists" className="existing-lists">
      {lists.map((list) => {
        return (
          <List
            key={list._id}
            list={list}
            setCurrentListDropdown={setCurrentListDropdown}
            currentListDropdown={currentListDropdown}
            showModal={showModal}
          />
        );
      })}
    </div>
  );
};
export default ExistingLists;
