const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000

const imageSearch = require('image-search-google');

const client = new imageSearch(process.env.CSE, process.env.apiKey);
const options = { page: 1 };
client.search('APJ Abdul kalam', options)
    .then(images => {
        console.log(images)
    })
    .catch((error) => { console.log(error) });



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
