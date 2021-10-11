import DueDateSection from "./DueDateSection";

const DetailsList = ({ card }) => {
  return (
    <ul className="modal-details-list">
      <li className="labels-section">
        <h3>Labels</h3>
        <div className="member-container">
          <div className="green label colorblindable"></div>
        </div>
        <div className="member-container">
          <div className="yellow label colorblindable"></div>
        </div>
        <div className="member-container">
          <div className="orange label colorblindable"></div>
        </div>
        <div className="member-container">
          <div className="blue label colorblindable"></div>
        </div>
        <div className="member-container">
          <div className="purple label colorblindable"></div>
        </div>
        <div className="member-container">
          <div className="red label colorblindable"></div>
        </div>
        <div className="member-container">
          <i className="plus-icon sm-icon"></i>
        </div>
      </li>
      { card.dueDate ? <DueDateSection card={card} /> : null }
    </ul>
  )
}

export default DetailsList;