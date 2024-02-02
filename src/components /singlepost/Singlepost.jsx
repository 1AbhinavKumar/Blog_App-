import React from "react";
import blog_img from "../assets/blog.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

function Singlepost() {
  return (
    <div className=" flex-9">
      <div className=" p-5 pr-0">
        <img src={blog_img} alt="" className=" w-full h-80 rounded-lg object-cover"/>
        <h1 className=" text-center m-3 text-2xl font-lora">
          lorem ipsum dor
          <div className=" float-right text-xl" >
            <FontAwesomeIcon icon={faPenToSquare} className=" cursor-pointer ml-2 text-green-00 " />
            <FontAwesomeIcon icon={faTrash} className=" cursor-pointer ml-2 text-red-500" />
          </div>
        </h1>

        <div className=" mb-5 flex justify-between text-base font-varela">
          <span className=" text-yellow-700">
            Author :<b className=" ml-1">Safak</b>
          </span>
          <span className=" text-yellow-700"> 1 day ago</span>
        </div>
        <p className=" text-gray-800 text-lg leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt suscipit
          quod impedit sapiente nesciunt libero, labore reprehenderit quibusdam
          dolore assumenda sit repudiandae aut alias sint, minima numquam in
          temporibus nihil. Lorem ipsum dolor sit amet consectetur. adipisicing
          elit. Aspernatur deserunt sint sed corrupti perferendis magnam magni
          itaque maiores natus similique iste, ipsa ab eaque quis vero quisquam
          illo modi quidem.
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
          voluptatem nisi quisquam quis, voluptate libero distinctio atque
          rerum, explicabo harum eos debitis ea dignissimos officiis officia
          praesentium? Sapiente, culpa. Quas!
        </p>
      </div>
    </div>
  );
}

export default Singlepost;
