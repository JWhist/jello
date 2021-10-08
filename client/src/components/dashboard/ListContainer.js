import ExistingLists from "./ExistingLists";
import AddList from "./AddList";

const ListContainer = ({ showModal }) => {
  return (
    <div id="list-container" className="list-container">
      <ExistingLists showModal={showModal} />
      <AddList />
    </div>
  );
};

export default ListContainer;
