const express = require("express");
const router = express.Router();

//controllers
const usersController = require("../controllers/usersController");

//middlewares
const sessionUsuario = require('../middlewares/session');
const validateLogin = require('../middlewares/validateLogin');
const validateRegister = require('../middlewares/validateRegister');


//users
router.get('/', usersController.listarUsuarios);

//profile
router.get("/perfil/:id", sessionUsuario, usersController.detalleUsuario);

//login
router.get("/login", usersController.login);
router.post("/login", validateLogin, usersController.loginpost);

//logout
router.get("/logout", usersController.logout);

//register
router.get("/register", usersController.register);
router.post("/register", validateRegister, usersController.registerpost);

//delete
router.delete("/delete/:id", sessionUsuario, usersController.delete);

//edit
router.get("/editar/:id", sessionUsuario, usersController.editarget);
router.put("/editar/:id", sessionUsuario, usersController.editarput);

//exports
module.exports = router;