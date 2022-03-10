const express = require('express');
const router = express.Router();
const productsControllerApi = require('../../controllers/api/productsControllerApi');

//Rutas
//Listado de productos
router.get('/', productsControllerApi.list);
//Detalle de una producto
router.get('/detail/:id', productsControllerApi.detail);
//Filtrar productos categoria
router.get('/:category_id', productsControllerApi.byCategory);
//Agregar una producto
router.post('/create', productsControllerApi.create);
//Modificar una producto
router.put('/update/:id', productsControllerApi.update);
//Eliminar una producto
router.delete('/delete/:id', productsControllerApi.destroy);

module.exports = router;