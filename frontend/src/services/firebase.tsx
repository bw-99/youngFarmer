import { children } from "cheerio/lib/api/traversing";
import { browserSessionPersistence, getAuth, setPersistence } from "firebase/auth";
import React, { useState, useEffect, ReactNode, FC, createContext, useContext } from "react";
import { render } from "react-dom";
import { useDispatch } from "react-redux";
import { Link, Navigate, Outlet, Route } from "react-router-dom";
import { FirebaseAuth } from "..";
import { AuthContext } from "../App";
import { GetUserInfoAction } from "../pages/LoginPage/LoginAction";
import LoginPage from "../pages/LoginPage/LoginPage";
import { getItemWithExpireTime } from "./localStorage";


interface Props {
    children?: ReactNode,
  }
  
  
export const AuthProvider:FC<Props> = ({children}) :React.ReactElement|null => {
    
    const [user, setUser] = useState<null | boolean>(null);
    const dispatch = useDispatch();
    // setPersistence(auth, browserSessionPersistence)
    useEffect(()=>{
        console.log("auth change use effect");

        FirebaseAuth.onAuthStateChanged((data)=> {
            dispatch(
                GetUserInfoAction(data)
            );
            if(data){
                console.log("auth change to true");
                setUser(true);
            }else{
                console.log("auth change to false");
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

    // console.log("++====================++" + currentUser + "++====================++");

    return (
        currentUser?  <Outlet/> 
        // :  <LoginPage /> 
        : <Navigate to={"/login"}/> 
    );
}

export const LoginRoute:FC<NavigateProps> = ({children, ...props}):any => {
    let currentUser = useContext(AuthContext);
    console.log("currentUser = " + currentUser);
    
    currentUser = currentUser? currentUser: false;

    return (
        currentUser? 
        <Navigate to={"/"} /> : children 
    );
}

export const getUserInfo = () => {
    FirebaseAuth.onAuthStateChanged((data)=> {
       return data;
    });
}