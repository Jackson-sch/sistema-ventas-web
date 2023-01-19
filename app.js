require('dotenv').config()

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log('Petición recibida')

  res.send('<h1>holaa mundo con nodemon </h1> bienvenido empezamos')
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`servidor en el puerto ${PORT}`)
})