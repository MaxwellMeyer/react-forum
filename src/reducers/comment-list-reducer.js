function commentListReducer(state = {}, action) {
  const { author, body, created, id } = action;
  switch (action.type) {
    case "ADD_COMMENT":
      return Object.assign({}, state, {
        [id]: {
          author: author,
          body: body,
          created: created,
          id: id,
        },
      });
    case "DELETE_COMMENT":
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default commentListReducer;