const express = require('express');
const router = express.Router();

const holder_controller = require('../controllers/holder.controller');

// a simple test url to check that all our files are communicating correctlry.

router.get('/test', holder_controller.test);
router.get('/pushertest', holder_controller.pushertest);
router.post('/create', holder_controller.holder_create);
router.get('/:wallet', holder_controller.holder_details);
router.get('/', holder_controller.holder_all);
router.put('/:wallet/update', holder_controller.holder_update);
router.delete('/:id/delete', holder_controller.holder_delete);
router.get('/:wallet/balance', holder_controller.holder_balance);


module.exports = router;