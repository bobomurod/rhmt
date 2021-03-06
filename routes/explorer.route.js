//Здесь все роутинги для вывода истории по разным операциям 
const express = require('express');
const router = express.Router();

const explorer_controller = require('../controllers/explorer.controller');

//testng route


router.get('/test', explorer_controller.explorer_test);
router.post('/allmintings', explorer_controller.explorer_all_mintings);
router.post('/query', explorer_controller.explorer_query);

module.exports = router;
