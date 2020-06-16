const fs = require('fs');
const path = require('path');

const DetalleController = {
  
  detalle: function (req, res) {
    const id = req.params.id;

    const pathVerduras = path.join(__dirname, '../data/db-vegetales.json');
    const verduras = JSON.parse(fs.readFileSync(pathVerduras, 'utf-8'));

    const verdura = verduras.find((individuo) => {
    return individuo.id == id
  }); 

  res.render('Detalle', { 
    title: 'Detalle de Producto',
    verdura: verdura
  })

 }
}

module.exports = DetalleController;