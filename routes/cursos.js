let { Router } = require('express')
const router = new Router()
const models = require('../models')
/* Sirve para agregar operadores logicos para las busquedas en la consulta
const { Op } = require('sequelize')
*/

router.get('/cursos', (req, res) => {
  models.Curso.findAll().then((result) => {
    res.json(result)
  })
})

router.get('/cursos/:id', (req, res) => {
  let uid = req.params.id
  models.Curso.findAll({
    where: {
      id: uid,
    },
  }).then((result) => {
    res.json(result)
  })
})

router.post('/cursos', (req, res) => {
  let nuevoEstudiante = req.body
  models.Curso.create(nuevoEstudiante).then((result) => {
    res.json(result)
  })
})

router.put('/cursos/:id', (req, res) => {
  let uid = req.params.id
  let nuevoEstudiante = req.body

  models.Curso.update(nuevoEstudiante, {
    where: {
      id: uid,
    },
  }).then((result) => {
    res.json(result)
  })
})

router.patch('/cursos/:id', (req, res) => {
  let uid = req.params.id
  let nuevoEstudiante = req.body
  models.Curso.update(nuevoEstudiante, {
    where: {
      id: uid,
    },
  }).then((result) => {
    res.json(result)
  })
})

router.delete('/cursos/:id', (req, res) => {
  let uid = req.params.id
  models.Curso.destroy({
    where: {
      id: uid,
    },
  }).then((result) => {
    res.json(result)
  })
})

module.exports = router
