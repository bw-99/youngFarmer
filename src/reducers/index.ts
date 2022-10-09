import {combineReducers} from "redux";
import { BottomNavigationBarReducer } from "../common/BottomNavigationBar/BottomNavigationBarReducer";
import { SearchReducer } from "../pages/SearchPage/SearchReducer";
import { SplashReducer } from "../pages/SplashPage/SplashReducer";

const rootReducer = combineReducers({
  BottomNavigationBarReducer,
  SplashReducer,
  SearchReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
