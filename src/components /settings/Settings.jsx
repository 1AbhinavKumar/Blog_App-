import React from "react";
import Sidebar from "../sidebar/sidebar";
import User_img from "../assets/WhatsApp Image 2023-11-10 at 2.35.21 PM.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function Settings() {
  return (
    <div className=" flex ">
      <div className=" flex-9 p-5">
        <div className=" flex items-center justify-between">
          <span className=" text-2xl mb-5"> Update your account</span>
          <span className=" text-red-800 text-xs cursor-pointer">
            Delete account
          </span>
        </div>

    {/* --------------- form part ---------------------- */}
        <form className=" flex flex-col">
          <label className=" text-lg mt-5"> Profile Picture</label>

          <div className=" flex items-center mt-3 mb-3">
            <img
              src={User_img}
              alt=""
              className=" h-24 w-20 rounded-xl object-cover"
            />
            <label htmlFor="fileInput">
              <FontAwesomeIcon
                icon={faCircleUser}
                className=" w-6 h-6 p-1 flex justify-center items-center border-none rounded-full ml-2 text-white bg-teal-400 cursor-pointer"
              />
            </label> 
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className=" w-1/3 "
            />
          </div>
          
        {/* --------text area and labels -------------- */}
          <label className=" text-lg mt-5"> Username</label>
          <input type="text" name="name" placeholder="Username" className=" text-gray-700 mt-3 mb-3 h-7 border-gray-500 border-b focus:outline-none" />

          <label className=" text-lg mt-5">Email</label>
          <input type="email" placeholder="abhi@gmail.com" name="email"  className=" text-gray-700 mt-3 mb-3 h-7 border-gray-500 border-b  focus:outline-none"/>

          <label className=" text-lg mt-5"> Password</label>
          <input type="password" placeholder="Password" name="password"  className=" text-gray-700 mt-3 mb-3 h-7 border-b border-gray-400 focus:outline-none"/>

          <button type="submit" className=" items-center w-28  border-none  rounded-lg text-white bg-teal-600 p-2 mt-5 cursor-pointer flex justify-center hover:bg-teal-500 self-center">
            Update
            </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
