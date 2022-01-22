const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

const usersFilePath = path.join(__dirname, '../../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const User = require('../models/User');

const controller2 = {
    // Initialize the controller
    listarUsuarios: (req, res) => {
        return res.render('users', { users: users });
    },

    detalleUsuario: (req, res) => {

        const id = req.params.id;
        const user = users.find(user => user.id == id);
        return res.render('userDetail', { user: user });
    },

    login: (req, res) => {
        return res.render('userLogin');
    },

    loginpost: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            const user = users.find(user => user.user_name == req.body.user_name);

            if (user) {
                let result = bcryptjs.compareSync(req.body.password, user.password);
                if (result) {
                    req.session.user = user;

                    if (req.body.remember) {
                        res.cookie('remember', user, { maxAge: 1000 * 60 * 60 * 24 * 7 });

                    }
                    return res.redirect('/users/perfil/' + user.id);
                } else {
                    return res.render('userLogin', { msgErrors: { password: { msg: 'Contraseña incorrecta' } } });
                }
                

            } else {
                return res.render('userLogin', { msgErrors: { user_name: { msg: 'El usuario no existe' } } });
            }

        } else {
            res.render('userLogin', { msgErrors: errors.mapped(), old: req.body });
        }
    },

    logout: function (req, res) {
        res.clearCookie('remember');
        req.session.destroy();
        res.redirect('/');
    },

    register: (req, res) => {
        return res.render('userRegister');
    },

    registerpost: (req, res) => {

        let errors = validationResult(req);
        let user = req.body;

        if (errors.isEmpty()) {

            let existName = users.find(user => user.email == req.body.email);
            if (existName) {
                return res.render('userEdit', { msgErrors: { nombreUsuario: { msg: 'El usuario ya existe' } }, old: req.body });
            }
            let existEmail = users.find(user => user.email == req.body.email);
            if (existEmail) {
                return res.render('userEdit', { msgErrors: { email: { msg: 'El usuario ya existe' } }, old: req.body });
            }
            let { first_name, last_name, user_name, birth, password, email, admin } = user;
            const newUser = {}
            newUser.id = users[users.length - 1].id + 1;
            newUser.first_name = first_name;
            newUser.last_name = last_name;
            newUser.user_name = user_name;
            newUser.email = email;
            newUser.birth = birth;
            newUser.password = bcryptjs.hashSync(password, 10);
            newUser.admin = parseInt(admin) ? parseInt(admin) : 0;


            users.push(newUser);

            fs.writeFileSync(usersFilePath, JSON.stringify(users));

            req.session.user = user;

            if (req.body.remember) {

                res.cookie('remember', user, { maxAge: 1000 * 60 * 60 * 24 * 30 });
            }

            res.redirect('/users/perfil/' + newUser.id);

        } else {
            res.render('userRegister', { msgErrors: errors.mapped(), old: req.body });
        }

    },

    delete: (req, res) => {

        const id = req.params.id;
        const user = users.find(users => users.id == id);

        users.splice(users.indexOf(user), 1);

        fs.writeFileSync(usersFilePath, JSON.stringify(users));

        if (fs.existsSync(`public/img/users/${user.image}`)) {
            fs.unlinkSync(`public/img/users/${user.image}`);
        }
        res.redirect('../../users/login');
    },

    editget: (req, res) => {

        const id = req.params.id;
        const user = users.find(user => user.id == id);

        res.render('userEdit', { user: user, id: id });;
    },

    editput: (req, res) => {

        const errors = validationResult(req);
        const id = req.params.id;
        const user = users.find(user => user.id == id);
        delete user.user_name;
        let existName = users.find(user => user.user_name == req.body.user_name);
        if (existName) {
            return res.render('userEdit', { msgErrors: { nombreUsuario: { msg: 'El usuario ya existe' } }, old: req.body, id: id });
        }
        delete user.email;
        let existEmail = users.find(user => user.email == req.body.email);
        if (existEmail) {
            return res.render('userEdit', { msgErrors: { email: { msg: 'El usuario ya existe' } }, old: req.body, id: id });
        }
        const { first_name, last_name, user_name, birth, password, email, admin } = req.body;

        if (errors.isEmpty()) {

            user.id = user.id;
            user.first_name = first_name;
            user.last_name = last_name;
            user.user_name = user_name;
            user.birth = birth;
            user.email = email;
            user.password = bcryptjs.hashSync(password, 10);
            user.admin = parseInt(admin) ? parseInt(admin) : 0;


            fs.writeFileSync(usersFilePath, JSON.stringify(users));
            res.redirect('/');
        } else {
            res.render('userEdit', { msgErrors: errors.mapped(), user: req.body, id: id });
        }

    },

}

module.exports = controller2;
