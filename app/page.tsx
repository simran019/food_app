"use client";

import { useState, useEffect} from "react";
import Wrapper from "./Helpers/page";
import Login from "./Login/page";
import MainHeader from "./MainHeader/page";
import Dashboard from "./Home/page";
import ReducerLogin from "./useReducerLogin/page";

export default function Home() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const loginHandler = () => {
    setisLoggedIn(true);
  };
  const logoutHandler = () => {
    setisLoggedIn(false);
    localStorage.setItem("loggedIn", JSON.stringify("no"));
  };
  useEffect(()=>{
    if(JSON.parse(localStorage.getItem("loggedIn")!)=="yes"){
      setisLoggedIn(true)
    }else{
      setisLoggedIn(false)
    }
  },[])
  return (
    <Wrapper>
      <MainHeader onLogin={isLoggedIn} onLogout={logoutHandler} />
      {/* {!isLoggedIn && <Login onLogin={loginHandler} onLogout={logoutHandler} />} */}
      {!isLoggedIn && <ReducerLogin onLogin={loginHandler} onLogout={logoutHandler}/>}
      {isLoggedIn && <Dashboard />}
    </Wrapper>
  );
}
