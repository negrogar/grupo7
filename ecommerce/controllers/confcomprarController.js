const fs = require('fs');
const path = require('path');
let db = require('../database/models');
let sequelize = db.sequelize;

const confcomprarController = (req,res)=>{
		const prod = JSON.parse(req.body.datas);
		const comprador = req.body.destinatario;
		const correo = req.body.cc_to;
		const tarjeta = req.body.tarjeta;

		for (var unprod of prod) {
		console.log(unprod)
		db.Compras.create({
  			ds_comprador: comprador,
  			ds_correo: correo,
  			ds_tarjeta: tarjeta,
  			ds_producto: unprod.nombre,
  			dn_cantidad: unprod.cantidad,
  			dn_preciounit: unprod.precio
  		})
		
		}
         res.json()
        }
        
   
    

module.exports = confcomprarController