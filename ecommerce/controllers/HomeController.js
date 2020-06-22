const fs = require('fs');
const path = require('path');

const HomeController = (req, res) => {
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
    verduras: verduras
  });
};



module.exports = HomeController;