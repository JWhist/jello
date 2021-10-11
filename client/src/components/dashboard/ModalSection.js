import React from 'react';
import ActivitySection from './ActivitySection';
import CommentSection from './CommentSection';
import DetailsList from './DetailsList';
import EditDescriptionForm from './EditDescriptionForm';

const ModalSection = ({ card }) => {
  return (
    <section className="modal-main">
      <ul className="modal-outer-list">
        <li className="details-section">
          <DetailsList card={card} />
          <EditDescriptionForm card={card} />
        </li>
        <CommentSection card={card} />
        <ActivitySection card={card} />
      </ul>
    </section>
  )
}

export default ModalSection;