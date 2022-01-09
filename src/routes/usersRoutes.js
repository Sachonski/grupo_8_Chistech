const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require("multer");
const date = Date.now();
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, "../public/img");
    cb(null, path.join(__dirname, "../../public/img"));
  },
  filename: function (req, file, cb) {
    cb(null, date + "_" + file.originalname);
  },
});

const uploadFile = multer({ storage });



router.get("/detalle-usuario/:id", usersController.detalleusuario);

router.get("/login", usersController.login);

router.get("/register", usersController.register);

router.get("/creacion", usersController.usuarioCreacion);

router.post(
  "/creacion",
  uploadFile.single("image"),
  usersController.usuarioGuardar
);
router.get("/edicion/:id/", usersController.productEdit);

router.put(
  "/edicion/:id/",
  uploadFile.single("image"),
  usersController.productUpdate
);

router.delete("/delete/:id", usersController.productDestroy);

module.exports = router;