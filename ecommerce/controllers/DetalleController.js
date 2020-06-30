const fs = require('fs');
const path = require('path');
let db = require('../database/models');
let sequelize = db.sequelize;


const DetalleController = {
  
  detalle: function (req, res) {
   
    sequelize.query('SELECT * FROM productos')
      .then(function(resultados) {
            let  verduras = resultados[0];
            const id = req.params.id;
  
    // const pathVerduras = path.join(__dirname, '../data/db-vegetales.json');
    // const verduras = JSON.parse(fs.readFileSync(pathVerduras, 'utf-8'));

    const verdura = verduras.find((individuo) => {
      
    return individuo.id == id
  
     })

    if (req.session.userlogged != undefined) { 
    res.render('Detalle', { 
    title: 'Detalle de Producto',
    verdura: verdura,
    sessions: req.session.userlogged
    })
  } else {
    res.render('Detalle', { 
    title: 'Detalle de Producto',
    verdura: verdura
    })

  } 
  })
}
}

module.exports = DetalleController;