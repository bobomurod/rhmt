var hello = require('../models/hello.js');
var minting = require('../models/minting.js');
var sending = require('../models/sending.js');
var balanceOf = require('../models/balanceOf.js')

var testModel = require('../models/testModel')


var appRouter = function(app) {
    app.get('/hello', function (req, res, next) {
        console.log("Responding...");
        res.status(200).json(hello())
        console.log("Done.");
    });
    
    app.get('/minting', function (req, res, next) {
        console.log("Responding...");
        res.status(200).json(minting());
        console.log("Done.");
    });

    app.get('/sending', function (req, res, next) {
        console.log("Responding...");
        res.status(200).json(sending());
        console.log("Done.");
    })

    app.get('/balanceOf', function (req, res, next) {
        console.log("Responding...");
        res.status(200).json(balanceOf());
        console.log("Done.");
    })

    app.post('/post', function(req,res,next){
        console.log(req.body)
        var resString = "hello " + req.body.string;
        res.status(200).json(resString)
    })

    app.post('/test', function(req, res, next) {
        console.log("Responding...");
        res.status(200).json(testModel(req.body.string))
        console.log("Done.")
    })
}

module.exports = appRouter