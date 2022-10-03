import {combineReducers} from "redux";
import {adminReducer, userNameReducer,counterReducer} from "../pages/Register/RegisterReducer";

const rootReducer = combineReducers({
  adminReducer,
  userNameReducer,
  counterReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
