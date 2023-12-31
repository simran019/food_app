"use client";

import { useState, useEffect } from "react";
import Wrapper from "./Helpers/page";
import Login from "./Login/page";
import MainHeader from "./MainHeader/page";
import Dashboard from "./Home/page";
import AuthContext from "./store/page";

export default function Home() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const loginHandler = () => {
    setisLoggedIn(true);
  };
  const logoutHandler = () => {
    setisLoggedIn(false);
    localStorage.setItem("loggedIn", JSON.stringify("no"));
  };
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("loggedIn")!) == "yes") {
      setisLoggedIn(true);
    } else {
      setisLoggedIn(false);
    }
  }, [isLoggedIn]);
  return (
      <AuthContext.Provider value={{
        isLoggedIn:isLoggedIn,
        onLogout:logoutHandler
        }}>
        <Wrapper>
        <MainHeader/>
        {isLoggedIn ? (
          <Dashboard />
        ) : (
          <Login onLogin={loginHandler}/>
        )}
        </Wrapper>
      </AuthContext.Provider>
  );
}
