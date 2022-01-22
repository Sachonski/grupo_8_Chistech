const express = require("express");
const router = express.Router();

//controllers
const usersController = require("../controllers/usersController");

//middlewares
const userSession = require('../middlewares/userSession');
const validateLogin = require('../middlewares/validateLogin');
const validateRegister = require('../middlewares/validateRegister');


//users
router.get('/', userSession, usersController.listarUsuarios);

//profile
router.get("/perfil/:id", userSession, usersController.detalleUsuario);

//login
router.get("/login", usersController.login);
router.post("/login", validateLogin, usersController.loginpost);

//logout
router.get("/logout", usersController.logout);

//register
router.get("/register", usersController.register);
router.post("/register", validateRegister, usersController.registerpost);

//delete
router.delete("/delete/:id", userSession, usersController.delete);

//edit
router.get("/editar/:id", userSession, usersController.editget);
router.put("/editar/:id", userSession, validateRegister, usersController.editput);

//exports
module.exports = router;