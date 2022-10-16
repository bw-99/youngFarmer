import React from "react";
import { ReactNode, FC } from "react";
import { useDispatch } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { GOTO_HOME_PAGE, GOTO_SEARCH_PAGE, GOTO_LIKE_PAGE, GOTO_CHAT_PAGE, GOTO_MY_PAGE } from "../common/BottomNavigationBar/BottomNavigationBarActions";

interface Props {
  children?: ReactNode
  // any props that come into the component
}


export  const BottomNavBarChanger:FC<Props> = ({ children, ...props }) => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(location.pathname.split("/")[1]);
  
  switch (location.pathname.split("/")[1]) {
    case "main":
      dispatch(GOTO_HOME_PAGE());
      break;
    case "search":
      dispatch(GOTO_SEARCH_PAGE());
      break;
    case "like":
      dispatch(GOTO_LIKE_PAGE());
      break;
    case "chat":
      dispatch(GOTO_CHAT_PAGE());
      break;
    case "mypage":
      dispatch(GOTO_MY_PAGE());
      break;
    default:
      break;
  }
  
  
  return (
    <div {...props}>
      {children}
    </div>
  )
}