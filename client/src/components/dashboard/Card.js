import React from "react";
import { useHistory } from "react-router-dom";

const Card = ({ card }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/cards/${card._id}`)
  }

  return (
    <div className="card-background">
      <div className="card ">
        <i className="edit-toggle edit-icon sm-icon"></i>

        <div className="card-info">
          {card.labels.map((label) => {
            return <div key={card._id + label} className={`card-label ${label} colorblindable`}></div>;
          })}
          <p onClick={handleClick}>{card.title}</p>
        </div>

        <div className="card-icons">
          {card.dueDate ? (
            <i className="clock-icon sm-icon overdue-recent completed"></i>
          ) : null}

          {card.description ? (
            <i className="description-icon sm-icon"></i>
          ) : null}

          {card.commentsCount > 0 ? (
            <i className="comment-icon sm-icon"></i>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default Card;
