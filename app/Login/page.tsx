"use client";

import { useEffect, useState } from "react";

const Login = (props: any) => {
  const [email,setEmail] = useState<{value:string;validity:null|boolean}>({
    value:"",
    validity:null
  })

  const [password,setPassword] = useState<{value:string,validity:null|boolean}>({
    value:"",
    validity:null
  })

  const inputHandler =(identifier:string,value:string)=>{
    if(identifier=="email"){
      setEmail({validity:value.includes("@") && value.includes(".") ,value:value})
    }
    if(identifier=="password"){
      setPassword({validity:value.trim().length>=6 ,value:value})
    }
  }
  const submitHandler =(event:any)=>{
    event.preventDefault();
    localStorage.setItem("loggedIn",JSON.stringify("yes"));
    props.onLogin();
  }


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
              email.validity==false ? "border-red-300" : "border-black"
            }`}
            type="text"
            placeholder="email"
            onChange={(event) => inputHandler("email", event.target.value)}
          />
          <input
            className={`border-2 rounded-md p-1 ${
              password.validity==false ? "border-red-300" : "border-black"
            }`}
            type="password"
            placeholder="password"
            onChange={(event) => inputHandler("password", event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-8 p-2">
          <span className="p-1 text-red-400">{email.validity==false?"must conatin @ and .":""}</span>
          <span className="p-1 text-red-400">{password.validity==false?"must be atleast 6 characters long":""}</span>
        </div>
      </div>
      <div>
        <button
          className={`p-2 rounded-xl font-bold ${
            (email.validity==true && password.validity==true)
              ?"bg-green-600 text-white"
              : "bg-slate-300 text-slate-800"
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

export default Login;
