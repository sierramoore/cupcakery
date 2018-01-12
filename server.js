const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extend: true}));



app.listen(port, (req, res) =>{
    console.log("listening on ", port)
});