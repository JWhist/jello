import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createListRequest() {
  return { type: types.CREATE_LIST_REQUEST };
}

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list: list };
}

export function createList(list, callback) {
  return (dispatch) => {
    dispatch(createListRequest());
    apiClient.createList(list, (newList) => {
      dispatch(createListSuccess(newList));
      console.log("from list action, ", callback)

      if (callback) {
        callback();
      }
    });
  };
}