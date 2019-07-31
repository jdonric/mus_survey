var express = require('express');
var router = express.Router();
const customer = require('../controllers/CustomerController');


//BASIC POST ROUTE
router.post('/share', customer.save);

module.exports = router;