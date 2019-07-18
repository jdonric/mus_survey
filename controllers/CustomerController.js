const Customer = require('../models/CustomerModel.js');



// Create and Save
exports.create = (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).render({
        message: "Survey can't be submitted blank"
        });
    }

// Create customer
const customer = new Customer({
    frequency: req.body.frequency , 
    competition: req.body.competition,
    good_drinks: req.body.good_drinks,
    good_staff: req.body.good_staff,
    exclusive_recommendation:req.body.exclusive_recommendation,
    mail : req.body.mail || "Survey Entry"
});

// Save customer in db
customer.save()
.then(data => {
    res.send(data);
}).catch(err => {
    res.status(500).send({
        message: err.message || "ERROR - Survey not submitted."
    });
});

};



// Pull/retrieve everything
exports.findAll = (req, res) => {
    customer.find()
    .then( customers => {
        res.send(customers);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "ERROR - couldn't retrieve results"
        });
    });
};


    

    
