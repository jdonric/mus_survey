//VARIABLES + FILES
require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
const router = express.Router();
var ejs = require('ejs');
const mongoose = require('mongoose');
var port = process.env.PORT || 4000;


var app = express();
app.set('view engine', 'ejs');

// use body-parser middleware
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//db
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL mongodb://localhost:27017/mus 
const url =  mongoose.connect('mongodb://localhost:27017/mus', {useNewUrlParser: true});

// Use connect method to connect to the Server
MongoClient.connect(url, {useNewUrlParser: true},  function(err, client) {
  //assert.equal(null, err);
  //client.close();
  console.log('DB CONNECTED');
});



//BASIC GET ROUTES
app.get('/', function(req, res){
    res.render('index');
});






//LISTENING
app.listen(port, function (req, res){
  console.log(`TUNED INTO 4000`);
});