import { children } from "cheerio/lib/api/traversing";
import { browserSessionPersistence, getAuth, setPersistence, User } from "firebase/auth";
import React, { useState, useEffect, ReactNode, FC, createContext, useContext } from "react";
import { render } from "react-dom";
import { useDispatch } from "react-redux";
import { Link, Navigate, Outlet, Route } from "react-router-dom";
import { FirebaseAuth } from "..";
import { AuthContext } from "../App";
import { getCartAction } from "../pages/CartPage/CartAction";
import { getLikeAction, likeAction } from "../pages/LikePage/LikeAction";
import { GetUserInfoAction } from "../pages/LoginPage/LoginAction";
import LoginPage from "../pages/LoginPage/LoginPage";
import { getItemWithExpireTime, removeItem, setItemWithExpireTime } from "./localStorage";


interface Props {
    children?: ReactNode,
  }
  
/**
 * * 변경 1 -> 2
 * 1. user가 reload될 때마다 null로 설정됨 -> auth 받아오는 중 -> login 페이지로 이동 -> auth 받아옴 -> main 페이지로 이동
 * 2. user가 reload될 때마다 null -> 렌더링 직전 localstorage 값 비교 -> true -> 바로 main -> 이후 auth 변경 때마다 localstorage 변경
 */
export const AuthProvider:FC<Props> = ({children}) :React.ReactElement|null => {
    const [user, setUser] = useState<null | boolean>(null);
    const dispatch = useDispatch();

    useEffect(()=>{
        // getItemWithExpireTime("user")? setUser(true) : setUser(false);
        FirebaseAuth.onAuthStateChanged((data)=> {
            if(data){
                setItemWithExpireTime("user", true, 1000*60*60);
                dispatch(getLikeAction(data.uid));
                dispatch(getCartAction(data.uid));
                setUser(true);
            }
            else{
                removeItem("user");
                setUser(false);
            }
        })
    }, []);
    return (
        <AuthContext.Provider 
            value={user!}
        >
            {children}
        </AuthContext.Provider>
    )
}

interface NavigateProps {
    children?: ReactNode,
    path?: string,
    element? : any
  }

export const PrivateRoute:FC<NavigateProps> = ({children, ...props}):any => {
    const currentUser = useContext(AuthContext);

    if(currentUser == null) {
        return(
            <div>
            </div>
        );
    }

    return (
        currentUser?  <Outlet/> 
        : <Navigate to={"/login"}/> 
    );
}

export const LoginRoute:FC<NavigateProps> = ({children, ...props}):any => {
    let currentUser = useContext(AuthContext);

    if(currentUser == null) {
        return(
            <div>
            </div>
        );
    }

    return (
        currentUser? 
        <Navigate to={"/main"} /> : <Outlet/> 
    );
}

export const PublicRoute:FC<NavigateProps> = ({children, ...props}):any => {
    let currentUser = useContext(AuthContext);

    return (
        <Outlet/> 
    );
}