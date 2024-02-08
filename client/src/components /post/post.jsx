import React from "react";
import blog_img from "../assets/blog.jpg";
function post() {
  return (
    <div className=" w-96 mt-4 mr-6 mb-10 ml-6">
      <img
        src={blog_img}
        alt=""
        className=" w-full object-cover rounded-md h-60"
      />

      <div className=" flex flex-col items-center">
        <div>
          <span className=" font-varela text-xs text-yellow-700 leading-5 mt-5 mr-3 cursor-pointer">
            Music
          </span>
          <span className=" font-varela text-xs text-yellow-700 leading-5 mt-5 mr-3 cursor-pointer">
            Life
          </span>
        </div>
        <span className=" font-Js-Ss text-xl font-black mt-4 cursor-pointer">
          Lorem, ipsum dolor sit amet consectetur
        </span>
        <hr />
        <span className=" font-lora italic text-sm font-normal mt-3">
          1 hour ago
        </span>
        </div>
        <p className=" font-varela text-sm font-normal leading-5 mt-4 overflow-hidden text-ellipsis line-clamp-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
          doloremque labore enim, aspernatur repudiandae veritatis sed
          laboriosam debitis assumenda! Officiis quas totam nobis fugiat
          expedita placeat libero exercitationem est perferendis.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam libero, quidem harum sequi aperiam consectetur eligendi commodi odit vel, perspiciatis excepturi illo cupiditate molestias iusto consequuntur eaque inventore, temporibus repudiandae?
        </p>
    </div>
  );
}

export default post;
