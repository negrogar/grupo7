const fs = require('fs');
const path = require('path');

const productosFilePath = path.join(__dirname, '../data/db-vegetales.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));



let ProdController = {
  
  newprod: function (req, res) {

		res.render('CargaProd', { 
    title: 'Alta de Producto'
	})
	},

	// Create -  Method to store
  store: (req, res) => {
		req.body.precio = Number(req.body.precio);
		req.body.descuento= Number(req.body.descuento);
		req.body.categoria= Number(req.body.categoria);
		const image = req.files[0].filename;

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
		res.redirect('/Home');
	},

	// Update - Form to edit
	edit: (req, res) => {
		let pdtoID = req.params.id;
		

		let productToEdit = productos.find((individuo) => {
   			 return individuo.id == pdtoID
  		}); 


		res.render('Product-edit-form', { 
			productToEdit: productToEdit, 
			title: 'Edición de Producto'
		 });
	},

	// Update - Method to update
	update: (req, res) => {
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
		

		res.send('Editaste con exito, ver en HomePage');
	},

		// Delete - Delete one product from DB
	destroy: (req, res) => {
		let productId = req.params.id;
		let finalProducts = productos.filter(pdto => pdto.id != productId);
		fs.writeFileSync(productosFilePath, JSON.stringify(finalProducts, null, ' '));
		res.send('Eliminaste el producto con exito');
	}

 }



module.exports = ProdController;