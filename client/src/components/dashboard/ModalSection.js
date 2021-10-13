import React from 'react';
import ActivitySection from './ActivitySection';
import CommentSection from './CommentSection';
import DetailsList from './DetailsList';
import DescriptionContainer from './DescriptionContainer';

const ModalSection = ({ card, handleDueDate }) => {
  return (
    <section className="modal-main">
      <ul className="modal-outer-list">
        <li className="details-section">
          <DetailsList card={card} handleDueDate={handleDueDate}/>
          <DescriptionContainer card={card} />
        </li>
        <CommentSection card={card} />
        <ActivitySection card={card} />
      </ul>
    </section>
  )
}

export default ModalSection;