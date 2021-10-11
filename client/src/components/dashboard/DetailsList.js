import React from "react";
import DueDateSection from "./DueDateSection";

const DetailsList = ({ card }) => {
  return (
    <ul className="modal-details-list">
      <li className="labels-section">
        <h3>Labels</h3>
        {card.labels.map(label => {
          return (
          <div key={card._id + label} className="member-container">
            <div className={label + " label colorblindable"}></div>
          </div>
          )
        })}
        <div className="member-container">
          <i className="plus-icon sm-icon"></i>
        </div>
      </li>
      { card.dueDate ? <DueDateSection card={card} /> : null }
    </ul>
  )
}

export default DetailsList;