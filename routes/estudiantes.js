let { Router } = require('express')
const router = new Router()
const models = require('../models')
/* Sirve para agregar operadores logicos para las busquedas en la consulta
const { Op } = require('sequelize')
*/

router.get('/estudiantes', (req, res) => {
  models.Estudiante.findAll().then((result) => {
    res.json(result)
  })
})

router.get('/estudiantes/:id', (req, res) => {
  let uid = req.params.id
  models.Estudiante.findAll({
    where: {
      id: uid,
    },
  }).then((result) => {
    res.json(result)
  })
})

router.post('/estudiantes', (req, res) => {
  let nuevoEstudiante = req.body
  models.Estudiante.create(nuevoEstudiante).then((result) => {
    res.json(result)
  })
})

router.put('/estudiantes/:id', (req, res) => {
  let uid = req.params.id
  models.Estudiante.update(nuevoEstudiante, {
    where: {
      id: uid,
    },
  }).then((result) => {
    res.json(result)
  })
})

router.patch('/estudiantes/:id', (req, res) => {
  let uid = req.params.id
  let nuevoEstudiante = req.body
  models.Estudiante.update(nuevoEstudiante, {
    where: {
      id: uid,
    },
  }).then((result) => {
    res.json(result)
  })
})

router.delete('/estudiantes/:id', (req, res) => {
  let uid = req.params.id
  models.Estudiante.destroy({
    where: {
      id: uid,
    },
  }).then((result) => {
    res.json(result)
  })
})

module.exports = router
