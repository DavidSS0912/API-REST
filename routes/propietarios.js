//Importamos un modulo de express llamado 'Router' para menejar las direcciones validas para nuestro servidor
const { Router } = require('express')
const router = new Router()

const propietarios_controller = require('../controllers/propietarios.js')

router.get('/propietarios', (req, res) => {
  res.json(propietarios_controller.get())
})

router.get('/propietarios/:rfc', (req, res) => {
  const { rfc } = req.params
  res.json(propietarios_controller.getById(rfc))
})

router.post('/propietarios', (req, res) => {
  let nuevoPropietario = req.body
  res.json(propietarios_controller.create(nuevoPropietario))
})

router.put('/propietarios/:rfc', (req, res) => {
  let { rfc } = req.params
  let body = req.body
  res.json(propietarios_controller.update(rfc, body))
})

router.delete('/propietarios/:rfc', (req, res) => {
  let { rfc } = req.params
  res.json(propietarios_controller.deleteElement(rfc))
})

module.exports = router
