import React, { useEffect, useState } from "react";
import user from "../assets/WhatsApp Image 2023-11-10 at 2.35.21 PM.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faSquareXTwitter,
  faSquarePinterest,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";

function Sidebar() {
  const [cats, setCats] = useState([]); 

  useEffect(() =>{
    const getCats = async ()=>{
      const res = await axios.get("/categories");
      setCats(res.data);
    }
    getCats();
  },[]);


  return (
    <div className=" flex-3 m-3 pb-8 bg-slate-100 pl-2 pr-2 pt-2 flex flex-col items-center ">
      {/* ------------ top part ------------------------ */}
      <div className=" flex flex-col  items-center ">
        <span className=" m-2 border-t-2 border-teal-500 border-b-2  font-varela font-semibold">
          About Me
        </span>

        <img src={user} alt="" className=" mt-1" />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, et.
          Consectetur dolorem vitae quas adipisci in repellendus quis.
        </p>
      </div>
      {/* --------------- mid part categories ------------- */}
      <div className=" flex flex-col items-center">
        <span className=" m-2 border-t-2 border-teal-500 border-b-2  font-varela font-bold">
          Categories
        </span>

        <ul className=" mb-2 mt-2 text-center">
          {cats.map((category) => (
            <Link  to={`/?cat=${category.name}`}>
            <li key={category.id} className=" inline-block w-1/2 cursor-pointer mt-1">
              {category.name}
            </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* ------------- bottom section ------------- */}
      <div className=" flex flex-col items-center justify-center">
        <span className=" m-2 border-t-2 border-teal-500 border-b-2  font-varela font-semibold ">
          FOLLOW US
        </span>
        <div>
          <FontAwesomeIcon
            icon={faFacebookSquare}
            className=" ml-2 mr-3 text-2xl text-gray-700 hover:scale-110 hover:text-blue-500 duration-200  cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faSquareXTwitter}
            className="mr-3 text-2xl text-gray-700 hover:scale-110 duration-200  cursor-pointer  hover:text-black"
          />
          <FontAwesomeIcon
            icon={faSquarePinterest}
            className=" mr-3 text-2xl text-gray-700 hover:scale-110 duration-200  cursor-pointer  hover:text-red-400"
          />
          <FontAwesomeIcon
            icon={faSquareInstagram}
            className=" mr-2 text-2xl text-gray-700 hover:scale-110 duration-200  cursor-pointer  hover:text-red-600"
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
