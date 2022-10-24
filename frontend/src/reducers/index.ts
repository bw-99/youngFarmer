import {combineReducers} from "redux";
import { BottomNavigationBarReducer } from "./BottomNavigationBarReducer";
import { LoginReducer, UserInfoReducer } from "./LoginReducer";
import { ProfileReducer } from "./MypageReducer";
import { ProductInfoReducer } from "./ProductReducer";
import { SearchReducer } from "./SearchReducer";

const rootReducer = combineReducers({
  BottomNavigationBarReducer,
  SearchReducer,
  LoginReducer,
  UserInfoReducer,
  ProductInfoReducer,
  ProfileReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
