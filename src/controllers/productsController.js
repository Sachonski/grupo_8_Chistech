const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const usersFilePath = path.join(__dirname, '../../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));



const controller = {
    
    // llevar a carpeta products
    productos: (req, res) => {
        return res.render('productos', { products: products });
    },
    // llevar a carpeta products
    productosCategoria: (req, res) => {
        const category = req.params.category;
        const productsByCategory = products.filter(product => product.category == category & product.stock == true);
        return res.render('productos', { products: productsByCategory });
    },
    // llevar a carpeta products
    detalleProducto: (req, res) => {
        const id = req.params.id;
        const product = products.find(product => product.id == id);
        return res.render('detalle-producto', { product: product });
    },
    
  
    // llevar a carpeta products
    productoCreacion: (req, res) => {
        return res.render('productoCreacion')
    },
    // llevar a carpeta products
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
        res.redirect('/products');
    },
    // llevar a carpeta products
    productEdit: (req, res) => {
        const id = req.params.id;
        const product = products.find(product => product.id == id);
        res.render('productoEdicion', { product: product });
    },
    // llevar a carpeta products
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
        res.redirect('/products');
    },

    // llevar a carpeta products
    productDestroy: (req, res) => {

        const id = req.params.id;
        const product = products.find(product => product.id == id);

        products.splice(products.indexOf(product), 1);

        fs.writeFileSync(productsFilePath, JSON.stringify(products));

        if (fs.existsSync(`public/img/products/${product.image}`)) {
            fs.unlinkSync(`public/img/products/${product.image}`);
        }
        res.redirect('/products');

    }
}

module.exports = controller;