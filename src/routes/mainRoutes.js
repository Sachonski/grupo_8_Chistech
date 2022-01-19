const express = require("express");
const router = express.Router();

//controllers
const mainController = require("../controllers/mainController");

//middlewares
const uploadFile = require('../middlewares/multer');

//routes main
router.get("/", mainController.home);
router.get("/carrito", mainController.carrito);
router.get("/sobreNosotros", mainController.sobreNosotros);

//exports
module.exports = router;
