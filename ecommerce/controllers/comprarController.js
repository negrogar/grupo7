const fs = require('fs');
const path = require('path');

const comprarController = (req,res)=>{

	if (req.session.userlogged == undefined) {
        res.render('compra', {
            title: 'Confirmar Compra'
        })
    } else {
    	res.render('compra', {
        title: 'Confirmar Compra',
        sessions: req.session.userlogged
        })
    }
}
module.exports = comprarController