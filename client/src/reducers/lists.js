export default function lists(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_BY_ID_SUCCESS": {
      const { lists } = action.board;
      return lists.map((l) => {
        const { cards, ...listwithoutcards } = l;
        return listwithoutcards;
      });
    }
    case "CREATE_LIST_SUCCESS": {
      const { cards, ...listwithoutcards } = action.list
      return state.concat(listwithoutcards);
    }
    default:
      return state;
  }
}
