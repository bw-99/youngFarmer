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
import { getFollwedStore } from "../pages/MyPage/MyAction";
import { getItemWithExpireTime, removeItem, setItemWithExpireTime } from "./localStorage";


interface Props {
    children?: ReactNode,
}
  

export const AuthProvider:FC<Props> = ({children}) :React.ReactElement|null => {
    const [user, setUser] = useState<null | boolean>(null);
    const dispatch = useDispatch();

    useEffect(()=>{
        FirebaseAuth.onAuthStateChanged((data)=> {
            if(data){
                setItemWithExpireTime("user", true, 1000*60*60);
                dispatch(getLikeAction(data.uid));
                dispatch(getCartAction(data.uid));
                dispatch(getFollwedStore(data.uid));
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