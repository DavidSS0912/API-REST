const { Router } = require('express')
const router = new Router()

const arrendatarios_controller = require('../controllers/arrendatarios.js')

router.get('/arrendatarios', (req, res) => {
  arrendatarios_controller.get
})

router.get('/arrendatarios/:name', (req, res) => {
  arrendatarios_controller.getById
})

router.put('/arrendatarios/:id', (req, res) => {
  arrendatarios_controller.update
})

router.delete('/arrendatarios/:name/:id', (req, res) => {
  arrendatarios_controller.deleteElement
})

module.exports = router
