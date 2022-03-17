//Importamos un modulo de express llamado 'Router' para menejar las direcciones validas para nuestro servidor
const { Router } = require('express')
const router = new Router()

const propietarios_controller = require('../controllers/propietarios.js')

router.get('/propietarios', (req, res) => {
  propietarios_controller.get
})

router.get('/propietarios/:rfc', (req, res) => {
  propietarios_controller.getById
})

router.post('/propietarios', (req, res) => {
  propietarios_controller.create
})

router.put('/propietarios/:rfc', (req, res) => {
  propietarios_controller.update
})

router.delete('/propietarios/:rfc', (req, res) => {
  propietarios_controller.deleteElement
})

module.exports = router
