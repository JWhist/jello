export default function lists(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_BY_ID_SUCCESS": {
      const { lists } = action.board;
      return lists.map((l) => {
        const { cards, ...listwithoutcards } = l;
        return listwithoutcards;
      });
    }
    default:
      return state;
  }
}
