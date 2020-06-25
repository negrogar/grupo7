const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
let { check, validationResult, body } = require('express-validator');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
    
    root: (req, res) => {
        res.render('register', {
            title: 'Registrarse'
        });
    },

    store: (req, res, next) => {
        let errors = validationResult(req);

            if (errors.isEmpty()) {



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

        let userToLog

        for (let i = 0; i < users.length; i++) {
            if (users[i].email == req.body.email) {
                if (bcrypt.compareSync(req.body.password, users[i].password)) {
                    userToLog = users[i];
                    
                    break;
                }
            }
        }  
        console.log(userToLog);
             //req.session.userlogged = userToLog;
            if (req.session.userlogged == undefined) {
                req.session.userlogged = 0;
            }
                req.session.userlogged++;
                console.log(req.session.userlogged);

            if (req.body.recordar != undefined) {
                res.cookie("recordar", userToLog.id, { maxAge: 120000})
           }
            
                   if (req.session.userlogged != undefined) {
            return res.render('perfil' , {
                title: 'Tu Perfil',
                user: userToLog,
                sessions: req.session.userlogged
            })

            } else {


            res.render('perfil', {
                title: 'Tu Perfil',
                user: userToLog,
                sessions: req.session.userlogged
            })
        }

  },

    seeprofile: (req, res) => {
            
        if (req.session.userlogged != undefined) {
               res.render('perfil', {
                title: 'Tu Perfil',
                user: req.session.userlogged,
                sessions: req.session.userlogged
            });
        } else {
            res.send('Aca no deberia porder entrar.')
        }
    }
}

module.exports = controller;