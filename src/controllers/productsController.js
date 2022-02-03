const path = require('path');
const { Op } = require("sequelize");
const fs = require("fs");
const db = require("../database/models");
const sequelize = db.sequelize;

const controller = {

    // Listar productos de la tienda
    productos: (req, res) => {
        let userSession = req.session.user
        db.Product.findAll()
            .then(products => {
                res.render(res.render('productos', { products, userSession }))
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
        db.Product.findByPk(id)
            .then(product => {
                res.render('detalle-producto', { product: product, userSession: userSession });
            })
            .catch((error) => {
                res.render("Error", { error: { msg: "error" }, userSession });
            })
    },


    // Vista creaction de producto -- GET
    productoCreacion: (req, res) => {
        let userSession = req.session.user

        return res.render('productoCreacion', { userSession: userSession })
    },
    // Creaction de producto -- POST
    productoGuardar: (req, res) => {

        const { name, price, discount, category, description, packaging, stock } = req.body;
        db.Product
            .create(
                {
                    name: name,
                    price: price,
                    discount: discount,
                    category_id: category,
                    description: description,
                    packaging_id: packaging,
                    image: (req.file) ? req.file.filename : "no image",
                    stock: JSON.parse(stock),
                }
            )
            .then(() => {
                return res.redirect('/products')
            })
            .catch(error => res.send(error))
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
                res.render("Error", { error: { msg: "error edit" }, userSession });
            });

    },
    // Editar producto vista -- PUT
    productUpdate: (req, res) => {
        const { name, price, discount, category, description, packaging, stock } = req.body;
        let id = req.params.id;
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
            .catch(error => res.send(error))
    },


    // Delete Producto -- DELETE
    productDestroy: (req, res) => {

        const id = req.params.id;

        db.Product.destroy({
            where: { id: id }
        })
            .then(() => {
                if (fs.existsSync(`public/img/products/${product.image}`)) {
                    fs.unlinkSync(`public/img/products/${product.image}`);
                }
            })
            .then(res.redirect('/products'))
            .catch(error => {
                res.render('Error', { error: { msg: "error delete" }})
            })
    }
}

module.exports = controller;