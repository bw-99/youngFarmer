import {combineReducers} from "redux";
import { BottomNavigationBarReducer } from "./BottomNavigationBarReducer";
import { CartReducer } from "./CartReducer";
import { LikeReducer } from "./LikeReducer";
import { LoginReducer, UserInfoReducer } from "./LoginReducer";
import { ProfileReducer } from "./MypageReducer";
import { OrderReducer } from "./OrderReducer";
import { ProductInfoReducer } from "./ProductReducer";
import { PurchaseReducer } from "./PurchaseReducer";
import { SearchDetailReducer, SearchFilterReducer, SearchReducer, SearchToggleReducer } from "./SearchReducer";

const rootReducer = combineReducers({
  BottomNavigationBarReducer,
  SearchReducer,
  SearchDetailReducer,
  LoginReducer,
  UserInfoReducer,
  ProductInfoReducer,
  PurchaseReducer,
  ProfileReducer,
  LikeReducer,
  SearchFilterReducer,
  SearchToggleReducer,
  CartReducer,
  OrderReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
