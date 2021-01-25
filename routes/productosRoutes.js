const express = require('express')
const router = express.Router() //requiero el metodo Router

const productosController = require('../controllers/productosController');

router.get('/detalles/:id/:category',productosController.detalles)

module.exports = router