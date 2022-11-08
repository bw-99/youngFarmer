import {combineReducers} from "redux";
import { BottomNavigationBarReducer } from "./BottomNavigationBarReducer";
import { CartReducer } from "./CartReducer";
import { DeliveryReducer } from "./DeliveryReducer";
import { DiscountReducer } from "./DiscountReducer";
import { LikeReducer } from "./LikeReducer";
import { LoginReducer, UserInfoReducer } from "./LoginReducer";
import { ProfileReducer } from "./MypageReducer";
import { OrderReducer, OrderSendReducer } from "./OrderReducer";
import { ProductInfoReducer } from "./ProductReducer";
import { PurchaseReducer } from "./PurchaseReducer";
import { ReviewWriteReducer, ReviewWriteStateReducer } from "./ReviewReducer";
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
  OrderReducer,
  ReviewWriteReducer,
  ReviewWriteStateReducer,
  DeliveryReducer,
  DiscountReducer,
  OrderSendReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
