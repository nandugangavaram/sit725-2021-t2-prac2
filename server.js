var express = require('express');
var app = express();

var port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log("Application started & listening on port : " + port);
});