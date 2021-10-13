export default function comments(state = [], action) {
  switch (action.type) {
    case "CREATE_COMMENT_SUCCESS": {
      return state.concat(action.comment)
    }
    default: {
      return state
    }
  }
}