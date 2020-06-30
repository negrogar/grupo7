const bcrypt = require('bcrypt');
let db = require('../database/models');
let sequelize = db.sequelize;


var profileMiddleware = (req, res, next) => {

    next();

    let userToLog
    console.log(userToLog);

            sequelize.query('SELECT * FROM usuarios')
                .then(function(resultados) {
                    let usuario = resultados[0];
                    for (let i = 0; i < usuario.length; i++) {
                        if (usuario[i].ds_email == req.body.email &&
                        usuario[i].ds_password == req.body.password) {
                        userToLog = usuario[i];
                        console.log(userToLog)
                    break;
                }     
            } 
        });    
    
    }



/*

  if(req.body.profile = 1) {
      req.session.userlogged == undefined 
    } else {
        next();
      }
}



const fs = require('fs');
const path = require('path');


var profileMiddleware = (req, res, next) => {
  if (req.body.profile = 1) {
      req.session.userlogged == undefined 
  	 next();
  	} else {

  const pathVerduras = path.join(__dirname, '../data/db-vegetales.json');
  const verduras = JSON.parse(fs.readFileSync(pathVerduras, 'utf-8'));

  const masVendidos = verduras.filter((individuo) => {
    return individuo.categoria == 1
  });


  const enOferta = verduras.filter((individuo) => {
    return individuo.categoria == 2
  });

  const ultimosAgregados = verduras.filter((individuo) => {
    return individuo.categoria == 3
  });

  res.render('Home', { 
    title: 'Tienda',
    masVendidos: masVendidos,
    enOferta: enOferta,
    ultimosAgregados: ultimosAgregados,
    verduras: verduras,
    sessions: req.session.userlogged
  });
    }
};
*/

module.exports = profileMiddleware;


