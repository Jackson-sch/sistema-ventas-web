const { timeStamp } = require("console");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();
const app = express();

/* Connecting to the MongoDB database. */
mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGO_DB_PASS}@desarrollo.vge1rqc.mongodb.net/sistema-web?retryWrites=true&w=majority`
  )
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`servidor en el puerto ${PORT}`);
    });
    console.log("conexion exitosa a la base de datos mongodb");
  })
  .catch((err) => console.log(err));

/* Creating a new schema for the productos collection. */
const productosSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  precio: Number,
  },
  { timeStamp: true }
  );
  
const Producto = mongoose.model('Producto', productosSchema)

/* A middleware that parses the body of the request and makes it available in the req.body property. */
app.use(express.json())

/* A route that is listening for a post request. */
app.post("/api/v1/productos", (req, res) => {
  /* Create a new Producto object. */
  const producto = new Producto(req.body)
  /* Save the new producto to the database. */
  producto.save().then((result) => {
    res.status(201).json({ ok: true })
  })
  .catch((err) => console.log(err))
  
});

/* Serving the static files in the public folder. */
app.use(express.static(path.join(__dirname, "public")));

/* Setting the port to 4000 if the environment variable PORT is not set. */
const PORT = process.env.PORT || 4000;
