import { UPDATE_INPUT } from "../actions/constants";

const initialState = { term: "" };

export const updateInput = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      return { ...state, term: action.payload };

    default:
      return state;
  }
};
