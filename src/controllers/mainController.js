const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
    // Initialize the controller
    home: (req, res) => {
        return res.render('home', { products: products });
    },
    productos: (req, res) => {      
        return res.render('productos', { products: products });
    },
    productosCategoria: (req, res) => { 
        const category = req.params;     
        return res.render('productos', { products: products.filter(product => product.category === category) });
    },
    detalleProducto: (req, res) => {
        return res.render('detalle-producto', { products: products });
    },
    carrito: (req, res) => {
        return res.render('carrito');
    },
    login: (req, res) => {
        return res.render('login');
    },
    register: (req, res) => {
        return res.render('register');
    },
    sobreNosotros: (req, res) => {
        return res.render('sobreNosotros');
    },
    productoCreacion : (req,res) => {
        return res.render('productoCreacion')
    }
}

module.exports = controller;