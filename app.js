//Iniciamos el
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rutas
app.use(require('./routes/estudiantes'))
app.use(require('./routes/cursos'))
/*app.use(require('./routes/demo'))*/

app.listen(PORT, () => {
  console.log(`El servidor está inicializado en http://localhost:${PORT}`)
})
