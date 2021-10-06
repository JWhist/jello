export default function cards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_BY_ID_SUCCESS": {
      return action.board.lists.cards;
    }
    default:
      return state;
  }
}
