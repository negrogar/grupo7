const fs = require('fs');
const path = require('path');
let db = require('../database/models');
let sequelize = db.sequelize;


const apiController = {
    compras: function(req, res) {
        db.Compras.findAll({
          // include: [{association: 'user'}],
          order: [["dt_fecha", "DESC"]]
        })
          .then(function(resultados) {
                let repcompras = resultados;
    
     // if (req.session.userlogged == undefined) {
          
        
      res.json(repcompras)
    
      })
    
     },
    
    productos: function(req, res) {
        db.Productos.findAll({
           include: [{association: 'usuario'}]
          //order: [["dt_nombre", "DESC"]]
        })
          .then(function(resultados) {
                let repproductos = resultados;
    
     // if (req.session.userlogged == undefined) {
          
        
      res.json(repproductos)
    
      })
     },
     usuarios: function(req, res) {
        db.Usuarios.findAll({
           include: [{association: 'Producto'}]
          //order: [["dt_nombre", "DESC"]]
        })
          .then(function(resultados) {
                let users = resultados;
    
     // if (req.session.userlogged == undefined) {
          
        
      res.json(users)
    
      })
     }
     
    
    }


module.exports = apiController