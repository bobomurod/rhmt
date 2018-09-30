var express = require('express')
var bodyParser = require('body-parser')
var routes = require('./routes/routes.js')

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: true} ))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

routes(app)

var server = app.listen(9994, function() {
    console.log('Server runnin on ', server.address().port)
})

