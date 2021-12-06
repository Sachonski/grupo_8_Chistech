const controller = {
    // Initialize the controller
    home: (req, res) => {
        return res.render('home');
    },
    productos: (req, res) => {
        return res.render('productos');
    },
    detalleProducto: (req, res) => {
        return res.render('detalle-producto');
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