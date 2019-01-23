const express = require('express');
const router = express.Router();

const levels_controller = require('../controllers/levels.controller');

router.get('/test', levels_controller.test);
router.post('/getLevel', levels_controller.getLevel);
router.get('/getLevel/:wallet', levels_controller.getGetLevel)
router.post('/levelUp', levels_controller.levelUp);
router.post('/testobj', levels_controller.test_object);




module.exports = router;