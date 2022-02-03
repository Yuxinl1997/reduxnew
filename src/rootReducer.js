import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import todolistReducer from "./todolistReducer";
const rootReducer = combineReducers({
  counterReducer,
  todolistReducer
});

export default rootReducer;
