const path = require('path');
const db = require("../database/models");
const { Op } = require("sequelize");

// inicializar carrito
const carrito = [];

// auxiliar calcular total con descuento
const totalCarrito = (carrito) => {
    if (carrito.length === 0) {
        return 0;
    } else {
        let precio = 0;
        let descuento = 0;
        for (let i = 0; i < carrito.length; i++) {
            precio += carrito[i].price;
            descuento += carrito[i].price - (carrito[i].price * carrito[i].discount / 100);
        }
        precio = parseFloat(precio).toFixed(2);
        descuento = parseFloat(descuento).toFixed(2);
        return { precio, descuento };
}
}

// inicio controlador
const mainController = {

    home: (req, res) => {
        let userSession = req.session.user;

        db.Product.findAll({
            where: { discount: { [Op.gt]: 0 } },
        })
            .then(products => {
                res.render('home', { products, userSession });
            })
            .catch(() => {
                res.render("Error", { error: { msg: "error al conectar a la base" }, userSession });
            });
    },

    sobreNosotros: (req, res) => {
        let userSession = req.session.user

        return res.render('sobreNosotros', {userSession: userSession});
    }, 

   // inicio controlador carrito

    mostrarCarrito: (req, res) => {
        let userSession = req.session.user
        // req.session.user.carrito = carrito;
        // let carritoUser = req.session.user.carrito;
        let total = totalCarrito(carrito);

        if (req.session.user) {
            db.Product.findAll()
            .then(products => {
                return res.render('carrito', {userSession, products, carrito, total});
            })
            .catch((error) => {
                res.render("Error", { error: { msg: "no se pudo acceder al carrito" }, userSession });
            });
        } else {
            res.redirect('users/login');
        }
    },

    agregarCarrito: function (req, res) {
        let userSession = req.session.user;
        let id = req.params.id;

        db.Product.findByPk(id)
        .then(product => {
            carrito.push(product.dataValues);
            res.redirect('/products');
        })
        .catch((error) => {
            res.render("Error", { error: { msg: "no se pudo agregar el producto" }, userSession });
        });

    },

  

    eliminarCarrito: function (req, res) {
        let id = req.body.id;

        carrito.splice(carrito.findIndex(product => product.id == id), 1);
        res.redirect('/carrito');

    },

   
    comprarCarrito: function (req, res) {
        let sale = [];
        let userId = req.session.user.id;
        let saleDate = new Date().toISOString();
        // let price = (obj) => { obj.price - (obj.price * obj.discount / 100) };

        if (userId){

            carrito.map(product => {
                sale.push({
                    date: saleDate,
                    user_id: userId,
                    product_id: product.id,
                    amount: 1,
                    total: product.price - (product.price * product.discount / 100),
                    invoice: userId + ' ' + saleDate
                });
            })
            db.Sale.bulkCreate(sale)
            .then(() => {
                console.log('compra realizada');
                carrito.length = 0;
                res.redirect('/thankyou');
            })
            .catch((error) => { console.log(error); });

        } else {
            res.redirect('users/login');
        }

    },

    thankyou : (req, res) => {
        let userSession = req.session.user;
        res.render("thankyou", { error: { msg: "error al conectar a la base" }, userSession });
        
    }
    
}

module.exports = mainController;