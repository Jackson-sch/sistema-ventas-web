const express = require('express')
const router = express.Router()
const productoController = require('../controllers/producto')

/* A route that is listening for a post request. */
router.post('/', productoController.createProducto);

router.get('/', productoController.getProductos)

module.exports = router