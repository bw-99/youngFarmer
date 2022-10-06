import {combineReducers} from "redux";
import { BottomNavigationBarReducer } from "../common/BottomNavigationBar/BottomNavigationBarReducer";
import { mainMovieReducer, remainTaskReducer } from "../pages/LandingPage/LandingReducer";
import {adminReducer, userNameReducer,counterReducer} from "../pages/Register/RegisterReducer";

const rootReducer = combineReducers({
  adminReducer,
  userNameReducer,
  counterReducer,
  mainMovieReducer,
  remainTaskReducer,
  BottomNavigationBarReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
