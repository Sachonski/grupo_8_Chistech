const express = require("express");
const router = express.Router();

//middlewares
const userSession = require('../middlewares/userSession');

//controllers
const mainController = require("../controllers/mainController");

//routes main
router.get("/", mainController.home);
router.get("/sobreNosotros", mainController.sobreNosotros);
router.get("/carrito", userSession, mainController.mostrarCarrito);
router.post('/carrito', userSession, mainController.comprarCarrito);
router.get('/carrito/:id', userSession, mainController.agregarCarrito);
router.post('/carrito/:id', userSession, mainController.eliminarCarrito);



//exports
module.exports = router;
