import {combineReducers} from "redux";
import {adminReducer, textReducer} from "../pages/Register/RegisterReducer";

const rootReducer = combineReducers({
  adminReducer,
  textReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
