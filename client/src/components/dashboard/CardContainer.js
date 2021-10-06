import Card from "./Card";
import { useSelector } from "react-redux";

const CardContainer = ({ list }) => {
  const cards = useSelector((store) => {
    return store.cards.filter((c) => c.listId === list._id);
  });

  return (
    <div id="cards-container" data-id="list-1-cards">
      {cards.map((card) => {
        return <Card key={card._id} card={card} />;
      })}
    </div>
  );
};

export default CardContainer;
