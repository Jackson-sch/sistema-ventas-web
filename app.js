require("dotenv").config();
const express = require("express");
const dbConnect = require('./db')
const cors = require('cors')
const productoRouter = require('./routes/producto')
const app = express();

dbConnect(app)

/* Usar CORS */
app.use(cors({ origin: true }));

/* A middleware that parses the body of the request and makes it available in the req.body property. */
app.use(express.json())

app.use('/api/v1/productos', productoRouter)

/* Serving the static files in the public folder. */
/* app.use(express.static(path.join(__dirname, "public"))); */
