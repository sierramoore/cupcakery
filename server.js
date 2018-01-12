const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extend: true}));

const Cupcake = require('./models/cupcakes.js');

app.get('/cupcakes', (req,res) =>{
    console.log("works")
    Cupcake.create(req.body,(err,createCupcake)=>{

        console.log("works")
    })
});

app.listen(port, (req, res) =>{
    console.log("listening on ", port)
});