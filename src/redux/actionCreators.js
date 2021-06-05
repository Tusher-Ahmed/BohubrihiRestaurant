import * as actionTypes from "./actionTypes";
import { baseURL } from "./baseUrl";
import axios from "axios";

export const addComment = (dishId, author, rating, comment) => (dispatch) => {
  const newComment = {
    dishId: dishId,
    author: author,
    rating: rating,
    comment: comment,
  };
  newComment.date = new Date().toISOString();
  axios
    .post(baseURL + "comments", newComment)
    .then((response) => response.data)
    .then((comment) => dispatch(commentConcat(comment)));
};
export const commentConcat = (comment) => ({
  type: actionTypes.ADD_COMMENT,
  payload: comment,
});
export const commentLoading = () => {
  return {
    type: actionTypes.COMMENT_LOADING,
  };
};
export const loadComments = (comments) => {
  return {
    type: actionTypes.LOAD_COMMENTS,
    payload: comments,
  };
};
export const fetchComments = () => (dispatch) => {
  dispatch(commentLoading());
  axios
    .get(baseURL + "comments")
    .then((response) => response.data)
    .then((comments) => dispatch(loadComments(comments)));
};
export const loadDishes = (dishes) => ({
  type: actionTypes.LOAD_DISHES,
  payload: dishes,
});
export const dishesLoading = () => ({
  type: actionTypes.DISHES_LOADING,
});
export const dishesFailed = (errorMessage) => ({
  type: actionTypes.DISHES_FAILED,
  payload: errorMessage,
});
export const fetchDishes = () => {
  return (dispatch) => {
    dispatch(dishesLoading());
    // setTimeout(() => dispatch(loadDishes(DISHES)), 1000);
    axios
      .get(baseURL + "dishes")
      .then((response) => response.data)
      .then((dishes) => dispatch(loadDishes(dishes)))
      .catch((error) => dispatch(dishesFailed(error.message)));
  };
};
