// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// ************ Controller Require ************
const ProdController = require('../controllers/ProdController');
const guessMiddleware = require("../middlewares/guessMiddleware");
const usersMiddleware = require("../middlewares/usersMiddleware");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage })

router.get('/Prod', usersMiddleware, ProdController.newprod); /* GET - All products */
//router.get('/detail/:productId/', ProdController.detail); /* GET - Product detail */

/*** CREATE ONE PRODUCT ***/ 
//router.get('/create/', ProdController.create); /* GET - Form to create */
router.post('/Prod', upload.any(), ProdController.store); /* POST - Store in DB */

/*** EDIT ONE PRODUCT ***/ 
router.get('/Prod/edit/:id', usersMiddleware, ProdController.edit); /* GET - Form to create */
router.put('/Prod/edit/:id', usersMiddleware, ProdController.update); /* PUT - Update in DB */

/*** DELETE ONE PRODUCT***/ 
router.delete('/Prod/delete/:id', usersMiddleware, ProdController.destroy); /* DELETE - Delete from DB */

module.exports = router;
