import {combineReducers} from "redux";
import { BottomNavigationBarReducer } from "./BottomNavigationBarReducer";
import { SearchReducer } from "./SearchReducer";
import { SplashReducer } from "./SplashReducer";

const rootReducer = combineReducers({
  BottomNavigationBarReducer,
  SplashReducer,
  SearchReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
