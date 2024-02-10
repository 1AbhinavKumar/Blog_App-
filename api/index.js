const express = require("express");
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(() => {
        console.log("connected");
    })
    .catch((err) => console.log(err));

app.use("/lama", (req, res) => {
    console.log("hey this is lama url ");
});

app.listen("5000", () => {
    console.log("backend is running ");
});