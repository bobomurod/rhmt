const Mint = require('../models/minting.model');

exports.explorer_test = (req, res, next) => {
    res.json({
        message: "test"
    })
}

exports.explorer_all_mintings = (req, res, next) => {
    Mint.find({wallet: req.body.wallet}, (err, result) => {
        if (err) {
            res.status(455);
            next(err);
        } else {
            res.json(result)
        }
    })
}

exports.explorer_query = (req, res, next) => {
    
}