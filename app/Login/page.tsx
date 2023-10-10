"use client";

import { useEffect, useState } from "react";

const Login = (props: any) => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const inputHandler = (identifier: string, value: string) => {
    setUserDetails((prevState) => {
      return { ...prevState, [identifier]: value };
    });
    validationHandler(identifier);
  };

  const validationHandler = (identifier: string) => {
    if (identifier == "email") {
      if (
        !userDetails.email.includes("@") ||
        !userDetails.email.includes(".")
      ) {
        console.log(error, identifier);
        setError((prevState) => {
          return { ...prevState, ["emailError"]: "must contain @ and ." };
        });
      } else {
        console.log(error);
        setError((prevState) => {
          return { ...prevState, ["emailError"]: "" };
        });
      }
    } else {
      if (userDetails.password.length < 6) {
        console.log(error);
        setError((prevState) => {
          return {
            ...prevState,
            ["passwordError"]: "must be atleast 6 characters long",
          };
        });
      } else {
        console.log(error);
        setError((prevState) => {
          return { ...prevState, ["passwordError"]: "" };
        });
      }
    }
    if (
      userDetails.email.includes("@") &&
      userDetails.email.includes(".") &&
      userDetails.password.length > 6
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    localStorage.setItem("loggedIn", JSON.stringify("yes"));
    props.onLogin();
  };
  useEffect(() => {
    let loginInfo = localStorage.getItem("loggedIn");
    // console.log(JSON.parse(loginInfo) == "yes")
    if (JSON.parse(loginInfo) == "yes") {
      props.onLogin(true);
    } else {
      props.onLogout(false);
    }
  }, [props.onLogin, props.onLogout]);

  useEffect(() => {}, [isDisabled]);

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-4 shadow-xl">
      <div className="flex items-center justify-center p-4 gap-4">
        <div className="flex flex-col gap-8 p-2">
          <label className="p-1">Email</label>
          <label className="p-1">Password</label>
        </div>
        <div className="flex flex-col gap-8 p-2">
          <input
            className={`border-2 rounded-md p-1 ${
              error.emailError ? "border-red-300" : "border-black"
            }`}
            type="text"
            placeholder="email"
            onChange={(event) => inputHandler("email", event.target.value)}
          />
          <input
            className={`border-2 rounded-md p-1 ${
              error.passwordError ? "border-red-300" : "border-black"
            }`}
            type="password"
            placeholder="password"
            onChange={(event) => inputHandler("password", event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-8 p-2">
          <span className="p-1 text-red-400">{error.emailError}</span>
          <span className="p-1 text-red-400">{error.passwordError}</span>
        </div>
      </div>
      <div>
        <button
          className={`p-2 rounded-xl font-bold ${
            isDisabled
              ? "bg-slate-300 text-slate-800"
              : "bg-green-600 text-white"
          }`}
          type="submit"
          onClick={submitHandler}
          disabled={isDisabled}
        >
          Log In
        </button>
        <p>{isDisabled}</p>
      </div>
    </div>
  );
};

export default Login;
