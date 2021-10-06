import ExistingLists from "./ExistingLists";
import AddList from "./AddList";
import { useSelector } from "react-redux";

const ListContainer = () => {
  const lists = useSelector((store) => store.lists);

  return (
    <div id="list-container" className="list-container">
      <ExistingLists lists={lists} />
      <AddList />
    </div>
  );
};

export default ListContainer;
