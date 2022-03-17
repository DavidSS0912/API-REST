const { Router } = require('express')
const router = new Router()

const propiedades_controller = require('../controllers/propiedades')

router.get('/propiedades', (req, res) => {
  res.json(propiedades_controller.get())
})

router.get('/propiedades/:id', (req, res) => {
  const { id } = req.params
  res.json(propiedades_controller.getById(id))
})

router.post('/propiedades', (req, res) => {
  res.json(propiedades_controller.create())
})

router.put('/propiedades/:id', (req, res) => {
  res.json(propiedades_controller.update())
})

router.delete('/propiedades/:id', (req, res) => {
  res.json(propiedades_controller.deleteElement())
})

module.exports = router
