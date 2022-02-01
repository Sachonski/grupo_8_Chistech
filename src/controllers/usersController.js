const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

const db = require("../database/models");
const sequelize = db.sequelize;

const controller2 = {
    // Initialize the controller

    listarUsuarios: (req, res) => {
        let userSession = req.session.user;

        if (req.session && req.session.user) {
            if (req.session.user.admin === 1) {
                db.User.findAll()
                    .then((users) => {
                        res.render("users", { users: users, userSession: userSession });
                    })
                    .catch((error) => {
                        res.render("Error", { error: { msg: "error" } });
                    });
            }
        }
    },

    detalleUsuario: (req, res) => {
        let userSession = req.session.user;

        let params = req.params.id;
        let id;

        if (req.session && req.session.user) {
            if (req.session.user.admin === 1) {
                id = params;
            } else {
                id = req.session.user.id;
            }
        } else {
            id = req.params.id;
        }

        db.User.findByPk(id)
            .then((user) => {
                req.session.user = user;
                if (req.body.remember) {
                    res.cookie('remember', user, { maxAge: 1000 * 60 * 60 * 24 * 7 });

                }
                res.render("userDetail", { user: user, userSession: req.session.user });
            })
            .catch((error) => {
                res.render("Error", { error: { msg: "error" } });
            });
    },

    login: (req, res) => {
        let userSession = req.session.user

        return res.render('userLogin', { userSession: userSession });
    },

    loginpost: (req, res) => {
        let userSession = req.session.user;
        
        let errors = validationResult(req);

        if (errors.isEmpty()) {

            db.User.findOne({
                where: { user_name: req.body.user_name.trim() }
            }).then(user => {

                if (user) {
                    if (true) {
                        req.session.user = user;

                        if (req.body.remember) {
                            res.cookie('remember', user, { maxAge: 1000 * 60 * 60 * 24 * 7 });

                        }
                        return res.redirect('/users/perfil/' + user.id);
                    } else {
                        return res.render('userLogin', { msgErrors: { password: { msg: 'Contraseña incorrecta' } }, old: req.body, userSession: userSession });
                    }

                } else {
                    return res.render('userLogin', { msgErrors: { user_name: { msg: 'El usuario no existe' } }, old: req.body, userSession: userSession });
                }
            })
                .catch(error => {
                    res.render('Error', { error: { msg: "error" } })
                })

        } else {
            res.render('userLogin', { msgErrors: errors.mapped(), old: req.body, userSession: userSession });
        }
    },

    logout: function (req, res) {

        res.clearCookie('remember');
        req.session.destroy();
        res.redirect('/');
    },

    register: (req, res) => {
        let userSession = req.session.user
        return res.render('userRegister', { userSession: userSession });
    },

    registerpost: (req, res) => {

        let userSession = req.session.user
        let errors = validationResult(req);
        let user = req.body;

        if (errors.isEmpty()) {
            db.User.findOne({
                where: { user_name: req.body.user_name.trim() }
            }).then(existName => {
                if (existName) {
                    return res.render('userRegister', { msgErrors: { user_name: { msg: 'Ese nombre ya existe' } }, old: req.body, userSession: userSession });
                }
            }).catch(error => {
                res.render('Error', { error: { msg: "error nombre" } })
            })

            db.User.findOne({
                where: { email: req.body.email }
            }).then(existEmail => {
                if (existEmail) {
                    return res.render('userRegister', { msgErrors: { email: { msg: 'Ese email ya existe' } }, old: req.body, userSession: userSession });
                }
            }).catch(error => {
                res.render('Error', { error: { msg: "error email" } })
            })

            let { first_name, last_name, user_name, birth, password, email, admin } = user;

            if (req.body.admin) {
                if (req.body.adminCode === '123') {
                    admin = 1;
                } else {
                    return res.render('userRegister', { msgErrors: { adminCode: { msg: 'El codigo no corresponde' } }, old: req.body, userSession: userSession });
                }
            } else {
                admin = 0;
            }

            db.User.create({
                first_name: first_name.trim(),
                last_name: last_name.trim(),
                user_name: user_name.trim(),
                email: email,
                birth: birth,
                password: bcryptjs.hashSync(password, 10),
                admin: admin
            })
                .then(newUser => {
                    req.session.user = newUser;

                    if (req.body.remember) {
                        res.cookie('remember', newUser, { maxAge: 1000 * 60 * 60 * 24 * 7 });
                    }
                    res.redirect('/users/perfil/' + newUser.id)
                })

        } else {
            res.render('userRegister', { msgErrors: errors.mapped(), old: req.body, userSession: userSession });
        }

    },

    delete: (req, res) => {
        let params = req.params.id;
        let id;

        if (req.session && req.session.user) {
            if (req.session.user.admin === 1) {
                id = params;
            } else {
                id = req.session.user.id;
            }
        } else {
            id = req.params.id;
        }

        db.User.destroy({
            where: { id: id }
        }).then(res.clearCookie('remember'))
            .then(req.session.destroy())
            .then(res.redirect('../../users/login'))
            .catch(error => {
                res.render('Error', { error: { msg: "error delete" } })
            })
    },

    editget: (req, res) => {
        let userSession = req.session.user

        let params = req.params.id;
        let id;

        if (req.session && req.session.user) {

            if (req.session.user.admin === 1) {
                id = params;
            } else {
                id = req.session.user.id;
            }
        } else {
            id = req.params.id;
        }

        db.User.findByPk(id)
            .then((user) => {
                res.render('userEdit', { user: user, id: id, userSession: userSession });;
            })
            .catch((error) => {
                res.render("Error", { error: { msg: "error edit" } });
            });
    },

    editput: (req, res) => {

        let userSession = req.session.user
        let params = req.params.id;
        let id;
        let user = req.body

        const errors = validationResult(req);

        if (req.session && req.session.user) {

            if (req.session.user.admin === 1) {
                id = params;
            } else {
                id = req.session.user.id;
            }

        } else {
            id = req.params.id;
        }

        if (req.body.admin) {
            if (req.body.adminCode === '123') {
                admin = 1;
            } else {
                return res.render('userEdit', { msgErrors: { adminCode: { msg: 'El codigo no corresponde' } }, id: id, old: req.body, userSession: userSession });
            }
        } else {
            admin = 0;
        }

        if (errors.isEmpty()) {

            let ok = false

            db.User.findOne({
                where: { user_name: user.user_name }
            })
                .then(result => {
                    if (result && result.id !== id) {
                        return res.render('userEdit', { msgErrors: { user_name: { msg: 'Ese nombre ya existe' } }, id: id, old: req.body, userSession: userSession });

                    } else {
                        ok = true
                    }
                })
                .catch(err => {
                    console.log(err);
                })

            db.User.findOne({
                where: { email: user.email }
            })
                .then(value => {

                    if (value && value.id !== id) {
                        return res.render('userEdit', { msgErrors: { email: { msg: 'Ese email ya existe' } }, id: id, old: req.body, userSession: userSession });
                    } else {
                        if (ok === true) {
                            let userUpdated = db.User.update({
                                first_name: user.first_name,
                                last_name: user.last_name,
                                user_name: user.user_name,
                                email: user.email,
                                birth: user.birth,
                                password: bcryptjs.hashSync(user.password, 10),
                                admin: admin
                            }, {
                                where: { id: id }
                            })
                                .then(() => {
                                    req.session.user = userUpdated;
                                    if (req.body.remember) {
                                        res.cookie('remember', userUpdated, { maxAge: 1000 * 60 * 60 * 24 * 7 });
                                    }

                                })
                                .catch(error => {
                                    ok = false;
                                });

                            res.redirect('/users/perfil/' + id);
                            console.log(">>>>> ok <<<")
                        }
                    }
                })
                .catch(err => {
                    console.log(err);
                })



        } else {
            res.render('userEdit', { msgErrors: errors.mapped(), user: req.body, id: id, userSession: userSession });
        }

    },
}

module.exports = controller2;
