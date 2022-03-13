const express = require("express");
const router = express.Router();

//controllers
const usersController = require("../controllers/usersController");

//middlewares
const uploadFile = require('../middlewares/multer');
const adminSession = require("../middlewares/adminSession");
const userSession = require('../middlewares/userSession');
const validateLogin = require('../middlewares/validateLogin');
const validateRegister = require('../middlewares/validateRegister');


//users
router.get('/' ,  userSession , adminSession ,   usersController.listarUsuarios);

//profile
router.get("/perfil/:id", userSession, usersController.detalleUsuario);

//login
router.get("/login", usersController.login);
router.post("/login", validateLogin, usersController.loginpost);

//logout
router.get("/logout", usersController.logout);

//register
router.get("/register", usersController.register);
router.post("/register", 
uploadFile.single("avatar"), //todo midelware validacion formulario creacion
validateRegister, 
usersController.registerpost);

//delete
router.delete("/delete/:id", userSession, usersController.delete);

//edit
router.get("/editar/:id", userSession, usersController.editget);
router.put("/editar/:id", 
uploadFile.single("avatar"), //todo midelware validacion formulario creacion
userSession, 
validateRegister, 
usersController.editput);

//exports
module.exports = router;