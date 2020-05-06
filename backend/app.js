var express = require('express');
var app = express();
var routes = require('./routes')

app.use('/', routes); 

app.listen(8080, function() {
    console.log('listening on port 8080');
});

module.exports = app;