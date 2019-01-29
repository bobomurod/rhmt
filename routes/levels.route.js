const express = require('express');
const router = express.Router();

const levels_controller = require('../controllers/levels.controller');

router.get('/test', levels_controller.test);
router.post('/getLevelByMSISDN', levels_controller.getLevelByMSISDN);
router.post('/getLevelByMBSID', levels_controller.getLevelByMBSID);
router.get('/getLevel/msisdn/:wallet', levels_controller.getLevelByMsisdn);
router.get('/getLevel/mbsid/:mbsid', levels_controller.getLevelByMbsID);
router.post('/levelUp', levels_controller.levelUp);
router.post('/testobj', levels_controller.test_object);




module.exports = router;