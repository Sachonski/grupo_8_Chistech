const express = require("express");
const router = express.Router();

//controllers
const productsController = require("../controllers/productsController");

//middlewares
const uploadFile = require('../middlewares/multer');

//product routes
router.get("/", productsController.productos);

router.get("/detalle-producto/:id", productsController.detalleProducto);
router.get("/productoCreacion", productsController.productoCreacion);
router.post("/productoCreacion",
  uploadFile.single("image"),
  productsController.productoGuardar
);
router.get("/productoEdicion/:id/", productsController.productEdit);
router.put("/productoEdicion/:id/",
  uploadFile.single("image"),
  productsController.productUpdate
);
router.delete("/productoDelete/:id", productsController.productDestroy);
router.get("/:category", productsController.productosCategoria);

//exports
module.exports = router;
