import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createComment } from '../../actions/CommentAction'

const CommentSection = ({ card }) => {
  const [text, setText] = useState('')
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const comment = {
      cardId: card._id,
      comment: {
        text
      }
    }
    dispatch(createComment(comment, () => {
      setText('')
    }))
  }
  return (
    <li className="comment-section">
      <h2 className="comment-icon icon">Add Comment</h2>
      <div>
        <div className="member-container">
          <div className="card-member">TP</div>
        </div>
        <div className="comment">
          <label>
            <textarea
              required=""
              rows="1"
              placeholder="Write a comment..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <div>
              <a className="light-button card-icon sm-icon"></a>
              <a className="light-button smiley-icon sm-icon"></a>
              <a className="light-button email-icon sm-icon"></a>
              <a className="light-button attachment-icon sm-icon"></a>
            </div>
            <div>
              <input
                type="submit"
                className="button"
                value="Save"
                onClick={handleSubmit}
              />
            </div>
          </label>
        </div>
      </div>
    </li>
  )
}

export default CommentSection;