import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faSquareXTwitter,
  faSquarePinterest,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

import search from "../assets/search.png";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
// import { useNavigate } from "react-router-dom"; // Import useNavigate


function TopBar() {
  const {user,dispatch} = useContext(Context); 

  // const navigate = useNavigate(); // Initialize the hook
  const handleLogout =()=>{
    dispatch({type: "LOGOUT"});
    // navigate("/login");
    // window.location.replace("/login")
    
  }

  // const links = [
  //   {
  //     id: 1,
  //     link: "",
  //   },
  //   {
  //     id: 2,
  //     link: "About",
  //   },
  //   {
  //     id: 3,
  //     link: "Contact",
  //   },
  //   {
  //     id: 4,
  //     link: "Write",
  //   },
  //   {
  //     id: 5,
  //     link: user ? "Logout" : null,
  //     // onClick: user ? handleLogout : null // Update: conditional onClick
  //   },
  // ];

  return (
    <div className="w-full h-12 bg-white sticky top-0 flex items-center z-20">
      {/* --------------- right section -------------------- */}

      <div className="flex-3 flex items-center justify-center ">
        <FontAwesomeIcon
          icon={faFacebookSquare}
          className=" ml-2 mr-5 text-2xl text-gray-500 cursor-pointer hover:text-blue-600"
        />
        <FontAwesomeIcon
          icon={faSquareXTwitter}
          className="mr-5 text-2xl text-gray-500 cursor-pointer hover:text-black"
        />
        <FontAwesomeIcon
          icon={faSquarePinterest}
          className=" mr-5 text-2xl text-gray-500 cursor-pointer hover:text-red-400"
        />
        <FontAwesomeIcon
          icon={faSquareInstagram}
          className=" mr-8 text-2xl text-gray-500 cursor-pointer hover:text-red-600 "
        />
      </div>

      {/* --------------------- mid section   ---------------------- */}
      <div className="flex-6 ">
        <ul className="flex justify-center m-0 p-0 ">
          <Link to="/" duration={500}>
          <li className="mr-5 text-20 font-bold cursor-pointer text-gray-500  hover:bg-slate-200 hover:rounded-md p-1">
            Home
          </li>
          </Link>

          <Link to="/About" duration={500}>
          <li className="mr-5 text-20 font-bold cursor-pointer text-gray-500  hover:bg-slate-200 hover:rounded-md p-1">
            About
          </li>
          </Link>
            
          <Link to="/contact" duration={500}>
          <li className="mr-5 text-20 font-bold cursor-pointer text-gray-500  hover:bg-slate-200 hover:rounded-md p-1">
            Contact
          </li>
          </Link>

          <Link to="/write" duration={500}>
          <li className="mr-5 text-20 font-bold cursor-pointer text-gray-500  hover:bg-slate-200 hover:rounded-md p-1">
            Write
          </li>
          </Link>

          <li className="mr-5 text-20 font-bold cursor-pointer text-gray-500  hover:bg-slate-200 hover:rounded-md p-1" onClick={handleLogout}>
            {user && "Logout"}

          </li>

          {/* instead this we can map  */}
{/* 
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="mr-5 text-20 font-bold cursor-pointer text-gray-500  hover:bg-slate-200 hover:rounded-md p-1 "
            >
              {link === "" ? (
                <Link to="/" duration={500}>Home</Link>
              ) : (
                <Link to={link} duration={500}>{link}</Link>
              )}
            </li>
          ))} */}
        </ul>
      </div>

      {/* ---------------------left section --------------------------- */}
      <div className="flex-3 flex items-center justify-center ">
        {
          user?
            <img
              src={user.profilePic}
              alt=""
              className="w-9
               h-9 rounded-full object-cover"
            />
          :
          <>
          <Link to="/login" className=" mr-3 font-varela font-semibold text-gray-500  hover:bg-slate-200 hover:rounded-md p-1"> Login </Link>
          <Link to="/register" className=" mr-1 font-varela font-semibold text-gray-500  hover:bg-slate-200 hover:rounded-md p-1"> Register </Link>
          </>
          
        }
        <img
          src={search}
          alt=""
          className="w-5 text-18 cursor-pointer text-gray-500 mr-5 ml-3 "
        />
      </div>
    </div>
  );
}

export default TopBar;
