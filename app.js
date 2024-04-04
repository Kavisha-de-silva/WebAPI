const express = require('express');
const bodyParser = require('body-parser');

const app = express()

const postsRoute = require('./routes/posts');

app.use(bodyParser.json()); // to support JSON-

app.use("/posts",  postsRoute);

module.exports = app

// an application logic is written in controler
// define all the enpoind that we can access in router