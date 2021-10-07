import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { createList } from '../../actions/ListActions';

const AddList = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [title, setTitle] = useState("");
  const { id: boardId } = useParams();
  const dispatch = useDispatch();

  const toggleForm =  () => {
    setFormVisible(!formVisible);
  }

  const handleSubmit = (e) => {
    e.stopPropagation();
    if (title.trim() === "") {
      return
    }

    const list = {
      boardId,
      list: {
        title
      }
    }

    dispatch(createList(list, () => {
        toggleForm();
        setTitle('');
      })
    );
  }

  const formClass = formVisible ? "new-list selected" : "new-list";

  return (
    <div id="new-list" className={formClass}>
      <span onClick={toggleForm}>Add a list...</span>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Add a list..." />
      <div>
        <input type="submit" onClick={handleSubmit} className="button" value="Save" />
        <i className="x-icon icon" onClick={toggleForm}></i>
      </div>
    </div>
  );
};
export default AddList;
