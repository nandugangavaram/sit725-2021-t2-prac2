var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

var port = process.env.PORT || 3000;

var contacts = {}

app.get('/getContact', (req, res) => {
    let name = req.query.name;
    if(name in contacts) {
        res.status(200);
        res.send("Contact number for " + name + " person is " + contacts[name]);
    } else {
        res.status(400);
        res.send("Contact not found!");
    }
});

app.post('/addContact', (req, res) => {
    let name = req.body.name;
    let phone = req.body.phone;
    
    if(!(name in contacts)) {
        contacts[name] = phone;
        res.json({statusCode: 200, data: {name, phone}, message: "Added Successfully"});
    } else {        
        contacts[name] = phone;
        res.json({statusCode: 200, data: {name, phone}, message: "Updated Successfully"});
    }
});

app.listen(port, () => {
    console.log("Application started & listening on port : " + port);
});