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
        /*
        
		[{
			'url': item.link,
            'thumbnail':item.image.thumbnailLink,
            'snippet':item.title,
            'context': item.image.contextLink
		}]
		 */
    })
    .catch((error) => { console.log(error) });

// search for certain size
// client.search('Mahatma Gandhi', { size: 'large' });

// search for certain type
// client.search('Indira Gandhi', { type: 'face' });

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
