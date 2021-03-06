const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/cupcakes',{useMongoClient: true});
mongoose.connection.once('open', ()=>{
	console.log('working mongo');
})

app.use(bodyParser.urlencoded({ extend: true}));

const Cupcake = require('./models/cupcakes.js');

app.get('/cupcakes', (req,res) =>{
	Cupcake.find({}, (err, allCupcakes)=>{
		if (err) console.log(err);
		res.render('index.ejs', {
			cupcakes: allCupcakes
		})
	})	 
})
app.post('/cupcakes', (req,res)=>{
	if (req.body.delicious === 'on'){
		req.body.delicious = true;
	} else req.body.delicious = false;

	Cupcake.create(req.body,(err,createCupcake)=>{
        res.redirect('/cupcakes');
    })
})

app.get('/cupcakes/new', (req,res) =>{
	res.render('new.ejs');
    // Cupcake.create(req.body,(err,createCupcake)=>{
    //     console.log(req.body);
    // })
})
app.get('/cupcakes/:id', (req,res)=>{
	Cupcake.findById(req.params.id,(err, foundCupcake)=>{
		res.render('show.ejs', {
			Cupcake: foundCupcake
		})
	})
	
})


app.listen(port, (req, res) =>{
    console.log("listening on ", port)
});