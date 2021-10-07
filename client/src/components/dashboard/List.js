import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editList } from "../../actions/ListActions";
import CardContainer from "./CardContainer";

const List = ({ list }) => {
  const [ editVisible, setEditVisible ] = useState(false);
  const [ title, setTitle ] = useState(list.title);
  const dispatch = useDispatch();

  const toggleEditVisible = () => {
    setEditVisible(!editVisible);
  }

  const handleSubmit = (e) => {
    if (e.code === "Enter" || e.code === undefined) {
      dispatch(editList(list._id, { title }, toggleEditVisible));
    }
  }

  return (
    <div className="list-wrapper">
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div>
            { editVisible ?
                <input
                  type="text"
                  className="list-title"
                  onChange={e => setTitle(e.target.value)}
                  onBlur={handleSubmit}
                  onKeyPress={handleSubmit}
                  value={title}
                />
              : <p onClick={toggleEditVisible} className="list-title">{title}</p>
            }
          </div>
          <div className="add-dropdown add-top">
            <div className="card"></div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <CardContainer list={list} />
          <div className="add-dropdown add-bottom">
            <div className="card">
              <div className="card-info"></div>
              <textarea name="add-card"></textarea>
              <div className="members"></div>
            </div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <div className="add-card-toggle" data-position="bottom">
            Add a card...
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
