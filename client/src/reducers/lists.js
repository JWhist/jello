export default function lists(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_BY_ID_SUCCESS": {
      return state;
    }
    default:
      return state;
  }
}
