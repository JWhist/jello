import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

function createCommentRequest() {
  return { type: types.CREATE_COMMENT_REQUEST }
}

function createCommentSuccess(comment) {
  return { type: types.CREATE_COMMENT_SUCCESS, comment: comment}
}

export function createComment(comment, callback) {
  return (dispatch) => {
    dispatch(createCommentRequest);
    apiClient.createComment(comment, (comment) => {
      dispatch(createCommentSuccess(comment))

      if (callback) {
        callback(comment);
      }
    })
  }
}