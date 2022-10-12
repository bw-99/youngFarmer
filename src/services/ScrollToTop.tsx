import { ReactNode, FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { GOTO_HOME_PAGE, GOTO_SEARCH_PAGE, GOTO_LIKE_PAGE, GOTO_CHAT_PAGE, GOTO_MY_PAGE } from "../common/BottomNavigationBar/BottomNavigationBarActions";

interface Props {
  children?: ReactNode
  // any props that come into the component
}


export  const ScrollToTop:FC<Props> = ({ children, ...props }) => {
  const params = useParams();
//   const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div {...props}>
      {children}
    </div>
  )
}