var hello = require('../models/hello.js')

var appRouter = function(app) {
    app.get('/', function (req, res, next) {
        res.status(200).json(hello())
    })
}

module.exports = appRouter