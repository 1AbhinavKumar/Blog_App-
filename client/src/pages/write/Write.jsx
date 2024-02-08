import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

function Write() {
  return (
    <div className=" pt-12 flex flex-col md:pl-40 pl-2">
      <img
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        className="  md:w-3/4 pr-2 h-96 rounded-xl object-cover w-full"
      />
      <form className=" relative">
        <div className=" flex items-center ">
          <label htmlFor="fileInput">
            <FontAwesomeIcon
              icon={faSquarePlus}
              className=" w-7 h-7 text-lg flex items-center cursor-pointer text-gray-700 rounded-full justify-end "
            />
          </label>

          <input id="fileInput" type="file" style={{ display: "none" }} />

          <input
            placeholder="Title ..."
            type=" text"
            autoFocus={true}
            className=" text-xl border-none p-5  w-3/4 placeholder:text-gray-500 font-normal focus:outline-none "
          />
        </div>
        <div>
          <textarea
            placeholder="Tell your story.... "
            type="text"
            rows={6}
            autoFocus={true}
            className=" text-2xl border-none p-5 w-3/4 placeholder:text-gray-500 font-normal  focus:outline-none"
          />
        </div>
        <button type=" submit" className=" absolute top-5 right-11 border-none rounded-md text-white text-xl cursor-pointer flex items-center bg-teal-500 p-1 hover:bg-teal-400">Publish</button>
      </form>
    </div>
  );
}

export default Write;
