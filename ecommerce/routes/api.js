var express = require('express');
var router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/compras', apiController.compras);
router.get('/productos', apiController.productos);

module.exports = router;