/*
const fs = require('fs');
const path = require('path');


var profileMiddleware = (req, res, next) => {
  if (req.session.userlogged == undefined) {
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

module.exports = profileMiddleware;

*/
