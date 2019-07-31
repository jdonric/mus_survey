const Customer = require('../models/CustomerModel.js');


// Create customer
const customer = new Customer({
    frequency: req.body.frequency , 
    competition: req.body.competition,
    good_drinks: req.body.good_drinks,
    good_staff: req.body.good_staff,
    exclusive_recommendation:req.body.exclusive_recommendation,
    mail : req.body.mail || "Survey Entry"
});


//Function to send form data to db
customer.save(function (err) {
    if (err) return handleError(err);
});

module.exports = CustomerController;








    

    
