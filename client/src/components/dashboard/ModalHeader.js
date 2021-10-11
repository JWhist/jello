import React from 'react';
import { useSelector } from 'react-redux';

const ModalHeader = ({ card }) => {
  const list = useSelector(state => {
    return state.lists.find(list => list._id === card.listId)
  });

  return (
    <header>
      <i className="card-icon icon .close-modal"></i>
      <textarea className="list-title" style={{ height: "45px" }} value={card.title}>
      </textarea>
      <p>
        in list <a className="link">{list.title}</a>
        <i className="sub-icon sm-icon"></i>
      </p>
    </header>
  )
}

export default ModalHeader;