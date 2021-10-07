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
    case "EDIT_LIST_SUCCESS": {
      return state.map(list => {
        if (list._id === action.list_id) {
          const { cards, ...listwithoutcards } = action.list
          return listwithoutcards;
        }

        return list;
      })
    }
    default:
      return state;
  }
}
