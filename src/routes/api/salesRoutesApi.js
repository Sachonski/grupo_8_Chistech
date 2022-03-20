const express = require('express');
const router = express.Router();
const salesControllerApi = require('../../controllers/api/salesControllerApi');

//Rutas
//Listado productos vendidos
router.get('/', salesControllerApi.list);
//Listado ventas
router.get('/sales', salesControllerApi.sales);
//Filtrar productos categoria
router.get('/top5', salesControllerApi.top5);
//Agregar una producto
router.get('/last', salesControllerApi.last);

module.exports = router;