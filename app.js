
//VARIABLES + FILES
require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var ejs = require('ejs');
var mongoose = require('mongoose');
var port = process.env.PORT || 4000;


var app = express();
app.set('view engine', 'ejs');

// use body-parser middleware
app.use(express.json());
app.use(express.static(__dirname + '/public'));



//use this stuff too
app.use('/share', '../routes/CustomerRoute');

/* //db
const MongoClient = require('mongodb').MongoClient;
//const assert = require('assert'); 
 
// Connection URL mongodb://localhost:27017/mus 
const url =  mongoose.connect('mongodb+srv://tester:testing123@cluster0-dk0py.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

// Use connect method to connect to the Server
MongoClient.connect(url, {useNewUrlParser: true},  function(err, client) {
  //assert.equal(null, err);
  //client.close();
  console.log('DB CONNECTED');
}); */

//from MDB docs -- database hosted on MDB Atlas 
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/mus', {useNewUrlParser: true}, function (err, client) {
  if (err) throw err

  var db = client.db('mus');

  db.collection('mus-survey2019').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})



//BASIC GET ROUTE
app.get('/', function(req, res){
    res.render('index');
});




//LISTENING
app.listen(port, function (req, res){
  console.log(`TUNED INTO 4000`);
});