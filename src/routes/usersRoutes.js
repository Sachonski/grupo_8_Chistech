const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require("multer");
const date = Date.now();
const path = require("path");
const { check } = require('express-validator');

let validateLogin = [
  check('nombreUsuario')
      .notEmpty().withMessage('Debes completar el nombre').bail()
      .isLength({ min: 5 }).withMessage('El nombre debe ser más largo'),
  check('password')
     .notEmpty().withMessage('Debes completar la contraseña').bail()
     .isLength({ min: 8 }).withMessage('La contraseña debe ser más larga')
];

const validateRegister = [
  check('first_name')
      .notEmpty().withMessage('Debes completar el nombre').bail(),
  check('last_name')
      .notEmpty().withMessage('Debes completar el apellido').bail(),
  check('user_name')
      .notEmpty().withMessage('Debes completar el nombre').bail()
      .isLength({ min: 5 }).withMessage('El nombre debe ser más largo'),
  check('birth')
      .notEmpty().withMessage('Debes completar la fecha de nacimiento').bail()
      .isDate().withMessage('La fecha de nacimiento no es válida'),
  check('email')
     .notEmpty().withMessage('Debes completar el email').bail()
     .isEmail().withMessage('Debes completar un email válido'),
  check('password')
     .notEmpty().withMessage('Debes completar la contraseña').bail()
     .isLength({ min: 8 }).withMessage('La contraseña debe ser más larga'),
  check('confirmPassword')
      .notEmpty().withMessage('Debes completar la confirmación de la contraseña').bail()
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Las contraseñas no coinciden');
        }})
];



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

router.get("/perfil/:id", usersController.detalleUsuario);

router.get("/login", usersController.login);
router.post("/login", validateLogin, usersController.loginpost);

router.get("/register", usersController.register);
router.post("/register", validateRegister, usersController.registerpost);

router.delete("/delete/:id", usersController.delete);

router.get("/editar/:id", usersController.editarget);
router.put("/editar/:id", usersController.editarput);

module.exports = router;