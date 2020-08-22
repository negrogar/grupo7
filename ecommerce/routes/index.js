var express = require('express');
var router = express.Router();
const HomeController = require('../controllers/HomeController.js');
const DetalleController = require('../controllers/DetalleController.js');
//const carritoController = require('../controllers/carritoController.js');
const comprarController = require('../controllers/comprarController.js');
const confcomprarController = require('../controllers/confcomprarController.js')
/* GET home page. */

router.get('/Home', HomeController.list);

router.get('/Detalle/:id', DetalleController.detalle);
//router.get('/carrito', carritoController);
router.get('/carrito/comprar', comprarController);
router.post('/carrito/comprar', confcomprarController);

module.exports = router;
