"use client";

import { useState } from "react";
import Wrapper from "./Helpers/page";
import Login from "./Login/page";
import MainHeader from "./MainHeader/page";
import Dashboard from "./Home/page";

export default function Home() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const loginHandler = () => {
    setisLoggedIn(true);
  };
  const logoutHandler = () => {
    setisLoggedIn(false);
    localStorage.setItem("loggedIn", JSON.stringify("no"));
  };
  return (
    <Wrapper>
      <MainHeader onLogin={isLoggedIn} onLogout={logoutHandler} />
      {!isLoggedIn && <Login onLogin={loginHandler} onLogout={logoutHandler} />}
      {isLoggedIn && <Dashboard />}
    </Wrapper>
  );
}
