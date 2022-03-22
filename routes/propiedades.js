let { Router } = require('express')
const router = new Router()

const propiedades_controller = require('../controllers/propiedades')

router.get('/propiedades', (req, res) => {
  res.json(propiedades_controller.get())
})

router.get('/propiedades/:id', (req, res) => {
  let { id } = req.params
  res.json(propiedades_controller.getById(id))
})

router.post('/propiedades', (req, res) => {
  let nuevaPropiedad = req.body
  res.json(propiedades_controller.create(nuevaPropiedad))
})

router.put('/propiedades/:id', (req, res) => {
  let { id } = req.params
  let body = req.body
  res.json(propiedades_controller.update(id, body))
})

router.delete('/propiedades/:id', (req, res) => {
  let { id } = req.params
  res.json(propiedades_controller.deleteElement(id))
})

module.exports = router
