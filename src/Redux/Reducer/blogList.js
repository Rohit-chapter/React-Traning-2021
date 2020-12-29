import { handleActions } from "redux-actions";
import { blogAction } from "../Action";

const initialState = {
  blogInfo: [],
};

export const blogInfoReducer = handleActions(
  {
    [blogAction.BLOG_REQUEST]: (state, { payload }) => ({
      ...state,
    }),
    [blogAction.BLOG_SUCCESS]: (state, { payload }) => ({
      ...state,
      blogInfo: payload,
    }),
  },
  initialState
);
