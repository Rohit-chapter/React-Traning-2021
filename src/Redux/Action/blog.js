import { createAction } from "redux-actions";

export const blogAction = {
  BLOG_REQUEST: "Blog Requested!",
  BLOG_SUCCESS: "Blog Success!",
  BLOG_FAILED: "Blog Failed!",
};

export const blogRequest = createAction(blogAction.BLOG_REQUEST);
export const blogSuccess = createAction(blogAction.BLOG_SUCCESS);

export const blogFailed = createAction(blogAction.BLOG_FAILED);
