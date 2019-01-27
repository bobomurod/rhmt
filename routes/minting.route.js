// Здесь все роутинги касательно выпуска валюты

const express = require("express");
const router = express.Router();

const minting_controller = require("../controllers/minting.controller");

// тестовый роутинг

router.get("/test", minting_controller.minting_test);
router.get("/all", minting_controller.minting_getMints);

router.post("/easy", minting_controller.minting_easy);
router.post("/mint", minting_controller.minting_mint);
router.post("/test_find", minting_controller.minting_test_find);

module.exports = router;
