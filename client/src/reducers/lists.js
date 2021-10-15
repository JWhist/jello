export default function lists(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_BY_ID_SUCCESS": {
      const { lists } = action.board;
      return lists.map((l) => {
        const { cards, ...listwithoutcards } = l;
        return listwithoutcards;
      });
    }
    case "FETCH_BOARDS_SUCCESS": {
      return state;
    }
    case "CREATE_LIST_SUCCESS": {
      const { cards, ...listwithoutcards } = action.list;
      return state.concat(listwithoutcards);
    }
    case "EDIT_LIST_SUCCESS": {
      return state.map((list) => {
        if (list._id === action.list_id) {
          const { cards, ...listwithoutcards } = action.list;
          return listwithoutcards;
        }

        return list;
      });
    }
    case "FETCH_LIST_SUCCESS": {
      const newState = [...state];
      let changed = false;
      for (let i = 0; i < newState.length; i++) {
        if (action.list._id === newState[i]._id) {
          changed = true;
        }
      }
      if (!changed) {
        newState.push(action.list);
      }

      return newState;
    }
    default:
      return state;
  }
}
