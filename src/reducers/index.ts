import {combineReducers} from "redux";
import { BottomNavigationBarReducer } from "../common/BottomNavigationBar/BottomNavigationBarReducer";
import { mainMovieReducer, remainTaskReducer } from "../pages/LandingPage/LandingReducer";
import {adminReducer, userNameReducer,counterReducer} from "../pages/Register/RegisterReducer";
import { SearchReducer } from "../pages/SearchPage/SearchReducer";
import { SplashReducer } from "../pages/SplashPage/SplashReducer";

const rootReducer = combineReducers({
  adminReducer,
  userNameReducer,
  counterReducer,
  mainMovieReducer,
  remainTaskReducer,
  BottomNavigationBarReducer,
  SplashReducer,
  SearchReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
