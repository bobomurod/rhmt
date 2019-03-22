//Здесь все роутинги для вывода истории по разным операциям 
const explorer = require('express');
const router = express.Router();

const explorer_controller = require('../controllers/explorer.controller');

//testng route


router.get('/test', explorer_controller.test)

module.exports = router;
