import ExistingLists from "./ExistingLists";
import AddList from "./AddList";

const ListContainer = () => {
  return (
    <div id="list-container" className="list-container">
      <ExistingLists />
      <AddList />
    </div>
  );
};

export default ListContainer;
