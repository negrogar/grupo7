const fs = require('fs');
const path = require('path');
let db = require('../database/models');
let sequelize = db.sequelize;

const HomeController = {

  
  list: function(req, res) {
    sequelize.query('SELECT * FROM productos')
        .then(function(resultados) {
            let  verduras = resultados[0];
            
            const masVendidos = verduras.filter((individuo) => {
            return individuo.ds_categoria == 1
            });

            const enOferta = verduras.filter((individuo) => {
            return individuo.ds_categoria == 2
            });

            const ultimosAgregados = verduras.filter((individuo) => {
            return individuo.ds_categoria == 3
            });

  
  

  if (req.session.userlogged == undefined) {
      
  res.render('Home', { 
    title: 'Tienda',
    masVendidos: masVendidos,
    enOferta: enOferta,
    ultimosAgregados: ultimosAgregados,
    verduras: verduras
  });
   } else {
       res.render('Home', { 
    title: 'Tienda',
    masVendidos: masVendidos,
    enOferta: enOferta,
    ultimosAgregados: ultimosAgregados,
    verduras: verduras,
    sessions: req.session.userlogged
  });
   }
 });
}

}

module.exports = HomeController;
//module.exports = Verduritas;