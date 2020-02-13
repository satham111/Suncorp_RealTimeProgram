import { ADD_POST } from "../actions/Types";

export default function postReducer(state = [], action) {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
    // case DELETE_POST:
    //   return state.filter(post => post.id !== action.payload.id);
    default:
      return state;
  }
}
