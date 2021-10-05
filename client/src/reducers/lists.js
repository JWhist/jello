export default function lists(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_BY_ID_SUCCESS": {
      return action.board.lists;
    }
    default:
      return state;
  }
}