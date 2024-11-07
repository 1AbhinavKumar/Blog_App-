import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../context/Context";
import axios from "axios";

function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [categories,setCategories] = useState([])


  const { user } = useContext(Context);

  const Categories = ["General", "Web-dev", "DSA", "Web-3","Blockchain"]
  
  const handleCategoryChange = (category) => {
    setCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      username: user.username,
      title,
      desc,
      categories,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name; // in order to prevent the user from giving two diff. files same name .
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;

      try {
        await axios.post("upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <div className=" pt-12 flex flex-col md:pl-40 pl-2">
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt=""
          className="  md:w-3/4 pr-2 h-96 rounded-xl object-cover w-full"
        />
      )}
      {/* URL.createObjectURL creates a URL that represents the given file object */}
      <form className=" relative" onSubmit={handleSubmit}>
        <div className=" flex items-center ">
          <label htmlFor="fileInput">
            <FontAwesomeIcon
              icon={faSquarePlus}
              className=" w-7 h-7 text-lg flex items-center cursor-pointer text-gray-700 rounded-full justify-end "
            />
          </label>

          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />

          <input
            placeholder="Title ..."
            type=" text"
            autoFocus={true}
            className=" text-xl border-none p-5  w-3/4 placeholder:text-gray-500 font-normal focus:outline-none "
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* cataegory addition */}
        <div>
          <ul className="flex gap-2">
            {Categories.map((category,index)=>(
            <li key={index}>
              <input
                type="checkbox"
                id={`option${index}`}
                value={category}
                className="hidden peer"
                onChange={()=>handleCategoryChange(category)}
              />
              <label
                htmlFor={`option${index}`}
                className="inline-flex items-center justify-center p-1 border-2 border-gray-300 rounded-3xl cursor-pointer peer-checked:border-blue-500 peer-checked:bg-blue-200 sm:min-w-24 min-w-16 text-sm px-2"
              >
                {category}
              </label>
            </li>
            ))}

          </ul>
        </div>
        <div>
          <textarea
            placeholder="About the Article... "
            type="text"
            rows={6}
            autoFocus={true}
            className=" text-md border-none p-5 w-3/4 placeholder:text-gray-500 font-normal  focus:outline-none"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button
          type=" submit"
          className=" absolute top-5 right-11 border-none rounded-sm text-white text-sm cursor-pointer flex items-center bg-blue-600 px-3 py-2 hover:bg-blue-700"
        >
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;
