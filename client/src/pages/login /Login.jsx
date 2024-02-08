import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className=" h-screen flex flex-col  justify-center bg-cover items-center bg-login-page ">
      <div className=" bg-slate-400 p-5 flex flex-col items-center rounded-3xl bg-opacity-35">
        <span className=" text-5xl font-lora text-black font-black">
          {" "}
          Login{" "}
        </span>

        <form className=" mt-5 flex flex-col">
          <label className=" mt-3 mb-3 font-black font-lora text-xl">
            {" "}
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email....."
            className=" p-3 bg-white border-none rounded-lg focus:outline-none "
          />

          <label className=" mt-3 mb-3 font-black font-lora text-xl">
            {" "}
            Password{" "}
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password......"
            className=" p-3 bg-white border-none rounded-lg focus:outline-none"
          />

          <button className=" mt-5 cursor-pointer bg-teal-600 text-white p-3 border-none rounded-lg text-center hover:bg-teal-500">
            Login
          </button>
        </form>
        <button className=" absolute top-14 right-5 bg-teal-600 cursor-pointer p-2 border-none text-white rounded-lg mt-2 hover:bg-teal-500">
          <Link to='/register'> Register </Link>
        </button>
      </div>
    </div>
  );
}

export default Login;
