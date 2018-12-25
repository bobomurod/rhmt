const express = require('express');
const router = express.Router();

const levels_controller = require('../controllers/levels.controller');

router.get('/test', levels_controller.test);
router.post('/getLevel', levels_controller.getLevel);
router.post('/levelUp', levels_controller.levelUp);



module.exports = router;