const jwt = require('jsonwebtoken');
const Users = require('../models/auth.model')

exports.test = (req, res, next) => {
    res.json({
        message: "test from auth route "
    })
}

exports.signup = (req, res, next) => {
    Users.findOne({ username: req.body.username }, (err, result) => {
        if (err) {
            res.status(400);
            next(err);
        } else if (result) {
            console.log("User exists");
            res.json({
                message: "User exists"
            })
        } else {
            let user = new Users({
                username: req.body.username,
                password: req.body.password
            })
            user.save( (err, doc) => {
                if (err) {
                    res.status(400);
                    next(err);
                } else {
                    res.json({
                        message: "User reged "
                    })
                }
            } )
        }
    })
}

exports.login = (req, res, next) => {
    Users.findOne({ username: req.body.username }, (err, result) => {
        if (err) {
            res.status(400);
            next(err);
        } else {
            if (result.username == req.body.username && result.password == req.body.password) {
                res.json({
                    message: "logged in"
                })
            } else {
                res.json({
                    message: "cannot login"
                })
            }
        }
    })
}
