const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoriesRoute = require('./routes/categories')
const multer = require('multer')


dotenv.config();
app.use(express.json());
const encodedPassword = encodeURIComponent('1Abhin@v');
const mongo_url = `mongodb+srv://Abhi1105:${encodedPassword}@blogapp.yzux6lx.mongodb.net/`;


mongoose
.connect(mongo_url, {
})
.then(() => {
  // console.log(process.env.mongo_url)
  console.log("connected");
})
.catch((err)=>{
   console.log(err)
  });



  const storage = multer.diskStorage({
    destination:(req,file,cb) =>{  // cb-> callback function
      cb(null,"images");  // images is the destination 
    },
    filename:(req,file,cb)=>{  // name of the file for saving
      cb(null,res.body.name);  
    },
  })

  const upload = multer({storage:storage}); // storage== our storage on line 23
  app.post("/api/upload",upload.single("file"), (req,res)=>{
    res.status(200).json("File has been uploaded");
  })

app.use("/api/auth", authRoute);
app.use ("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoriesRoute); 

app.listen("5000", () => {
  console.log("backend is running ");
});