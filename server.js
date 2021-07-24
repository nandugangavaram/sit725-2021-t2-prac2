var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

var port = process.env.PORT || 3000;

var contacts = {}

app.get('/getContact', (req, res) => {
    let name = req.query.name;
    if(name) {
        if(name in contacts) {
            res.status(200);
            res.send("Contact number for " + name + " person is " + contacts[name]);
        } else {
            res.status(404);
            res.send("Contact not found, call /addContact - POST Method to create contact.");
        }
    } else {
        res.json({statusCode: 404, message: "Input Missing, please check input and try again!"});
    }
});

app.post('/addContact', (req, res) => {
    let name = req.body.name;
    let phone = req.body.phone;
    if(name && phone) {
        if(!(name in contacts)) {
            contacts[name] = phone;
            res.json({statusCode: 201, data: {name, phone}, message: "Added Successfully."});
        } else {
            res.json({statusCode: 409, data: {name, phone}, message: "Contact Already Exists, call /updateContact - PUT Method to update contact."});
        }
    } else {
        res.json({statusCode: 404, message: "Inputs Missing, please check inputs and try again!"});
    }
});

app.put('/updateContact', (req, res) => {
    let name = req.body.name;
    let phone = req.body.phone;
    if(name && phone) {
        if(name in contacts) {
            contacts[name] = phone;
            res.json({statusCode: 200, data: {name, phone}, message: "Updated Successfully."});
        } else {        
            res.json({statusCode: 404, data: {name, phone}, message: "Contact not found, call /addContact - POST Method to create contact."});
        }
    } else {
        res.json({statusCode: 404, message: "Inputs Missing, please check inputs and try again!"});
    }
});

app.listen(port, () => {
    console.log("Application started & listening on port : " + port);
});