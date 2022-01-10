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


router.get('/', usersController.listarUsuarios);

router.get("/:id", usersController.detalleUsuario);

router.get("/login", usersController.login);
router.post("/login", usersController.loginpost);

router.get("/register", usersController.register);
router.post("/register", usersController.registerpost);

router.delete("/delete/:id", usersController.delete);

router.get("/editar/:id", usersController.editarget);
router.post("/editar/:id", usersController.editarput);

module.exports = router;