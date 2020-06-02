var express = require('express');
var router = express.Router();
const HomeController = require('../controllers/HomeController.js');
const DetalleController = require('../controllers/DetalleController.js');
// const detalleController = require('../controllers/detalleController.js')

/* GET home page. */

router.get('/Home', HomeController);
router.get('/Detalle/:id', DetalleController.detalle);
//router.get('/Form', FormController.newprod);
//router.post('/Form/create', FormController.create);
//router.get('/detalle/:id', detalleController);


module.exports = router;
