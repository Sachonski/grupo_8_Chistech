const fs = require('fs');
const path = require('path');
const Confirm = require('prompt-confirm');
const prompt = new Confirm('Desea eliminar el producto?');

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
        const category = req.params.category;
        const productsByCategory = products.filter(product => product.category == category & product.stock == true);
        return res.render('productos', { products: productsByCategory });
    },
    detalleProducto: (req, res) => {
        const id = req.params.id;
        const product = products.find(product => product.id == id);
        return res.render('detalle-producto', { product: product });
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
    productoCreacion: (req, res) => {
        return res.render('productoCreacion')
    },
    productoGuardar: (req, res) => {

        const { name, price, discount, category, description, packaging, stock } = req.body;
        const newProduct = {}
        newProduct.id = products[products.length - 1].id + 1;
        newProduct.name = name;
        newProduct.price = parseInt(price);
        newProduct.discount = parseInt(discount);
        newProduct.category = category;
        newProduct.description = description;
        newProduct.packaging = packaging;
        newProduct.image = (req.file) ? req.file.filename : "no image";
        newProduct.stock = JSON.parse(stock);

        products.push(newProduct);

        fs.writeFileSync(productsFilePath, JSON.stringify(products));
        res.redirect('/productos');
    },
    productEdit: (req, res) => {
        const id = req.params.id;
        const product = products.find(product => product.id == id);
        res.render('productoEdicion', { product: product });
    },
    // Update - Method to update
    productUpdate: (req, res) => {

        const image = req.file.filename;
        const id = req.params.id;
        const product = products.find(product => product.id == id);
        const { name, price, discount, category, description, packaging, stock } = req.body;

        product.id = product.id;
        product.name = name;
        product.price = parseInt(price);
        product.discount = parseInt(discount);
        product.category = category;
        product.description = description;
        product.packaging = packaging;
        product.image = (req.file) ? req.file.filename : "no image";
        product.stock = JSON.parse(stock);


        fs.writeFileSync(productsFilePath, JSON.stringify(products));
        res.redirect('/productos');
    },

    // Delete - Delete one product from DB
    productDestroy: (req, res) => {
       
        
        const id = req.params.id;
        const product = products.find(product => product.id == id);

        products.splice(products.indexOf(product), 1);

        fs.writeFileSync(productsFilePath, JSON.stringify(products));

        if (fs.existsSync(`public/images/products/${product.image}`)) {
            fs.unlinkSync(`public/images/products/${product.image}`);
        }
        res.redirect('/productos');

    }
}

module.exports = controller;