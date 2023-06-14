
import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import { UserState } from "../recoil/globalState";
import { useRecoilState } from "recoil";

export default function AuthGuard(props) {

    const [user,setUser]=useRecoilState(UserState)
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const checkUser = () => {
        const user = localStorage.getItem("user");
        console.log(user,"user")
       
         console.log(user?.token,"uuui")
        if (!user || user === 'undefined' || JSON.parse(user)?.token === undefined ) {
            setIsLoggedIn(false);
            return navigate('/register');
        }
         setIsLoggedIn(true);
         setUser(JSON.parse(user))
       }
    useEffect(() => {
        checkUser();
    }, [isLoggedIn]);
    console.log(user,"uu")
        return (
            <React.Fragment>
                {
                    isLoggedIn ? props.children : null
                }
            </React.Fragment>
        );
}
