//@ TODO
// ИншаАллах переделаю все по примеру http://jasonwatmore.com/post/2018/06/14/nodejs-mongodb-simple-api-for-authentication-registration-and-user-management
// нужно добавить middleware тпа хендлеров 

var express = require('express')
var bodyParser = require('body-parser')
var routes = require('./routes/routes.js')
const holder = require('./routes/holder.route')
const mongoose = require('mongoose');

var app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: false} ))
app.use('/holders', holder);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

routes(app)

var server = app.listen(9994, function() {
    console.log('Server runnin on ', server.address().port)
})

///////////////////////////    MONGO DB CONNECTING    /////////////////

let dev_db_url = 'mongodb://localhost:27017/testdb';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/////////////////////////   MONGO DB CONN ENDING    /////////////////

