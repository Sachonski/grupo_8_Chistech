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

//***estas rutas van a productRoutes***/
router.get("/productos", mainController.productos);
router.get("/productos/:category", mainController.productosCategoria);
router.get("/detalle-producto/:id", mainController.detalleProducto);
router.get("/productoCreacion", mainController.productoCreacion);
router.post("/productoCreacion",
  uploadFile.single("image"),
  mainController.productoGuardar
);
router.get("/productoEdicion/:id/", mainController.productEdit);
router.put("/productoEdicion/:id/",
  uploadFile.single("image"),
  mainController.productUpdate
);
router.delete("/productoDelete/:id", mainController.productDestroy);

//exports
module.exports = router;
