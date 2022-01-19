const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
    // ***este queda en main***
    home: (req, res) => {
        return res.render('home', { products: products });
    },
    // ***este queda en main***
    carrito: (req, res) => {
        if (req.session.user) {
            return res.render('carrito');
        } else {
            res.redirect('users/login');
        }
    },
    // ***este queda en main***
    sobreNosotros: (req, res) => {
        return res.render('sobreNosotros');
    }, 
}

module.exports = controller;