const mongoose = require("mongoose");

/* Creating a new schema for the productos collection. */
const productosSchema = new mongoose.Schema({
  Descripcion: {
    type: String,
    required: true
  },
  Cantidad: Number,
  },
  { timestamps: true }
  );
  
const Producto = mongoose.model('Producto', productosSchema)

module.exports = Producto