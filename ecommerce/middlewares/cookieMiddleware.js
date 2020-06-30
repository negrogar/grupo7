const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
let db = require('../database/models');
let sequelize = db.sequelize;

//const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
//const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

function cookieMiddleware (req, res, next) {
 
  	 next();
  	
	 if (req.cookie.recordar != undefined && 
	 	req.session.userlogged == undefined) {

	 	let userToLog

            sequelize.query('SELECT * FROM usuarios')
                .then(function(resultados) {
                    let usuario = resultados[0];
                    for (let i = 0; i < usuario.length; i++) {
                        if (usuario[i].ds_email == req.body.email &&
                        usuario[i].ds_password == req.body.password) {
                        userToLog = usuario[i];
                    break;
                }     
            } 
        });    
 
    }
}

module.exports = cookieMiddleware;

