import { UPDATE_INPUT } from "./constants";

export const updateInput = text => {
  return {
    type: UPDATE_INPUT,
    payload: text
  };
};
