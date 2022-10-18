import {combineReducers} from "redux";
import { BottomNavigationBarReducer } from "./BottomNavigationBarReducer";
import { LoginReducer, UserInfoReducer } from "./LoginReducer";
import { SearchReducer } from "./SearchReducer";

const rootReducer = combineReducers({
  BottomNavigationBarReducer,
  SearchReducer,
  LoginReducer,
  UserInfoReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
