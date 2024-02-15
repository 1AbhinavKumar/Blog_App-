const router = require("express").Router();

const User = require("../models/User");
const bcrypt = require('bcrypt');

// Register

router.post("/register", async (req, res) => {
  // async func i.e we are using try and catch
  try {
    const salt = await bcrypt.genSalt(10);  // used for encrypting the password . 
    const hashedPass = await bcrypt.hash(req.body.password,salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save(); 
    res.status(200).json(user); 
  } catch (err) {
    res.status(500).json(err); // res -> responese the status error
    console.log(err);
  }
});

// Login 

router.post("/login", async(req,res)=>{
  try {
    const user = await User.findOne({username:req.body.username})
    !user && res.status(400).json("wrong credentials") // if user is none return wrong credentials . 
    
    const validate = await bcrypt.compare(req.body.password, user.password)    // here we are comparing the hash password.
    !validate  && res.status(400).json("Invalid Password")
    
    const {password,  ...others} = user._doc;  // this line is used to hide the password from the database . all the informations are in user._doc itself user contains lot of other informations that we don't need . 
    
    res.status(200).json(others)
  } catch(err){
    res.status(500).json(err);
  }
});


module.exports = router ;