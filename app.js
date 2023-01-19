const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log('Petición recibida')

  res.send('<h1>holaa mundo con nodemon </h1> bienvenido empezamos')
})

app.listen(4000, () => {
  console.log('servidor en el puerto 4000')
})