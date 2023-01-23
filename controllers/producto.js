const Producto = require('../models/producto')

const getProductos = async (req, res) => {
  const productos = await Producto.find()

  res.status(200).json({ ok: true, data: productos })
}

const createProducto = (req, res) => {
  if(!req.body.Descripcion) {
    res.status(400).json({ok: false, message: "El campo del nombre de producto es obligatorio"})
  }
  const newProducto = new Producto(req.body)
  newProducto.save().then((result) => {
    res.status(201).json({ ok: true })
  })
    .catch((err) => console.log(err))
}

module.exports = {
  getProductos, 
  createProducto
}