import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchList } from '../../actions/ListActions';

const ModalHeader = ({ card }) => {
  const [list, setList] = useState(null);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchList(card.listId, (list) => {
      setList(list);
    }), [dispatch, card]);
  })

  return list ? (
    <header>
      <i className="card-icon icon .close-modal"></i>
      <textarea className="list-title" style={{ height: "45px" }} value={card.title}>
      </textarea>
      <p>
        in list <a className="link">{list.title}</a>
        <i className="sub-icon sm-icon"></i>
      </p>
    </header>
  ) : null
}

export default ModalHeader;