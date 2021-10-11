import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createListRequest() {
  return { type: types.CREATE_LIST_REQUEST };
}

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list: list };
}

export function editListRequest() {
  return { type: types.EDIT_LIST_REQUEST };
}

export function editListSuccess(list) {
  return { type: types.EDIT_LIST_SUCCESS, list: list };
}

export function fetchListRequest() {
  return { type: types.FETCH_LIST_REQUEST }
}

export function fetchListSuccess(list) {
  return { type: types.FETCH_LIST_SUCCESS, list: list }
}

export function createList(list, callback) {
  return (dispatch) => {
    dispatch(createListRequest());
    apiClient.createList(list, (newList) => {
      dispatch(createListSuccess(newList));

      if (callback) {
        callback();
      }
    });
  };
}

export function editList(id, list, callback) {
  return (dispatch) => {
    dispatch(editListRequest());
    apiClient.editList(id, list, (newList) => {
      dispatch(editListSuccess(newList));

      if (callback) {
        callback();
      }
    })
  }
}

export function fetchList(id, callback) {
  return (dispatch) => {
    dispatch(fetchListRequest());
    apiClient.fetchList(id, (list => {
      dispatch(fetchListSuccess(list))

      if (callback) {
        callback();
      }
    }))
  }
}