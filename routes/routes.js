var hello = require('../models/hello.js');
var minting = require('../models/minting.model');
var sending = require('../models/sending.js');
var balanceOf = require('../models/balanceOf.js');
var register = require('../models/register.js');
var salting = require('../.secrets/salting_microservice/salting.js')
var explorer = require('../models/explorer.model');
var auth = require('../models/auth.model')
//var levels = require('../models/levels.model.js')

var testModel = require('../models/testings/testModel');
//var testMongo = require('../models/testings/testMongo');


var appRouter = function(app) {
    app.get('/hello', function (req, res, next) {
        console.log("Responding...");
        res.status(200).json(hello())
        console.log("Done.");
    });

    app.post('/register', function(req, res, next) {
        console.log("Responding...");
        res.status(200).json(register(req.body.quantity))
        console.log("Done.");
    })
    
    app.post('/minting', function (req, res, next) {
        console.log("Minting responding...");
        res.status(200).json(minting(req.body.address, req.body.quantity));
        console.log("Done.");
    });

    app.post('/sending', function (req, res, next) {
        console.log("Responding...");
        res.status(200).json(sending(req.body.from, req.body.to, req.body.quantity));
        console.log("Done.");
    })

    app.post('/balanceOf', function (req, res, next) {
        console.log("BalanceOf responding....");
        res.status(200).json(balanceOf(req.body.address));
        console.log("Done.");
    })

    app.post('/salting', function (req, res, next) {
        console.log("Salting...");
        res.status(200).json(salting(req.body.code));
        console.log("Done.");
    })

    app.post('/auth', function (req, res, next) {
        console.log("Auth proccessing...");
        res.status(200).json(salting(req.body.code));
        console.log("Done.");
    })

    app.post('/explorer', function (req, res, next) {
        console.log("Explorer responding....");
        res.status(200).json(explorer(req.body.code));
        console.log("Done.");
    })

    app.post('/post', function(req,res,next){
        console.log(req.body)
        var resString = "hello " + req.body.string;
        res.status(200).json(resString)
    })

    app.post('/test', function(req, res, next) {
        console.log("Responding...");
        res.status(200).json(testModel(name))
        console.log("Done.")
    })
}

module.exports = appRouter