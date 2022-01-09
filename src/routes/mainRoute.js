const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const multer = require("multer");
const date = Date.now();
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, "../public/img");
    cb(null, path.join(__dirname, "../../public/img/products"));
  },
  filename: function (req, file, cb) {
    cb(null, date + "_" + file.originalname);
  },
});

const uploadFile = multer({ storage });

router.get("/", mainController.home);
router.get("/productos", mainController.productos);
router.get("/productos/:category", mainController.productosCategoria);
router.get("/detalle-producto/:id", mainController.detalleProducto);
router.get("/carrito", mainController.carrito);
//router.get("/login", mainController.login);
//router.get("/register", mainController.register);
router.get("/sobreNosotros", mainController.sobreNosotros);

router.get("/productoCreacion", mainController.productoCreacion);
router.post(
  "/productoCreacion",
  uploadFile.single("image"),
  mainController.productoGuardar
);
router.get("/productoEdicion/:id/", mainController.productEdit);
router.put(
  "/productoEdicion/:id/",
  uploadFile.single("image"),
  mainController.productUpdate
);

router.delete("/productoDelete/:id", mainController.productDestroy);

module.exports = router;
