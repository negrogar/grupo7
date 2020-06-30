
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); 

// ************ Controller Require ************
const usersController = require('../controllers/usersController');
const guessMiddleware = require("../middlewares/guessMiddleware");
const usersMiddleware = require("../middlewares/usersMiddleware");
let { check, validationResult, body } = require('express-validator');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/avatar');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage })

/*** CREATE ONE  ***/ 
router.get('/create/', guessMiddleware, usersController.root); /* GET - Form to create */
router.post('/create/', upload.any(), [

		check('name').isLength().withMessage('Este campo debe estar completo'),
		check('lastname').isLength().withMessage('Este campo debe estar completo'),
		check('email').isEmail().withMessage('Este campo debe ser un mail valido'),
		check('password').isLength({min: 5}).withMessage('Minimo de 5 caracteres alfanumericos'),
        body('email').custom(function(value) {
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == value) {
                    return false;
                }
            }
            return true;
        }).withMessage('Usuario ya existente')

	], usersController.store); /* POST - Store in DB */

router.get('/login/', guessMiddleware, usersController.login); /* GET - Form to create */
router.post('/login/', [
        
        check('email').isEmail().withMessage('Ingrese su credenciales correctamente'),
        check('password').isLength({min: 5}).withMessage('Ingrese su contraseña'),
       

    ], usersController.validate); /* Post - Validation login */

router.get('/profile/', usersController.seeprofile);
router.post('/profile/', usersController.close);

module.exports = router;