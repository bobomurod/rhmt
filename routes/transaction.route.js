const express = require('express')
const router = express.Router();

const transaction_controller = require('../controllers/transaction.controller')

router.get('/test', transaction_controller.test);
router.get('/send', transaction_controller.send);
router.post('/transfer', transaction_controller.transfer);
router.post('/create', transaction_controller.create);
router.post('/setcap', transaction_controller.setcap);

module.exports = router;