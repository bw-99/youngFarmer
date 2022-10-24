import {combineReducers} from "redux";
import { BottomNavigationBarReducer } from "./BottomNavigationBarReducer";
import { LikeReducer } from "./LikeReducer";
import { LoginReducer, UserInfoReducer } from "./LoginReducer";
import { ProfileReducer } from "./MypageReducer";
import { ProductInfoReducer } from "./ProductReducer";
import { SearchDetailReducer, SearchReducer } from "./SearchReducer";

const rootReducer = combineReducers({
  BottomNavigationBarReducer,
  SearchReducer,
  SearchDetailReducer,
  LoginReducer,
  UserInfoReducer,
  ProductInfoReducer,
  ProfileReducer,
  LikeReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
