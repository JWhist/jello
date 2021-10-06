import List from "./List";

const ExistingLists = ({ lists }) => {
  return (
    <div id="existing-lists" className="existing-lists">
      {lists.map((l) => {
        return <List key={l._id} id={l._id} />;
      })}
    </div>
  );
};
export default ExistingLists;
