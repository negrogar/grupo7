const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
let { check, validationResult, body } = require('express-validator');
let db = require('../database/models');
let sequelize = db.sequelize;

//const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
//const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
    
    root: (req, res) => {
        res.render('register', {
            title: 'Registrarse'
        });
    },

    store: (req, res, next) => {
        let errors = validationResult(req);

            if (errors.isEmpty()) {

        db.Usuarios.create({
            ds_nombre: req.body.name,
            ds_apellido: req.body.lastname,
            ds_email: req.body.email,
            ds_password: bcrypt.hashSync(req.body.password, 10),
            avatar: req.files[0].filename
        });

       /*
        const avatar = req.files[0].filename;
        const newUser = {
            id: users[users.length - 1].id + 1,
            name: req.body.name,
            lastname: req.body.lastname,
            password: bcrypt.hashSync(req.body.password, 10),
            email: req.body.email,
            avatar: avatar
        };
      

        // console.log(...users);

        const userToSave = [...users, newUser];
        fs.writeFileSync(usersFilePath, JSON.stringify(userToSave, null, ' '));
         */ 

        res.redirect('/Home');

         } else {
            return res.render('Register', {
            title: 'Registrarse', 
            errors: errors.errors })
         }
    },

    login: (req, res) => {
        res.render('Login', {
            title: 'Login'
        });
    },

    validate: (req, res) => {

        let userlogged

        let errors = validationResult(req);


        if (errors.isEmpty()) {

            sequelize.query('SELECT * FROM Usuarios')
                .then(function(resultados) {
                    let usuario = resultados[0];
                    for (let i = 0; i < usuario.length; i++) {
                        if (usuario[i].ds_email == req.body.email) {
                            if (usuario[i].ds_password == req.body.password) {
                                userlogged = usuario[i];
                    break;    
                  }     
            }
        }  


            req.session.user = userlogged; 

            if (req.session.userlogged == undefined) {
                req.session.userlogged = 0;
            }
                req.session.userlogged++;

            if (req.body.recordar != undefined) {
                res.cookie("recordar", userToLog.id, { maxAge: 120000})
           }
         
           
                res.render('perfil', {
                title: 'Tu Perfil',
                user: userlogged,
                sessions: req.session.userlogged
            }) 
          }) 

        }  else {
            res.render('Login', {
            title: 'Login',
            errors: errors.errors
        })
        }

    },

    seeprofile: (req, res) => {
            
        if (req.session.userlogged != undefined) {
               res.render('perfil', {
                title: 'Tu Perfil',
                user: req.session.user,
                sessions: req.session.userlogged
            });

        } else {
            res.send('Aca no deberia porder entrar.')
        }
    },

    close: (req, res) => { 
        if(req.body.profile == 1) {
        req.session.userlogged = undefined;
/*
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
    verduras: verduras,
    sessions: req.session.userlogged      
    });
  
*/
   }
   res.redirect('/Home')
  }
}

module.exports = controller;