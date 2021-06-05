// import COMMENTS from "../data/comments";
import * as actionTypes from "./actionTypes";
import { initialContactForm } from "./form.js";
import { createForms } from "react-redux-form";
import { combineReducers } from "redux";
// const initialState = {
//   dishes: DISHES,
//   comments: COMMENTS,
// };
const dishReducer = (
  dishState = { isLoading: false, dishes: [], errorMessage: null },
  action
) => {
  switch (action.type) {
    case actionTypes.DISHES_LOADING:
      return {
        ...dishState,
        isLoading: true,
        dishes: [],
        errorMessage: null,
      };
    case actionTypes.LOAD_DISHES:
      return {
        ...dishState,
        isLoading: false,
        dishes: action.payload,
        errorMessage: null,
      };
    case actionTypes.DISHES_FAILED:
      return {
        ...dishState,
        isLoading: false,
        dishes: [],
        errorMessage: action.payload,
      };
    default:
      return dishState;
  }
};
const commentReducer = (
  commentState = { isLoading: false, comments: [] },
  action
) => {
  switch (action.type) {
    case actionTypes.LOAD_COMMENTS:
      return {
        ...commentState,
        isLoading: false,
        comments: action.payload,
      };
    case actionTypes.COMMENT_LOADING:
      return {
        ...commentState,
        isLoading: true,
        comments: [],
      };
    case actionTypes.ADD_COMMENT:
      let comment = action.payload;
      return {
        ...commentState,
        comments: commentState.comments.concat(comment),
      };
    default:
      return commentState;
  }
};
export const Reducer = combineReducers({
  dishes: dishReducer,
  comments: commentReducer,
  ...createForms({
    feedback: initialContactForm,
  }),
});
