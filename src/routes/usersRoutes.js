const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require("multer");
const date = Date.now();
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, "../public/img");
    cb(null, path.join(__dirname, "../../public/img/users"));
  },
  filename: function (req, file, cb) {
    cb(null, date + "_" + file.originalname);
  },
});

const uploadFile = multer({ storage });



router.get("/detalle-usuario/:id", usersController.detalleusuario);

router.get("/login", usersController.login);

router.post("/login", usersController.loginpost);

router.get("/register", usersController.register);

router.post("/register", usersController.registerpost);

router.get("/creacion", usersController.creacion);

router.post("/creacion", usersController.creacionpost);

router.delete("/delete", usersController.delete);

router.get("/editar", usersController.editarget);

router.post("/editar", usersController.editarget);

module.exports = router;