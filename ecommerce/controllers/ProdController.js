const fs = require('fs');
const path = require('path');
let { check, validationResult, body } = require('express-validator');
let db = require('../database/models');
let sequelize = db.sequelize;

//const productosFilePath = path.join(__dirname, '../data/db-vegetales.json');
//const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));



let ProdController = {
  
  newprod: function (req, res) {	

  		if (req.session.userlogged == undefined) {
		res.render('CargaProd', { 
    title: 'Alta de Producto'    
	}) } else {
			res.render('CargaProd', { 
    		title: 'Alta de Producto', 
    		sessions: req.session.userlogged
		})}
		console.log(req.session.userlogged)
	},

	// Create -  Method to store
  store: (req, res) => { 

	let userToLog;

  	let errors = validationResult(req);

        if (errors.isEmpty()) {

  	 	db.Productos.create({
  			ds_nombre: req.body.nombre,
  			ds_descripcion: req.body.descripcion,
  			ds_categoria: req.body.categoria,
  			dn_precio: req.body.precio,
  			dn_descuento: req.body.descuento,
  			image: req.files[0].filename,
  			ds_usuario_creador: req.session.user.id
  		})
  			//.then(function(resultads) {
  			//	let prodnuevo = resultados[0];
  			// console.log(prodnuevo);
  			// });

/*
		req.body.precio = 
		req.body.descuento=
		req.body.categoria= Number(req.body.categoria);
		const image = ;

		let newProduct = {
			id: productos[productos.length - 1].id + 1,
			nombre: req.body.nombre,
			precio: req.body.precio,
			descuento: req.body.descuento,
			descripcion: req.body.descripcion,
			categoria: req.body.categoria,
			image: image
		};
		console.log(newProduct);

		let finalProductos = [...productos, newProduct];
		console.log(finalProductos);
		fs.writeFileSync(productosFilePath, JSON.stringify(finalProductos, null, ' '));
*/
		res.send('Listo ya esta agregado');

	} else {
		res.render('CargaProd', {
			title: 'Alta de Producto', 
    		sessions: req.session.userlogged,
    		errors: errors.errors
		})
	}
	},

	// Update - Form to edit
	edit: function (req, res) {

		if (req.session.userlogged != undefined) { 
		sequelize.query('SELECT * FROM productos')
			.then(function(resultados){
			let verduras = resultados[0];
			let pdtoID = req.params.id;

			let productToEdit = verduras.find((individuo) => {
   			 	return individuo.id == pdtoID
  		}); 

			res.render('Product-edit-form', { 
				productToEdit: productToEdit, 
				title: 'Edición de Producto',
				sessions: req.session.userlogged
		 });

		})		
		} else {
			res.render('Product-edit-form', { 
				productToEdit: productToEdit, 
				title: 'Edición de Producto',
				sessions: req.session.userlogged
		})	
	  }
	},

	// Update - Method to update
	update: (req, res) => {
		/*
		let pdtoID = req.params.id;
		console.log(pdtoID);
		//let productToEdit = productos.find(product => productos.id == pdtoID)

		let productToEdit = productos.find((individuo) => {
   			 return individuo.id == pdtoID
  		}); 
		console.log(productToEdit);

		req.body.precio = Number(req.body.precio);
		req.body.descuento = Number(req.body.descuento);
		req.body.categoria = Number(req.body.categoria);
		productToEdit = {
			id: productToEdit.id,
			nombre: productToEdit.nombre,
			...req.body,
			image: productToEdit.image,
		};
		
		let newProducts = productos.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productosFilePath, JSON.stringify(newProducts, null, ' '));
		*/	
		
		db.Productos.update({
			dn_precio: req.body.precio,
			dn_descuento: req.body.descuento,
			ds_categoria: req.body.categoria,
			ds_descripcion: req.body.descripcion
		}, {
			where: {
				id: req.params.id
			}
		});
			
		res.send('Editaste con exito, ver en HomePage');
	},

		// Delete - Delete one product from DB
	destroy: (req, res) => {
		/*
		let productId = req.params.id;
		let finalProducts = productos.filter(pdto => pdto.id != productId);
		fs.writeFileSync(productosFilePath, JSON.stringify(finalProducts, null, ' '));
		*/
		db.Productos.destroy({
			where: {
				id: req.params.id
			}
		})

		res.send('Eliminaste el producto con exito');
	}

 }



module.exports = ProdController;