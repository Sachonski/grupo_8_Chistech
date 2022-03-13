const express = require('express');
const usersControllerApi = require('../../controllers/api/usersControllerApi');
const router = express.Router();

//Rutas
//Listado de usuarios
router.get('/' ,  usersControllerApi.list);
//Detalle de una usuario
router.get('/detail/:id', usersControllerApi.detail);
//Agregar una usuario
router.post('/create' , usersControllerApi.create);
//Modificar una usuario
router.put('/update/:id' , usersControllerApi.update);
//Eliminar una usuario
router.delete('/delete/:id' , usersControllerApi.destroy);

module.exports = router;