import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faSquareXTwitter,
  faSquarePinterest,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import user from "../assets/WhatsApp Image 2023-11-10 at 2.35.21 PM.jpeg";
import search from "../assets/search.png";

function TopBar() {
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Contact",
    },
    {
      id: 4,
      link: "Write",
    },
    {
      id: 5,
      link: "Logout",
    },
  ];

  return (
    <div className="w-full h-50 bg-white sticky top-0 flex items-center z-20">
      {/* --------------- right section -------------------- */}

      <div className="flex-3 flex items-center justify-center ">
        <FontAwesomeIcon
          icon={faFacebookSquare}
          className=" ml-2 mr-5 text-2xl text-gray-500 cursor-pointer hover:text-blue-500"
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
          {/* <li className="mr-5 text-18 font-bold cursor-pointer text-gray-500">
            Home
          </li>
          <li className="mr-5 text-18 font-bold cursor-pointer text-gray-500">
            About
          </li>
          <li className="mr-5 text-18 font-bold cursor-pointer text-gray-500">
            Contact
          </li>
          <li className="mr-5 text-18 font-bold cursor-pointer text-gray-500">
            Write
          </li>
          <li className="mr-5 text-18 font-bold cursor-pointer text-gray-500">
            Logout
          </li> */}
          {/* instead this we can map  */}

          {links.map(({ id, link }) => (
            <li
              key={id}
              className="mr-5 text-20 font-bold cursor-pointer text-gray-500  hover:scale-110 duration-150 "
            >
              {link}
            </li>
          ))}
        </ul>
      </div>

      {/* ---------------------left section --------------------------- */}
      <div className="flex-3 flex items-center justify-center ">
        <img
          src={user}
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
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
