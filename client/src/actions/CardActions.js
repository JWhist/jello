import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createCardRequest() {
  return { type: types.CREATE_CARD_REQUEST };
}

export function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, card: card };
}

export function fetchCardRequest() {
  return { type: types.FETCH_CARD_REQUEST };
}

export function fetchCardSuccess(card) {
  return { type: types.FETCH_CARD_SUCCESS, card: card };
}

export function createCard(card, callback) {
  return (dispatch) => {
    dispatch(createCardRequest());
    apiClient.createCard(card, (newCard) => {
      dispatch(createCardSuccess(newCard));

      if (callback) {
        callback();
      }
    });
  };
}

export function fetchCard(id, callback) {
  return (dispatch) => {
    dispatch(fetchCardRequest());
    apiClient.fetchCard(id, (card) => {
      dispatch(fetchCardSuccess(card));

      if (callback) {
        callback(card);
      }
    });
  };
}
