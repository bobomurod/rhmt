// Здесь все роутинги касательно выпуска валюты

const express = require('express');
const router = express.Router();

const minting_controller = require('../controllers/minting.controller');

// тестовый роутинг

router.get('/test', minting_controller.minting_test);
router.post('/mint', minting_controller.minting_mint);


module.exports = router;