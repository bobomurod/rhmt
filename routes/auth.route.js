const express = require('express');
const router = express.Router();

const auth_controller = require('../controllers/auth.controller.js');

router.get('/test', auth_controller.test);
router.post('/login', auth_controller.login);
router.post('/signup', auth_controller.signup);


module.exports = router;