//Iniciamos el
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rutas
app.use(require('./routes/propiedades'))
app.use(require('./routes/propietarios'))
app.use(require('./routes/arrendatarios'))

app.listen(3000, () => {
  console.log('El servidor está inicializado en el puerto 3000')
})
