import { createLogic } from "redux-logic";
import { push } from "react-router-redux";

import { LoginLogics } from "./login";
import { BlogLogics } from "./blog";


/* Logic action for redirecting to path of routes */
export const redirectToLogic = createLogic({
  type: "REDIRET_TO",
  async process({ action }, dispatch, done) {
    dispatch(push(action.payload.path));
    done();
  }
});

export default [
  ...LoginLogics,
  ...BlogLogics,
  redirectToLogic
];