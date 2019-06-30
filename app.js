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
const assert = require('assert'); //???

// Connection URL
const url = mongoose.connect("mongodb://<000>:<000>@ds247944.mlab.com:47944/mus", { useNewUrlParser: true });
mongoose.Promise = global.Promise; 


// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
  console.log('Finally CONNECTED')
});


//BASIC GET ROUTES
app.get('/', function(req, res){
    res.render('index');
});






//LISTENING
app.listen(port, function (req, res){
    console.log(`TUNED INTO 4000`);
});