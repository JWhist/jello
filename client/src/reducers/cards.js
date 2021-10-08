export default function cards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_BY_ID_SUCCESS": {
      const newState = [];
      action.board.lists.forEach((list) => {
        newState.push(...list.cards);
      });
      return newState;
    }
    case "CREATE_CARD_SUCCESS": {
      return state.concat(action.card);
    }
    default:
      return state;
  }
}
