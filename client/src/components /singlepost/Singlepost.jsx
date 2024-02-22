import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function Singlepost() {
  const location = useLocation(); 
  const path = location.pathname.split("/")[2];   // to get the id of the post we have used location  use print(location .pathname )
  
  const [post, setPost]= useState({});

  useEffect(()=>{
    const getPost = async () =>{
      const res = await axios.get("/posts/"+path);
      setPost(res.data)
    }
    getPost();
  },[path])

  return (
    <div className=" flex-9">
      <div className=" p-5 pr-0">
        {post.photo && (
          <img src={post.photo} alt="" className=" w-full h-80 rounded-lg object-cover"/>
        )}
        <h1 className=" text-center m-3 text-2xl font-lora">
          {post.title}
          <div className=" float-right text-xl" >
            <FontAwesomeIcon icon={faPenToSquare} className=" cursor-pointer ml-2 text-green-00 " />
            <FontAwesomeIcon icon={faTrash} className=" cursor-pointer ml-2 text-red-500" />
          </div>
        </h1>

        <div className=" mb-5 flex justify-between text-base font-varela">
          <span className=" text-yellow-700">
            Author :
            <Link to={`/?user=${post.username}`}>
            <b className=" ml-1">{post.username}</b>
            </Link>
          </span>
          <span className=" text-yellow-700">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className=" text-gray-800 text-lg leading-6">
          {post.desc}
        </p>
      </div>
    </div>
  );
}

export default Singlepost;
