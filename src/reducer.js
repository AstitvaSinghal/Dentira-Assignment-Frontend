import { combineReducers } from "redux";
const initialState = {
  zomato: [],
  swiggy: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_DATA":
      return { zomato: action.payload.zomato, swiggy: action.payload.swiggy };
      break;
    default:
      return state;
  }
}

export default combineReducers({ reducer });
