var hello = require('../models/hello.js');
var minting = require('../models/minting.js');
var sending = require('../models/sending.js');
var balanceOf = require('../models/balanceOf.js');
var register = require('../models/register.js');
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
        console.log("Responding...");
        res.status(200).json(minting(req.body.address, req.body.quantity));
        console.log("Done.");
    });

    app.post('/sending', function (req, res, next) {
        console.log("Responding...");
        res.status(200).json(sending(req.body.from, req.body.to, req.body.quantity));
        console.log("Done.");
    })

    app.post('/balanceOf', function (req, res, next) {
        console.log("Responding...");
        res.status(200).json(balanceOf(req.body.address));
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