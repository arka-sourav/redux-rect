import changeTheNumberReducer from "./upDown";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeTheNumberReducer,
  //reducer2, reducer3...
});

export default rootReducer;
