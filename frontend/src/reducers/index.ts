import {combineReducers} from "redux";
import { BottomNavigationBarReducer } from "./BottomNavigationBarReducer";
import { LoginReducer, UserInfoReducer } from "./LoginReducer";
import { ProductInfoReducer } from "./ProductReducer";
import { SearchReducer } from "./SearchReducer";

const rootReducer = combineReducers({
  BottomNavigationBarReducer,
  SearchReducer,
  LoginReducer,
  UserInfoReducer,
  ProductInfoReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
