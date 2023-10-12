"use client";

import { useState, useReducer, useEffect } from "react";

const emailReducer = (state: any, action: any) => {
  if (action.type == "input_email") {
    return {
      value: action.val,
      validity: action.val.includes("@") && action.val.includes("."),
    };
  }
  return { value: "", validity: null };
};


const passwordReducer = (state: any, action: any) => {
  if (action.type == "input_password") {
    return {
      value: action.val,
      validity: action.val.trim().length > 6,
    };
  }
  return { value: "", validity: null };
};


const ReducerLogin = (props: any) => {
  const [email, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    validity: null,
  });
  const [password, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    validity: null,
  });


  const submitHandler = (event: any) => {
    event.preventDefault();
    localStorage.setItem("loggedIn", JSON.stringify("yes"));
    props.onLogin(true);
  };


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
              email.validity || email.validity == null
                ? "border-black"
                : "border-red-300"
            }`}
            type="text"
            placeholder="email"
            onChange={(event) =>
              dispatchEmail({ type: "input_email", val: event.target.value })
            }
          />
          <input
            className={`border-2 rounded-md p-1 ${
              password.validity == null || password.validity
                ? "border-black"
                : "border-red-300"
            }`}
            type="password"
            placeholder="password"
            onChange={(event) =>
              dispatchPassword({
                type: "input_password",
                val: event.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-8 p-2">
          <span className="p-1 text-red-400">
            {email.validity || email.validity == null
              ? ""
              : "must contain @ and ."}
          </span>
          <span className="p-1 text-red-400">
            {password.validity || password.validity == null
              ? ""
              : "must be atleast 6 characters long"}
          </span>
        </div>
      </div>
      <div>
        <button
          className={`p-2 rounded-xl font-bold ${
            !email.validity || !password.validity
              ? "bg-slate-300 text-slate-800"
              : "bg-green-600 text-white"
          }`}
          type="submit"
          onClick={submitHandler}
          disabled={!email.validity || !password.validity}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default ReducerLogin;
