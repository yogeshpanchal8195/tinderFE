import { createStore } from "redux";

export const initialState = {
  user: null,
  otherUsers: []
}

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_OTHER_USERS: "SET_OTHER_USERS"
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user
      }
    case actionTypes.SET_OTHER_USERS:
      return {
        ...state,
        otherUsers: action.otherUsers || []
      }
    default:
      return state;
  }
}

export const store = createStore(reducer);
export default reducer;
