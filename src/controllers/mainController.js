const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.replace(/\B(?=(\d{3})+(?!\d))/g, ".");




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
        const product = products.filter(product => product.id == id);
        return res.render('detalle-producto',  product[0] );
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
    },
    productoGuardar : (req, res) => {
        
        const { name, price, discount, category, description, packaging, stock } = req.body;
        const newProduct = {}
        newProduct.id = products[products.length - 1].id + 1;
        newProduct.name = name;
        newProduct.price = toThousand(parseInt(price));
        newProduct.discount = parseInt(discount);
        newProduct.category = category;
        newProduct.description = description;
        newProduct.packaging = packaging;
        newProduct.image = (req.file) ?  req.file.filename: "no image";
        newProduct.stock = JSON.parse(stock);

        products.push(newProduct);

        fs.writeFileSync(productsFilePath, JSON.stringify(products));
        res.redirect('/productos');
    },
}

module.exports = controller;