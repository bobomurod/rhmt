var hello = require('../models/hello.js');
var minting = require('../models/minting.js');

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
}

module.exports = appRouter