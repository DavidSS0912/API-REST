const { Router } = require('express')
const router = new Router()

const arrendatarios_controller = require('../controllers/arrendatarios.js')

router.get('/arrendatarios', (req, res) => {
  res.json(arrendatarios_controller.get())
})

router.get('/arrendatarios/:name', (req, res) => {
  let { name } = req.params
  res.json(arrendatarios_controller.getById(name))
})

router.put('/arrendatarios/:id', (req, res) => {
  let { id } = req.params
  let body = req.body
  res.json(arrendatarios_controller.update(id, body))
})

router.delete('/arrendatarios/:name/:id', (req, res) => {
  let { id } = req.params
  let { name } = req.params
  res.json(arrendatarios_controller.deleteElement(id, name))
})

module.exports = router
