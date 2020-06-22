const fs = require('fs');
const path = require('path');

const carritoController = (req,res)=>{
        res.render('carrito', {
            title: 'Carrito'
        })
    }

module.exports = carritoController