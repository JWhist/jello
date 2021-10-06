import ExistingLists from "./ExistingLists";
import AddList from "./AddList";

const ListContainer = ({ lists }) => {
  return (
    <div id="list-container" className="list-container">
      <ExistingLists lists={lists} />
      <AddList />
    </div>
  );
};

export default ListContainer;
