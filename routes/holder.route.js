const express = require('express');
const router = express.Router();

const holder_controller = require('../controllers/holder.controller');

// a simple test url to check that all our files are communicating correctlry.

router.get('/test', holder_controller.test);
router.post('/create', holder_controller.holder_create);
router.get('/:id', holder_controller.holder_details);
router.get('/', holder_controller.holder_all);
router.put('/:id/update', holder_controller.holder_update);
router.delete('/:id/delete', holder_controller.holder_delete);

module.exports = router;