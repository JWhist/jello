const Card = ({ card }) => {
  return (
    <div className="card-background">
      <div className="card ">
        <i className="edit-toggle edit-icon sm-icon"></i>

        <div className="card-info">
          {card.labels.map((label) => {
            return <div className={`card-label ${label} colorblindable`}></div>;
          })}

          <p>{card.title}</p>
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
