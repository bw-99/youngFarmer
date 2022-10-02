import { CHANGE_USER, REGISTER_USER } from "./RegisterConstants";

export function adminReducer(state = {}, action:any) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
}

type TextState = {
    text: string
}

const initState: TextState = {
    text: "ffff"
}

export function textReducer(state = initState, action:any) {
    switch (action.type) {
      case CHANGE_USER:
        return { ...state, text: state.text + action.payload };
      default:
        return state;
    }
  }