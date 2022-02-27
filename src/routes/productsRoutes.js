const express = require("express");
const router = express.Router();

//controllers
const productsController = require("../controllers/productsController");

//middlewares
const uploadFile = require('../middlewares/multer');
const adminSession = require('../middlewares/adminSession');
const validateProductCreate = require("../middlewares/validateProductCreate");
const validateProductEdit = require("../middlewares/validateProductEdit");


//product routes

router.get("/", productsController.productos);

router.get("/detalle-producto/:id", productsController.detalleProducto);

router.get("/productoCreacion", adminSession, productsController.productoCreacion);
router.post("/productoCreacion",
  uploadFile.single("image"), //todo midelware validacion formulario creacion
  validateProductCreate,
  productsController.productoGuardar
);

router.get("/productoEdicion/:id/", adminSession, productsController.productEdit);

router.put("/productoEdicion/:id/",
  uploadFile.single("image"),
  validateProductEdit,
  productsController.productUpdate
);
router.delete("/productoDelete/:id", adminSession, productsController.productDestroy);

router.get("/:category", productsController.productosCategoria);

//exports
module.exports = router;
