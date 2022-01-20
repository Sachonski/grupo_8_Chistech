const express = require("express");
const router = express.Router();

//controllers
const usersController = require("../controllers/usersController");

//middlewares
const session = require('../middlewares/session');
const validateLogin = require('../middlewares/validateLogin');
const validateRegister = require('../middlewares/validateRegister');


//users
router.get('/', usersController.listarUsuarios);

//profile
router.get("/perfil/:id", session, usersController.detalleUsuario);

//login
router.get("/login", usersController.login);
router.post("/login", validateLogin, usersController.loginpost);

//logout
router.get("/logout", usersController.logout);

//register
router.get("/register", usersController.register);
router.post("/register", validateRegister, usersController.registerpost);

//delete
router.delete("/delete/:id", session, usersController.delete);

//edit
router.get("/editar/:id", session, usersController.editarget);
router.put("/editar/:id", session, usersController.editarput);

//exports
module.exports = router;