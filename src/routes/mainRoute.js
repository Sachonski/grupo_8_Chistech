const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.home);
router.get('/productos', mainController.productos);
router.get('/productos/:category', mainController.productosCategoria);
router.get('/detalle-producto', mainController.detalleProducto);
router.get ('/carrito', mainController.carrito);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/sobreNosotros', mainController.sobreNosotros);
router.get('/productoCreacion' , mainController.productoCreacion)



module.exports = router;