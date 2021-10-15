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
    case "FETCH_CARD_SUCCESS": {
      const newState = [...state];
      let changed = false;
      for (let i = 0; i < newState.length; i++) {
        if (action.card._id === newState[i]._id) {
          changed = true;
        }
      }
      if (!changed) {
        newState.push(action.card);
      }

      return newState;
    }
    case "UPDATE_CARD_SUCCESS": {
      const newState = state.map((card) => {
        if (card._id === action.card._id) {
          return action.card;
        }

        return card;
      });

      return newState;
    }
    default:
      return state;
  }
}
