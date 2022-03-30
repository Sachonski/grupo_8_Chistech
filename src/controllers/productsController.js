const path = require('path');
const fs = require("fs");
const db = require("../database/models");
const { Op } = require("sequelize");
const { validationResult } = require("express-validator");



const controller = {

    // Listar productos de la tienda
    productos: (req, res) => {
        let userSession = req.session.user

        db.Product.findAll()
            .then(products => {
                res.render('productos', { products, userSession })
            })
            .catch((error) => {
                res.render("Error", { error: { msg: "error" }, userSession });
            });
    },


    // Listar productos por categoria
    productosCategoria: (req, res) => {
        let userSession = req.session.user
        db.Product.findAll({
            where: { category_id: req.params.category }
        })
            .then(productsByCategory => {
                res.render('productos', { products: productsByCategory, userSession: userSession });
            })
            .catch((error) => {
                res.render("Error", { error: { msg: "error" }, userSession });
            });

    },

    // Detalle del producto seleccionado
    detalleProducto: (req, res) => {
        let userSession = req.session.user
        const id = req.params.id;

        db.Product.findAll({
            where: { discount: { [Op.gt]: 20 } },

        })
            .then(products => {
                console.log('****');
                console.log(products);

                let productos = products;
                db.Product.findByPk(id)

                    .then(product => {
                        res.render('detalle-producto', { product: product, products : productos, userSession: userSession });
                    })
                    .catch((error) => {
                        res.render("Error", { error: { msg: "error" }, userSession });
                    })

            })

    },


    // Vista creaction de producto -- GET
    productoCreacion: (req, res) => {
        let userSession = req.session.user

        return res.render('productoCreacion', { userSession: userSession })
    },
    // Creaction de producto -- POST
    productoGuardar: (req, res) => {
        let userSession = req.session.user
        let errors = validationResult(req);
        let product = req.body;
        let old = product
        old.image = req.file.filename
        old.name = req.body.name.trim()
        old.description = req.body.description.trim()
        if (errors.isEmpty()) {
            if (path.extname(req.file.filename) === '.jpg' || path.extname(req.file.filename) === '.jpeg' || path.extname(req.file.filename) === '.png' || path.extname(req.file.filename) === '.gif') {

                const { name, price, discount, category, description, packaging, stock } = req.body;
                db.Product
                    .create(
                        {
                            name: name.trim(),
                            price: price,
                            discount: discount,
                            category_id: category,
                            description: description.trim(),
                            packaging_id: packaging,
                            image: (req.file) ? req.file.filename : "no image",
                            stock: JSON.parse(stock),
                        }
                    )
                    .then(() => {
                        return res.redirect('/products')
                    })
                    .catch(error => res.send(error))
            } else {
                return res.render('productoCreacion', { msgErrors: { image: { msg: 'Formato de imagen invalido.' } }, product: product, old: product, userSession: userSession });
            }
        } else {
            return res.render('productoCreacion', { product, userSession, old, msgErrors: errors.mapped() })
        }

    },

    // Editar producto vista -- GET
    productEdit: (req, res) => {
        let userSession = req.session.user
        const id = req.params.id;
        db.Product.findByPk(id)
            .then((product) => {
                res.render('productoEdicion', { product: product, userSession: userSession });

            })
            .catch((error) => {
                res.render("Error", { error: { msg: "error al editar" }, userSession });
            });

    },
    // Editar producto vista -- PUT
    productUpdate: (req, res) => {
        let userSession = req.session.user
        let errors = validationResult(req);
        let product = req.body;
        let { id, name, price, discount, category, description, packaging, stock } = product;
        if (errors.isEmpty()) {
            if (path.extname(req.file.filename) === '.jpg' || path.extname(req.file.filename) === '.jpeg' || path.extname(req.file.filename) === '.png' || path.extname(req.file.filename) === '.gif') {
                db.Product
                    .update(
                        {
                            name: name,
                            price: price,
                            discount: discount,
                            category_id: category,
                            description: description,
                            packaging_id: packaging,
                            image: (req.file) ? req.file.filename : "no image",
                            stock: JSON.parse(stock),
                        },
                        {
                            where: { id: id }
                        })
                    .then(() => {
                        return res.redirect('/products')
                    })
                    .catch((error) => {
                        res.render("Error", { error: { msg: "error al editar" }, userSession });
                    });
            } else {
                return res.render('productoEdicion', { msgErrors: { image: { msg: 'Formato de imagen invalido.' } }, product: product, old: product, userSession: userSession });
            }

        } else {
            // res.redirect('/products/productoEdicion/' + id)
            res.render('productoEdicion', { msgErrors: errors.mapped(), product: product, old: product, userSession: userSession });
        }

    },


    // Delete Producto -- DELETE
    productDestroy: (req, res) => {

        const id = req.params.id;

        db.Product.destroy({
            where: { id: id }
        })
            .then((product) => {
                if (fs.existsSync(`/img/products/${product.image}`)) {
                    fs.unlinkSync(`/img/products/${product.image}`);
                }
            })
            .then(res.redirect('/products'))
            .catch(error => {
                res.render('Error', { error: { msg: "error al borrar" } })
            })
    }
}

module.exports = controller;