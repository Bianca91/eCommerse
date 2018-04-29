import { FETCHED_DETAILED_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT } from "../actions/fetchProduct";

export default function(state = [], action) {
  switch (action.type) {
    case FETCHED_DETAILED_PRODUCT:
      return action.payload;
    case ADD_PRODUCT:
      return [...state, action.payload];
    case UPDATE_PRODUCT:
      if (action.payload.id === state.id) {
        return action.payload;
      } else return state;

    default:
      return state;
  }
}
