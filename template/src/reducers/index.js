import { combineReducers } from "redux";

import app from "~/app/reducers";
import signup from '~/features/Signup/reducers'
import login from '~/features/Login/reducers'
const reducers = combineReducers({
  app,
  signup,
  login,
});

const rootReducer = (state, action) => {
  return reducers(state, action)
};

export default rootReducer;