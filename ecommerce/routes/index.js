var express = require('express');
var router = express.Router();
const HomeController = require('../controllers/HomeController.js');
const DetalleController = require('../controllers/DetalleController.js');
const carritoController = require('../controllers/carritoController.js')

/* GET home page. */

router.get('/Home', HomeController);
router.get('/Detalle/:id', DetalleController.detalle);
router.get('/carrito', carritoController);


module.exports = router;
